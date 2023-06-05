import Card from './card'
import getWords from './data'
import { createId } from './function'
import SubCards from './subCard'

export async function renderCard() {
  const words = await getWords()

  const body = document.body
  const main = document.createElement('main')
  const section = document.createElement('section')
  body.appendChild(main)
  main.appendChild(section)

  words.forEach((word, id) => {
    const { category, cover, words } = word
    const cards = new Card(category, cover, words, id)
    cards.buildCardContainer()
    cards.renderCard()
  })
}

export async function renderSubCard() {
  const words = await getWords()

  const cards = document.querySelectorAll('.card')

  Array.from(cards).forEach((card) => {
    const name = card.getAttribute('name')
    card.addEventListener('click', (e) => {
      if (
        e.currentTarget.classList.contains('card') &&
        e.currentTarget.getAttribute('name') === name
      ) {
        const id = e.currentTarget.getAttribute('id')
        // if (id <= 7) {
        const element = words[id]
        const subWords = element.words
        subWords.forEach((subWord, subId) => {
          // const newId = createId(id, subId)
          const { word, translation, image, audioSrc } = subWord
          const subCards = new SubCards(
            word,
            image,
            translation,
            audioSrc,
            subId
          )
          subCards.renderCard()
        })
        // }
      }
    })
  })
}
