import { Card } from './card'
import getCards from './data'
import { active, createCard, createSubCard } from './function'
import { playCard, rotateCard } from './main'
// import SubCards from './subCard'

async function createHeader() {
  const cards = await getCards()

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
    const cardIndicator = document.querySelectorAll('.info_block__indicator')
    if (input.checked) {
      label.textContent = 'Play'
      cardIndicator.forEach((item) => item.classList.add('play_mode'))
      nav.classList.add('play_mode')
      line.classList.add('play_mode')
      burger.classList.add('play_mode')
    } else {
      label.textContent = 'Train'
      cardIndicator.forEach((item) => item.classList.remove('play_mode'))
      nav.classList.remove('play_mode')
      line.classList.remove('play_mode')
      burger.classList.remove('play_mode')
    }
  })

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

/*   for (let card of cards) {
    const { category } = card
    const nav_list__item = document.createElement('li')
    const link = document.createElement('a')
    nav_list__item.appendChild(link)
    nav_list.appendChild(nav_list__item)
    link.classList.add('nav_list__link')
    nav_list__item.classList.add('nav_list__item')
    nav_list__item.setAttribute('id', '1')
    nav_list__item.setAttribute('name', `${category}`)
    link.textContent = `${category}`
  } */



  cards.forEach((card, i) => {
    const { category } = card
    const nav_list__item = document.createElement('li')
    const link = document.createElement('a')
    nav_list__item.appendChild(link)
    nav_list.appendChild(nav_list__item)
    link.classList.add('nav_list__link')
    nav_list__item.classList.add('nav_list__item')
    nav_list__item.setAttribute('name', `${category}`)
    nav_list__item.setAttribute('data-id', i)
    link.textContent = `${category}`
  })

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('_active')
    nav.classList.toggle('_active')
    body.classList.toggle('_active')
    shadow.classList.toggle('_active')
  })

  nav_list.addEventListener('click', (e) => {
    const parentName = e.target.parentElement.getAttribute('name')
    const parentId = e.target.parentElement.getAttribute('data-id')
    const parentClass =
      e.target.parentElement.classList.contains('nav_list__item')
    if (parentName != "Main Page" && parentClass) {
      const card = cards.find((item) => item.category === parentName)
      const subCards = card.words
      createSubCard(subCards)
      playCard(parentId)
      rotateCard(parentId)
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      active(parentName, '.nav_list__item')
    } else if (parentName === 'Main Page' && parentClass) {
      createCard(cards)
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      active(parentName, '.nav_list__item')
    }
  })
}

export default createHeader
