/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/js/category.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./src/js/function.js");
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word */ "./src/js/word.js");




class Card {
  constructor(id, cardData) {
    this.id = id;
    this.cardData = cardData;
  }

  createCardContainer(selector, className) {
    const block = document.querySelector(selector);
    const card = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', className);
    const card__cover = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'card__cover');
    const card__info = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'card__info_block');
    const info__title = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', 'info_block__title');
    const info__indicator = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'info_block__indicator');

    card.setAttribute('id', this.id);
    block.appendChild(card);
    card.appendChild(card__cover);
    card.appendChild(card__info);
    card__info.appendChild(info__title);
    card__info.appendChild(info__indicator);
  }

  renderCardCategory() {
    const category = new _category__WEBPACK_IMPORTED_MODULE_0__.Category(this.cardData, this.id);
    category.renderCategory();
  }

  renderCardWord() {
    const word = new _word__WEBPACK_IMPORTED_MODULE_2__.Word(this.cardData, this.id);
    word.renderWord();
    word.rotateWord();
    word.pronounceWord();
  }
}


/***/ }),

/***/ "./src/js/category.js":
/*!****************************!*\
  !*** ./src/js/category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/function.js");


class Category {
  constructor({ category, cover, words }, id) {
    this.cardData = { category, cover, words };
    this.id = id;
  }

  renderCategory() {
    const card = document.getElementById(this.id);
    const info__quantity = card.querySelector('.info_block__quantity');

    card.setAttribute('name', this.cardData.category);
    card.classList.add('card');

    const card__cover = card.querySelector('.card__cover');
    const card__info = card.querySelector('.card__info_block');
    const info__title = card.querySelector('.info_block__title');

    info__title.classList.add('info_block__title');
    info__title.textContent = this.cardData.category;
    card__cover.style.backgroundImage = `url('${this.cardData.cover}')`;

    if (info__quantity === null) {
      const create_quantity = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'info_block__quantity');
      card__info.appendChild(create_quantity);
      create_quantity.textContent = this.cardData.words.length;
    }
  }
}


/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCards: () => (/* binding */ getCards)
/* harmony export */ });
async function getCards() {
  const response = await fetch('./assets/words-cards.json');
  let cards = await response.json();
  return cards;
}

/***/ }),

/***/ "./src/js/function.js":
/*!****************************!*\
  !*** ./src/js/function.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   active: () => (/* binding */ active),
/* harmony export */   clearHeartSection: () => (/* binding */ clearHeartSection),
/* harmony export */   clickCounts: () => (/* binding */ clickCounts),
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createScore: () => (/* binding */ createScore),
/* harmony export */   finishGame: () => (/* binding */ finishGame),
/* harmony export */   gameStart: () => (/* binding */ gameStart),
/* harmony export */   generateDataArray: () => (/* binding */ generateDataArray),
/* harmony export */   getSound: () => (/* binding */ getSound),
/* harmony export */   getValueForSorting: () => (/* binding */ getValueForSorting),
/* harmony export */   playAudio: () => (/* binding */ playAudio),
/* harmony export */   playGame: () => (/* binding */ playGame),
/* harmony export */   removeHeart: () => (/* binding */ removeHeart),
/* harmony export */   renderCategories: () => (/* binding */ renderCategories),
/* harmony export */   renderWords: () => (/* binding */ renderWords),
/* harmony export */   resetScore: () => (/* binding */ resetScore),
/* harmony export */   scoreData: () => (/* binding */ scoreData),
/* harmony export */   sortScore: () => (/* binding */ sortScore),
/* harmony export */   sortTable: () => (/* binding */ sortTable)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score */ "./src/js/score.js");






function createElement(tag, classNames, attr, value) {
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

function createCard(data, selector, className) {
  data.forEach((item, id) => {
    const card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(id, item);
    card.createCardContainer(selector, className);
  });
}

function renderCategories(data) {
  data.forEach((item, id) => {
    const card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(id, item);
    card.renderCardCategory();
  });
}

function renderWords(data) {
  data.forEach((item, id) => {
    const subCard = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(id, item);
    subCard.renderCardWord();
  });
  gameStart();
}

function createScore(data) {
  const score = new _score__WEBPACK_IMPORTED_MODULE_4__.Score(data);
  score.buildScoreContainer('main');
  score.renderScore();
}

function playAudio(url) {
  const audio = new Audio(url);
  audio.play();
}

function active(category, data) {
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

function gameStart() {
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

function getSound(data) {
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

async function playGame(id) {
  const subCardsBlock = document.querySelector('.subCardsBlock');
  const repeat_btn = document.querySelector('.repeat_btn');
  const heart_section = document.querySelector('.heart_section');
  const navlist = document.querySelector('.nav__list');
  heart_section.classList.add('play_mode');
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getCards)();
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

function clearHeartSection() {
  const section = document.querySelector('.heart_section');
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}

function removeHeart(count) {
  const heart = document.querySelectorAll('.heart');
  const max_count = 8;
  if (heart.length >= max_count) {
    heart[count - max_count].style.display = 'none';
  }
}

function finishGame(correctArr, errorArr) {
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
      (0,_header__WEBPACK_IMPORTED_MODULE_2__.checkedMode)(checked);
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item);
      });
      startBtn.removeEventListener('click', c);
      (0,_main__WEBPACK_IMPORTED_MODULE_3__.firstRenderCard)();
      (0,_main__WEBPACK_IMPORTED_MODULE_3__.mainRenderSubCard)();
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
      (0,_header__WEBPACK_IMPORTED_MODULE_2__.checkedMode)(checked);
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item);
      });
      startBtn.removeEventListener('click', c);
      clearHeartSection();
      (0,_main__WEBPACK_IMPORTED_MODULE_3__.firstRenderCard)();
      (0,_main__WEBPACK_IMPORTED_MODULE_3__.mainRenderSubCard)();
    }, 3000);
  }
}

function generateDataArray(arr, data) {
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

function clickCounts() {
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

function scoreData() {
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

async function resetScore() {
  const resetBtn = document.querySelector('.reset_btn');
  resetBtn.addEventListener('click', () => {
    localStorage.clear();
    scoreData();
  });
}

function sortScore() {
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

function sortTable(columnIndex, sortDirection) {
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

function getValueForSorting(value) {
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


/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHeaderStructure: () => (/* binding */ buildHeaderStructure),
/* harmony export */   checkedMode: () => (/* binding */ checkedMode),
/* harmony export */   setNavMenu: () => (/* binding */ setNavMenu),
/* harmony export */   setSwitcher: () => (/* binding */ setSwitcher)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./src/js/function.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/js/main.js");




function buildHeaderStructure() {
  const body = document.body;
  const header = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('header', 'header');
  const container = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'container');
  const menu = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'menu');
  const burger = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'menu__burger');
  const line = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', 'line');
  const nav = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('nav', 'menu__nav');
  const nav_list = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', 'nav__list');
  const first_main_item = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', ['nav_list__item', '_active'], 'name', 'Main Page');
  const second_score_item = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', 'nav_list__item', 'name', 'Score');
  const first_link = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', ['nav_list__link', '_active']);
  const second_link = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', 'nav_list__link');
  const switcher = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['switcher', 'form-check', 'form-switch']);
  const input = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('input', ['input', 'form-check-input']);
  const label = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('label', ['label', 'form-check-label']);
  const title = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('h1', 'title');
  const shadow = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'shadow');

  title.textContent = 'Train & Play';
  label.textContent = 'Train';
  first_link.textContent = 'Main Page';
  second_link.textContent = 'Score';

  body.appendChild(header);
  body.appendChild(shadow);

  header.appendChild(container);
  header.appendChild(title);

  container.appendChild(menu);
  container.appendChild(switcher);

  menu.appendChild(nav);
  menu.appendChild(burger);

  switcher.appendChild(input);
  switcher.appendChild(label);

  nav.appendChild(nav_list);

  nav_list.appendChild(first_main_item);
  nav_list.appendChild(second_score_item);
  first_main_item.appendChild(first_link);
  second_score_item.appendChild(second_link);
  burger.appendChild(line);

  setSwitcher();
  setNavMenu();
}

function setSwitcher() {
  const switcher = document.querySelector('.switcher');
  const input = document.querySelector('.input');
  const label = document.querySelector('.label');

  function setAttributes(el, options) {
    Object.keys(options).forEach((attr) => {
      el.setAttribute(attr, options[attr]);
    });
  }

  setAttributes(input, {
    type: 'checkbox',
    id: 'flexSwitchCheckDefault',
  });

  label.setAttribute('for', 'flexSwitchCheckDefault');

  switcher.addEventListener('click', () => {
    checkedMode(input.checked);
  });
}

function checkedMode(checked) {
  const nav = document.querySelector('.menu__nav');
  const line = document.querySelector('.line');
  const burger = document.querySelector('.menu__burger');
  const label = document.querySelector('.label');

  const subCard = document.querySelectorAll('.subCard');
  const cardIndicator = document.querySelectorAll('.info_block__indicator');
  const cardTitle = document.querySelectorAll('.info_block__subtitle');
  const cardRotate = document.querySelectorAll('.rotate');

  const subCardBlock = document.querySelector('.subCardsBlock');
  const start_btn = document.querySelector('.start_btn');
  const repeat_btn = document.querySelector('.repeat_btn');
  const heart_section = document.querySelector('.heart_section');

  const subCardBlockCount = subCardBlock.children.length;

  if (!checked) {
    label.textContent = 'Train';
    cardIndicator.forEach((item) => item.classList.remove('play_mode'));
    cardTitle.forEach((item) => item.classList.remove('play_mode'));
    cardRotate.forEach((item) => item.classList.remove('play_mode'));
    subCard.forEach((item) => item.classList.remove('play_mode'));
    nav.classList.remove('play_mode');
    line.classList.remove('play_mode');
    burger.classList.remove('play_mode');
    start_btn.classList.remove('play_mode');
    repeat_btn.classList.remove('play_mode');
    heart_section.classList.remove('play_mode');
  }
  if (checked) {
    label.textContent = 'Play';
    subCard.forEach((item) => item.classList.add('play_mode'));
    cardIndicator.forEach((item) => item.classList.add('play_mode'));
    cardTitle.forEach((item) => item.classList.add('play_mode'));
    cardRotate.forEach((item) => item.classList.add('play_mode'));
    nav.classList.add('play_mode');
    line.classList.add('play_mode');
    burger.classList.add('play_mode');
    if (subCardBlockCount > 0) {
      start_btn.classList.add('play_mode');
    }
  }
}

async function setNavMenu() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)();
  const nav_list = document.querySelector('.nav__list');
  const burger = document.querySelector('.menu__burger');
  const nav = document.querySelector('.menu__nav');
  const body = document.querySelector('body');
  const shadow = document.querySelector('.shadow');

  cards.forEach((card, i) => {
    const { category } = card;
    const nav_list__item = document.createElement('li');
    const link = document.createElement('a');

    nav_list.appendChild(nav_list__item);
    nav_list__item.appendChild(link);

    nav_list__item.classList.add('nav_list__item');
    link.classList.add('nav_list__link');

    nav_list__item.setAttribute('name', `${category}`);
    nav_list__item.setAttribute('data-id', i);
    link.textContent = `${category}`;
  });

  nav_list.addEventListener('click', (e) => {
    const section = document.querySelector('.section');
    const table = document.querySelector('.score_container');
    const resetBtn = document.querySelector('.reset_btn');
    const name = e.target.parentElement.getAttribute('name');
    const id = e.target.parentElement.getAttribute('data-id');
    const className = e.target.parentElement.classList.contains('nav_list__item');
    const cardBlock = document.querySelector('.cardsBlock');
    const subCardBlock = document.querySelector('.subCardsBlock');
    const switcher = document.querySelector('.switcher');
    const subCardsCatergory = cards[id]?.category;
    if (name === subCardsCatergory && className) {
      const card = cards.find((item) => item.category === name);
      const subCards = card.words;
      const isSubBlockChildren = subCardBlock.children;
      const isBlockChildren = cardBlock.children;
      const arrBlockCollection = [...isBlockChildren];
      const arrSubBlockCollection = [...isSubBlockChildren];
      arrBlockCollection.forEach((item) => {
        cardBlock.removeChild(item);
      });
      if (isSubBlockChildren.length > 0) {
        arrSubBlockCollection.forEach((item) => {
          subCardBlock.removeChild(item);
        });
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(subCards, '.subCardsBlock', 'subCard');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderWords)(subCards);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)();
      }
      if (isSubBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(subCards, '.subCardsBlock', 'subCard');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderWords)(subCards);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)();
      }
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      resetBtn.classList.remove('_active');
      table.classList.remove('_active');
      section.classList.add('_active');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item');
    }
    if (name === 'Main Page' && className) {
      const isSubBlockChildren = subCardBlock.children;
      const isBlockChildren = cardBlock.children;
      const arrBlockCollection = [...isBlockChildren];
      const arrSubBlockCollection = [...isSubBlockChildren];
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item);
      });
      if (isBlockChildren.length > 0) {
        arrBlockCollection.forEach((item) => {
          cardBlock.removeChild(item);
        });
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards, '.cardsBlock', 'card');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderCategories)(cards);
      }
      if (isBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards, '.cardsBlock', 'card');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderCategories)(cards);
      }
      (0,_main__WEBPACK_IMPORTED_MODULE_2__.mainRenderSubCard)();
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      resetBtn.classList.remove('_active');
      table.classList.remove('_active');
      section.classList.add('_active');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item');
    }
    if (name === 'Score' && className) {
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      section.classList.remove('_active');
      resetBtn.classList.add('_active');
      table.classList.add('_active');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.scoreData)();
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.resetScore)();
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.sortScore)();
    }
  });

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('_active');
    nav.classList.toggle('_active');
    body.classList.toggle('_active');
    shadow.classList.toggle('_active');
  });
}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMainStructure: () => (/* binding */ buildMainStructure),
/* harmony export */   buildScore: () => (/* binding */ buildScore),
/* harmony export */   firstRenderCard: () => (/* binding */ firstRenderCard),
/* harmony export */   mainRenderSubCard: () => (/* binding */ mainRenderSubCard)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./src/js/function.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/js/header.js");




function buildMainStructure() {
  const body = document.body;
  const main = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('main');
  const section = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', ['section', '_active']);
  const categoryCard = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'cardsBlock');
  const subCard = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'subCardsBlock');
  const start_btn = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', ['start_btn', 'btn', 'btn-secondary']);
  const repeat_btn = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', ['repeat_btn', 'btn', 'btn-primary']);
  const heart_section = (0,_function__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'heart_section');
  start_btn.textContent = 'START';
  repeat_btn.textContent = 'REPEAT';

  body.appendChild(main);
  main.appendChild(section);
  section.appendChild(categoryCard);
  section.appendChild(subCard);
  section.appendChild(start_btn);
  section.appendChild(repeat_btn);
  section.appendChild(heart_section);
}

async function buildScore() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)();
  (0,_function__WEBPACK_IMPORTED_MODULE_1__.createScore)(cards);
}

async function firstRenderCard() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)();
  (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards, '.cardsBlock', 'card');
  (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderCategories)(cards);
}

async function mainRenderSubCard() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)();
  const block = document.querySelector('.cardsBlock');
  const input = document.querySelector('.input');
  const switcher = document.querySelector('.switcher');
  const children = block.children;
  const arrCollection = [...children];
  arrCollection.forEach((item) => {
    item.addEventListener('click', (e) => {
      const card = e.currentTarget;
      const id = card.getAttribute('id');
      const name = card.getAttribute('name');
      const element = cards.find((item) => item.category === name);
      if (cards.find((item) => item.category === name)) {
        arrCollection.forEach((item) => {
          block.removeChild(item);
        });
        let checked = (switcher.firstChild.checked = false);
        (0,_header__WEBPACK_IMPORTED_MODULE_2__.checkedMode)(checked);
        const renderElement = element.words;
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards, '.subCardsBlock', 'subCard');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderWords)(renderElement);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)();
      }
    });
  });
}


/***/ }),

/***/ "./src/js/score.js":
/*!*************************!*\
  !*** ./src/js/score.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Score: () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/function.js");


class Score {
  constructor(data) {
    this.data = data;
  }

  buildScoreContainer(selector) {
    const block = document.querySelector(selector);
    const scoreContainer = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('table', 'score_container');
    const scoreHeader = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('tr', 'score_header');
    const resetBtn = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', ['reset_btn', 'btn', 'btn-danger'], 'type', 'button');
    const dataCellEngWord = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td', 'english');
    const dataCellRusWord = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td', 'russian');
    const dataCellClickWord = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td', 'click');
    const dataCellCorrect = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td', 'correct');
    const dataCellError = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td', 'error');
    const dataCorrectPercent = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td', 'percent');

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
    const strInfo = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('tr');
    const dataCellEngWord = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td');
    const dataCellRusWord = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td');
    const dataCellCorrect = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td');
    const dataCellClickWord = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td');
    const dataCellError = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td');
    const dataCorrectPercent = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('td');

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


/***/ }),

/***/ "./src/js/word.js":
/*!************************!*\
  !*** ./src/js/word.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Word: () => (/* binding */ Word)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/function.js");


class Word {
  constructor({ word, translation, image, audioSrc }, id) {
    this.cardData = { word, translation, image, audioSrc };
    this.id = id;
    this.card;
    this.card__cover;
    this.card__info;
    this.info__title;
    this.rotate_img;
  }

  renderWord() {
    this.card = document.getElementById(this.id);

    this.card.setAttribute('name', this.cardData.word);
    this.card.classList.add('subCard');

    this.card__cover = this.card.querySelector('.card__cover');
    this.card__info = this.card.querySelector('.card__info_block');
    this.info__title = this.card.querySelector('.info_block__title');
    this.rotate_img = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'rotate', 'src', './assets/img/rotate.svg');

    this.info__title.classList.add('info_block__subtitle');
    this.info__title.textContent = this.cardData.word;
    this.card__cover.style.backgroundImage = `url('${this.cardData.image}')`;
    this.card__info.appendChild(this.rotate_img);
  }

  rotateWord() {
    const rotate = () => {
      this.info__title.textContent = this.cardData.translation;
      this.card.classList.add('_rotate');
      this.card.addEventListener('mouseleave', returns);
      this.rotate_img.removeEventListener('click', rotate);
    };

    const returns = () => {
      this.info__title.textContent = this.cardData.word;
      this.card.classList.remove('_rotate');
      this.card.removeEventListener('mouseleave', returns);
      this.rotate_img.addEventListener('click', rotate);
    };

    this.rotate_img.addEventListener('click', rotate);
  }

  pronounceWord() {
    this.card.addEventListener('click', (e) => {
      if (e.currentTarget.className === 'subCard') {
        (0,_function__WEBPACK_IMPORTED_MODULE_0__.playAudio)(this.cardData.audioSrc);
      }
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header.js */ "./src/js/header.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");




(0,_js_header_js__WEBPACK_IMPORTED_MODULE_1__.buildHeaderStructure)()
;(0,_js_main_js__WEBPACK_IMPORTED_MODULE_2__.buildMainStructure)()
;(0,_js_main_js__WEBPACK_IMPORTED_MODULE_2__.buildScore)()
;(0,_js_main_js__WEBPACK_IMPORTED_MODULE_2__.firstRenderCard)()
;(0,_js_main_js__WEBPACK_IMPORTED_MODULE_2__.mainRenderSubCard)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDSztBQUNiOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQWE7QUFDOUIsd0JBQXdCLHdEQUFhO0FBQ3JDLHVCQUF1Qix3REFBYTtBQUNwQyx3QkFBd0Isd0RBQWE7QUFDckMsNEJBQTRCLHdEQUFhOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrQ0FBUTtBQUNqQztBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzJDOztBQUVwQztBQUNQLGdCQUFnQix3QkFBd0I7QUFDeEMsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Qsb0JBQW9COztBQUVwRTtBQUNBLDhCQUE4Qix3REFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKOEI7QUFDSTtBQUNLO0FBQ3FCO0FBQzVCOztBQUV6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxxQkFBcUIsdUNBQUk7QUFDekI7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLHFCQUFxQix1Q0FBSTtBQUN6QjtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0IseUNBQUs7QUFDekI7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFXO0FBQ2pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNLHNEQUFlO0FBQ3JCLE1BQU0sd0RBQWlCO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFXO0FBQ2pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sc0RBQWU7QUFDckIsTUFBTSx3REFBaUI7QUFDdkIsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IscUJBQXFCO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xla0M7QUFXZDtBQUN1Qjs7QUFFcEM7QUFDUDtBQUNBLGlCQUFpQix3REFBYTtBQUM5QixvQkFBb0Isd0RBQWE7QUFDakMsZUFBZSx3REFBYTtBQUM1QixpQkFBaUIsd0RBQWE7QUFDOUIsZUFBZSx3REFBYTtBQUM1QixjQUFjLHdEQUFhO0FBQzNCLG1CQUFtQix3REFBYTtBQUNoQywwQkFBMEIsd0RBQWE7QUFDdkMsNEJBQTRCLHdEQUFhO0FBQ3pDLHFCQUFxQix3REFBYTtBQUNsQyxzQkFBc0Isd0RBQWE7QUFDbkMsbUJBQW1CLHdEQUFhO0FBQ2hDLGdCQUFnQix3REFBYTtBQUM3QixnQkFBZ0Isd0RBQWE7QUFDN0IsZ0JBQWdCLHdEQUFhO0FBQzdCLGlCQUFpQix3REFBYTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQkFBc0IsK0NBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBLDBCQUEwQixTQUFTO0FBQ25DLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEscURBQVU7QUFDbEIsUUFBUSxzREFBVztBQUNuQixRQUFRLHNEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQixRQUFRLHNEQUFXO0FBQ25CLFFBQVEsc0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQixRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVU7QUFDbEIsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQSxNQUFNLHdEQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFNO0FBQ1osTUFBTSxvREFBUztBQUNmLE1BQU0scURBQVU7QUFDaEIsTUFBTSxvREFBUztBQUNmO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUWtDO0FBQ3NGO0FBQ2pGOztBQUVoQztBQUNQO0FBQ0EsZUFBZSx3REFBYTtBQUM1QixrQkFBa0Isd0RBQWE7QUFDL0IsdUJBQXVCLHdEQUFhO0FBQ3BDLGtCQUFrQix3REFBYTtBQUMvQixvQkFBb0Isd0RBQWE7QUFDakMscUJBQXFCLHdEQUFhO0FBQ2xDLHdCQUF3Qix3REFBYTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQkFBc0IsK0NBQVE7QUFDOUIsRUFBRSxzREFBVztBQUNiOztBQUVPO0FBQ1Asc0JBQXNCLCtDQUFRO0FBQzlCLEVBQUUscURBQVU7QUFDWixFQUFFLDJEQUFnQjtBQUNsQjs7QUFFTztBQUNQLHNCQUFzQiwrQ0FBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSxvREFBVztBQUNuQjtBQUNBLFFBQVEsaURBQU07QUFDZCxRQUFRLHFEQUFVO0FBQ2xCLFFBQVEsc0RBQVc7QUFDbkIsUUFBUSxzREFBVztBQUNuQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRDJDOztBQUVwQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFhO0FBQ3hDLHdCQUF3Qix3REFBYTtBQUNyQyxxQkFBcUIsd0RBQWE7QUFDbEMsNEJBQTRCLHdEQUFhO0FBQ3pDLDRCQUE0Qix3REFBYTtBQUN6Qyw4QkFBOEIsd0RBQWE7QUFDM0MsNEJBQTRCLHdEQUFhO0FBQ3pDLDBCQUEwQix3REFBYTtBQUN2QywrQkFBK0Isd0RBQWE7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkMsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQWE7QUFDakMsNEJBQTRCLHdEQUFhO0FBQ3pDLDRCQUE0Qix3REFBYTtBQUN6Qyw0QkFBNEIsd0RBQWE7QUFDekMsOEJBQThCLHdEQUFhO0FBQzNDLDBCQUEwQix3REFBYTtBQUN2QywrQkFBK0Isd0RBQWE7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlFc0Q7O0FBRS9DO0FBQ1AsZ0JBQWdCLG9DQUFvQztBQUNwRCxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3REFBYTs7QUFFbkM7QUFDQTtBQUNBLHFEQUFxRCxvQkFBb0I7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFTO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2dDO0FBQzRDOztBQUVqRyxtRUFBb0I7QUFDcEIsZ0VBQWtCO0FBQ2xCLHdEQUFVO0FBQ1YsNkRBQWU7QUFDZiwrREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2luZGV4LnNjc3M/OTc3NCIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9zY29yZS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL3dvcmQuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IFdvcmQgfSBmcm9tICcuL3dvcmQnO1xuXG5leHBvcnQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGlkLCBjYXJkRGF0YSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmNhcmREYXRhID0gY2FyZERhdGE7XG4gIH1cblxuICBjcmVhdGVDYXJkQ29udGFpbmVyKHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IGNhcmRfX2NvdmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmRfX2NvdmVyJyk7XG4gICAgY29uc3QgY2FyZF9faW5mbyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkX19pbmZvX2Jsb2NrJyk7XG4gICAgY29uc3QgaW5mb19fdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdpbmZvX2Jsb2NrX190aXRsZScpO1xuICAgIGNvbnN0IGluZm9fX2luZGljYXRvciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpbmZvX2Jsb2NrX19pbmRpY2F0b3InKTtcblxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZF9fY292ZXIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZF9faW5mbyk7XG4gICAgY2FyZF9faW5mby5hcHBlbmRDaGlsZChpbmZvX190aXRsZSk7XG4gICAgY2FyZF9faW5mby5hcHBlbmRDaGlsZChpbmZvX19pbmRpY2F0b3IpO1xuICB9XG5cbiAgcmVuZGVyQ2FyZENhdGVnb3J5KCkge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gbmV3IENhdGVnb3J5KHRoaXMuY2FyZERhdGEsIHRoaXMuaWQpO1xuICAgIGNhdGVnb3J5LnJlbmRlckNhdGVnb3J5KCk7XG4gIH1cblxuICByZW5kZXJDYXJkV29yZCgpIHtcbiAgICBjb25zdCB3b3JkID0gbmV3IFdvcmQodGhpcy5jYXJkRGF0YSwgdGhpcy5pZCk7XG4gICAgd29yZC5yZW5kZXJXb3JkKCk7XG4gICAgd29yZC5yb3RhdGVXb3JkKCk7XG4gICAgd29yZC5wcm9ub3VuY2VXb3JkKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnkge1xuICBjb25zdHJ1Y3Rvcih7IGNhdGVnb3J5LCBjb3Zlciwgd29yZHMgfSwgaWQpIHtcbiAgICB0aGlzLmNhcmREYXRhID0geyBjYXRlZ29yeSwgY292ZXIsIHdvcmRzIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgcmVuZGVyQ2F0ZWdvcnkoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGNvbnN0IGluZm9fX3F1YW50aXR5ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuaW5mb19ibG9ja19fcXVhbnRpdHknKTtcblxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5jYXJkRGF0YS5jYXRlZ29yeSk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkX19jb3ZlciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2NvdmVyJyk7XG4gICAgY29uc3QgY2FyZF9faW5mbyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2luZm9fYmxvY2snKTtcbiAgICBjb25zdCBpbmZvX190aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmluZm9fYmxvY2tfX3RpdGxlJyk7XG5cbiAgICBpbmZvX190aXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvX2Jsb2NrX190aXRsZScpO1xuICAgIGluZm9fX3RpdGxlLnRleHRDb250ZW50ID0gdGhpcy5jYXJkRGF0YS5jYXRlZ29yeTtcbiAgICBjYXJkX19jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3RoaXMuY2FyZERhdGEuY292ZXJ9JylgO1xuXG4gICAgaWYgKGluZm9fX3F1YW50aXR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjcmVhdGVfcXVhbnRpdHkgPSBjcmVhdGVFbGVtZW50KCdwJywgJ2luZm9fYmxvY2tfX3F1YW50aXR5Jyk7XG4gICAgICBjYXJkX19pbmZvLmFwcGVuZENoaWxkKGNyZWF0ZV9xdWFudGl0eSk7XG4gICAgICBjcmVhdGVfcXVhbnRpdHkudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLndvcmRzLmxlbmd0aDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJkcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi9hc3NldHMvd29yZHMtY2FyZHMuanNvbicpO1xuICBsZXQgY2FyZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjYXJkcztcbn0iLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7IGdldENhcmRzIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNoZWNrZWRNb2RlIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgZmlyc3RSZW5kZXJDYXJkLCBtYWluUmVuZGVyU3ViQ2FyZCB9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQgeyBTY29yZSB9IGZyb20gJy4vc2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZXMsIGF0dHIsIHZhbHVlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJykge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcbiAgfVxuICBhdHRyICYmIHZhbHVlICYmIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsIHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpZCwgaXRlbSk7XG4gICAgY2FyZC5jcmVhdGVDYXJkQ29udGFpbmVyKHNlbGVjdG9yLCBjbGFzc05hbWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXMoZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGl0ZW0sIGlkKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGlkLCBpdGVtKTtcbiAgICBjYXJkLnJlbmRlckNhcmRDYXRlZ29yeSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldvcmRzKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgIGNvbnN0IHN1YkNhcmQgPSBuZXcgQ2FyZChpZCwgaXRlbSk7XG4gICAgc3ViQ2FyZC5yZW5kZXJDYXJkV29yZCgpO1xuICB9KTtcbiAgZ2FtZVN0YXJ0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY29yZShkYXRhKSB7XG4gIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKGRhdGEpO1xuICBzY29yZS5idWlsZFNjb3JlQ29udGFpbmVyKCdtYWluJyk7XG4gIHNjb3JlLnJlbmRlclNjb3JlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5QXVkaW8odXJsKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHVybCk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZShjYXRlZ29yeSwgZGF0YSkge1xuICBjb25zdCBnZXRDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhKTtcbiAgZ2V0Q29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgY29uc3QgbGluayA9IGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKG5hbWUgPT09IGNhdGVnb3J5KSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vRm9yIEdhbWVcblxuZnVuY3Rpb24gYyhlKSB7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0X2J0bicpO1xuICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuICBjb25zdCBjaGlsZHJlbiA9IG5hdmxpc3QuY2hpbGRyZW47XG4gIGNvbnN0IGFyckVsZW1lbnQgPSBbLi4uY2hpbGRyZW5dO1xuICBjb25zdCBlbGVtZW50ID0gYXJyRWxlbWVudC5maW5kKChpdGVtKSA9PiBpdGVtLmNsYXNzTmFtZSA9PT0gJ25hdl9saXN0X19pdGVtIF9hY3RpdmUnKTtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBwbGF5R2FtZShpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gIG5hdmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubmF2X2xpc3RfX2xpbmsnKSkge1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIHN0YXJ0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdW5kKGRhdGEpIHtcbiAgbGV0IGFyciA9IGRhdGE7XG4gIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgbGV0IG9ialdvcmQgPSBhcnIuc3BsaWNlKHJhbmRvbU51bWJlciwgMSk7XG4gIGxldCBhdWRpbyA9IG9ialdvcmRbMF0uYXVkaW9TcmM7XG4gIHBsYXlBdWRpbyhhdWRpbyk7XG4gIHJldHVybiBvYmpXb3JkWzBdO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FyZE9wZXJhdGlvbihlLCBoZWFydF9zZWN0aW9uLCBkYXRhV29yZCwgYXJyRGF0YSwgY29ycmVjdCwgZXJyb3IsIGNvdW50KSB7XG4gIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuc3ViQ2FyZCcpKSB7XG4gICAgbGV0IHRvdGFsaXplciA9IGNvdW50O1xuICAgIGxldCBvYmogPSBkYXRhV29yZDtcbiAgICBsZXQgaGVhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFydC5jbGFzc0xpc3QuYWRkKCdoZWFydCcpO1xuICAgIGxldCBzdWJDYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgc3ViQ2FyZE5hbWUgPSBzdWJDYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCB3b3JkID0gb2JqLndvcmQ7XG4gICAgaWYgKHN1YkNhcmROYW1lID09PSB3b3JkKSB7XG4gICAgICArK3RvdGFsaXplcjtcbiAgICAgIHN1YkNhcmQuY2xhc3NMaXN0LmFkZCgncGFzc2VkJyk7XG4gICAgICBoZWFydC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICAgICAgaGVhcnRfc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL2NvcnJlY3QubXAzJyk7XG4gICAgICBnZW5lcmF0ZURhdGFBcnJheShjb3JyZWN0LCB3b3JkKTtcbiAgICAgIHJlbW92ZUhlYXJ0KHRvdGFsaXplcik7XG4gICAgICBpZiAoYXJyRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZGF0YVdvcmQgPSBnZXRTb3VuZChhcnJEYXRhKTtcbiAgICAgICAgcmV0dXJuIFtkYXRhV29yZCwgdG90YWxpemVyXTtcbiAgICAgIH1cbiAgICAgIGlmICghYXJyRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZmluaXNoR2FtZShjb3JyZWN0LCBlcnJvcik7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICsrdG90YWxpemVyO1xuICAgICAgaGVhcnQuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbiAgICAgIGhlYXJ0X3NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhcnQpO1xuICAgICAgcGxheUF1ZGlvKCcuL2Fzc2V0cy9hdWRpby9lcnJvci5tcDMnKTtcbiAgICAgIGdlbmVyYXRlRGF0YUFycmF5KGVycm9yLCB3b3JkKTtcbiAgICAgIHJlbW92ZUhlYXJ0KHRvdGFsaXplcik7XG4gICAgICByZXR1cm4gW2RhdGFXb3JkLCB0b3RhbGl6ZXJdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXBlYXRXb3JkU291bmQoYXJyRGF0YSwgZGF0YVdvcmQpIHtcbiAgY29uc29sZS5sb2coZGF0YVdvcmQpO1xuICBpZiAoYXJyRGF0YS5sZW5ndGggPj0gMCkge1xuICAgIGNvbnN0IHNvdW5kID0gZGF0YVdvcmQuYXVkaW9TcmM7XG4gICAgcGxheUF1ZGlvKHNvdW5kKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGxheUdhbWUoaWQpIHtcbiAgY29uc3Qgc3ViQ2FyZHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJDYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IHJlcGVhdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0X2J0bicpO1xuICBjb25zdCBoZWFydF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYXJ0X3NlY3Rpb24nKTtcbiAgY29uc3QgbmF2bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpc3QnKTtcbiAgaGVhcnRfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNvbnN0IGFycmF5V29yZCA9IGRhdGFbaWRdLndvcmRzO1xuICBjb25zdCBhcnJEYXRhID0gYXJyYXlXb3JkO1xuICBsZXQgZGF0YVdvcmQgPSBnZXRTb3VuZChhcnJEYXRhKTtcbiAgY29uc29sZS5sb2coZGF0YVdvcmQpO1xuICBjb25zdCBnZXRDb3JyZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29ycmVjdCcpKTtcbiAgY29uc3QgZ2V0RXJyb3IgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlcnJvcicpKTtcbiAgY29uc3QgY29ycmVjdCA9IGdldENvcnJlY3QgPyBbLi4uZ2V0Q29ycmVjdF0gOiBbXTtcbiAgY29uc3QgZXJyb3IgPSBnZXRFcnJvciA/IFsuLi5nZXRFcnJvcl0gOiBbXTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBjb25zdCBldmVudEhhbmRsZXJGb3JTb3VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXBlYXRXb3JkU291bmQoYXJyRGF0YSwgZGF0YVdvcmQpO1xuICB9O1xuXG4gIGNvbnN0IGV2ZW50SGFuZGxlckZvckNhcmQgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBwcm9jZXNzQ2FyZE9wZXJhdGlvbihlLCBoZWFydF9zZWN0aW9uLCBkYXRhV29yZCwgYXJyRGF0YSwgY29ycmVjdCwgZXJyb3IsIGNvdW50KTtcbiAgICBpZiAobmV3RGF0YSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBbZGF0YVdvcmROZXcsIHRvdGFsaXplcl0gPSBuZXdEYXRhO1xuICAgICAgZGF0YVdvcmQgPSBkYXRhV29yZE5ldztcbiAgICAgIGNvdW50ID0gdG90YWxpemVyO1xuICAgIH1cbiAgICBpZiAobmV3RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdWJDYXJkc0Jsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyRm9yQ2FyZCk7XG4gICAgICByZXBlYXRfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyRm9yU291bmQpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH07XG5cbiAgc3ViQ2FyZHNCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50SGFuZGxlckZvckNhcmQpO1xuICByZXBlYXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyRm9yU291bmQpO1xuICBuYXZsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLm5hdl9saXN0X19saW5rJykpIHtcbiAgICAgIGNsZWFySGVhcnRTZWN0aW9uKCk7XG4gICAgICByZXBlYXRfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyRm9yU291bmQpO1xuICAgICAgc3ViQ2FyZHNCbG9jay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50SGFuZGxlckZvckNhcmQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckhlYXJ0U2VjdGlvbigpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG4gIHdoaWxlIChzZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICBzZWN0aW9uLnJlbW92ZUNoaWxkKHNlY3Rpb24uZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhlYXJ0KGNvdW50KSB7XG4gIGNvbnN0IGhlYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYXJ0Jyk7XG4gIGNvbnN0IG1heF9jb3VudCA9IDg7XG4gIGlmIChoZWFydC5sZW5ndGggPj0gbWF4X2NvdW50KSB7XG4gICAgaGVhcnRbY291bnQgLSBtYXhfY291bnRdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaEdhbWUoY29ycmVjdEFyciwgZXJyb3JBcnIpIHtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRfYnRuJyk7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpO1xuICBjb25zdCBzdWJDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViQ2FyZHNCbG9jaycpO1xuICBjb25zdCBpc1N1YkJsb2NrQ2hpbGRyZW4gPSBzdWJDYXJkQmxvY2suY2hpbGRyZW47XG4gIGNvbnN0IGFyclN1YkJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc1N1YkJsb2NrQ2hpbGRyZW5dO1xuICBjb25zdCBjaGlsZHJlbiA9IGhlYXJ0X3NlY3Rpb24uY2hpbGRyZW47XG4gIGNvbnN0IGFyckNvbGxlY3Rpb24gPSBbLi4uY2hpbGRyZW5dO1xuICBjb25zdCBjb3VudHMgPSBhcnJDb2xsZWN0aW9uLnJlZHVjZSgocHJldmlvdXNseSwgY3VycmVudCkgPT4ge1xuICAgIHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdID0gKHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdIHx8IDApICsgMTtcbiAgICByZXR1cm4gcHJldmlvdXNseTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IHdyb25nID0gY291bnRzWydoZWFydCB3cm9uZyddO1xuICBjb25zdCByaWdodCA9IGNvdW50c1snaGVhcnQgcmlnaHQnXTtcblxuICBjb25zdCBjb3JyZWN0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGNvcnJlY3RBcnIpO1xuICBjb25zdCBlcnJvckpzb24gPSBKU09OLnN0cmluZ2lmeShlcnJvckFycik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JyZWN0JywgY29ycmVjdEpzb24pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXJyb3InLCBlcnJvckpzb24pO1xuXG4gIGlmICh3cm9uZykge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGNvbnN0IHdyb25nX2Jsb2NrID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICd3cm9uZy1ibG9jaycpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cm9uZ19jb250YWluZXInKTtcbiAgICBjb25zdCBtaXN0YWtlcyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnd3JvbmdfbWlzdGFrZXMnKTtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cm9uZ19pbWFnZScpO1xuXG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JvbmdfYmxvY2spO1xuICAgIHdyb25nX2Jsb2NrLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWlzdGFrZXMpO1xuXG4gICAgbWlzdGFrZXMudGV4dENvbnRlbnQgPSBgTWlzdGFrZXM6ICR7d3Jvbmd9YDtcbiAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL2ZhaWx1cmUubXAzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHdyb25nX2Jsb2NrKTtcbiAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoJyk7XG4gICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgIGFyclN1YkJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN1YkNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgc3RhcnRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjKTtcbiAgICAgIGZpcnN0UmVuZGVyQ2FyZCgpO1xuICAgICAgbWFpblJlbmRlclN1YkNhcmQoKTtcbiAgICAgIGNsZWFySGVhcnRTZWN0aW9uKCk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBpZiAoIXdyb25nKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3QgcmlnaHRCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAncmlnaHQtYmxvY2snKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncmlnaHRfY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGVyZmVjdCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAncmlnaHRfcGVyZmVjdCcpO1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3JpZ2h0X2ltYWdlJyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbmlzaCcpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChyaWdodEJsb2NrKTtcbiAgICByaWdodEJsb2NrLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGVyZmVjdCk7XG5cbiAgICBwZXJmZWN0LnRleHRDb250ZW50ID0gJ0dvb2Qgam9iJztcbiAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL3N1Y2Nlc3MubXAzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHJpZ2h0QmxvY2spO1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcbiAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgc3ViQ2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBzdGFydEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGMpO1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIGZpcnN0UmVuZGVyQ2FyZCgpO1xuICAgICAgbWFpblJlbmRlclN1YkNhcmQoKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVEYXRhQXJyYXkoYXJyLCBkYXRhKSB7XG4gIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgbGV0IGFkZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBpZiAoaXRlbVswXSA9PT0gZGF0YSkge1xuICAgICAgICArK2l0ZW1bMV07XG4gICAgICAgIGFkZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghYWRkKSB7XG4gICAgICBhcnIucHVzaChbZGF0YSwgMV0pO1xuICAgIH1cbiAgfVxuICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICBhcnIucHVzaChbZGF0YSwgMV0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0NvdW50cygpIHtcbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViQ2FyZHNCbG9jaycpO1xuICBjb25zdCBjaGlsZHJlbiA9IGJsb2NrLmNoaWxkcmVuO1xuICBjb25zdCBhcnJDb2xsZWN0aW9uID0gWy4uLmNoaWxkcmVuXTtcbiAgYXJyQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgbmFtZSA9IGNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBpZiAoY2FyZC5jbGFzc05hbWUgPT09ICdzdWJDYXJkJykge1xuICAgICAgICBjb25zdCBnZXRDbGljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsaWNrJykpO1xuICAgICAgICBjb25zdCBjbGljayA9IGdldENsaWNrID8gWy4uLmdldENsaWNrXSA6IFtdO1xuICAgICAgICBpZiAoY2xpY2subGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IGZpbmQgPSBmYWxzZTtcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNsaWNrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVswXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICArK2l0ZW1bMV07XG4gICAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWZpbmQpIHtcbiAgICAgICAgICAgIGNsaWNrLnB1c2goW25hbWUsIDFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjbGljay5sZW5ndGgpIHtcbiAgICAgICAgICBjbGljay5wdXNoKFtuYW1lLCAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpY2tKc29uID0gSlNPTi5zdHJpbmdpZnkoY2xpY2spO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2xpY2snLCBjbGlja0pzb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjb3JlRGF0YSgpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJyk7XG4gIGNvbnN0IHJvdyA9IHRhYmxlLnJvd3M7XG4gIGNvbnN0IGNvcnJlY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29ycmVjdCcpKTtcbiAgY29uc3QgZXJyb3JEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXJyb3InKSk7XG4gIGNvbnN0IGNsaWNrRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsaWNrJykpO1xuICBmb3IgKGxldCBpdGVtIG9mIHJvdykge1xuICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGl0ZW0uY2VsbHNbMF0uaW5uZXJIVE1MO1xuICAgIGNvbnN0IGNsaWNrID0gY2xpY2tEYXRhICYmIGNsaWNrRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtWzBdID09PSBmaXJzdENlbGwpO1xuICAgIGNvbnN0IGNvcnJlY3QgPSBjb3JyZWN0RGF0YSAmJiBjb3JyZWN0RGF0YS5maW5kKChpdGVtKSA9PiBpdGVtWzBdID09PSBmaXJzdENlbGwpO1xuICAgIGNvbnN0IGVycm9yID0gZXJyb3JEYXRhICYmIGVycm9yRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtWzBdID09PSBmaXJzdENlbGwpO1xuICAgIGlmIChjbGljaykge1xuICAgICAgaXRlbS5jZWxsc1syXS5pbm5lckhUTUwgPSBgJHtjbGlja1sxXX1gO1xuICAgIH1cbiAgICBpZiAoY29ycmVjdCkge1xuICAgICAgaXRlbS5jZWxsc1szXS5pbm5lckhUTUwgPSBgJHtjb3JyZWN0WzFdfWA7XG4gICAgICBpdGVtLmNlbGxzWzVdLmlubmVySFRNTCA9ICcxMDAlJztcbiAgICB9XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBpdGVtLmNlbGxzWzRdLmlubmVySFRNTCA9IGAke2Vycm9yWzFdfWA7XG4gICAgfVxuICAgIGlmIChjb3JyZWN0ICYmIGVycm9yICYmIGNvcnJlY3RbMF0gPT09IGVycm9yWzBdKSB7XG4gICAgICBjb25zdCB0b3RhbEF0dGVtcHRzID0gY29ycmVjdFsxXSArIGVycm9yWzFdO1xuICAgICAgY29uc3QgYWNjdXJhY3kgPSAoKGNvcnJlY3RbMV0gLyB0b3RhbEF0dGVtcHRzKSAqIDEwMCkudG9GaXhlZCgpO1xuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSBgJHthY2N1cmFjeX0lYDtcbiAgICB9XG4gICAgaWYgKGNvcnJlY3REYXRhID09PSBudWxsICYmIGVycm9yRGF0YSA9PT0gbnVsbCAmJiBjbGlja0RhdGEgPT09IG51bGwpIHtcbiAgICAgIGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID09PSAnQ2xpY2snID8gKGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID0gJ0NsaWNrJykgOiAoaXRlbS5jZWxsc1syXS5pbm5lckhUTUwgPSAnLScpO1xuICAgICAgaXRlbS5jZWxsc1szXS5pbm5lckhUTUwgPT09ICdDb3JyZWN0JyA/IChpdGVtLmNlbGxzWzNdLmlubmVySFRNTCA9ICdDb3JyZWN0JykgOiAoaXRlbS5jZWxsc1szXS5pbm5lckhUTUwgPSAnLScpO1xuICAgICAgaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPT09ICdFcnJvcicgPyAoaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSAnRXJyb3InKSA6IChpdGVtLmNlbGxzWzRdLmlubmVySFRNTCA9ICctJyk7XG4gICAgICBpdGVtLmNlbGxzWzVdLmlubmVySFRNTCA9PT0gJ0NvcnJlY3Qgc2NvcmUnID8gKGl0ZW0uY2VsbHNbNV0uaW5uZXJIVE1MID0gJ0NvcnJlY3Qgc2NvcmUnKSA6IChpdGVtLmNlbGxzWzVdLmlubmVySFRNTCA9ICctJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldFNjb3JlKCkge1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldF9idG4nKTtcbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgc2NvcmVEYXRhKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFNjb3JlKCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKTtcbiAgY29uc3Qgcm93ID0gdGFibGUucm93cztcbiAgY29uc3QgaGVhZGVyID0gcm93WzBdO1xuICBsZXQgc29ydE9yZGVyID0gJ2FzYyc7XG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FzYycpIHtcbiAgICAgIHNvcnRPcmRlciA9ICdkZXNjJztcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydE9yZGVyID0gJ2FzYyc7XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmVuZ2xpc2gnKSkge1xuICAgICAgc29ydFRhYmxlKDAsIHNvcnRPcmRlcik7XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnJ1c3NpYW4nKSkge1xuICAgICAgc29ydFRhYmxlKDEsIHNvcnRPcmRlcik7XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmNsaWNrJykpIHtcbiAgICAgIHNvcnRUYWJsZSgyLCBzb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5jb3JyZWN0JykpIHtcbiAgICAgIHNvcnRUYWJsZSgzLCBzb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5lcnJvcicpKSB7XG4gICAgICBzb3J0VGFibGUoNCwgc29ydE9yZGVyKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcucGVyY2VudCcpKSB7XG4gICAgICBzb3J0VGFibGUoNSwgc29ydE9yZGVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhYmxlKGNvbHVtbkluZGV4LCBzb3J0RGlyZWN0aW9uKSB7XG4gIGxldCByb3dzLCBpLCB4LCB5LCBzaG91bGRTd2l0Y2g7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX2NvbnRhaW5lcicpO1xuICBsZXQgc3dpdGNoaW5nID0gdHJ1ZTtcblxuICB3aGlsZSAoc3dpdGNoaW5nKSB7XG4gICAgc3dpdGNoaW5nID0gZmFsc2U7XG4gICAgcm93cyA9IHRhYmxlLnJvd3M7XG4gICAgc2hvdWxkU3dpdGNoID0gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgcm93cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHNob3VsZFN3aXRjaCA9IGZhbHNlO1xuXG4gICAgICB4ID0gcm93c1tpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGQnKVtjb2x1bW5JbmRleF07XG4gICAgICB5ID0gcm93c1tpICsgMV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJylbY29sdW1uSW5kZXhdO1xuXG4gICAgICBjb25zdCB4VmFsdWUgPSBnZXRWYWx1ZUZvclNvcnRpbmcoeC5pbm5lckhUTUwpO1xuICAgICAgY29uc3QgeVZhbHVlID0gZ2V0VmFsdWVGb3JTb3J0aW5nKHkuaW5uZXJIVE1MKTtcblxuICAgICAgaWYgKHhWYWx1ZSA9PT0gJy0nICYmIHlWYWx1ZSAhPT0gJy0nKSB7XG4gICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh5VmFsdWUgPT09ICctJyAmJiB4VmFsdWUgIT09ICctJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdhc2MnKSB7XG4gICAgICAgIGlmICh4VmFsdWUgPiB5VmFsdWUpIHtcbiAgICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdkZXNjJykge1xuICAgICAgICBpZiAoeFZhbHVlIDwgeVZhbHVlKSB7XG4gICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdWxkU3dpdGNoKSB7XG4gICAgICByb3dzW2ldLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJvd3NbaSArIDFdLCByb3dzW2ldKTtcbiAgICAgIHN3aXRjaGluZyA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZvclNvcnRpbmcodmFsdWUpIHtcbiAgY29uc3QgbnVtYmVyUmVnZXggPSAvXi0/XFxkKyg/OlxcLlxcZCspPyQvO1xuICBjb25zdCBwZXJjZW50YWdlUmVnZXggPSAvXi0/XFxkKyg/OlxcLlxcZCspPyUkLztcblxuICBpZiAobnVtYmVyUmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAocGVyY2VudGFnZVJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnJScsICcnKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRDYXJkcyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQge1xuICBhY3RpdmUsXG4gIGNyZWF0ZUNhcmQsXG4gIGNsaWNrQ291bnRzLFxuICByZW5kZXJDYXRlZ29yaWVzLFxuICByZW5kZXJXb3JkcyxcbiAgcmVzZXRTY29yZSxcbiAgc2NvcmVEYXRhLFxuICBzb3J0U2NvcmUsXG4gIGNyZWF0ZUVsZW1lbnQsXG59IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgbWFpblJlbmRlclN1YkNhcmQgfSBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRIZWFkZXJTdHJ1Y3R1cmUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWluZXInKTtcbiAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51Jyk7XG4gIGNvbnN0IGJ1cmdlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51X19idXJnZXInKTtcbiAgY29uc3QgbGluZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbGluZScpO1xuICBjb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KCduYXYnLCAnbWVudV9fbmF2Jyk7XG4gIGNvbnN0IG5hdl9saXN0ID0gY3JlYXRlRWxlbWVudCgndWwnLCAnbmF2X19saXN0Jyk7XG4gIGNvbnN0IGZpcnN0X21haW5faXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgWyduYXZfbGlzdF9faXRlbScsICdfYWN0aXZlJ10sICduYW1lJywgJ01haW4gUGFnZScpO1xuICBjb25zdCBzZWNvbmRfc2NvcmVfaXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ25hdl9saXN0X19pdGVtJywgJ25hbWUnLCAnU2NvcmUnKTtcbiAgY29uc3QgZmlyc3RfbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ25hdl9saXN0X19saW5rJywgJ19hY3RpdmUnXSk7XG4gIGNvbnN0IHNlY29uZF9saW5rID0gY3JlYXRlRWxlbWVudCgnYScsICduYXZfbGlzdF9fbGluaycpO1xuICBjb25zdCBzd2l0Y2hlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc3dpdGNoZXInLCAnZm9ybS1jaGVjaycsICdmb3JtLXN3aXRjaCddKTtcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIFsnaW5wdXQnLCAnZm9ybS1jaGVjay1pbnB1dCddKTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIFsnbGFiZWwnLCAnZm9ybS1jaGVjay1sYWJlbCddKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsICd0aXRsZScpO1xuICBjb25zdCBzaGFkb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2hhZG93Jyk7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVHJhaW4gJiBQbGF5JztcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnVHJhaW4nO1xuICBmaXJzdF9saW5rLnRleHRDb250ZW50ID0gJ01haW4gUGFnZSc7XG4gIHNlY29uZF9saW5rLnRleHRDb250ZW50ID0gJ1Njb3JlJztcblxuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2hhZG93KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzd2l0Y2hlcik7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChuYXYpO1xuICBtZW51LmFwcGVuZENoaWxkKGJ1cmdlcik7XG5cbiAgc3dpdGNoZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBzd2l0Y2hlci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdl9saXN0KTtcblxuICBuYXZfbGlzdC5hcHBlbmRDaGlsZChmaXJzdF9tYWluX2l0ZW0pO1xuICBuYXZfbGlzdC5hcHBlbmRDaGlsZChzZWNvbmRfc2NvcmVfaXRlbSk7XG4gIGZpcnN0X21haW5faXRlbS5hcHBlbmRDaGlsZChmaXJzdF9saW5rKTtcbiAgc2Vjb25kX3Njb3JlX2l0ZW0uYXBwZW5kQ2hpbGQoc2Vjb25kX2xpbmspO1xuICBidXJnZXIuYXBwZW5kQ2hpbGQobGluZSk7XG5cbiAgc2V0U3dpdGNoZXIoKTtcbiAgc2V0TmF2TWVudSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3dpdGNoZXIoKSB7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Jyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgb3B0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBvcHRpb25zW2F0dHJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIGlkOiAnZmxleFN3aXRjaENoZWNrRGVmYXVsdCcsXG4gIH0pO1xuXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZsZXhTd2l0Y2hDaGVja0RlZmF1bHQnKTtcblxuICBzd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGVja2VkTW9kZShpbnB1dC5jaGVja2VkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja2VkTW9kZShjaGVja2VkKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19uYXYnKTtcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lJyk7XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKTtcblxuICBjb25zdCBzdWJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1YkNhcmQnKTtcbiAgY29uc3QgY2FyZEluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvX2Jsb2NrX19pbmRpY2F0b3InKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm9fYmxvY2tfX3N1YnRpdGxlJyk7XG4gIGNvbnN0IGNhcmRSb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJyk7XG5cbiAgY29uc3Qgc3ViQ2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3Qgc3RhcnRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCByZXBlYXRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdF9idG4nKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG5cbiAgY29uc3Qgc3ViQ2FyZEJsb2NrQ291bnQgPSBzdWJDYXJkQmxvY2suY2hpbGRyZW4ubGVuZ3RoO1xuXG4gIGlmICghY2hlY2tlZCkge1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1RyYWluJztcbiAgICBjYXJkSW5kaWNhdG9yLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpO1xuICAgIGNhcmRUaXRsZS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpKTtcbiAgICBjYXJkUm90YXRlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpO1xuICAgIHN1YkNhcmQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKSk7XG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIHN0YXJ0X2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgICByZXBlYXRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIGhlYXJ0X3NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gIH1cbiAgaWYgKGNoZWNrZWQpIHtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQbGF5JztcbiAgICBzdWJDYXJkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIGNhcmRJbmRpY2F0b3IuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSk7XG4gICAgY2FyZFRpdGxlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIGNhcmRSb3RhdGUuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJyk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGlmIChzdWJDYXJkQmxvY2tDb3VudCA+IDApIHtcbiAgICAgIHN0YXJ0X2J0bi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE5hdk1lbnUoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY29uc3QgbmF2X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX25hdicpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhZG93Jyk7XG5cbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IGNhcmQ7XG4gICAgY29uc3QgbmF2X2xpc3RfX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBuYXZfbGlzdC5hcHBlbmRDaGlsZChuYXZfbGlzdF9faXRlbSk7XG4gICAgbmF2X2xpc3RfX2l0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICBuYXZfbGlzdF9faXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfbGlzdF9faXRlbScpO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2X2xpc3RfX2xpbmsnKTtcblxuICAgIG5hdl9saXN0X19pdGVtLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke2NhdGVnb3J5fWApO1xuICAgIG5hdl9saXN0X19pdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtjYXRlZ29yeX1gO1xuICB9KTtcblxuICBuYXZfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJyk7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJyk7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfYnRuJyk7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfbGlzdF9faXRlbScpO1xuICAgIGNvbnN0IGNhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc0Jsb2NrJyk7XG4gICAgY29uc3Qgc3ViQ2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgICBjb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcicpO1xuICAgIGNvbnN0IHN1YkNhcmRzQ2F0ZXJnb3J5ID0gY2FyZHNbaWRdPy5jYXRlZ29yeTtcbiAgICBpZiAobmFtZSA9PT0gc3ViQ2FyZHNDYXRlcmdvcnkgJiYgY2xhc3NOYW1lKSB7XG4gICAgICBjb25zdCBjYXJkID0gY2FyZHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gbmFtZSk7XG4gICAgICBjb25zdCBzdWJDYXJkcyA9IGNhcmQud29yZHM7XG4gICAgICBjb25zdCBpc1N1YkJsb2NrQ2hpbGRyZW4gPSBzdWJDYXJkQmxvY2suY2hpbGRyZW47XG4gICAgICBjb25zdCBpc0Jsb2NrQ2hpbGRyZW4gPSBjYXJkQmxvY2suY2hpbGRyZW47XG4gICAgICBjb25zdCBhcnJCbG9ja0NvbGxlY3Rpb24gPSBbLi4uaXNCbG9ja0NoaWxkcmVuXTtcbiAgICAgIGNvbnN0IGFyclN1YkJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc1N1YkJsb2NrQ2hpbGRyZW5dO1xuICAgICAgYXJyQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoaXNTdWJCbG9ja0NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBzdWJDYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBjcmVhdGVDYXJkKHN1YkNhcmRzLCAnLnN1YkNhcmRzQmxvY2snLCAnc3ViQ2FyZCcpO1xuICAgICAgICByZW5kZXJXb3JkcyhzdWJDYXJkcyk7XG4gICAgICAgIGNsaWNrQ291bnRzKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdWJCbG9ja0NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBjcmVhdGVDYXJkKHN1YkNhcmRzLCAnLnN1YkNhcmRzQmxvY2snLCAnc3ViQ2FyZCcpO1xuICAgICAgICByZW5kZXJXb3JkcyhzdWJDYXJkcyk7XG4gICAgICAgIGNsaWNrQ291bnRzKCk7XG4gICAgICB9XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgc2hhZG93LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgYWN0aXZlKG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKTtcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdNYWluIFBhZ2UnICYmIGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgaXNTdWJCbG9ja0NoaWxkcmVuID0gc3ViQ2FyZEJsb2NrLmNoaWxkcmVuO1xuICAgICAgY29uc3QgaXNCbG9ja0NoaWxkcmVuID0gY2FyZEJsb2NrLmNoaWxkcmVuO1xuICAgICAgY29uc3QgYXJyQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzQmxvY2tDaGlsZHJlbl07XG4gICAgICBjb25zdCBhcnJTdWJCbG9ja0NvbGxlY3Rpb24gPSBbLi4uaXNTdWJCbG9ja0NoaWxkcmVuXTtcbiAgICAgIGFyclN1YkJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN1YkNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzQmxvY2tDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFyckJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgY2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY3JlYXRlQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgICAgICAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG4gICAgICB9XG4gICAgICBpZiAoaXNCbG9ja0NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBjcmVhdGVDYXJkKGNhcmRzLCAnLmNhcmRzQmxvY2snLCAnY2FyZCcpO1xuICAgICAgICByZW5kZXJDYXRlZ29yaWVzKGNhcmRzKTtcbiAgICAgIH1cbiAgICAgIG1haW5SZW5kZXJTdWJDYXJkKCk7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgc2hhZG93LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgYWN0aXZlKG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKTtcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdTY29yZScgJiYgY2xhc3NOYW1lKSB7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgc2hhZG93LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgYWN0aXZlKG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKTtcbiAgICAgIHNjb3JlRGF0YSgpO1xuICAgICAgcmVzZXRTY29yZSgpO1xuICAgICAgc29ydFNjb3JlKCk7XG4gICAgfVxuICB9KTtcblxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKTtcbiAgICBzaGFkb3cuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGdldENhcmRzIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGFjdGl2ZSwgY3JlYXRlQ2FyZCwgY2xpY2tDb3VudHMsIHJlbmRlckNhdGVnb3JpZXMsIGNyZWF0ZVNjb3JlLCByZW5kZXJXb3JkcywgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgY2hlY2tlZE1vZGUgfSBmcm9tICcuL2hlYWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1haW5TdHJ1Y3R1cmUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFsnc2VjdGlvbicsICdfYWN0aXZlJ10pO1xuICBjb25zdCBjYXRlZ29yeUNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZHNCbG9jaycpO1xuICBjb25zdCBzdWJDYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3N1YkNhcmRzQmxvY2snKTtcbiAgY29uc3Qgc3RhcnRfYnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydzdGFydF9idG4nLCAnYnRuJywgJ2J0bi1zZWNvbmRhcnknXSk7XG4gIGNvbnN0IHJlcGVhdF9idG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ3JlcGVhdF9idG4nLCAnYnRuJywgJ2J0bi1wcmltYXJ5J10pO1xuICBjb25zdCBoZWFydF9zZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hlYXJ0X3NlY3Rpb24nKTtcbiAgc3RhcnRfYnRuLnRleHRDb250ZW50ID0gJ1NUQVJUJztcbiAgcmVwZWF0X2J0bi50ZXh0Q29udGVudCA9ICdSRVBFQVQnO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlDYXJkKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChzdWJDYXJkKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChzdGFydF9idG4pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHJlcGVhdF9idG4pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYXJ0X3NlY3Rpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVpbGRTY29yZSgpIHtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCBnZXRDYXJkcygpO1xuICBjcmVhdGVTY29yZShjYXJkcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaXJzdFJlbmRlckNhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY3JlYXRlQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluUmVuZGVyU3ViQ2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCBnZXRDYXJkcygpO1xuICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Jyk7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGNoaWxkcmVuID0gYmxvY2suY2hpbGRyZW47XG4gIGNvbnN0IGFyckNvbGxlY3Rpb24gPSBbLi4uY2hpbGRyZW5dO1xuICBhcnJDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBpZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgY29uc3QgbmFtZSA9IGNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2FyZHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gbmFtZSk7XG4gICAgICBpZiAoY2FyZHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gbmFtZSkpIHtcbiAgICAgICAgYXJyQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgYmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZWxlbWVudC53b3JkcztcbiAgICAgICAgYWN0aXZlKG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKTtcbiAgICAgICAgY3JlYXRlQ2FyZChjYXJkcywgJy5zdWJDYXJkc0Jsb2NrJywgJ3N1YkNhcmQnKTtcbiAgICAgICAgcmVuZGVyV29yZHMocmVuZGVyRWxlbWVudCk7XG4gICAgICAgIGNsaWNrQ291bnRzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGJ1aWxkU2NvcmVDb250YWluZXIoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IHNjb3JlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgndGFibGUnLCAnc2NvcmVfY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2NvcmVIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCd0cicsICdzY29yZV9oZWFkZXInKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsncmVzZXRfYnRuJywgJ2J0bicsICdidG4tZGFuZ2VyJ10sICd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRhdGFDZWxsRW5nV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ2VuZ2xpc2gnKTtcbiAgICBjb25zdCBkYXRhQ2VsbFJ1c1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdydXNzaWFuJyk7XG4gICAgY29uc3QgZGF0YUNlbGxDbGlja1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdjbGljaycpO1xuICAgIGNvbnN0IGRhdGFDZWxsQ29ycmVjdCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ2NvcnJlY3QnKTtcbiAgICBjb25zdCBkYXRhQ2VsbEVycm9yID0gY3JlYXRlRWxlbWVudCgndGQnLCAnZXJyb3InKTtcbiAgICBjb25zdCBkYXRhQ29ycmVjdFBlcmNlbnQgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdwZXJjZW50Jyk7XG5cbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9ICdSZXNldCBzY29yZSc7XG4gICAgZGF0YUNlbGxFbmdXb3JkLnRleHRDb250ZW50ID0gJ0VuZ2xpc2gnO1xuICAgIGRhdGFDZWxsUnVzV29yZC50ZXh0Q29udGVudCA9ICdSdXNzaWFuJztcbiAgICBkYXRhQ2VsbENsaWNrV29yZC50ZXh0Q29udGVudCA9ICdDbGljayc7XG4gICAgZGF0YUNlbGxDb3JyZWN0LnRleHRDb250ZW50ID0gJ0NvcnJlY3QnO1xuICAgIGRhdGFDZWxsRXJyb3IudGV4dENvbnRlbnQgPSAnRXJyb3InO1xuICAgIGRhdGFDb3JyZWN0UGVyY2VudC50ZXh0Q29udGVudCA9ICdDb3JyZWN0IHNjb3JlJztcblxuICAgIGJsb2NrLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChzY29yZUNvbnRhaW5lcik7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVIZWFkZXIpO1xuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsRW5nV29yZCk7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxSdXNXb3JkKTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbENsaWNrV29yZCk7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxDb3JyZWN0KTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbEVycm9yKTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ29ycmVjdFBlcmNlbnQpO1xuICB9XG5cbiAgcmVuZGVyU2NvcmUoKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZW0ud29yZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBuZXcgU2NvcmVCbG9jayhpdGVtKS5yZW5kZXJTY29yZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFNjb3JlQmxvY2sge1xuICBjb25zdHJ1Y3Rvcih7IHdvcmQsIHRyYW5zbGF0aW9uIH0pIHtcbiAgICB0aGlzLmRhdGEgPSB7IHdvcmQsIHRyYW5zbGF0aW9uIH07XG4gIH1cblxuICByZW5kZXJTY29yZSgpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKTtcbiAgICBjb25zdCBzdHJJbmZvID0gY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBkYXRhQ2VsbEVuZ1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRhdGFDZWxsUnVzV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNlbGxDb3JyZWN0ID0gY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRhQ2VsbENsaWNrV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNlbGxFcnJvciA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNvcnJlY3RQZXJjZW50ID0gY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgIGRhdGFDZWxsRW5nV29yZC50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS53b3JkO1xuICAgIGRhdGFDZWxsUnVzV29yZC50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS50cmFuc2xhdGlvbjtcbiAgICBkYXRhQ2VsbENsaWNrV29yZC50ZXh0Q29udGVudCA9ICctJztcbiAgICBkYXRhQ2VsbENvcnJlY3QudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgZGF0YUNlbGxFcnJvci50ZXh0Q29udGVudCA9ICctJztcbiAgICBkYXRhQ2VsbEVycm9yLnRleHRDb250ZW50ID0gJy0nO1xuICAgIGRhdGFDb3JyZWN0UGVyY2VudC50ZXh0Q29udGVudCA9ICctJztcblxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHN0ckluZm8pO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNlbGxFbmdXb3JkKTtcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsUnVzV29yZCk7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbENsaWNrV29yZCk7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbENvcnJlY3QpO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNlbGxFcnJvcik7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ29ycmVjdFBlcmNlbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBwbGF5QXVkaW8gfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3Rvcih7IHdvcmQsIHRyYW5zbGF0aW9uLCBpbWFnZSwgYXVkaW9TcmMgfSwgaWQpIHtcbiAgICB0aGlzLmNhcmREYXRhID0geyB3b3JkLCB0cmFuc2xhdGlvbiwgaW1hZ2UsIGF1ZGlvU3JjIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY2FyZDtcbiAgICB0aGlzLmNhcmRfX2NvdmVyO1xuICAgIHRoaXMuY2FyZF9faW5mbztcbiAgICB0aGlzLmluZm9fX3RpdGxlO1xuICAgIHRoaXMucm90YXRlX2ltZztcbiAgfVxuXG4gIHJlbmRlcldvcmQoKSB7XG4gICAgdGhpcy5jYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG5cbiAgICB0aGlzLmNhcmQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5jYXJkRGF0YS53b3JkKTtcbiAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LmFkZCgnc3ViQ2FyZCcpO1xuXG4gICAgdGhpcy5jYXJkX19jb3ZlciA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY292ZXInKTtcbiAgICB0aGlzLmNhcmRfX2luZm8gPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2luZm9fYmxvY2snKTtcbiAgICB0aGlzLmluZm9fX3RpdGxlID0gdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX190aXRsZScpO1xuICAgIHRoaXMucm90YXRlX2ltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICdyb3RhdGUnLCAnc3JjJywgJy4vYXNzZXRzL2ltZy9yb3RhdGUuc3ZnJyk7XG5cbiAgICB0aGlzLmluZm9fX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9fYmxvY2tfX3N1YnRpdGxlJyk7XG4gICAgdGhpcy5pbmZvX190aXRsZS50ZXh0Q29udGVudCA9IHRoaXMuY2FyZERhdGEud29yZDtcbiAgICB0aGlzLmNhcmRfX2NvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5jYXJkRGF0YS5pbWFnZX0nKWA7XG4gICAgdGhpcy5jYXJkX19pbmZvLmFwcGVuZENoaWxkKHRoaXMucm90YXRlX2ltZyk7XG4gIH1cblxuICByb3RhdGVXb3JkKCkge1xuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5mb19fdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLnRyYW5zbGF0aW9uO1xuICAgICAgdGhpcy5jYXJkLmNsYXNzTGlzdC5hZGQoJ19yb3RhdGUnKTtcbiAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmV0dXJucyk7XG4gICAgICB0aGlzLnJvdGF0ZV9pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXR1cm5zID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbmZvX190aXRsZS50ZXh0Q29udGVudCA9IHRoaXMuY2FyZERhdGEud29yZDtcbiAgICAgIHRoaXMuY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfcm90YXRlJyk7XG4gICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJldHVybnMpO1xuICAgICAgdGhpcy5yb3RhdGVfaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5yb3RhdGVfaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlKTtcbiAgfVxuXG4gIHByb25vdW5jZVdvcmQoKSB7XG4gICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09PSAnc3ViQ2FyZCcpIHtcbiAgICAgICAgcGxheUF1ZGlvKHRoaXMuY2FyZERhdGEuYXVkaW9TcmMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgYnVpbGRIZWFkZXJTdHJ1Y3R1cmUgfSBmcm9tICcuL2pzL2hlYWRlci5qcydcbmltcG9ydCB7IG1haW5SZW5kZXJTdWJDYXJkLCBmaXJzdFJlbmRlckNhcmQsIGJ1aWxkTWFpblN0cnVjdHVyZSwgYnVpbGRTY29yZSB9IGZyb20gJy4vanMvbWFpbi5qcydcblxuYnVpbGRIZWFkZXJTdHJ1Y3R1cmUoKVxuYnVpbGRNYWluU3RydWN0dXJlKClcbmJ1aWxkU2NvcmUoKVxuZmlyc3RSZW5kZXJDYXJkKClcbm1haW5SZW5kZXJTdWJDYXJkKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==