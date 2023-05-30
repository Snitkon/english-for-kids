class Cards {
  constructor(category, cover, words) {
    this.category = category
    this.cover = cover
    this.words = words
  }

  crateMainCard() {
    const main = document.querySelector('main')
    const container = document.querySelector('div')
    const wrapper = document.createElement('div')
    const card = document.createElement('div')
    const cover = document.createElement('div')
    const infoContainer = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const quantityWords = document.createElement('p')
    const indicator = document.createElement('div')

    container.classList.add('container')
    wrapper.classList.add('card-wrapper')
    card.classList.add('card')
    cover.classList.add('card__cover')
    cover.style.backgroundImage = `url('${this.cover}')`
    infoContainer.classList.add('card__info_block')
    cardTitle.classList.add('info_block__title')
    quantityWords.classList.add('info_block__quantity')
    indicator.classList.add('info_block__indicator')
    card.setAttribute('name', this.category)
    cardTitle.innerText = this.category
    quantityWords.innerText = this.words.length

    main.appendChild(container)
    container.appendChild(wrapper)

    wrapper.appendChild(card)

    card.appendChild(cover)

    card.appendChild(infoContainer)
    infoContainer.appendChild(cardTitle)
    infoContainer.appendChild(quantityWords)
    infoContainer.appendChild(indicator)
  }
}

export default Cards
