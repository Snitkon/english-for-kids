import Cards from './card'
import getWords from './data'

async function renderCard() {
  const words = await getWords()

  const body = document.body
  const main = document.createElement('main')
  const section = document.createElement('section')
  body.appendChild(main)
  main.appendChild(section)

  words.forEach((word) => {
    const { category, cover, words } = word
    const cards = new Cards(category, cover, words)
    cards.crateMainCard()
  })
}

export default renderCard
