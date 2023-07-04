import { getCards } from './data'
import { active, buildCard, clickCounts, createCard, createScore, createSubCard } from './function'
import { checkedMode } from './header'

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
}
