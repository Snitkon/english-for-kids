import { Card } from './card';
import { getCards } from './data';
import { checkedMode } from './header';
import { firstRenderCard, mainRenderSubCard } from './main';
import { Score } from './score';

export function createElement(tag, classNames, attr, value) {
  const element = document.createElement(tag);
  if (Array.isArray(classNames)) {
    classNames.forEach((className) => {
      element.classList.add(className);
    });
  } else if (typeof classNames === 'string') {
    element.classList.add(classNames);
  }
  attr && value && element.setAttribute(attr, value);
  return element;
}

export function createCard(data, selector, className) {
  data.forEach((item, id) => {
    const card = new Card(id, item);
    card.createCardContainer(selector, className);
  });
}

export function renderCategories(data) {
  data.forEach((item, id) => {
    const card = new Card(id, item);
    card.renderCardCategory();
  });
}

export function renderWords(data) {
  data.forEach((item, id) => {
    const subCard = new Card(id, item);
    subCard.renderCardWord();
  });
  gameStart();
}

export function createScore(data) {
  const score = new Score(data);
  score.buildScoreContainer('main');
  score.renderScore();
}

export function playAudio(url) {
  const audio = new Audio(url);
  audio.play();
}

export function active(category, data) {
  const getCollection = document.querySelectorAll(data);
  getCollection.forEach((item) => {
    const name = item.getAttribute('name');
    const link = item.firstElementChild;
    if (name === category) {
      item.classList.add('_active');
      link.classList.add('_active');
    } else {
      item.classList.remove('_active');
      link.classList.remove('_active');
    }
  });
}

//For Game

function c(e) {
  const startBtn = document.querySelector('.start_btn');
  const repeatBtn = document.querySelector('.repeat_btn');
  startBtn.classList.remove('play_mode');
  repeatBtn.classList.add('play_mode');
  const navlist = document.querySelector('.nav__list');
  const children = navlist.children;
  const arrElement = [...children];
  const element = arrElement.find((item) => item.className === 'nav_list__item _active');
  const id = element.getAttribute('data-id');
  playGame(id);
}

export function gameStart() {
  const startBtn = document.querySelector('.start_btn');
  const navlist = document.querySelector('.nav__list');

  startBtn.addEventListener('click', c);
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection();
      startBtn.removeEventListener('click', c);
    }
  });
}

export function getSound(data) {
  let arr = data;
  let randomNumber = Math.floor(Math.random() * arr.length);
  let objWord = arr.splice(randomNumber, 1);
  let audio = objWord[0].audioSrc;
  playAudio(audio);
  return objWord[0];
}

function processCardOperation(e, heart_section, dataWord, arrData, correct, error, count) {
  if (e.target.closest('.subCard')) {
    let totalizer = count;
    let obj = dataWord;
    let heart = document.createElement('div');
    heart.classList.add('heart');
    let subCard = e.target.parentElement;
    let subCardName = subCard.getAttribute('name');
    let word = obj.word;
    if (subCardName === word) {
      ++totalizer;
      subCard.classList.add('passed');
      heart.classList.add('right');
      heart_section.appendChild(heart);
      playAudio('./assets/audio/correct.mp3');
      generateDataArray(correct, word);
      removeHeart(totalizer);
      if (arrData.length) {
        const dataWord = getSound(arrData);
        return [dataWord, totalizer];
      }
      if (!arrData.length) {
        finishGame(correct, error);
        return undefined;
      }
    } else {
      ++totalizer;
      heart.classList.add('wrong');
      heart_section.appendChild(heart);
      playAudio('./assets/audio/error.mp3');
      generateDataArray(error, word);
      removeHeart(totalizer);
      return [dataWord, totalizer];
    }
  }
}

function repeatWordSound(arrData, dataWord) {
  console.log(dataWord);
  if (arrData.length >= 0) {
    const sound = dataWord.audioSrc;
    playAudio(sound);
  }
}

export async function playGame(id) {
  const subCardsBlock = document.querySelector('.subCardsBlock');
  const repeat_btn = document.querySelector('.repeat_btn');
  const heart_section = document.querySelector('.heart_section');
  const navlist = document.querySelector('.nav__list');
  heart_section.classList.add('play_mode');
  const data = await getCards();
  const arrayWord = data[id].words;
  const arrData = arrayWord;
  let dataWord = getSound(arrData);
  console.log(dataWord);
  const getCorrect = JSON.parse(localStorage.getItem('correct'));
  const getError = JSON.parse(localStorage.getItem('error'));
  const correct = getCorrect ? [...getCorrect] : [];
  const error = getError ? [...getError] : [];
  let count = 0;

  const eventHandlerForSound = function () {
    repeatWordSound(arrData, dataWord);
  };

  const eventHandlerForCard = function (e) {
    const newData = processCardOperation(e, heart_section, dataWord, arrData, correct, error, count);
    if (newData != undefined) {
      let [dataWordNew, totalizer] = newData;
      dataWord = dataWordNew;
      count = totalizer;
    }
    if (newData === undefined) {
      subCardsBlock.removeEventListener('click', eventHandlerForCard);
      repeat_btn.removeEventListener('click', eventHandlerForSound);
    }
    return;
  };

  subCardsBlock.addEventListener('click', eventHandlerForCard);
  repeat_btn.addEventListener('click', eventHandlerForSound);
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection();
      repeat_btn.removeEventListener('click', eventHandlerForSound);
      subCardsBlock.removeEventListener('click', eventHandlerForCard);
    }
  });
}

export function clearHeartSection() {
  const section = document.querySelector('.heart_section');
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}

export function removeHeart(count) {
  const heart = document.querySelectorAll('.heart');
  const max_count = 8;
  if (heart.length >= max_count) {
    heart[count - max_count].style.display = 'none';
  }
}

export function finishGame(correctArr, errorArr) {
  const startBtn = document.querySelector('.start_btn');
  const switcher = document.querySelector('.switcher');
  const heart_section = document.querySelector('.heart_section');
  const subCardBlock = document.querySelector('.subCardsBlock');
  const isSubBlockChildren = subCardBlock.children;
  const arrSubBlockCollection = [...isSubBlockChildren];
  const children = heart_section.children;
  const arrCollection = [...children];
  const counts = arrCollection.reduce((previously, current) => {
    previously[current.className] = (previously[current.className] || 0) + 1;
    return previously;
  }, {});

  const wrong = counts['heart wrong'];
  const right = counts['heart right'];

  const correctJson = JSON.stringify(correctArr);
  const errorJson = JSON.stringify(errorArr);
  localStorage.setItem('correct', correctJson);
  localStorage.setItem('error', errorJson);

  if (wrong) {
    const body = document.querySelector('body');
    const main = document.querySelector('main');

    const wrong_block = createElement('section', 'wrong-block');
    const container = createElement('div', 'wrong_container');
    const mistakes = createElement('span', 'wrong_mistakes');
    const image = createElement('div', 'wrong_image');

    main.classList.toggle('finish');

    body.appendChild(wrong_block);
    wrong_block.appendChild(container);
    container.appendChild(image);
    container.appendChild(mistakes);

    mistakes.textContent = `Mistakes: ${wrong}`;
    playAudio('./assets/audio/failure.mp3');
    setTimeout(() => {
      body.removeChild(wrong_block);
      main.classList.toggle('finish');
      let checked = (switcher.firstChild.checked = false);
      checkedMode(checked);
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item);
      });
      startBtn.removeEventListener('click', c);
      firstRenderCard();
      mainRenderSubCard();
      clearHeartSection();
    }, 3000);
  }

  if (!wrong) {
    const body = document.querySelector('body');
    const main = document.querySelector('main');

    const rightBlock = createElement('section', 'right-block');
    const container = createElement('div', 'right_container');
    const perfect = createElement('span', 'right_perfect');
    const image = createElement('div', 'right_image');

    main.classList.toggle('finish');

    body.appendChild(rightBlock);
    rightBlock.appendChild(container);
    container.appendChild(image);
    container.appendChild(perfect);

    perfect.textContent = 'Good job';
    playAudio('./assets/audio/success.mp3');
    setTimeout(() => {
      body.removeChild(rightBlock);
      main.classList.toggle('finish');
      let checked = (switcher.firstChild.checked = false);
      checkedMode(checked);
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item);
      });
      startBtn.removeEventListener('click', c);
      clearHeartSection();
      firstRenderCard();
      mainRenderSubCard();
    }, 3000);
  }
}

export function generateDataArray(arr, data) {
  if (arr.length) {
    let add = false;
    for (let item of arr) {
      if (item[0] === data) {
        ++item[1];
        add = true;
      }
    }
    if (!add) {
      arr.push([data, 1]);
    }
  }
  if (!arr.length) {
    arr.push([data, 1]);
  }
}

export function clickCounts() {
  const block = document.querySelector('.subCardsBlock');
  const children = block.children;
  const arrCollection = [...children];
  arrCollection.forEach((item) => {
    item.addEventListener('click', (e) => {
      const card = e.currentTarget;
      const name = card.getAttribute('name');
      if (card.className === 'subCard') {
        const getClick = JSON.parse(localStorage.getItem('click'));
        const click = getClick ? [...getClick] : [];
        if (click.length) {
          let find = false;
          for (let item of click) {
            if (item[0] === name) {
              ++item[1];
              find = true;
            }
          }
          if (!find) {
            click.push([name, 1]);
          }
        }
        if (!click.length) {
          click.push([name, 1]);
        }
        const clickJson = JSON.stringify(click);
        localStorage.setItem('click', clickJson);
      }
    });
  });
}

export function scoreData() {
  const table = document.querySelector('.score_container');
  const row = table.rows;
  const correctData = JSON.parse(localStorage.getItem('correct'));
  const errorData = JSON.parse(localStorage.getItem('error'));
  const clickData = JSON.parse(localStorage.getItem('click'));
  for (let item of row) {
    const firstCell = item.cells[0].innerHTML;
    const click = clickData && clickData.find((item) => item[0] === firstCell);
    const correct = correctData && correctData.find((item) => item[0] === firstCell);
    const error = errorData && errorData.find((item) => item[0] === firstCell);
    if (click) {
      item.cells[2].innerHTML = `${click[1]}`;
    }
    if (correct) {
      item.cells[3].innerHTML = `${correct[1]}`;
      item.cells[5].innerHTML = '100%';
    }
    if (error) {
      item.cells[4].innerHTML = `${error[1]}`;
    }
    if (correct && error && correct[0] === error[0]) {
      const totalAttempts = correct[1] + error[1];
      const accuracy = ((correct[1] / totalAttempts) * 100).toFixed();
      item.cells[5].innerHTML = `${accuracy}%`;
    }
    if (correctData === null && errorData === null && clickData === null) {
      item.cells[2].innerHTML === 'Click' ? (item.cells[2].innerHTML = 'Click') : (item.cells[2].innerHTML = '-');
      item.cells[3].innerHTML === 'Correct' ? (item.cells[3].innerHTML = 'Correct') : (item.cells[3].innerHTML = '-');
      item.cells[4].innerHTML === 'Error' ? (item.cells[4].innerHTML = 'Error') : (item.cells[4].innerHTML = '-');
      item.cells[5].innerHTML === 'Correct score' ? (item.cells[5].innerHTML = 'Correct score') : (item.cells[5].innerHTML = '-');
    }
  }
}

export async function resetScore() {
  const resetBtn = document.querySelector('.reset_btn');
  resetBtn.addEventListener('click', () => {
    localStorage.clear();
    scoreData();
  });
}

export function sortScore() {
  const table = document.querySelector('.score_container');
  const row = table.rows;
  const header = row[0];
  let sortOrder = 'asc';
  header.addEventListener('click', (e) => {
    const target = e.target;
    if (sortOrder === 'asc') {
      sortOrder = 'desc';
    } else {
      sortOrder = 'asc';
    }
    if (target.closest('.english')) {
      sortTable(0, sortOrder);
    }
    if (target.closest('.russian')) {
      sortTable(1, sortOrder);
    }
    if (target.closest('.click')) {
      sortTable(2, sortOrder);
    }
    if (target.closest('.correct')) {
      sortTable(3, sortOrder);
    }
    if (target.closest('.error')) {
      sortTable(4, sortOrder);
    }
    if (target.closest('.percent')) {
      sortTable(5, sortOrder);
    }
  });
}

export function sortTable(columnIndex, sortDirection) {
  let rows, i, x, y, shouldSwitch;
  const table = document.querySelector('.score_container');
  let switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    shouldSwitch = false;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName('td')[columnIndex];
      y = rows[i + 1].getElementsByTagName('td')[columnIndex];

      const xValue = getValueForSorting(x.innerHTML);
      const yValue = getValueForSorting(y.innerHTML);

      if (xValue === '-' && yValue !== '-') {
        shouldSwitch = true;
        break;
      } else if (yValue === '-' && xValue !== '-') {
        continue;
      }

      if (sortDirection === 'asc') {
        if (xValue > yValue) {
          shouldSwitch = true;
          break;
        }
      } else if (sortDirection === 'desc') {
        if (xValue < yValue) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

export function getValueForSorting(value) {
  const numberRegex = /^-?\d+(?:\.\d+)?$/;
  const percentageRegex = /^-?\d+(?:\.\d+)?%$/;

  if (numberRegex.test(value)) {
    return parseFloat(value);
  } else if (percentageRegex.test(value)) {
    return parseFloat(value.replace('%', ''));
  } else {
    return value;
  }
}
