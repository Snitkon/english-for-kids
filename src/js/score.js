import { createElement } from './function';

export class Score {
  constructor(data) {
    this.data = data;
  }

  buildScoreContainer(selector) {
    const block = document.querySelector(selector);
    const scoreContainer = createElement('table', 'score_container');
    const scoreHeader = createElement('tr', 'score_header');
    const resetBtn = createElement('button', ['reset_btn', 'btn', 'btn-danger'], 'type', 'button');
    const dataCellEngWord = createElement('td', 'english');
    const dataCellRusWord = createElement('td', 'russian');
    const dataCellClickWord = createElement('td', 'click');
    const dataCellCorrect = createElement('td', 'correct');
    const dataCellError = createElement('td', 'error');
    const dataCorrectPercent = createElement('td', 'percent');

    resetBtn.textContent = 'Reset score';
    dataCellEngWord.textContent = 'English';
    dataCellRusWord.textContent = 'Russian';
    dataCellClickWord.textContent = 'Click';
    dataCellCorrect.textContent = 'Correct';
    dataCellError.textContent = 'Error';
    dataCorrectPercent.textContent = 'Correct score';

    block.appendChild(resetBtn);
    block.appendChild(scoreContainer);
    scoreContainer.appendChild(scoreHeader);
    scoreHeader.appendChild(dataCellEngWord);
    scoreHeader.appendChild(dataCellRusWord);
    scoreHeader.appendChild(dataCellClickWord);
    scoreHeader.appendChild(dataCellCorrect);
    scoreHeader.appendChild(dataCellError);
    scoreHeader.appendChild(dataCorrectPercent);
  }

  renderScore() {
    for (let item of this.data) {
      item.words.forEach((item) => {
        new ScoreBlock(item).renderScore();
      });
    }
  }
}

class ScoreBlock {
  constructor({ word, translation }) {
    this.data = { word, translation };
  }

  renderScore() {
    const table = document.querySelector('.score_container');
    const strInfo = createElement('tr');
    const dataCellEngWord = createElement('td');
    const dataCellRusWord = createElement('td');
    const dataCellCorrect = createElement('td');
    const dataCellClickWord = createElement('td');
    const dataCellError = createElement('td');
    const dataCorrectPercent = createElement('td');

    dataCellEngWord.textContent = this.data.word;
    dataCellRusWord.textContent = this.data.translation;
    dataCellClickWord.textContent = '-';
    dataCellCorrect.textContent = '-';
    dataCellError.textContent = '-';
    dataCellError.textContent = '-';
    dataCorrectPercent.textContent = '-';

    table.appendChild(strInfo);
    strInfo.appendChild(dataCellEngWord);
    strInfo.appendChild(dataCellRusWord);
    strInfo.appendChild(dataCellClickWord);
    strInfo.appendChild(dataCellCorrect);
    strInfo.appendChild(dataCellError);
    strInfo.appendChild(dataCorrectPercent);
  }
}
