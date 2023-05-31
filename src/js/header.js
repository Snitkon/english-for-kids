import getWords from './data'

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
  const switcher = document.createElement('div')
  const title = document.createElement('h1')
  const shadow = document.createElement('div')

  header.classList.add('header')
  container.classList.add('container')
  title.classList.add('title')
  menu.classList.add('menu')
  nav.classList.add('menu__nav')
  nav_list.classList.add('nav__list')
  burger.classList.add('menu__burger')
  line.classList.add('line')
  switcher.classList.add('switcher')
  shadow.classList.add('shadow')

  title.innerText = 'Train & Play'

  body.appendChild(header)
  body.appendChild(shadow)

  header.appendChild(container)
  header.appendChild(title)

  container.appendChild(menu)
  container.appendChild(switcher)

  menu.appendChild(nav)
  menu.appendChild(burger)

  nav.appendChild(nav_list)

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
}

export default createHeader
