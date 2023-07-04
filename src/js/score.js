export class Score {
  constructor(data) {
    this.data = data
  }

  buildScoreContainer(selector) {
    const block = document.querySelector(selector)
    const scoreContainer = document.createElement('table')
    const scoreHeader = document.createElement('tr')

    const resetBtn = document.createElement('button')
    const dataCellEngWord = document.createElement('td')
    const dataCellRusWord = document.createElement('td')
    const dataCellClickWord = document.createElement('td')
    const dataCellCorrect = document.createElement('td')
    const dataCellError = document.createElement('td')
    const dataCorrectPercent = document.createElement('td')

    resetBtn.classList.add('reset_btn', 'btn', 'btn-danger')
    resetBtn.setAttribute('type', 'button')
    scoreContainer.classList.add('score_container')
    scoreHeader.classList.add('score_header')
    dataCellEngWord.classList.add('english')
    dataCellRusWord.classList.add('russian')
    dataCellClickWord.classList.add('click')
    dataCellCorrect.classList.add('correct')
    dataCellError.classList.add('error')
    dataCorrectPercent.classList.add('percent')

    resetBtn.textContent = 'Reset'
    dataCellEngWord.textContent = 'English'
    dataCellRusWord.textContent = 'Russian'
    dataCellClickWord.textContent = 'Click'
    dataCellCorrect.textContent = 'Correct'
    dataCellError.textContent = 'Error'
    dataCorrectPercent.textContent = 'Correct score'

    block.appendChild(resetBtn)
    block.appendChild(scoreContainer)
    scoreContainer.appendChild(scoreHeader)
    scoreHeader.appendChild(dataCellEngWord)
    scoreHeader.appendChild(dataCellRusWord)
    scoreHeader.appendChild(dataCellClickWord)
    scoreHeader.appendChild(dataCellCorrect)
    scoreHeader.appendChild(dataCellError)
    scoreHeader.appendChild(dataCorrectPercent)
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
    const dataCellClickWord = document.createElement('td')
    const dataCellError = document.createElement('td')
    const dataCorrectPercent = document.createElement('td')

    dataCellEngWord.textContent = this.data.word
    dataCellRusWord.textContent = this.data.translation
    dataCellClickWord.textContent = '-'
    dataCellCorrect.textContent = '-'
    dataCellError.textContent = '-'
    dataCellError.textContent = '-'
    dataCorrectPercent.textContent = '-'


    table.appendChild(strInfo)
    strInfo.appendChild(dataCellEngWord)
    strInfo.appendChild(dataCellRusWord)
    strInfo.appendChild(dataCellClickWord)
    strInfo.appendChild(dataCellCorrect)
    strInfo.appendChild(dataCellError)
    strInfo.appendChild(dataCorrectPercent)
  }
}