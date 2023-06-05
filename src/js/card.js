class Card {
  constructor(name, image, words, id) {
    this.name = name
    this.image = image
    this.words = words
    this.id = id
  }

  buildCardContainer() {
    const section = document.querySelector('section')
    const card = document.createElement('div')
    const cover = document.createElement('div')
    const infoContainer = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const quantityWords = document.createElement('p')
    const indicator = document.createElement('div')

    section.classList.add('section')
    card.classList.add('card')
    cover.classList.add('card__cover')
    infoContainer.classList.add('card__info_block')
    cardTitle.classList.add('info_block__title')
    quantityWords.classList.add('info_block__quantity')
    indicator.classList.add('info_block__indicator')

    card.setAttribute('id', this.id)

    section.appendChild(card)

    card.appendChild(cover)

    card.appendChild(infoContainer)
    infoContainer.appendChild(cardTitle)
    infoContainer.appendChild(quantityWords)
    infoContainer.appendChild(indicator)
  }

  renderCard() {
    const card = document.getElementById(this.id)
    card.setAttribute('name', this.name)
    const cover = card.querySelector('.card__cover')
    const cardTitle = card.querySelector('.info_block__title')
    // const quantityWords = card.querySelector('.info_block__quantity')

    cover.style.backgroundImage = `url('${this.image}')`
    cardTitle.innerText = this.name
    // quantityWords.innerText = this.words.length
  }
}

export default Card
