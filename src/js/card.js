export class Card {
  constructor(id, cardData) {
    this.id = id
    this.cardData = cardData
  }

  buildCardContainer() {
    const section = document.querySelector('section')
    const card = document.createElement('div')
    const cover = document.createElement('div')
    const infoContainer = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const rotate = document.del
    const indicator = document.createElement('div')

    section.classList.add('section')
    card.classList.add('card')
    cover.classList.add('card__cover')
    infoContainer.classList.add('card__info_block')
    cardTitle.classList.add('info_block__title')
    indicator.classList.add('info_block__indicator')

    card.setAttribute('id', this.id)

    section.appendChild(card)

    card.appendChild(cover)

    card.appendChild(infoContainer)
    infoContainer.appendChild(cardTitle)
    infoContainer.appendChild(indicator)
  }

  renderCard() {
    new RenderCard(this.cardData, this.id).render()
  }

  renderSubCard() {
    new RenderSubCard(this.cardData, this.id).render()
  }
}

class RenderCard {
  constructor({ category, cover, words }, id) {
    this.cardData = { category, cover, words }
    this.id = id
  }

  render() {
    const card = document.getElementById(this.id)
    const quantityWords = card.querySelector('.info_block__quantity')

    card.setAttribute('name', this.cardData.category)
    card.classList.remove('subCard')
    card.classList.add('card')

    const infoContainer = card.querySelector('.card__info_block')
    const cover = card.querySelector('.card__cover')
    const cardTitle = card.querySelector('.info_block__title')
    const rotate = card.querySelector('.rotate')

    cover.style.backgroundImage = `url('${this.cardData.cover}')`
    cardTitle.innerText = this.cardData.category
    if (quantityWords === null) {
      const createQuantityWords = document.createElement('p')
      createQuantityWords.classList.add('info_block__quantity')
      infoContainer.appendChild(createQuantityWords)
      createQuantityWords.innerText = this.cardData.words.length
    }
    rotate && infoContainer.removeChild(rotate)
  }
}

class RenderSubCard {
  constructor({ word, translate, image, audioSrc }, id) {
    this.cardData = { word, translate, image, audioSrc }
    this.id = id
  }

  render() {
    const card = document.getElementById(this.id)
    const rotate = card.querySelector('.rotate')

    card.setAttribute('name', this.cardData.word)
    card.classList.add('subCard')
    card.classList.remove('card')

    const infoContainer = card.querySelector('.card__info_block')
    const cover = card.querySelector('.card__cover')
    const cardTitle = card.querySelector('.info_block__title')
    const quantityWords = card.querySelector('.info_block__quantity')

    cover.style.backgroundImage = `url('${this.cardData.image}')`
    cardTitle.innerText = this.cardData.word
    if (rotate === null) {
      const createRotate = document.createElement('img')
      createRotate.classList.add('rotate')
      createRotate.setAttribute('src', './assets/img/rotate.svg')
      infoContainer.appendChild(createRotate)
    }
    quantityWords && infoContainer.removeChild(quantityWords)
  }
}
