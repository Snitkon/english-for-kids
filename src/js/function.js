import { Card } from './card'

export function buildCard(data) {
  data.forEach((item, id) => {
    const card = new Card(id, item)
    card.buildCardContainer()
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
