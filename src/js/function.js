import { Card } from './card'
import { getCards } from './data'
import { checkedMode } from './header'
import { Score } from './score'

export function buildCard(data, selector, className) {
  data.forEach((item, id) => {
    const card = new Card(id, item)
    card.buildCardContainer(selector, className)
  })
}

export function createCard(data) {
  data.forEach((item, id) => {
    const card = new Card(id, item)
    card.renderCard()
  })
}

export function createSubCard(data) {
  data.forEach((item, id) => {
    const subCard = new Card(id, item)
    subCard.renderSubCard()
  })
  gameStart()
}

export function createScore(data) {
  const score = new Score(data)
  score.buildScoreContainer('main')
  score.renderScore()
}

export function id(data) {
  let id = (data + 1) * 8
  return id
}

export function playAudio(url) {
  const audio = new Audio(url)
  audio.play()
}

export function active(category, data) {
  const getCollection = document.querySelectorAll(data)
  getCollection.forEach((item) => {
    const name = item.getAttribute('name')
    const link = item.firstElementChild
    if (name === category) {
      item.classList.add('_active')
      link.classList.add('_active')
    } else {
      item.classList.remove('_active')
      link.classList.remove('_active')
    }
  })
}


//For Game
export function gameStart() {
  const startBtn = document.querySelector('.start_btn')
  const repeatBtn = document.querySelector('.repeat_btn')
  const navlist = document.querySelector('.nav__list')
  let c = function (e) {
    startBtn.classList.remove('play_mode')
    repeatBtn.classList.add('play_mode')
    const navlist = document.querySelector('.nav__list')
    const children = navlist.children
    const arrElement = [...children]
    const element = arrElement.find((item) => item.className === 'nav_list__item _active')
    const id = element.getAttribute('data-id')
    playGame(id)
  }
  startBtn.addEventListener('click', c)
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection()
      startBtn.removeEventListener('click', c)
    }
  })
}

export function getSound(data) {
  let arr = data
  let randomNumber = Math.floor(Math.random() * arr.length)
  let objWord = arr.splice(randomNumber, 1)
  let audio = objWord[0].audioSrc
  playAudio(audio)
  return objWord
}

export async function playGame(id) {
  const data = await getCards()
  const arrayWord = data[id].words
  const subCardsBlock = document.querySelector('.subCardsBlock')
  const repeat_btn = document.querySelector('.repeat_btn')
  const heart_section = document.querySelector('.heart_section')
  const navlist = document.querySelector('.nav__list')
  heart_section.classList.add('play_mode')
  const arrData = arrayWord
  let dataWord = getSound(arrData)
  const getCorrect = JSON.parse(localStorage.getItem('correct'))
  const getError = JSON.parse(localStorage.getItem('error'))
  const correct = getCorrect ? [...getCorrect] : []
  const error = getError ? [...getError] : []
  let count = 0
  let repeat = function () {
    if (arrData.length > 0) {
      const sound = dataWord[0].audioSrc
      playAudio(sound)
    }
  }
  let cardOperation = function (e) {
    if (e.target.closest('.subCard')) {
      let obj = dataWord
      let heart = document.createElement('div')
      heart.classList.add('heart')
      let subCard = e.target.parentElement
      let subCardName = subCard.getAttribute('name')
      let word = obj[0].word
      if (subCardName === word) {
        ++count
        subCard.classList.add('passed')
        heart.classList.add('right')
        heart_section.appendChild(heart)
        playAudio('./assets/audio/correct.mp3')
        createSeccessData(correct, word)
        removeHeart(count)
        if (arrData.length > 0) {
          setTimeout(() => {
            dataWord = getSound(arrData)
          }, 500)
        } else {
          finishGame(correct, error)
        }
      } else {
        ++count
        heart.classList.add('wrong')
        heart_section.appendChild(heart)
        playAudio('./assets/audio/error.mp3')
        createErrorData(error, word)
        removeHeart(count)
      }
    }
  }
  subCardsBlock.addEventListener('click', cardOperation)
  repeat_btn.addEventListener('click', repeat)
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection()
      repeat_btn.removeEventListener('click', repeat)
      subCardsBlock.removeEventListener('click', cardOperation)
    }
  })
}

export function clearHeartSection() {
  const section = document.querySelector('.heart_section')
  while (section.firstChild) {
    section.removeChild(section.firstChild)
  }
}

export function removeHeart(count) {
  const heart = document.querySelectorAll('.heart')
  if (heart.length >= 8) {
    heart[count - 8].style.display = 'none'
  }
}

export async function finishGame(correctArr, errorArr) {
  const cards = await getCards()
  const switcher = document.querySelector('.switcher')
  const heart_section = document.querySelector('.heart_section')
  const subCardBlock = document.querySelector('.subCardsBlock')
  const isSubBlockChildren = subCardBlock.children
  const arrSubBlockCollection = [...isSubBlockChildren]
  const children = heart_section.children
  const arrCollection = [...children]
  const counts = arrCollection.reduce((previously, current) => {
    previously[current.className] = (previously[current.className] || 0) + 1
    return previously
  }, {})

  const wrong = counts['heart wrong']
  const right = counts['heart right']

  const correctJson = JSON.stringify(correctArr)
  const errorJson = JSON.stringify(errorArr)
  localStorage.setItem('correct', correctJson)
  localStorage.setItem('error', errorJson)

  if (wrong) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')

    const wrongBlock = document.createElement('section')
    const container = document.createElement('div')
    const mistakes = document.createElement('span')
    const image = document.createElement('div')

    wrongBlock.classList.add('wrong-block')
    container.classList.add('wrong_container')
    image.classList.add('wrong_image')
    mistakes.classList.add('wrong_mistakes')
    main.classList.toggle('finish')

    body.appendChild(wrongBlock)
    wrongBlock.appendChild(container)
    container.appendChild(image)
    container.appendChild(mistakes)

    mistakes.textContent = `Mistakes: ${wrong}`
    playAudio('./assets/audio/failure.mp3')
    setTimeout(() => {
      body.removeChild(wrongBlock)
      main.classList.toggle('finish')
      let checked = (switcher.firstChild.checked = false)
      checkedMode(checked)
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item)
      })
      buildCard(cards, '.cardsBlock', 'card')
      createCard(cards)
      clearHeartSection()
    }, 3000)
  }
  if (!wrong) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')

    const rightBlock = document.createElement('section')
    const container = document.createElement('div')
    const perfect = document.createElement('span')
    const image = document.createElement('div')

    rightBlock.classList.add('right-block')
    container.classList.add('right_container')
    image.classList.add('right_image')
    perfect.classList.add('right_perfect')
    main.classList.toggle('finish')

    body.appendChild(rightBlock)
    rightBlock.appendChild(container)
    container.appendChild(image)
    container.appendChild(perfect)

    perfect.textContent = 'Good job'
    playAudio('./assets/audio/success.mp3')
    setTimeout(() => {
      body.removeChild(rightBlock)
      main.classList.toggle('finish')
      let checked = (switcher.firstChild.checked = false)
      checkedMode(checked)
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item)
      })
      buildCard(cards, '.cardsBlock', 'card')
      createCard(cards)
      clearHeartSection()
    }, 3000)
  }
}

export function createSeccessData(arr, data) {
  if (arr.length > 0) {
    let add = false
    for (let item of arr) {
      if (item[0] === data) {
        ++item[1]
        add = true
      }
    }
    if (add === false) {
      arr.push([data, 1])
    }
  }
  if (arr.length === 0) {
    arr.push([data, 1])
  }
}

export function createErrorData(arr, data) {
  if (arr.length > 0) {
    let add = false
    for (let item of arr) {
      if (item[0] === data) {
        ++item[1]
        add = true
      }
    }
    if (add === false) {
      arr.push([data, 1])
    }
  }
  if (arr.length === 0) {
    arr.push([data, 1])
  }
}

export function clickCounts() {
  const block = document.querySelector('.subCardsBlock')
  const children = block.children
  const arrCollection = [...children]
  arrCollection.forEach((item) => {
    item.addEventListener('click', (e) => {
      const card = e.currentTarget
      const name = card.getAttribute('name')
      if (card.className === 'subCard') {
        const getClick = JSON.parse(localStorage.getItem('click'))
        const click = getClick ? [...getClick] : []
        if (click.length > 0) {
          let find = false
          for (let item of click) {
            if (item[0] === name) {
              ++item[1]
              find = true
            }
          }
          if (find === false) {
            click.push([name, 1])
          }
        }
        if (click.length === 0) {
          click.push([name, 1])
        }
        const clickJson = JSON.stringify(click)
        localStorage.setItem('click', clickJson)
      }
    })
  })
}

export function scoreData() {
  const table = document.querySelector('.score_container')
  const row = table.rows
  const correctData = JSON.parse(localStorage.getItem('correct'))
  const errorData = JSON.parse(localStorage.getItem('error'))
  const clickData = JSON.parse(localStorage.getItem('click'))
  for (let item of row) {
    const firstCell = item.cells[0].innerHTML
    const click = clickData && clickData.find((item) => item[0] === firstCell)
    const correct = correctData && correctData.find((item) => item[0] === firstCell)
    const error = errorData && errorData.find((item) => item[0] === firstCell)
    if (click) {
      item.cells[2].innerHTML = `${click[1]}`
    }
    if (correct) {
      item.cells[3].innerHTML = `${correct[1]}`
      item.cells[5].innerHTML = '100%'
    }
    if (error) {
      item.cells[4].innerHTML = `${error[1]}`
    }
    if (correct && error && correct[0] === error[0]) {
      const totalAttempts = correct[1] + error[1]
      const accuracy = ((correct[1] / totalAttempts) * 100).toFixed()
      item.cells[5].innerHTML = `${accuracy}%`
    }
    if (correctData === null && errorData === null && clickData === null) {
      item.cells[2].innerHTML === 'Click' ? (item.cells[2].innerHTML = 'Click') : (item.cells[2].innerHTML = '-')
      item.cells[3].innerHTML === 'Correct' ? (item.cells[3].innerHTML = 'Correct') : (item.cells[3].innerHTML = '-')
      item.cells[4].innerHTML === 'Error' ? (item.cells[4].innerHTML = 'Error') : (item.cells[4].innerHTML = '-')
      item.cells[5].innerHTML === 'Correct score' ? (item.cells[5].innerHTML = 'Correct score') : (item.cells[5].innerHTML = '-')
    }
  }
}

export async function resetScore() {
  const resetBtn = document.querySelector('.reset_btn')
  resetBtn.addEventListener('click', () => {
    localStorage.clear()
    scoreData()
  })
}

export function sortScore() {
  const table = document.querySelector('.score_container')
  const row = table.rows
  const header = row[0]
  let sortOrder = 'asc'
  header.addEventListener('click', (e) => {
    const target = e.target
    if (sortOrder === 'asc') {
      sortOrder = 'desc'
    } else {
      sortOrder = 'asc'
    }
    if (target.closest('.english')) {
      sortTable(0, sortOrder)
    }
    if (target.closest('.russian')) {
      sortTable(1, sortOrder)
    }
    if (target.closest('.click')) {
      sortTable(2, sortOrder)
    }
    if (target.closest('.correct')) {
      sortTable(3, sortOrder)
    }
    if (target.closest('.error')) {
      sortTable(4, sortOrder)
    }
    if (target.closest('.percent')) {
      sortTable(5, sortOrder)
    }
  })
}

export function sortTable(columnIndex, sortDirection) {
  let rows, i, x, y, shouldSwitch
  const table = document.querySelector('.score_container')
  let switching = true

  while (switching) {
    switching = false
    rows = table.rows
    shouldSwitch = false

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false

      x = rows[i].getElementsByTagName('td')[columnIndex]
      y = rows[i + 1].getElementsByTagName('td')[columnIndex]

      const xValue = getValueForSorting(x.innerHTML)
      const yValue = getValueForSorting(y.innerHTML)

      if (xValue === '-' && yValue !== '-') {
        shouldSwitch = true
        break
      } else if (yValue === '-' && xValue !== '-') {
        continue
      }

      if (sortDirection === 'asc') {
        if (xValue > yValue) {
          shouldSwitch = true
          break
        }
      } else if (sortDirection === 'desc') {
        if (xValue < yValue) {
          shouldSwitch = true
          break
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
    }
  }
}

export function getValueForSorting(value) {
  const numberRegex = /^-?\d+(?:\.\d+)?$/
  const percentageRegex = /^-?\d+(?:\.\d+)?%$/

  if (numberRegex.test(value)) {
    return parseFloat(value)
  } else if (percentageRegex.test(value)) {
    return parseFloat(value.replace('%', ''))
  } else {
    return value
  }
}
