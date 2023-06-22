import { Card } from './card'
import getCards from './data'
import { active, buildCard, createCard, createSubCard } from './function'
import {
  btn,
  mainRenderSubCard,
  playCard,
  renderSubCard,
  rotateSubCard,
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
  const first_link = document.createElement('a')
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
  first_main_item.classList.add('nav_list__item')
  first_link.classList.add('nav_list__link')
  burger.classList.add('menu__burger')
  line.classList.add('line')
  switcher.classList.add('switcher', 'form-check', 'form-switch')
  input.classList.add('input', 'form-check-input')
  label.classList.add('label', 'form-check-label')
  shadow.classList.add('shadow')
  title.textContent = 'Train & Play'
  label.textContent = 'Train'
  first_link.textContent = 'Main Page'

  first_main_item.setAttribute('name', 'Main Page')

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
  first_main_item.appendChild(first_link)

  burger.appendChild(line)
  setSwitcher()
  setNavMenu()
}

function setSwitcher() {
  const switcher = document.querySelector('.switcher')
  const input = document.querySelector('.input')
  const label = document.querySelector('.label')
  const nav = document.querySelector('.menu__nav')
  const line = document.querySelector('.line')
  const burger = document.querySelector('.menu__burger')

  function setAttributes(el, options) {
    Object.keys(options).forEach(function (attr) {
      el.setAttribute(attr, options[attr])
    })
  }

  setAttributes(input, {
    type: 'checkbox',
    id: 'flexSwitchCheckChecked',
  })

  label.setAttribute('for', 'flexSwitchCheckChecked')

  switcher.addEventListener('click', (e) => {
    input.toggleAttribute('checked')
    const subCard = document.querySelectorAll('.subCard')
    const cardIndicator = document.querySelectorAll('.info_block__indicator')
    const cardTitle = document.querySelectorAll('.info_block__subtitle')
    const cardRotate = document.querySelectorAll('.rotate')
    // const start_btn = document.querySelector('.start_btn')
    // const repeat_btn = document.querySelector('.repeat_btn')

    if (input.checked) {
      label.textContent = 'Play'
      subCard.forEach((item) => item.classList.add('play_mode'))
      cardIndicator.forEach((item) => item.classList.add('play_mode'))
      cardTitle.forEach((item) => item.classList.add('play_mode'))
      cardRotate.forEach((item) => item.classList.add('play_mode'))
      nav.classList.add('play_mode')
      line.classList.add('play_mode')
      burger.classList.add('play_mode')
      // start_btn.style.display = 'inline-block'
    } else {
      label.textContent = 'Train'
      cardIndicator.forEach((item) => item.classList.remove('play_mode'))
      cardTitle.forEach((item) => item.classList.remove('play_mode'))
      cardRotate.forEach((item) => item.classList.remove('play_mode'))
      subCard.forEach((item) => item.classList.remove('play_mode'))
      nav.classList.remove('play_mode')
      line.classList.remove('play_mode')
      burger.classList.remove('play_mode')
      // start_btn.style.display = 'none'
      // repeat_btn.style.display = 'none'
    }
  })
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
    const name = e.target.parentElement.getAttribute('name')
    const id = e.target.parentElement.getAttribute('data-id')
    const className =
      e.target.parentElement.classList.contains('nav_list__item')
    const cardBlock = document.querySelector('.cardsBlock')
    const subCardBlock = document.querySelector('.subCardsBlock')
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
        buildCard(subCards, '.subCardsBlock', 'subCard')
        createSubCard(subCards)
      } else if (isSubBlockChildren.length === 0) {
        buildCard(subCards, '.subCardsBlock', 'subCard')
        createSubCard(subCards)
      }
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      active(name, '.nav_list__item')
    } else if (name === 'Main Page' && className) {
      const isSubBlockChildren = subCardBlock.children
      const isBlockChildren = cardBlock.children
      const arrSubBlockCollection = [...isSubBlockChildren]
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item)
      })
      if (isBlockChildren.length > 0) {
        createCard(cards)
      } else if (isBlockChildren.length === 0) {
        buildCard(cards, '.cardsBlock', 'card')
        createCard(cards)
      }
      mainRenderSubCard()
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      active(name, '.nav_list__item')
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
