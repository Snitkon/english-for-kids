import getCards from './data'
import {
  active,
  buildCard,
  createCard,
  createSubCard,
  playAudio,
  playGame,
} from './function'

export function buildMainStructure() {
  const body = document.body
  const main = document.createElement('main')
  const section = document.createElement('section')
  const categoryCard = document.createElement('div')
  const subCard = document.createElement('div')

  categoryCard.classList.add('cardsBlock')
  subCard.classList.add('subCardsBlock')
  section.classList.add('section')

  body.appendChild(main)
  main.appendChild(section)
  section.appendChild(categoryCard)
  section.appendChild(subCard)
}

export async function firstRenderCard() {
  const cards = await getCards()
  buildCard(cards, '.cardsBlock', 'card')
  createCard(cards)

  // const cardsBlock = document.querySelector('.cards')
  /*   const start_btn = document.createElement('button')
  const repeat_btn = document.createElement('button')
  const heart_section = document.createElement('div')
  start_btn.classList.add('start_btn', 'btn', 'btn-secondary')
  repeat_btn.classList.add('repeat_btn', 'btn', 'btn-primary')
  heart_section.classList.add('heart_section')
  start_btn.textContent = 'START'
  repeat_btn.textContent = 'REPEAT' */

  /*   main.appendChild(start_btn)
  main.appendChild(repeat_btn)
  main.appendChild(heart_section) */
}

export async function mainRenderSubCard() {
  const cards = await getCards()
  const block = document.querySelector('.cardsBlock')
  const children = block.children
  const arrCollection = [...children]
  arrCollection.forEach((item) => {
    item.addEventListener('click', (e) => {
      const card = e.currentTarget
      const id = card.getAttribute('id')
      const name = card.getAttribute('name')
      const element = cards.find((item) => item.category === name)
      if (cards.find((item) => item.category === name)) {
        arrCollection.forEach((item) => {
          block.removeChild(item)
        })
        const renderElement = element.words
        buildCard(cards, '.subCardsBlock', 'subCard')
        createSubCard(renderElement)
 /*        active(name, '.nav_list__item')
        startGame(id) */
      }
    })
    item.addEventListener('mouseleave', (e) => {
      const card = e.currentTarget
      if (card.classList.contains('_rotate')) {
        const name = card.getAttribute('name')
        card.classList.remove('_rotate')
        const title = card.lastElementChild.firstElementChild
        title.textContent = name
      }
    })
  })

  /*   section.addEventListener('click', (e) => {
    const card = e.target.closest('.card')
    const name = card.getAttribute('name')
    const id = card.getAttribute('id')
    const clickCard = cards.find((item) => item.category === name)
    const clickSubCard = cards[id].words.find((item) => item.word === name)
    if (clickCard) {
      const subCards = clickCard.words
      createSubCard(subCards)
    }
    if (clickSubCard) {
      console.log('play Music and rotate')
    }
  }) */
}

/* export async function renderSubCard() {
  const cards = await getCards()
  const section = document.querySelector('.card')

  section.addEventListener('click', (e) => {
    const card = e.target.closest('.card')
    const name = card.getAttribute('name')
    const id = card.getAttribute('id')
    const clickCard = cards.find((item) => item.category === name)
    const clickSubCard = cards[id].words.find((item) => item.word === name)
    if (clickCard) {
      const subCards = element.words
      createSubCard(subCards)
    }
    if (clickSubCard) {
      console.log('play Music and rotate')
    }
  })
} */

/* export async function playCard(id) {
  const cards = await getCards()
  const section = document.querySelector('.section')
  const children = section.children
  const arrChildren = [...children]
  arrChildren.forEach((item) => {
    item.addEventListener('click', (e) => {
      const subCard = e.currentTarget
      if (subCard.className != 'subCard play_mode') {
        const name = subCard.getAttribute('name')
        const subElements = cards[id].words
        const word = subElements.find((item) => item.word === name)
        if (word) {
          const audio = word.audioSrc
          playAudio(audio)
        }
      }
    })
  })

  // const cards = await getCards()
  // const section = document.querySelector('.section')

  // section.addEventListener('click', (e) => {
  //   const card = e.target.closest('.card')
  //   const name = card.getAttribute('name')
  //   const id = card.getAttribute('id')
  //   const element = cards[id].words.find((item) => item.word === name)
  //   if (element) {
  //     console.log('play Music and rotate')
  //   }
  // })
} */

/* export async function rotateSubCard(id) {
  const cards = await getCards()
  const section = document.querySelector('.subCardsBlock')
  const children = section.children
  const arrChildren = [...children]
  arrChildren.forEach((item) => {
    const rotate = item.querySelector('.rotate')
    rotate.addEventListener('click', (e) => {
      const card = e.currentTarget.parentElement.parentElement
      const name = card.getAttribute('name')
      const subElements = cards[id].words
      console.log(subElements)
      const word = subElements.find((item) => item.word === name)
      card.classList.add('_rotate')
      const title = card.querySelector('.info_block__subtitle')
      title.textContent = `${word?.translation}`
    })
  })
} */

/* export async function startGame(id) {
  const data = await getCards()
  const arrayWord = data[id].words
  const startBtn = document.querySelector('.start_btn')
  const repeatBtn = document.querySelector('.repeat_btn')
  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    repeatBtn.style.display = 'inline-block'
    playGame(arrayWord)
  })
} */
