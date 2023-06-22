import { Card } from './card'

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
      link.classList.add('_active')
    } else {
      link.classList.remove('_active')
    }
  })
}

//For Game

export function getSound(data) {
  let arr = data
  let randomNumber = Math.floor(Math.random() * arr.length)
  let objWord = arr.splice(randomNumber, 1)
  let audio = objWord[0].audioSrc
  playAudio(audio)
  return objWord
}

export function playGame(data) {
  const section = document.querySelector('.section')
  const repeat_btn = document.querySelector('.repeat_btn')
  const heart_section = document.querySelector('.heart_section')
  heart_section.style.display = 'inline-block'
  const arrData = data
  let dataWord = getSound(arrData)
  section.addEventListener('click', (e) => {
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
  })
  repeat_btn.addEventListener('click', (e) => {
    if (arrData.length > 0) {
      const sound = dataWord[0].audioSrc
      playAudio(sound)
    }
  })

  if (arrData.length === 0) {
    console.log('end')
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
