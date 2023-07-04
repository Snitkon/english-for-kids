export async function getCards() {
  const response = await fetch('./assets/words-cards.json')
  let cards = await response.json()
  return cards
}