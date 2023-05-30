async function getWords() {
  const response = await fetch('./assets/words-cards.json')
  let words = await response.json()
  return words
}

export default getWords
