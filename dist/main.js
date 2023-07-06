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
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score */ "./src/js/score.js");





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
  const score = new _score__WEBPACK_IMPORTED_MODULE_3__.Score(data);
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
function gameStart() {
  const startBtn = document.querySelector('.start_btn');
  const repeatBtn = document.querySelector('.repeat_btn');
  const navlist = document.querySelector('.nav__list');
  let c = function (e) {
    startBtn.classList.remove('play_mode');
    repeatBtn.classList.add('play_mode');
    const navlist = document.querySelector('.nav__list');
    const children = navlist.children;
    const arrElement = [...children];
    const element = arrElement.find((item) => item.className === 'nav_list__item _active');
    const id = element.getAttribute('data-id');
    playGame(id);
  };
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
  return objWord;
}

async function playGame(id) {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getCards)();
  const arrayWord = data[id].words;
  const subCardsBlock = document.querySelector('.subCardsBlock');
  const repeat_btn = document.querySelector('.repeat_btn');
  const heart_section = document.querySelector('.heart_section');
  const navlist = document.querySelector('.nav__list');
  heart_section.classList.add('play_mode');
  const arrData = arrayWord;
  let dataWord = getSound(arrData);
  const getCorrect = JSON.parse(localStorage.getItem('correct'));
  const getError = JSON.parse(localStorage.getItem('error'));
  const correct = getCorrect ? [...getCorrect] : [];
  const error = getError ? [...getError] : [];
  let count = 0;
  let repeat = function () {
    if (arrData.length > 0) {
      const sound = dataWord[0].audioSrc;
      playAudio(sound);
    }
  };
  let cardOperation = function (e) {
    if (e.target.closest('.subCard')) {
      let obj = dataWord;
      let heart = document.createElement('div');
      heart.classList.add('heart');
      let subCard = e.target.parentElement;
      let subCardName = subCard.getAttribute('name');
      let word = obj[0].word;
      if (subCardName === word) {
        ++count;
        subCard.classList.add('passed');
        heart.classList.add('right');
        heart_section.appendChild(heart);
        playAudio('./assets/audio/correct.mp3');
        generateDataArray(correct, word);
        removeHeart(count);
        if (arrData.length > 0) {
          setTimeout(() => {
            dataWord = getSound(arrData);
          }, 500);
        } else {
          finishGame(correct, error);
        }
      } else {
        ++count;
        heart.classList.add('wrong');
        heart_section.appendChild(heart);
        playAudio('./assets/audio/error.mp3');
        generateDataArray(error, word);
        removeHeart(count);
      }
    }
  };
  subCardsBlock.addEventListener('click', cardOperation);
  repeat_btn.addEventListener('click', repeat);
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection();
      repeat_btn.removeEventListener('click', repeat);
      subCardsBlock.removeEventListener('click', cardOperation);
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

async function finishGame(correctArr, errorArr) {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getCards)();
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
      createCard(cards, '.cardsBlock', 'card');
      renderCategories(cards);
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
      clearHeartSection();
      createCard(cards, '.cardsBlock', 'card');
      renderCategories(cards);
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

  if (checked === false) {
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
  if (checked === true) {
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
    item.addEventListener('mouseleave', (e) => {
      const card = e.currentTarget;
      if (card.classList.contains('_rotate')) {
        const name = card.getAttribute('name');
        card.classList.remove('_rotate');
        const title = card.lastElementChild.firstElementChild;
        title.textContent = name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDSztBQUNiOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQWE7QUFDOUIsd0JBQXdCLHdEQUFhO0FBQ3JDLHVCQUF1Qix3REFBYTtBQUNwQyx3QkFBd0Isd0RBQWE7QUFDckMsNEJBQTRCLHdEQUFhOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrQ0FBUTtBQUNqQztBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzJDOztBQUVwQztBQUNQLGdCQUFnQix3QkFBd0I7QUFDeEMsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Qsb0JBQW9COztBQUVwRTtBQUNBLDhCQUE4Qix3REFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o4QjtBQUNJO0FBQ0s7QUFDUDs7QUFFekI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSxxQkFBcUIsdUNBQUk7QUFDekI7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLHdCQUF3Qix1Q0FBSTtBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVPO0FBQ1Asb0JBQW9CLHlDQUFLO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHFCQUFxQiwrQ0FBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asc0JBQXNCLCtDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFXO0FBQ2pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFXO0FBQ2pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTs7Ozs7OztVQ3ZEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0M7QUFDNEM7O0FBRWpHLG1FQUFvQjtBQUNwQixnRUFBa0I7QUFDbEIsd0RBQVU7QUFDViw2REFBZTtBQUNmLCtEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvaW5kZXguc2Nzcz85Nzc0Iiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvY2FyZC5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2NhdGVnb3J5LmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvZGF0YS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvaGVhZGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL3Njb3JlLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvd29yZC5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XG5cbmV4cG9ydCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoaWQsIGNhcmREYXRhKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY2FyZERhdGEgPSBjYXJkRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZUNhcmRDb250YWluZXIoc2VsZWN0b3IsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNsYXNzTmFtZSk7XG4gICAgY29uc3QgY2FyZF9fY292ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZF9fY292ZXInKTtcbiAgICBjb25zdCBjYXJkX19pbmZvID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmRfX2luZm9fYmxvY2snKTtcbiAgICBjb25zdCBpbmZvX190aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ2luZm9fYmxvY2tfX3RpdGxlJyk7XG4gICAgY29uc3QgaW5mb19faW5kaWNhdG9yID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2luZm9fYmxvY2tfX2luZGljYXRvcicpO1xuXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkX19jb3Zlcik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkX19pbmZvKTtcbiAgICBjYXJkX19pbmZvLmFwcGVuZENoaWxkKGluZm9fX3RpdGxlKTtcbiAgICBjYXJkX19pbmZvLmFwcGVuZENoaWxkKGluZm9fX2luZGljYXRvcik7XG4gIH1cblxuICByZW5kZXJDYXJkQ2F0ZWdvcnkoKSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkodGhpcy5jYXJkRGF0YSwgdGhpcy5pZCk7XG4gICAgY2F0ZWdvcnkucmVuZGVyQ2F0ZWdvcnkoKTtcbiAgfVxuXG4gIHJlbmRlckNhcmRXb3JkKCkge1xuICAgIGNvbnN0IHdvcmQgPSBuZXcgV29yZCh0aGlzLmNhcmREYXRhLCB0aGlzLmlkKTtcbiAgICB3b3JkLnJlbmRlcldvcmQoKTtcbiAgICB3b3JkLnJvdGF0ZVdvcmQoKTtcbiAgICB3b3JkLnByb25vdW5jZVdvcmQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeSB7XG4gIGNvbnN0cnVjdG9yKHsgY2F0ZWdvcnksIGNvdmVyLCB3b3JkcyB9LCBpZCkge1xuICAgIHRoaXMuY2FyZERhdGEgPSB7IGNhdGVnb3J5LCBjb3Zlciwgd29yZHMgfTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICByZW5kZXJDYXRlZ29yeSgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgY29uc3QgaW5mb19fcXVhbnRpdHkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX19xdWFudGl0eScpO1xuXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLmNhcmREYXRhLmNhdGVnb3J5KTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRfX2NvdmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY292ZXInKTtcbiAgICBjb25zdCBjYXJkX19pbmZvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW5mb19ibG9jaycpO1xuICAgIGNvbnN0IGluZm9fX3RpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuaW5mb19ibG9ja19fdGl0bGUnKTtcblxuICAgIGluZm9fX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9fYmxvY2tfX3RpdGxlJyk7XG4gICAgaW5mb19fdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLmNhdGVnb3J5O1xuICAgIGNhcmRfX2NvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5jYXJkRGF0YS5jb3Zlcn0nKWA7XG5cbiAgICBpZiAoaW5mb19fcXVhbnRpdHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNyZWF0ZV9xdWFudGl0eSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnaW5mb19ibG9ja19fcXVhbnRpdHknKTtcbiAgICAgIGNhcmRfX2luZm8uYXBwZW5kQ2hpbGQoY3JlYXRlX3F1YW50aXR5KTtcbiAgICAgIGNyZWF0ZV9xdWFudGl0eS50ZXh0Q29udGVudCA9IHRoaXMuY2FyZERhdGEud29yZHMubGVuZ3RoO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcmRzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcuL2Fzc2V0cy93b3Jkcy1jYXJkcy5qc29uJyk7XG4gIGxldCBjYXJkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNhcmRzO1xufSIsImltcG9ydCB7IENhcmQgfSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY2hlY2tlZE1vZGUgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBTY29yZSB9IGZyb20gJy4vc2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZXMsIGF0dHIsIHZhbHVlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJykge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcbiAgfVxuICBhdHRyICYmIHZhbHVlICYmIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsIHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpZCwgaXRlbSk7XG4gICAgY2FyZC5jcmVhdGVDYXJkQ29udGFpbmVyKHNlbGVjdG9yLCBjbGFzc05hbWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXMoZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGl0ZW0sIGlkKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGlkLCBpdGVtKTtcbiAgICBjYXJkLnJlbmRlckNhcmRDYXRlZ29yeSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldvcmRzKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgIGNvbnN0IHN1YkNhcmQgPSBuZXcgQ2FyZChpZCwgaXRlbSk7XG4gICAgc3ViQ2FyZC5yZW5kZXJDYXJkV29yZCgpO1xuICB9KTtcbiAgZ2FtZVN0YXJ0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY29yZShkYXRhKSB7XG4gIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKGRhdGEpO1xuICBzY29yZS5idWlsZFNjb3JlQ29udGFpbmVyKCdtYWluJyk7XG4gIHNjb3JlLnJlbmRlclNjb3JlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5QXVkaW8odXJsKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHVybCk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZShjYXRlZ29yeSwgZGF0YSkge1xuICBjb25zdCBnZXRDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhKTtcbiAgZ2V0Q29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgY29uc3QgbGluayA9IGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKG5hbWUgPT09IGNhdGVnb3J5KSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vRm9yIEdhbWVcbmV4cG9ydCBmdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0X2J0bicpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuICBsZXQgYyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc3RhcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gICAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGNvbnN0IG5hdmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBuYXZsaXN0LmNoaWxkcmVuO1xuICAgIGNvbnN0IGFyckVsZW1lbnQgPSBbLi4uY2hpbGRyZW5dO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJFbGVtZW50LmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2xhc3NOYW1lID09PSAnbmF2X2xpc3RfX2l0ZW0gX2FjdGl2ZScpO1xuICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBwbGF5R2FtZShpZCk7XG4gIH07XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gIG5hdmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubmF2X2xpc3RfX2xpbmsnKSkge1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIHN0YXJ0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdW5kKGRhdGEpIHtcbiAgbGV0IGFyciA9IGRhdGE7XG4gIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgbGV0IG9ialdvcmQgPSBhcnIuc3BsaWNlKHJhbmRvbU51bWJlciwgMSk7XG4gIGxldCBhdWRpbyA9IG9ialdvcmRbMF0uYXVkaW9TcmM7XG4gIHBsYXlBdWRpbyhhdWRpbyk7XG4gIHJldHVybiBvYmpXb3JkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGxheUdhbWUoaWQpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNvbnN0IGFycmF5V29yZCA9IGRhdGFbaWRdLndvcmRzO1xuICBjb25zdCBzdWJDYXJkc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3QgcmVwZWF0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXRfYnRuJyk7XG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuICBoZWFydF9zZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICBjb25zdCBhcnJEYXRhID0gYXJyYXlXb3JkO1xuICBsZXQgZGF0YVdvcmQgPSBnZXRTb3VuZChhcnJEYXRhKTtcbiAgY29uc3QgZ2V0Q29ycmVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvcnJlY3QnKSk7XG4gIGNvbnN0IGdldEVycm9yID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXJyb3InKSk7XG4gIGNvbnN0IGNvcnJlY3QgPSBnZXRDb3JyZWN0ID8gWy4uLmdldENvcnJlY3RdIDogW107XG4gIGNvbnN0IGVycm9yID0gZ2V0RXJyb3IgPyBbLi4uZ2V0RXJyb3JdIDogW107XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCByZXBlYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyckRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc291bmQgPSBkYXRhV29yZFswXS5hdWRpb1NyYztcbiAgICAgIHBsYXlBdWRpbyhzb3VuZCk7XG4gICAgfVxuICB9O1xuICBsZXQgY2FyZE9wZXJhdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zdWJDYXJkJykpIHtcbiAgICAgIGxldCBvYmogPSBkYXRhV29yZDtcbiAgICAgIGxldCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhcnQuY2xhc3NMaXN0LmFkZCgnaGVhcnQnKTtcbiAgICAgIGxldCBzdWJDYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBzdWJDYXJkTmFtZSA9IHN1YkNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBsZXQgd29yZCA9IG9ialswXS53b3JkO1xuICAgICAgaWYgKHN1YkNhcmROYW1lID09PSB3b3JkKSB7XG4gICAgICAgICsrY291bnQ7XG4gICAgICAgIHN1YkNhcmQuY2xhc3NMaXN0LmFkZCgncGFzc2VkJyk7XG4gICAgICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gICAgICAgIGhlYXJ0X3NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhcnQpO1xuICAgICAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL2NvcnJlY3QubXAzJyk7XG4gICAgICAgIGdlbmVyYXRlRGF0YUFycmF5KGNvcnJlY3QsIHdvcmQpO1xuICAgICAgICByZW1vdmVIZWFydChjb3VudCk7XG4gICAgICAgIGlmIChhcnJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRhdGFXb3JkID0gZ2V0U291bmQoYXJyRGF0YSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5pc2hHYW1lKGNvcnJlY3QsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKytjb3VudDtcbiAgICAgICAgaGVhcnQuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbiAgICAgICAgaGVhcnRfc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgICAgIHBsYXlBdWRpbygnLi9hc3NldHMvYXVkaW8vZXJyb3IubXAzJyk7XG4gICAgICAgIGdlbmVyYXRlRGF0YUFycmF5KGVycm9yLCB3b3JkKTtcbiAgICAgICAgcmVtb3ZlSGVhcnQoY291bnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc3ViQ2FyZHNCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRPcGVyYXRpb24pO1xuICByZXBlYXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVwZWF0KTtcbiAgbmF2bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5uYXZfbGlzdF9fbGluaycpKSB7XG4gICAgICBjbGVhckhlYXJ0U2VjdGlvbigpO1xuICAgICAgcmVwZWF0X2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcGVhdCk7XG4gICAgICBzdWJDYXJkc0Jsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FyZE9wZXJhdGlvbik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySGVhcnRTZWN0aW9uKCkge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYXJ0X3NlY3Rpb24nKTtcbiAgd2hpbGUgKHNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQoc2VjdGlvbi5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSGVhcnQoY291bnQpIHtcbiAgY29uc3QgaGVhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQnKTtcbiAgY29uc3QgbWF4X2NvdW50ID0gODtcbiAgaWYgKGhlYXJ0Lmxlbmd0aCA+PSBtYXhfY291bnQpIHtcbiAgICBoZWFydFtjb3VudCAtIG1heF9jb3VudF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluaXNoR2FtZShjb3JyZWN0QXJyLCBlcnJvckFycikge1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpO1xuICBjb25zdCBzdWJDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViQ2FyZHNCbG9jaycpO1xuICBjb25zdCBpc1N1YkJsb2NrQ2hpbGRyZW4gPSBzdWJDYXJkQmxvY2suY2hpbGRyZW47XG4gIGNvbnN0IGFyclN1YkJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc1N1YkJsb2NrQ2hpbGRyZW5dO1xuICBjb25zdCBjaGlsZHJlbiA9IGhlYXJ0X3NlY3Rpb24uY2hpbGRyZW47XG4gIGNvbnN0IGFyckNvbGxlY3Rpb24gPSBbLi4uY2hpbGRyZW5dO1xuICBjb25zdCBjb3VudHMgPSBhcnJDb2xsZWN0aW9uLnJlZHVjZSgocHJldmlvdXNseSwgY3VycmVudCkgPT4ge1xuICAgIHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdID0gKHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdIHx8IDApICsgMTtcbiAgICByZXR1cm4gcHJldmlvdXNseTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IHdyb25nID0gY291bnRzWydoZWFydCB3cm9uZyddO1xuICBjb25zdCByaWdodCA9IGNvdW50c1snaGVhcnQgcmlnaHQnXTtcblxuICBjb25zdCBjb3JyZWN0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGNvcnJlY3RBcnIpO1xuICBjb25zdCBlcnJvckpzb24gPSBKU09OLnN0cmluZ2lmeShlcnJvckFycik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JyZWN0JywgY29ycmVjdEpzb24pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXJyb3InLCBlcnJvckpzb24pO1xuXG4gIGlmICh3cm9uZykge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGNvbnN0IHdyb25nX2Jsb2NrID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICd3cm9uZy1ibG9jaycpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cm9uZ19jb250YWluZXInKTtcbiAgICBjb25zdCBtaXN0YWtlcyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnd3JvbmdfbWlzdGFrZXMnKTtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cm9uZ19pbWFnZScpO1xuXG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JvbmdfYmxvY2spO1xuICAgIHdyb25nX2Jsb2NrLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWlzdGFrZXMpO1xuXG4gICAgbWlzdGFrZXMudGV4dENvbnRlbnQgPSBgTWlzdGFrZXM6ICR7d3Jvbmd9YDtcbiAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL2ZhaWx1cmUubXAzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHdyb25nX2Jsb2NrKTtcbiAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoJyk7XG4gICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgIGFyclN1YkJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN1YkNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgY3JlYXRlQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgICAgIHJlbmRlckNhdGVnb3JpZXMoY2FyZHMpO1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIGlmICghd3JvbmcpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICBjb25zdCByaWdodEJsb2NrID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdyaWdodC1ibG9jaycpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdyaWdodF9jb250YWluZXInKTtcbiAgICBjb25zdCBwZXJmZWN0ID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdyaWdodF9wZXJmZWN0Jyk7XG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncmlnaHRfaW1hZ2UnKTtcblxuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoJyk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHJpZ2h0QmxvY2spO1xuICAgIHJpZ2h0QmxvY2suYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJmZWN0KTtcblxuICAgIHBlcmZlY3QudGV4dENvbnRlbnQgPSAnR29vZCBqb2InO1xuICAgIHBsYXlBdWRpbygnLi9hc3NldHMvYXVkaW8vc3VjY2Vzcy5tcDMnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocmlnaHRCbG9jayk7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbmlzaCcpO1xuICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZCk7XG4gICAgICBhcnJTdWJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBzdWJDYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIGNsZWFySGVhcnRTZWN0aW9uKCk7XG4gICAgICBjcmVhdGVDYXJkKGNhcmRzLCAnLmNhcmRzQmxvY2snLCAnY2FyZCcpO1xuICAgICAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRGF0YUFycmF5KGFyciwgZGF0YSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGxldCBhZGQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFycikge1xuICAgICAgaWYgKGl0ZW1bMF0gPT09IGRhdGEpIHtcbiAgICAgICAgKytpdGVtWzFdO1xuICAgICAgICBhZGQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWFkZCkge1xuICAgICAgYXJyLnB1c2goW2RhdGEsIDFdKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgYXJyLnB1c2goW2RhdGEsIDFdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDb3VudHMoKSB7XG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBibG9jay5jaGlsZHJlbjtcbiAgY29uc3QgYXJyQ29sbGVjdGlvbiA9IFsuLi5jaGlsZHJlbl07XG4gIGFyckNvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IG5hbWUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgaWYgKGNhcmQuY2xhc3NOYW1lID09PSAnc3ViQ2FyZCcpIHtcbiAgICAgICAgY29uc3QgZ2V0Q2xpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGljaycpKTtcbiAgICAgICAgY29uc3QgY2xpY2sgPSBnZXRDbGljayA/IFsuLi5nZXRDbGlja10gOiBbXTtcbiAgICAgICAgaWYgKGNsaWNrLmxlbmd0aCkge1xuICAgICAgICAgIGxldCBmaW5kID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjbGljaykge1xuICAgICAgICAgICAgaWYgKGl0ZW1bMF0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgKytpdGVtWzFdO1xuICAgICAgICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFmaW5kKSB7XG4gICAgICAgICAgICBjbGljay5wdXNoKFtuYW1lLCAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghY2xpY2subGVuZ3RoKSB7XG4gICAgICAgICAgY2xpY2sucHVzaChbbmFtZSwgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrSnNvbiA9IEpTT04uc3RyaW5naWZ5KGNsaWNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsaWNrJywgY2xpY2tKc29uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29yZURhdGEoKSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX2NvbnRhaW5lcicpO1xuICBjb25zdCByb3cgPSB0YWJsZS5yb3dzO1xuICBjb25zdCBjb3JyZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvcnJlY3QnKSk7XG4gIGNvbnN0IGVycm9yRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Vycm9yJykpO1xuICBjb25zdCBjbGlja0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGljaycpKTtcbiAgZm9yIChsZXQgaXRlbSBvZiByb3cpIHtcbiAgICBjb25zdCBmaXJzdENlbGwgPSBpdGVtLmNlbGxzWzBdLmlubmVySFRNTDtcbiAgICBjb25zdCBjbGljayA9IGNsaWNrRGF0YSAmJiBjbGlja0RhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBjb25zdCBjb3JyZWN0ID0gY29ycmVjdERhdGEgJiYgY29ycmVjdERhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBjb25zdCBlcnJvciA9IGVycm9yRGF0YSAmJiBlcnJvckRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBpZiAoY2xpY2spIHtcbiAgICAgIGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID0gYCR7Y2xpY2tbMV19YDtcbiAgICB9XG4gICAgaWYgKGNvcnJlY3QpIHtcbiAgICAgIGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID0gYCR7Y29ycmVjdFsxXX1gO1xuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnMTAwJSc7XG4gICAgfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSBgJHtlcnJvclsxXX1gO1xuICAgIH1cbiAgICBpZiAoY29ycmVjdCAmJiBlcnJvciAmJiBjb3JyZWN0WzBdID09PSBlcnJvclswXSkge1xuICAgICAgY29uc3QgdG90YWxBdHRlbXB0cyA9IGNvcnJlY3RbMV0gKyBlcnJvclsxXTtcbiAgICAgIGNvbnN0IGFjY3VyYWN5ID0gKChjb3JyZWN0WzFdIC8gdG90YWxBdHRlbXB0cykgKiAxMDApLnRvRml4ZWQoKTtcbiAgICAgIGl0ZW0uY2VsbHNbNV0uaW5uZXJIVE1MID0gYCR7YWNjdXJhY3l9JWA7XG4gICAgfVxuICAgIGlmIChjb3JyZWN0RGF0YSA9PT0gbnVsbCAmJiBlcnJvckRhdGEgPT09IG51bGwgJiYgY2xpY2tEYXRhID09PSBudWxsKSB7XG4gICAgICBpdGVtLmNlbGxzWzJdLmlubmVySFRNTCA9PT0gJ0NsaWNrJyA/IChpdGVtLmNlbGxzWzJdLmlubmVySFRNTCA9ICdDbGljaycpIDogKGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID0gJy0nKTtcbiAgICAgIGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID09PSAnQ29ycmVjdCcgPyAoaXRlbS5jZWxsc1szXS5pbm5lckhUTUwgPSAnQ29ycmVjdCcpIDogKGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID0gJy0nKTtcbiAgICAgIGl0ZW0uY2VsbHNbNF0uaW5uZXJIVE1MID09PSAnRXJyb3InID8gKGl0ZW0uY2VsbHNbNF0uaW5uZXJIVE1MID0gJ0Vycm9yJykgOiAoaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSAnLScpO1xuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPT09ICdDb3JyZWN0IHNjb3JlJyA/IChpdGVtLmNlbGxzWzVdLmlubmVySFRNTCA9ICdDb3JyZWN0IHNjb3JlJykgOiAoaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnLScpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRTY29yZSgpIHtcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfYnRuJyk7XG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNjb3JlRGF0YSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRTY29yZSgpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJyk7XG4gIGNvbnN0IHJvdyA9IHRhYmxlLnJvd3M7XG4gIGNvbnN0IGhlYWRlciA9IHJvd1swXTtcbiAgbGV0IHNvcnRPcmRlciA9ICdhc2MnO1xuICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChzb3J0T3JkZXIgPT09ICdhc2MnKSB7XG4gICAgICBzb3J0T3JkZXIgPSAnZGVzYyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRPcmRlciA9ICdhc2MnO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5lbmdsaXNoJykpIHtcbiAgICAgIHNvcnRUYWJsZSgwLCBzb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5ydXNzaWFuJykpIHtcbiAgICAgIHNvcnRUYWJsZSgxLCBzb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5jbGljaycpKSB7XG4gICAgICBzb3J0VGFibGUoMiwgc29ydE9yZGVyKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuY29ycmVjdCcpKSB7XG4gICAgICBzb3J0VGFibGUoMywgc29ydE9yZGVyKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuZXJyb3InKSkge1xuICAgICAgc29ydFRhYmxlKDQsIHNvcnRPcmRlcik7XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnBlcmNlbnQnKSkge1xuICAgICAgc29ydFRhYmxlKDUsIHNvcnRPcmRlcik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZShjb2x1bW5JbmRleCwgc29ydERpcmVjdGlvbikge1xuICBsZXQgcm93cywgaSwgeCwgeSwgc2hvdWxkU3dpdGNoO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKTtcbiAgbGV0IHN3aXRjaGluZyA9IHRydWU7XG5cbiAgd2hpbGUgKHN3aXRjaGluZykge1xuICAgIHN3aXRjaGluZyA9IGZhbHNlO1xuICAgIHJvd3MgPSB0YWJsZS5yb3dzO1xuICAgIHNob3VsZFN3aXRjaCA9IGZhbHNlO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IHJvd3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZTtcblxuICAgICAgeCA9IHJvd3NbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJylbY29sdW1uSW5kZXhdO1xuICAgICAgeSA9IHJvd3NbaSArIDFdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZCcpW2NvbHVtbkluZGV4XTtcblxuICAgICAgY29uc3QgeFZhbHVlID0gZ2V0VmFsdWVGb3JTb3J0aW5nKHguaW5uZXJIVE1MKTtcbiAgICAgIGNvbnN0IHlWYWx1ZSA9IGdldFZhbHVlRm9yU29ydGluZyh5LmlubmVySFRNTCk7XG5cbiAgICAgIGlmICh4VmFsdWUgPT09ICctJyAmJiB5VmFsdWUgIT09ICctJykge1xuICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoeVZhbHVlID09PSAnLScgJiYgeFZhbHVlICE9PSAnLScpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgICBpZiAoeFZhbHVlID4geVZhbHVlKSB7XG4gICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0RGlyZWN0aW9uID09PSAnZGVzYycpIHtcbiAgICAgICAgaWYgKHhWYWx1ZSA8IHlWYWx1ZSkge1xuICAgICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3VsZFN3aXRjaCkge1xuICAgICAgcm93c1tpXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyb3dzW2kgKyAxXSwgcm93c1tpXSk7XG4gICAgICBzd2l0Y2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGb3JTb3J0aW5nKHZhbHVlKSB7XG4gIGNvbnN0IG51bWJlclJlZ2V4ID0gL14tP1xcZCsoPzpcXC5cXGQrKT8kLztcbiAgY29uc3QgcGVyY2VudGFnZVJlZ2V4ID0gL14tP1xcZCsoPzpcXC5cXGQrKT8lJC87XG5cbiAgaWYgKG51bWJlclJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2VSZWdleC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJyUnLCAnJykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHtcbiAgYWN0aXZlLFxuICBjcmVhdGVDYXJkLFxuICBjbGlja0NvdW50cyxcbiAgcmVuZGVyQ2F0ZWdvcmllcyxcbiAgcmVuZGVyV29yZHMsXG4gIHJlc2V0U2NvcmUsXG4gIHNjb3JlRGF0YSxcbiAgc29ydFNjb3JlLFxuICBjcmVhdGVFbGVtZW50LFxufSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IG1haW5SZW5kZXJTdWJDYXJkIH0gZnJvbSAnLi9tYWluJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSGVhZGVyU3RydWN0dXJlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgJ2hlYWRlcicpO1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGFpbmVyJyk7XG4gIGNvbnN0IG1lbnUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudScpO1xuICBjb25zdCBidXJnZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudV9fYnVyZ2VyJyk7XG4gIGNvbnN0IGxpbmUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2xpbmUnKTtcbiAgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudCgnbmF2JywgJ21lbnVfX25hdicpO1xuICBjb25zdCBuYXZfbGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJ25hdl9fbGlzdCcpO1xuICBjb25zdCBmaXJzdF9tYWluX2l0ZW0gPSBjcmVhdGVFbGVtZW50KCdsaScsIFsnbmF2X2xpc3RfX2l0ZW0nLCAnX2FjdGl2ZSddLCAnbmFtZScsICdNYWluIFBhZ2UnKTtcbiAgY29uc3Qgc2Vjb25kX3Njb3JlX2l0ZW0gPSBjcmVhdGVFbGVtZW50KCdsaScsICduYXZfbGlzdF9faXRlbScsICduYW1lJywgJ1Njb3JlJyk7XG4gIGNvbnN0IGZpcnN0X2xpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywgWyduYXZfbGlzdF9fbGluaycsICdfYWN0aXZlJ10pO1xuICBjb25zdCBzZWNvbmRfbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCAnbmF2X2xpc3RfX2xpbmsnKTtcbiAgY29uc3Qgc3dpdGNoZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3N3aXRjaGVyJywgJ2Zvcm0tY2hlY2snLCAnZm9ybS1zd2l0Y2gnXSk7XG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbJ2lucHV0JywgJ2Zvcm0tY2hlY2staW5wdXQnXSk7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbJ2xhYmVsJywgJ2Zvcm0tY2hlY2stbGFiZWwnXSk7XG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDEnLCAndGl0bGUnKTtcbiAgY29uc3Qgc2hhZG93ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3NoYWRvdycpO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1RyYWluICYgUGxheSc7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ1RyYWluJztcbiAgZmlyc3RfbGluay50ZXh0Q29udGVudCA9ICdNYWluIFBhZ2UnO1xuICBzZWNvbmRfbGluay50ZXh0Q29udGVudCA9ICdTY29yZSc7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKHNoYWRvdyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3dpdGNoZXIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbWVudS5hcHBlbmRDaGlsZChidXJnZXIpO1xuXG4gIHN3aXRjaGVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgc3dpdGNoZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChuYXZfbGlzdCk7XG5cbiAgbmF2X2xpc3QuYXBwZW5kQ2hpbGQoZmlyc3RfbWFpbl9pdGVtKTtcbiAgbmF2X2xpc3QuYXBwZW5kQ2hpbGQoc2Vjb25kX3Njb3JlX2l0ZW0pO1xuICBmaXJzdF9tYWluX2l0ZW0uYXBwZW5kQ2hpbGQoZmlyc3RfbGluayk7XG4gIHNlY29uZF9zY29yZV9pdGVtLmFwcGVuZENoaWxkKHNlY29uZF9saW5rKTtcbiAgYnVyZ2VyLmFwcGVuZENoaWxkKGxpbmUpO1xuXG4gIHNldFN3aXRjaGVyKCk7XG4gIHNldE5hdk1lbnUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN3aXRjaGVyKCkge1xuICBjb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcicpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpO1xuXG4gIGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIG9wdGlvbnMpIHtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3B0aW9uc1thdHRyXSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGVzKGlucHV0LCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICBpZDogJ2ZsZXhTd2l0Y2hDaGVja0RlZmF1bHQnLFxuICB9KTtcblxuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0Jyk7XG5cbiAgc3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hlY2tlZE1vZGUoaW5wdXQuY2hlY2tlZCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tlZE1vZGUoY2hlY2tlZCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbmF2Jyk7XG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZScpO1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnVyZ2VyJyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG5cbiAgY29uc3Qgc3ViQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJDYXJkJyk7XG4gIGNvbnN0IGNhcmRJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mb19ibG9ja19faW5kaWNhdG9yJyk7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvX2Jsb2NrX19zdWJ0aXRsZScpO1xuICBjb25zdCBjYXJkUm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdGF0ZScpO1xuXG4gIGNvbnN0IHN1YkNhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJDYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IHN0YXJ0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydF9idG4nKTtcbiAgY29uc3QgcmVwZWF0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXRfYnRuJyk7XG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpO1xuXG4gIGNvbnN0IHN1YkNhcmRCbG9ja0NvdW50ID0gc3ViQ2FyZEJsb2NrLmNoaWxkcmVuLmxlbmd0aDtcblxuICBpZiAoY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdUcmFpbic7XG4gICAgY2FyZEluZGljYXRvci5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpKTtcbiAgICBjYXJkVGl0bGUuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKSk7XG4gICAgY2FyZFJvdGF0ZS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpKTtcbiAgICBzdWJDYXJkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpO1xuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgICBsaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgICBzdGFydF9idG4uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gICAgcmVwZWF0X2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgICBoZWFydF9zZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICB9XG4gIGlmIChjaGVja2VkID09PSB0cnVlKSB7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSAnUGxheSc7XG4gICAgc3ViQ2FyZC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpKTtcbiAgICBjYXJkSW5kaWNhdG9yLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIGNhcmRUaXRsZS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpKTtcbiAgICBjYXJkUm90YXRlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKTtcbiAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKTtcbiAgICBpZiAoc3ViQ2FyZEJsb2NrQ291bnQgPiAwKSB7XG4gICAgICBzdGFydF9idG4uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXROYXZNZW51KCkge1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNvbnN0IG5hdl9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19uYXYnKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3Qgc2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoYWRvdycpO1xuXG4gIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSBjYXJkO1xuICAgIGNvbnN0IG5hdl9saXN0X19pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgbmF2X2xpc3QuYXBwZW5kQ2hpbGQobmF2X2xpc3RfX2l0ZW0pO1xuICAgIG5hdl9saXN0X19pdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgbmF2X2xpc3RfX2l0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2X2xpc3RfX2l0ZW0nKTtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9saXN0X19saW5rJyk7XG5cbiAgICBuYXZfbGlzdF9faXRlbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtjYXRlZ29yeX1gKTtcbiAgICBuYXZfbGlzdF9faXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Y2F0ZWdvcnl9YDtcbiAgfSk7XG5cbiAgbmF2X2xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbicpO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0X2J0bicpO1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmF2X2xpc3RfX2l0ZW0nKTtcbiAgICBjb25zdCBjYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNCbG9jaycpO1xuICAgIGNvbnN0IHN1YkNhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJDYXJkc0Jsb2NrJyk7XG4gICAgY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXInKTtcbiAgICBjb25zdCBzdWJDYXJkc0NhdGVyZ29yeSA9IGNhcmRzW2lkXT8uY2F0ZWdvcnk7XG4gICAgaWYgKG5hbWUgPT09IHN1YkNhcmRzQ2F0ZXJnb3J5ICYmIGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgY2FyZCA9IGNhcmRzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IG5hbWUpO1xuICAgICAgY29uc3Qgc3ViQ2FyZHMgPSBjYXJkLndvcmRzO1xuICAgICAgY29uc3QgaXNTdWJCbG9ja0NoaWxkcmVuID0gc3ViQ2FyZEJsb2NrLmNoaWxkcmVuO1xuICAgICAgY29uc3QgaXNCbG9ja0NoaWxkcmVuID0gY2FyZEJsb2NrLmNoaWxkcmVuO1xuICAgICAgY29uc3QgYXJyQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzQmxvY2tDaGlsZHJlbl07XG4gICAgICBjb25zdCBhcnJTdWJCbG9ja0NvbGxlY3Rpb24gPSBbLi4uaXNTdWJCbG9ja0NoaWxkcmVuXTtcbiAgICAgIGFyckJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzU3ViQmxvY2tDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFyclN1YkJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgc3ViQ2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY3JlYXRlQ2FyZChzdWJDYXJkcywgJy5zdWJDYXJkc0Jsb2NrJywgJ3N1YkNhcmQnKTtcbiAgICAgICAgcmVuZGVyV29yZHMoc3ViQ2FyZHMpO1xuICAgICAgICBjbGlja0NvdW50cygpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3ViQmxvY2tDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY3JlYXRlQ2FyZChzdWJDYXJkcywgJy5zdWJDYXJkc0Jsb2NrJywgJ3N1YkNhcmQnKTtcbiAgICAgICAgcmVuZGVyV29yZHMoc3ViQ2FyZHMpO1xuICAgICAgICBjbGlja0NvdW50cygpO1xuICAgICAgfVxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNoYWRvdy5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICByZXNldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGFjdGl2ZShuYW1lLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnTWFpbiBQYWdlJyAmJiBjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGlzU3ViQmxvY2tDaGlsZHJlbiA9IHN1YkNhcmRCbG9jay5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IGlzQmxvY2tDaGlsZHJlbiA9IGNhcmRCbG9jay5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IGFyckJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc0Jsb2NrQ2hpbGRyZW5dO1xuICAgICAgY29uc3QgYXJyU3ViQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzU3ViQmxvY2tDaGlsZHJlbl07XG4gICAgICBhcnJTdWJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBzdWJDYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChpc0Jsb2NrQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBhcnJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZCk7XG4gICAgICAgIGNyZWF0ZUNhcmQoY2FyZHMsICcuY2FyZHNCbG9jaycsICdjYXJkJyk7XG4gICAgICAgIHJlbmRlckNhdGVnb3JpZXMoY2FyZHMpO1xuICAgICAgfVxuICAgICAgaWYgKGlzQmxvY2tDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY3JlYXRlQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgICAgICAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG4gICAgICB9XG4gICAgICBtYWluUmVuZGVyU3ViQ2FyZCgpO1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNoYWRvdy5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICByZXNldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGFjdGl2ZShuYW1lLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnU2NvcmUnICYmIGNsYXNzTmFtZSkge1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNoYWRvdy5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGFjdGl2ZShuYW1lLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgICBzY29yZURhdGEoKTtcbiAgICAgIHJlc2V0U2NvcmUoKTtcbiAgICAgIHNvcnRTY29yZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XG4gICAgc2hhZG93LmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRDYXJkcyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBhY3RpdmUsIGNyZWF0ZUNhcmQsIGNsaWNrQ291bnRzLCByZW5kZXJDYXRlZ29yaWVzLCBjcmVhdGVTY29yZSwgcmVuZGVyV29yZHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IGNoZWNrZWRNb2RlIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNYWluU3RydWN0dXJlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCBbJ3NlY3Rpb24nLCAnX2FjdGl2ZSddKTtcbiAgY29uc3QgY2F0ZWdvcnlDYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmRzQmxvY2snKTtcbiAgY29uc3Qgc3ViQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzdWJDYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IHN0YXJ0X2J0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnc3RhcnRfYnRuJywgJ2J0bicsICdidG4tc2Vjb25kYXJ5J10pO1xuICBjb25zdCByZXBlYXRfYnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydyZXBlYXRfYnRuJywgJ2J0bicsICdidG4tcHJpbWFyeSddKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFydF9zZWN0aW9uJyk7XG4gIHN0YXJ0X2J0bi50ZXh0Q29udGVudCA9ICdTVEFSVCc7XG4gIHJlcGVhdF9idG4udGV4dENvbnRlbnQgPSAnUkVQRUFUJztcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5Q2FyZCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViQ2FyZCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3RhcnRfYnRuKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChyZXBlYXRfYnRuKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydF9zZWN0aW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkU2NvcmUoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY3JlYXRlU2NvcmUoY2FyZHMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlyc3RSZW5kZXJDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNyZWF0ZUNhcmQoY2FyZHMsICcuY2FyZHNCbG9jaycsICdjYXJkJyk7XG4gIHJlbmRlckNhdGVnb3JpZXMoY2FyZHMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpblJlbmRlclN1YkNhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNCbG9jaycpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xuICBjb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcicpO1xuICBjb25zdCBjaGlsZHJlbiA9IGJsb2NrLmNoaWxkcmVuO1xuICBjb25zdCBhcnJDb2xsZWN0aW9uID0gWy4uLmNoaWxkcmVuXTtcbiAgYXJyQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgaWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IG5hbWUpO1xuICAgICAgaWYgKGNhcmRzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IG5hbWUpKSB7XG4gICAgICAgIGFyckNvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGVsZW1lbnQud29yZHM7XG4gICAgICAgIGFjdGl2ZShuYW1lLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgICAgIGNyZWF0ZUNhcmQoY2FyZHMsICcuc3ViQ2FyZHNCbG9jaycsICdzdWJDYXJkJyk7XG4gICAgICAgIHJlbmRlcldvcmRzKHJlbmRlckVsZW1lbnQpO1xuICAgICAgICBjbGlja0NvdW50cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfcm90YXRlJykpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnX3JvdGF0ZScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGNhcmQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFNjb3JlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBidWlsZFNjb3JlQ29udGFpbmVyKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBzY29yZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ3RhYmxlJywgJ3Njb3JlX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNjb3JlSGVhZGVyID0gY3JlYXRlRWxlbWVudCgndHInLCAnc2NvcmVfaGVhZGVyJyk7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ3Jlc2V0X2J0bicsICdidG4nLCAnYnRuLWRhbmdlciddLCAndHlwZScsICdidXR0b24nKTtcbiAgICBjb25zdCBkYXRhQ2VsbEVuZ1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdlbmdsaXNoJyk7XG4gICAgY29uc3QgZGF0YUNlbGxSdXNXb3JkID0gY3JlYXRlRWxlbWVudCgndGQnLCAncnVzc2lhbicpO1xuICAgIGNvbnN0IGRhdGFDZWxsQ2xpY2tXb3JkID0gY3JlYXRlRWxlbWVudCgndGQnLCAnY2xpY2snKTtcbiAgICBjb25zdCBkYXRhQ2VsbENvcnJlY3QgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdjb3JyZWN0Jyk7XG4gICAgY29uc3QgZGF0YUNlbGxFcnJvciA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ2Vycm9yJyk7XG4gICAgY29uc3QgZGF0YUNvcnJlY3RQZXJjZW50ID0gY3JlYXRlRWxlbWVudCgndGQnLCAncGVyY2VudCcpO1xuXG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQgc2NvcmUnO1xuICAgIGRhdGFDZWxsRW5nV29yZC50ZXh0Q29udGVudCA9ICdFbmdsaXNoJztcbiAgICBkYXRhQ2VsbFJ1c1dvcmQudGV4dENvbnRlbnQgPSAnUnVzc2lhbic7XG4gICAgZGF0YUNlbGxDbGlja1dvcmQudGV4dENvbnRlbnQgPSAnQ2xpY2snO1xuICAgIGRhdGFDZWxsQ29ycmVjdC50ZXh0Q29udGVudCA9ICdDb3JyZWN0JztcbiAgICBkYXRhQ2VsbEVycm9yLnRleHRDb250ZW50ID0gJ0Vycm9yJztcbiAgICBkYXRhQ29ycmVjdFBlcmNlbnQudGV4dENvbnRlbnQgPSAnQ29ycmVjdCBzY29yZSc7XG5cbiAgICBibG9jay5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoc2NvcmVDb250YWluZXIpO1xuICAgIHNjb3JlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlSGVhZGVyKTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbEVuZ1dvcmQpO1xuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsUnVzV29yZCk7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxDbGlja1dvcmQpO1xuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsQ29ycmVjdCk7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxFcnJvcik7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNvcnJlY3RQZXJjZW50KTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5kYXRhKSB7XG4gICAgICBpdGVtLndvcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbmV3IFNjb3JlQmxvY2soaXRlbSkucmVuZGVyU2NvcmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBTY29yZUJsb2NrIHtcbiAgY29uc3RydWN0b3IoeyB3b3JkLCB0cmFuc2xhdGlvbiB9KSB7XG4gICAgdGhpcy5kYXRhID0geyB3b3JkLCB0cmFuc2xhdGlvbiB9O1xuICB9XG5cbiAgcmVuZGVyU2NvcmUoKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RySW5mbyA9IGNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgZGF0YUNlbGxFbmdXb3JkID0gY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRhQ2VsbFJ1c1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRhdGFDZWxsQ29ycmVjdCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNlbGxDbGlja1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRhdGFDZWxsRXJyb3IgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRhdGFDb3JyZWN0UGVyY2VudCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICBkYXRhQ2VsbEVuZ1dvcmQudGV4dENvbnRlbnQgPSB0aGlzLmRhdGEud29yZDtcbiAgICBkYXRhQ2VsbFJ1c1dvcmQudGV4dENvbnRlbnQgPSB0aGlzLmRhdGEudHJhbnNsYXRpb247XG4gICAgZGF0YUNlbGxDbGlja1dvcmQudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgZGF0YUNlbGxDb3JyZWN0LnRleHRDb250ZW50ID0gJy0nO1xuICAgIGRhdGFDZWxsRXJyb3IudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgZGF0YUNlbGxFcnJvci50ZXh0Q29udGVudCA9ICctJztcbiAgICBkYXRhQ29ycmVjdFBlcmNlbnQudGV4dENvbnRlbnQgPSAnLSc7XG5cbiAgICB0YWJsZS5hcHBlbmRDaGlsZChzdHJJbmZvKTtcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsRW5nV29yZCk7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbFJ1c1dvcmQpO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNlbGxDbGlja1dvcmQpO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNlbGxDb3JyZWN0KTtcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsRXJyb3IpO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNvcnJlY3RQZXJjZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgcGxheUF1ZGlvIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBXb3JkIHtcbiAgY29uc3RydWN0b3IoeyB3b3JkLCB0cmFuc2xhdGlvbiwgaW1hZ2UsIGF1ZGlvU3JjIH0sIGlkKSB7XG4gICAgdGhpcy5jYXJkRGF0YSA9IHsgd29yZCwgdHJhbnNsYXRpb24sIGltYWdlLCBhdWRpb1NyYyB9O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmNhcmQ7XG4gICAgdGhpcy5jYXJkX19jb3ZlcjtcbiAgICB0aGlzLmNhcmRfX2luZm87XG4gICAgdGhpcy5pbmZvX190aXRsZTtcbiAgICB0aGlzLnJvdGF0ZV9pbWc7XG4gIH1cblxuICByZW5kZXJXb3JkKCkge1xuICAgIHRoaXMuY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuXG4gICAgdGhpcy5jYXJkLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuY2FyZERhdGEud29yZCk7XG4gICAgdGhpcy5jYXJkLmNsYXNzTGlzdC5hZGQoJ3N1YkNhcmQnKTtcblxuICAgIHRoaXMuY2FyZF9fY292ZXIgPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2NvdmVyJyk7XG4gICAgdGhpcy5jYXJkX19pbmZvID0gdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbmZvX2Jsb2NrJyk7XG4gICAgdGhpcy5pbmZvX190aXRsZSA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCcuaW5mb19ibG9ja19fdGl0bGUnKTtcbiAgICB0aGlzLnJvdGF0ZV9pbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAncm90YXRlJywgJ3NyYycsICcuL2Fzc2V0cy9pbWcvcm90YXRlLnN2ZycpO1xuXG4gICAgdGhpcy5pbmZvX190aXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvX2Jsb2NrX19zdWJ0aXRsZScpO1xuICAgIHRoaXMuaW5mb19fdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLndvcmQ7XG4gICAgdGhpcy5jYXJkX19jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3RoaXMuY2FyZERhdGEuaW1hZ2V9JylgO1xuICAgIHRoaXMuY2FyZF9faW5mby5hcHBlbmRDaGlsZCh0aGlzLnJvdGF0ZV9pbWcpO1xuICB9XG5cbiAgcm90YXRlV29yZCgpIHtcbiAgICBjb25zdCByb3RhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLmluZm9fX3RpdGxlLnRleHRDb250ZW50ID0gdGhpcy5jYXJkRGF0YS50cmFuc2xhdGlvbjtcbiAgICAgIHRoaXMuY2FyZC5jbGFzc0xpc3QuYWRkKCdfcm90YXRlJyk7XG4gICAgICB0aGlzLmNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJldHVybnMpO1xuICAgICAgdGhpcy5yb3RhdGVfaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmV0dXJucyA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5mb19fdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLndvcmQ7XG4gICAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnX3JvdGF0ZScpO1xuICAgICAgdGhpcy5jYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZXR1cm5zKTtcbiAgICAgIHRoaXMucm90YXRlX2ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZSk7XG4gICAgfTtcblxuICAgIHRoaXMucm90YXRlX2ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZSk7XG4gIH1cblxuICBwcm9ub3VuY2VXb3JkKCkge1xuICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3N1YkNhcmQnKSB7XG4gICAgICAgIHBsYXlBdWRpbyh0aGlzLmNhcmREYXRhLmF1ZGlvU3JjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguc2NzcydcbmltcG9ydCB7IGJ1aWxkSGVhZGVyU3RydWN0dXJlIH0gZnJvbSAnLi9qcy9oZWFkZXIuanMnXG5pbXBvcnQgeyBtYWluUmVuZGVyU3ViQ2FyZCwgZmlyc3RSZW5kZXJDYXJkLCBidWlsZE1haW5TdHJ1Y3R1cmUsIGJ1aWxkU2NvcmUgfSBmcm9tICcuL2pzL21haW4uanMnXG5cbmJ1aWxkSGVhZGVyU3RydWN0dXJlKClcbmJ1aWxkTWFpblN0cnVjdHVyZSgpXG5idWlsZFNjb3JlKClcbmZpcnN0UmVuZGVyQ2FyZCgpXG5tYWluUmVuZGVyU3ViQ2FyZCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=