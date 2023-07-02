import getCards from './data'
import {
  active,
  buildCard,
  clickCounts,
  createCard,
  createScore,
  createSubCard,
  gameStart,
  playAudio,
  playGame,
} from './function'
import { checkedMode, setSwitcher } from './header'

export function buildMainStructure() {
  const body = document.body
  const main = document.createElement('main')
  const section = document.createElement('section')
  const categoryCard = document.createElement('div')
  const subCard = document.createElement('div')
  const start_btn = document.createElement('button')
  const repeat_btn = document.createElement('button')
  const heart_section = document.createElement('div')
  start_btn.textContent = 'START'
  repeat_btn.textContent = 'REPEAT'

  section.classList.add('section', '_active')
  categoryCard.classList.add('cardsBlock')
  subCard.classList.add('subCardsBlock')
  start_btn.classList.add('start_btn', 'btn', 'btn-secondary')
  repeat_btn.classList.add('repeat_btn', 'btn', 'btn-primary')
  heart_section.classList.add('heart_section')

  body.appendChild(main)
  main.appendChild(section)
  section.appendChild(categoryCard)
  section.appendChild(subCard)
  section.appendChild(start_btn)
  section.appendChild(repeat_btn)
  section.appendChild(heart_section)
}

export async function buildScore() {
  const cards = await getCards()
  createScore(cards)
}

export async function firstRenderCard() {
  const cards = await getCards()
  buildCard(cards, '.cardsBlock', 'card')
  createCard(cards)

  /*  const cardsBlock = document.querySelector('.cards')
  const start_btn = document.createElement('button')
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
  const input = document.querySelector('.input')
  const switcher = document.querySelector('.switcher')
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
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        const renderElement = element.words
        active(name, '.nav_list__item')
        buildCard(cards, '.subCardsBlock', 'subCard')
        createSubCard(renderElement)
        clickCounts()
        // gameStart()
        // startGame(id)
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

/* export function renderGameEnvironment(checked) {
  const section = document.querySelector('.section')
  const subCardsBlock = section.querySelector('.subCardsBlock')
  const cardsBlock = section.querySelector('.cardsBlock')
  const subCardsCount = subCardsBlock.children.length
  const cardsCount = cardsBlock.children.length

  const start_btn = document.querySelector('.start_btn')
  const repeat_btn = document.querySelector('.repeat_btn')
  const heart_section = document.querySelector('.heart_section')
  if (checked && cardsCount === 0) {

  }
  if (checked && cardsCount > 0) {

  }
} */

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
  startBtn.removeAttribute('style')
  repeatBtn.removeAttribute('style')
  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    repeatBtn.style.display = 'inline-block'
    playGame(arrayWord)
  })
} */
