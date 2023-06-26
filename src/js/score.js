class Score {
  constructor(data) {
    this.data = data
  }

  buildScoreContainer(selector) {
    const block = document.querySelector(selector)
    const scoreContainer = document.createElement('table')
    const scoreHeader = document.createElement('tr')

    const dataCellEngWord = document.createElement('td')
    const dataCellRusWord = document.createElement('td')
    const dataCellCorrect = document.createElement('td')
    const dataCellError = document.createElement('td')

    scoreContainer.classList.add('score_container')
    scoreHeader.classList.add('score_header')
    dataCellEngWord.classList.add('english')
    dataCellRusWord.classList.add('russian')
    dataCellCorrect.classList.add('correct')
    dataCellError.classList.add('error')

    dataCellEngWord.textContent = 'English'
    dataCellRusWord.textContent = 'Russian'
    dataCellCorrect.textContent = 'Correct'
    dataCellError.textContent = 'Error'

    block.appendChild(scoreContainer)
    scoreContainer.appendChild(scoreHeader)
    scoreHeader.appendChild(dataCellEngWord)
    scoreHeader.appendChild(dataCellRusWord)
    scoreHeader.appendChild(dataCellCorrect)
    scoreHeader.appendChild(dataCellError)
  }

  renderScore() {
    for (let item of this.data) {
      item.words.forEach((item) => {
        new ScoreBlock(item).renderScore()
      })
    }
  }
}

class ScoreBlock {
  constructor({ word, translation }) {
    this.data = { word, translation }
  }

  renderScore() {
    const table = document.querySelector('.score_container')
    const strInfo = document.createElement('tr')
    const dataCellEngWord = document.createElement('td')
    const dataCellRusWord = document.createElement('td')
    const dataCellCorrect = document.createElement('td')
    const dataCellError = document.createElement('td')

    dataCellEngWord.textContent = this.data.word
    dataCellRusWord.textContent = this.data.translation

    table.appendChild(strInfo)
    strInfo.appendChild(dataCellEngWord)
    strInfo.appendChild(dataCellRusWord)
    strInfo.appendChild(dataCellCorrect)
    strInfo.appendChild(dataCellError)
  }
}

export default Score
