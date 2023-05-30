import Cards from './card'
import getWords from './data'

async function renderCard() {
  const body = document.body
  const main = document.createElement('main')
  const container = document.createElement('div')
  body.appendChild(main)
  main.appendChild(container)

  const words = await getWords()

  words.map((word) => {
    const { category, cover, words } = word
    const cards = new Cards(category, cover, words)
    cards.crateMainCard()
  })
}

export default renderCard
