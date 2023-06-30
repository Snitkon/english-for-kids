import { playAudio } from './function'

export class Card {
  constructor(id, cardData) {
    this.id = id
    this.cardData = cardData
  }

  buildCardContainer(selector, className) {
    const block = document.querySelector(selector)
    const card = document.createElement('div')
    const cover = document.createElement('div')
    const infoContainer = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const indicator = document.createElement('div')

    /*     const switcher = document.querySelector('.switcher')
    const checked = switcher.firstChild.checked
    if (checked) {
      card.classList.add(className, 'play_mode')
    } else {
    } */
    card.classList.add(className)
    cover.classList.add('card__cover')
    infoContainer.classList.add('card__info_block')
    cardTitle.classList.add('info_block__title')
    indicator.classList.add('info_block__indicator')

    card.setAttribute('id', this.id)

    block.appendChild(card)

    card.appendChild(cover)

    card.appendChild(infoContainer)
    infoContainer.appendChild(cardTitle)
    infoContainer.appendChild(indicator)
  }

  renderCard() {
    new RenderCard(this.cardData, this.id).render()
  }

  renderSubCard() {
    const subCard = new RenderSubCard(this.cardData, this.id)
    subCard.render()
    subCard.rotate()
    subCard.speech()
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

    // const switcher = document.querySelector('.switcher')
    // const checked = switcher.firstChild.checked

    card.setAttribute('name', this.cardData.category)
    card.classList.add('card')
    // card.classList.remove('subCard')

    const infoContainer = card.querySelector('.card__info_block')
    const cover = card.querySelector('.card__cover')
    // const indicator = card.querySelector('.info_block__indicator')
    const rotate = card.querySelector('.rotate')

    if (card.querySelector('.info_block__subtitle')) {
      const cardTitle = card.querySelector('.info_block__subtitle')
      cardTitle.className = 'info_block__title'
      cardTitle.innerText = this.cardData.category
    }
    if (card.querySelector('.info_block__title')) {
      const cardTitle = card.querySelector('.info_block__title')
      cardTitle.className = 'info_block__title'
      cardTitle.innerText = this.cardData.category
    }

    cover.style.backgroundImage = `url('${this.cardData.cover}')`
    if (quantityWords === null) {
      const createQuantityWords = document.createElement('p')
      createQuantityWords.classList.add('info_block__quantity')
      infoContainer.appendChild(createQuantityWords)
      createQuantityWords.innerText = this.cardData.words.length
    }
    rotate && infoContainer.removeChild(rotate)

    /*     if (checked) {
      indicator.classList.add('play_mode')
    } */
  }
}

class RenderSubCard {
  constructor({ word, translation, image, audioSrc }, id) {
    this.cardData = { word, translation, image, audioSrc }
    this.id = id
  }

  render() {
    const card = document.getElementById(this.id)

    // const switcher = document.querySelector('.switcher')
    // const checked = switcher.firstChild.checked

    // const rotate = card.querySelector('.rotate')

    card.setAttribute('name', this.cardData.word)
    card.classList.add('subCard')
    // card.classList.remove('card')

    const infoContainer = card.querySelector('.card__info_block')
    const cover = card.querySelector('.card__cover')
    const quantityWords = card.querySelector('.info_block__quantity')
    const cardTitle = card.querySelector('.info_block__title')
    const cardIndicator = card.querySelector('.info_block__indicator')
    cardTitle.className = 'info_block__subtitle'

    /* if (card.querySelector('.info_block__title')) {
      const cardTitle = card.querySelector('.info_block__title')
      cardTitle.className = 'info_block__subtitle'
      cardTitle.innerText = this.cardData.word
    }
    if (card.querySelector('.info_block__subtitle')) {
      const cardTitle = card.querySelector('.info_block__subtitle')
      cardTitle.className = 'info_block__subtitle'
      cardTitle.innerText = this.cardData.word
    } */

    cardTitle.innerText = this.cardData.word
    cover.style.backgroundImage = `url('${this.cardData.image}')`
    // if (rotate === null) {
    const createRotate = document.createElement('img')
    createRotate.classList.add('rotate')
    createRotate.setAttribute('src', './assets/img/rotate.svg')
    infoContainer.appendChild(createRotate)
    // }

    quantityWords && infoContainer.removeChild(quantityWords)

    /*     if (checked) {
      cardTitle.classList.add('play_mode')
      createRotate.classList.add('play_mode')
      cardIndicator.classList.add('play_mode')
    } */
  }

  rotate() {
    const card = document.getElementById(this.id)
    const rotateImg = card.querySelector('.rotate')
    const title = card.querySelector('.info_block__subtitle')

    function rotate(data) {
      title.innerText = data
      card.classList.add('_rotate')
    }

    function returns(data) {
      title.innerText = data
      card.classList.remove('_rotate')
    }

    rotateImg.addEventListener('click', () => {
      rotate(this.cardData.translation)
    })

    card.addEventListener('mouseleave', () => {
      returns(this.cardData.word)
    })
  }

  speech() {
    const card = document.getElementById(this.id)

    function pronunciation(data) {
      playAudio(data)
    }

    card.addEventListener('click', (e) => {
      if (e.currentTarget.className === 'subCard') {
        pronunciation(this.cardData.audioSrc)
      }
    })
  }
}
