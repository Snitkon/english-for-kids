import { Card } from './card'
import getCards from './data'
import Score from './score'

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
    const element = arrElement.find(
      (item) => item.className === 'nav_list__item _active'
    )
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
  console.log(subCardsBlock)
  const repeat_btn = document.querySelector('.repeat_btn')
  const heart_section = document.querySelector('.heart_section')
  const navlist = document.querySelector('.nav__list')
  heart_section.classList.add('play_mode')
  const arrData = arrayWord
  let dataWord = getSound(arrData)
  function a() {
    if (arrData.length > 0) {
      const sound = dataWord[0].audioSrc
      playAudio(sound)
    }
  }
  let b = function (e) {
    if (e.target.closest('.subCard')) {
      let obj = dataWord
      let heart = document.createElement('div')
      let subCard = e.target.parentElement
      let subCardName = subCard.getAttribute('name')
      let word = obj[0].word
      if (subCardName === word) {
        subCard.classList.add('passed')
        heart.classList.add('right')
        heart_section.appendChild(heart)
        playAudio('./assets/audio/correct.mp3')
        if (arrData.length > 0) {
          setTimeout(() => {
            dataWord = getSound(arrData)
          }, 1000)
        } else {
          finishGame()
        }
      } else {
        heart.classList.add('wrong')
        heart_section.appendChild(heart)
        playAudio('./assets/audio/error.mp3')
      }
    }
  }
  subCardsBlock.addEventListener('click', b)
  repeat_btn.addEventListener('click', a)
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection()
      repeat_btn.removeEventListener('click', a)
      subCardsBlock.removeEventListener('click', b)
    }
  })
}

function clearHeartSection() {
  const section = document.querySelector('.heart_section')
  while (section.firstChild) {
    section.removeChild(section.firstChild)
  }
}

export function finishGame() {
  const heart_section = document.querySelector('.heart_section')
  const children = heart_section.children
  const arrCollection = [...children]
  const counts = arrCollection.reduce((previously, current) => {
    previously[current.className] = (previously[current.className] || 0) + 1
    return previously
  }, {})
  const wrong = counts.wrong
  const right = counts.right

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
      location.reload()
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
      location.reload()
    }, 3000)
  }
}
