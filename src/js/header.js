function createHeader() {
  const body = document.body
  const header = document.createElement('header')
  const title = document.createElement('h1')

  title.innerText = 'Train & Play'

  body.appendChild(header)
  header.appendChild(title)
}

export default createHeader
