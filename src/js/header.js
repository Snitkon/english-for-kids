import { Card } from './card'
import getCards from './data'
import {
  active,
  buildCard,
  createCard,
  createScore,
  createSubCard,
  gameStart,
  playGame,
  scoreData,
} from './function'
import {
  btn,
  mainRenderSubCard,
  playCard,
  renderGameEnvironment,
  renderSubCard,
  rotateSubCard,
  startGame,
} from './main'

function buildHeaderStructure() {
  const body = document.body
  const header = document.createElement('header')
  const container = document.createElement('div')
  const menu = document.createElement('div')
  const burger = document.createElement('div')
  const line = document.createElement('span')
  const nav = document.createElement('nav')
  const nav_list = document.createElement('ul')
  const first_main_item = document.createElement('li')
  const second_score_item = document.createElement('li')
  const first_link = document.createElement('a')
  const second_link = document.createElement('a')
  const switcher = document.createElement('div')
  const input = document.createElement('input')
  const label = document.createElement('label')
  const title = document.createElement('h1')
  const shadow = document.createElement('div')

  header.classList.add('header')
  container.classList.add('container')
  title.classList.add('title')
  menu.classList.add('menu')
  nav.classList.add('menu__nav')
  nav_list.classList.add('nav__list')
  first_main_item.classList.add('nav_list__item', '_active')
  first_link.classList.add('nav_list__link', '_active')
  second_score_item.classList.add('nav_list__item')
  second_link.classList.add('nav_list__link')
  burger.classList.add('menu__burger')
  line.classList.add('line')
  switcher.classList.add('switcher', 'form-check', 'form-switch')
  input.classList.add('input', 'form-check-input')
  label.classList.add('label', 'form-check-label')
  shadow.classList.add('shadow')
  title.textContent = 'Train & Play'
  label.textContent = 'Train'
  first_link.textContent = 'Main Page'
  second_link.textContent = 'Score'

  first_main_item.setAttribute('name', 'Main Page')
  second_score_item.setAttribute('name', 'Score')

  body.appendChild(header)
  body.appendChild(shadow)

  header.appendChild(container)
  header.appendChild(title)

  container.appendChild(menu)
  container.appendChild(switcher)

  menu.appendChild(nav)
  menu.appendChild(burger)

  switcher.appendChild(input)
  switcher.appendChild(label)

  nav.appendChild(nav_list)

  nav_list.appendChild(first_main_item)
  nav_list.appendChild(second_score_item)
  first_main_item.appendChild(first_link)
  second_score_item.appendChild(second_link)

  burger.appendChild(line)
  setSwitcher()
  setNavMenu()
}

export function setSwitcher() {
  const switcher = document.querySelector('.switcher')
  const input = document.querySelector('.input')
  const label = document.querySelector('.label')

  function setAttributes(el, options) {
    Object.keys(options).forEach((attr) => {
      el.setAttribute(attr, options[attr])
    })
  }

  setAttributes(input, {
    type: 'checkbox',
    id: 'flexSwitchCheckDefault',
  })

  label.setAttribute('for', 'flexSwitchCheckDefault')

  switcher.addEventListener('click', () => {
    checkedMode(input.checked)
  })
}

export function checkedMode(checked) {
  const nav = document.querySelector('.menu__nav')
  const line = document.querySelector('.line')
  const burger = document.querySelector('.menu__burger')
  const label = document.querySelector('.label')

  const subCard = document.querySelectorAll('.subCard')
  const cardIndicator = document.querySelectorAll('.info_block__indicator')
  const cardTitle = document.querySelectorAll('.info_block__subtitle')
  const cardRotate = document.querySelectorAll('.rotate')

  const subCardBlock = document.querySelector('.subCardsBlock')
  const start_btn = document.querySelector('.start_btn')
  const repeat_btn = document.querySelector('.repeat_btn')
  const heart_section = document.querySelector('.heart_section')

  const subCardBlockCount = subCardBlock.children.length

  if (checked === false) {
    label.textContent = 'Train'
    cardIndicator.forEach((item) => item.classList.remove('play_mode'))
    cardTitle.forEach((item) => item.classList.remove('play_mode'))
    cardRotate.forEach((item) => item.classList.remove('play_mode'))
    subCard.forEach((item) => item.classList.remove('play_mode'))
    nav.classList.remove('play_mode')
    line.classList.remove('play_mode')
    burger.classList.remove('play_mode')
    start_btn.classList.remove('play_mode')
    repeat_btn.classList.remove('play_mode')
    heart_section.classList.remove('play_mode')
  }
  if (checked === true) {
    label.textContent = 'Play'
    subCard.forEach((item) => item.classList.add('play_mode'))
    cardIndicator.forEach((item) => item.classList.add('play_mode'))
    cardTitle.forEach((item) => item.classList.add('play_mode'))
    cardRotate.forEach((item) => item.classList.add('play_mode'))
    nav.classList.add('play_mode')
    line.classList.add('play_mode')
    burger.classList.add('play_mode')
    if (subCardBlockCount > 0) {
      start_btn.classList.add('play_mode')
      // repeat_btn.classList.add('play_mode')
      // heart_section.classList.add('play_mode')
      // gameStart()
    }
  }
}

async function setNavMenu() {
  const cards = await getCards()
  const nav_list = document.querySelector('.nav__list')
  const burger = document.querySelector('.menu__burger')
  const nav = document.querySelector('.menu__nav')
  const body = document.querySelector('body')
  const shadow = document.querySelector('.shadow')

  cards.forEach((card, i) => {
    const { category } = card
    const nav_list__item = document.createElement('li')
    const link = document.createElement('a')

    nav_list.appendChild(nav_list__item)
    nav_list__item.appendChild(link)

    nav_list__item.classList.add('nav_list__item')
    link.classList.add('nav_list__link')

    nav_list__item.setAttribute('name', `${category}`)
    nav_list__item.setAttribute('data-id', i)
    link.textContent = `${category}`
  })

  nav_list.addEventListener('click', (e) => {
    const section = document.querySelector('.section')
    const table = document.querySelector('.score_container')
    const name = e.target.parentElement.getAttribute('name')
    const id = e.target.parentElement.getAttribute('data-id')
    const className =
      e.target.parentElement.classList.contains('nav_list__item')
    const cardBlock = document.querySelector('.cardsBlock')
    const subCardBlock = document.querySelector('.subCardsBlock')
    const switcher = document.querySelector('.switcher')
    const subCardsCatergory = cards[id]?.category
    if (name === subCardsCatergory && className) {
      const card = cards.find((item) => item.category === name)
      const subCards = card.words
      const isSubBlockChildren = subCardBlock.children
      const isBlockChildren = cardBlock.children
      const arrBlockCollection = [...isBlockChildren]
      const arrSubBlockCollection = [...isSubBlockChildren]
      arrBlockCollection.forEach((item) => {
        cardBlock.removeChild(item)
      })
      if (isSubBlockChildren.length > 0) {
        arrSubBlockCollection.forEach((item) => {
          subCardBlock.removeChild(item)
        })
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        buildCard(subCards, '.subCardsBlock', 'subCard')
        createSubCard(subCards)
        // gameStart()
        // startGame(id)
      } else if (isSubBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        buildCard(subCards, '.subCardsBlock', 'subCard')
        createSubCard(subCards)
        // gameStart()
        // startGame(id)
      }
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      table.classList.remove('_active')
      section.classList.add('_active')
      active(name, '.nav_list__item')
    }
    if (name === 'Main Page' && className) {
      const isSubBlockChildren = subCardBlock.children
      const isBlockChildren = cardBlock.children
      const arrSubBlockCollection = [...isSubBlockChildren]
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item)
      })
      if (isBlockChildren.length > 0) {
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        createCard(cards)
      } else if (isBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        buildCard(cards, '.cardsBlock', 'card')
        createCard(cards)
      }
      mainRenderSubCard()
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      table.classList.remove('_active')
      section.classList.add('_active')
      active(name, '.nav_list__item')
    }
    if (name === 'Score' && className) {
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      section.classList.remove('_active')
      table.classList.add('_active')
      active(name, '.nav_list__item')
      scoreData()
    }
  })

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('_active')
    nav.classList.toggle('_active')
    body.classList.toggle('_active')
    shadow.classList.toggle('_active')
  })
}
export default buildHeaderStructure
