import Card from './card'
import getWords from './data'
import SubCards from './subCard'

async function createHeader() {
  const words = await getWords()

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

  words.forEach((word) => {
    const { category } = word
    const nav_list__item = document.createElement('li')
    const link = document.createElement('a')
    nav_list__item.appendChild(link)
    nav_list.appendChild(nav_list__item)
    link.classList.add('nav_list__link')
    nav_list__item.classList.add('nav_list__item')
    nav_list__item.setAttribute('name', `${category}`)
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
    const parentClass =
      e.target.parentElement.classList.contains('nav_list__item')
    if (parentName && parentClass) {
      const card = words.find((item) => item.category === parentName)
      const subWords = card.words
      subWords.forEach((subWord, subId) => {
        const { word, translation, image, audioSrc } = subWord
        const subCards = new SubCards(word, image, translation, audioSrc, subId)
        subCards.renderCard()
        burger.classList.remove('_active')
        nav.classList.remove('_active')
        body.classList.remove('_active')
        shadow.classList.remove('_active')
      })
    } else if (parentClass) {
      words.forEach((word, id) => {
        const { category, cover, words } = word
        const cards = new Card(category, cover, words, id)
        cards.renderCard()
        burger.classList.remove('_active')
        nav.classList.remove('_active')
        body.classList.remove('_active')
        shadow.classList.remove('_active')
      })
    }
  })
}

export default createHeader
