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
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/function.js");


class Card {
  constructor(id, cardData) {
    this.id = id;
    this.cardData = cardData;
  }

  buildCardContainer(selector, className) {
    const block = document.querySelector(selector);
    const card = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', className);
    const card__cover = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'card__cover');
    const card__info = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'card__info_block');
    const info__title = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'info_block__title');
    const info__indicator = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'info_block__indicator');

    card.setAttribute('id', this.id);
    block.appendChild(card);
    card.appendChild(card__cover);
    card.appendChild(card__info);
    card__info.appendChild(info__title);
    card__info.appendChild(info__indicator);
  }

  renderCardCategory() {
    const category = new Category(this.cardData, this.id);
    category.renderCategory();
  }

  renderCardWord() {
    const word = new Word(this.cardData, this.id);
    word.renderWord();
    word.rotateWord();
    word.pronounceWord();
  }
}

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

class Word {
  constructor({ word, translation, image, audioSrc }, id) {
    this.cardData = { word, translation, image, audioSrc };
    this.id = id;
  }

  renderWord() {
    const card = document.getElementById(this.id);

    card.setAttribute('name', this.cardData.word);
    card.classList.add('subCard');

    const card__cover = card.querySelector('.card__cover');
    const card__info = card.querySelector('.card__info_block');
    const info__title = card.querySelector('.info_block__title');
    const create_rotate = (0,_function__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'rotate', 'src', './assets/img/rotate.svg');

    info__title.classList.add('info_block__subtitle');
    info__title.textContent = this.cardData.word;
    card__cover.style.backgroundImage = `url('${this.cardData.image}')`;
    card__info.appendChild(create_rotate);
  }

  rotateWord() {
    const card = document.getElementById(this.id);

    const word = this.cardData.word;
    const translate_word = this.cardData.translation;
    const rotate_img = card.querySelector('.rotate');
    const info__title = card.querySelector('.info_block__subtitle');

    function rotate() {
      info__title.textContent = translate_word;
      card.classList.add('_rotate');
    }

    function returns() {
      info__title.innerText = word;
      card.classList.remove('_rotate');
    }

    rotate_img.addEventListener('click', rotate);
    card.addEventListener('mouseleave', returns);
  }

  pronounceWord() {
    const card = document.getElementById(this.id);

    card.addEventListener('click', (e) => {
      if (e.currentTarget.className === 'subCard') {
        (0,_function__WEBPACK_IMPORTED_MODULE_0__.playAudio)(this.cardData.audioSrc);
      }
    });
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
/* harmony export */   buildCard: () => (/* binding */ buildCard),
/* harmony export */   clearHeartSection: () => (/* binding */ clearHeartSection),
/* harmony export */   clickCounts: () => (/* binding */ clickCounts),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createErrorData: () => (/* binding */ createErrorData),
/* harmony export */   createScore: () => (/* binding */ createScore),
/* harmony export */   createSeccessData: () => (/* binding */ createSeccessData),
/* harmony export */   finishGame: () => (/* binding */ finishGame),
/* harmony export */   gameStart: () => (/* binding */ gameStart),
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

function buildCard(data, selector, className) {
  data.forEach((item, id) => {
    const card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(id, item);
    card.buildCardContainer(selector, className);
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

/* export function id(data) {
  let id = (data + 1) * 8
  return id
} */

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
        createSeccessData(correct, word);
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
        createErrorData(error, word);
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
  if (heart.length >= 8) {
    heart[count - 8].style.display = 'none';
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
      body.removeChild(wrongBlock);
      main.classList.toggle('finish');
      let checked = (switcher.firstChild.checked = false);
      (0,_header__WEBPACK_IMPORTED_MODULE_2__.checkedMode)(checked);
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item);
      });
      buildCard(cards, '.cardsBlock', 'card');
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
      buildCard(cards, '.cardsBlock', 'card');
      renderCategories(cards);
    }, 3000);
  }
}

function createSeccessData(arr, data) {
  if (arr.length > 0) {
    let add = false;
    for (let item of arr) {
      if (item[0] === data) {
        ++item[1];
        add = true;
      }
    }
    if (add === false) {
      arr.push([data, 1]);
    }
  }
  if (arr.length === 0) {
    arr.push([data, 1]);
  }
}

function createErrorData(arr, data) {
  if (arr.length > 0) {
    let add = false;
    for (let item of arr) {
      if (item[0] === data) {
        ++item[1];
        add = true;
      }
    }
    if (add === false) {
      arr.push([data, 1]);
    }
  }
  if (arr.length === 0) {
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
        if (click.length > 0) {
          let find = false;
          for (let item of click) {
            if (item[0] === name) {
              ++item[1];
              find = true;
            }
          }
          if (find === false) {
            click.push([name, 1]);
          }
        }
        if (click.length === 0) {
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
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(subCards, '.subCardsBlock', 'subCard');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderWords)(subCards);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)();
      }
      if (isSubBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(subCards, '.subCardsBlock', 'subCard');
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
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(cards, '.cardsBlock', 'card');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderCategories)(cards);
      }
      if (isBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(cards, '.cardsBlock', 'card');
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
  (0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(cards, '.cardsBlock', 'card');
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
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(cards, '.subCardsBlock', 'subCard');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQkFBc0IsK0NBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVc7QUFDakI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVc7QUFDakI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0M7QUFDNEM7O0FBRWpHLG1FQUFvQjtBQUNwQixnRUFBa0I7QUFDbEIsd0RBQVU7QUFDViw2REFBZTtBQUNmLCtEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvaW5kZXguc2Nzcz85Nzc0Iiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvY2FyZC5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9zY29yZS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBwbGF5QXVkaW8gfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihpZCwgY2FyZERhdGEpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5jYXJkRGF0YSA9IGNhcmREYXRhO1xuICB9XG5cbiAgYnVpbGRDYXJkQ29udGFpbmVyKHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IGNhcmRfX2NvdmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmRfX2NvdmVyJyk7XG4gICAgY29uc3QgY2FyZF9faW5mbyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkX19pbmZvX2Jsb2NrJyk7XG4gICAgY29uc3QgaW5mb19fdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdpbmZvX2Jsb2NrX190aXRsZScpO1xuICAgIGNvbnN0IGluZm9fX2luZGljYXRvciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpbmZvX2Jsb2NrX19pbmRpY2F0b3InKTtcblxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZF9fY292ZXIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZF9faW5mbyk7XG4gICAgY2FyZF9faW5mby5hcHBlbmRDaGlsZChpbmZvX190aXRsZSk7XG4gICAgY2FyZF9faW5mby5hcHBlbmRDaGlsZChpbmZvX19pbmRpY2F0b3IpO1xuICB9XG5cbiAgcmVuZGVyQ2FyZENhdGVnb3J5KCkge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gbmV3IENhdGVnb3J5KHRoaXMuY2FyZERhdGEsIHRoaXMuaWQpO1xuICAgIGNhdGVnb3J5LnJlbmRlckNhdGVnb3J5KCk7XG4gIH1cblxuICByZW5kZXJDYXJkV29yZCgpIHtcbiAgICBjb25zdCB3b3JkID0gbmV3IFdvcmQodGhpcy5jYXJkRGF0YSwgdGhpcy5pZCk7XG4gICAgd29yZC5yZW5kZXJXb3JkKCk7XG4gICAgd29yZC5yb3RhdGVXb3JkKCk7XG4gICAgd29yZC5wcm9ub3VuY2VXb3JkKCk7XG4gIH1cbn1cblxuY2xhc3MgQ2F0ZWdvcnkge1xuICBjb25zdHJ1Y3Rvcih7IGNhdGVnb3J5LCBjb3Zlciwgd29yZHMgfSwgaWQpIHtcbiAgICB0aGlzLmNhcmREYXRhID0geyBjYXRlZ29yeSwgY292ZXIsIHdvcmRzIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgcmVuZGVyQ2F0ZWdvcnkoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGNvbnN0IGluZm9fX3F1YW50aXR5ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuaW5mb19ibG9ja19fcXVhbnRpdHknKTtcblxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5jYXJkRGF0YS5jYXRlZ29yeSk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkX19jb3ZlciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2NvdmVyJyk7XG4gICAgY29uc3QgY2FyZF9faW5mbyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2luZm9fYmxvY2snKTtcbiAgICBjb25zdCBpbmZvX190aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmluZm9fYmxvY2tfX3RpdGxlJyk7XG5cbiAgICBpbmZvX190aXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvX2Jsb2NrX190aXRsZScpO1xuICAgIGluZm9fX3RpdGxlLnRleHRDb250ZW50ID0gdGhpcy5jYXJkRGF0YS5jYXRlZ29yeTtcbiAgICBjYXJkX19jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3RoaXMuY2FyZERhdGEuY292ZXJ9JylgO1xuXG4gICAgaWYgKGluZm9fX3F1YW50aXR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjcmVhdGVfcXVhbnRpdHkgPSBjcmVhdGVFbGVtZW50KCdwJywgJ2luZm9fYmxvY2tfX3F1YW50aXR5Jyk7XG4gICAgICBjYXJkX19pbmZvLmFwcGVuZENoaWxkKGNyZWF0ZV9xdWFudGl0eSk7XG4gICAgICBjcmVhdGVfcXVhbnRpdHkudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLndvcmRzLmxlbmd0aDtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgV29yZCB7XG4gIGNvbnN0cnVjdG9yKHsgd29yZCwgdHJhbnNsYXRpb24sIGltYWdlLCBhdWRpb1NyYyB9LCBpZCkge1xuICAgIHRoaXMuY2FyZERhdGEgPSB7IHdvcmQsIHRyYW5zbGF0aW9uLCBpbWFnZSwgYXVkaW9TcmMgfTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICByZW5kZXJXb3JkKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcblxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5jYXJkRGF0YS53b3JkKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3N1YkNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRfX2NvdmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY292ZXInKTtcbiAgICBjb25zdCBjYXJkX19pbmZvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW5mb19ibG9jaycpO1xuICAgIGNvbnN0IGluZm9fX3RpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuaW5mb19ibG9ja19fdGl0bGUnKTtcbiAgICBjb25zdCBjcmVhdGVfcm90YXRlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJ3JvdGF0ZScsICdzcmMnLCAnLi9hc3NldHMvaW1nL3JvdGF0ZS5zdmcnKTtcblxuICAgIGluZm9fX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9fYmxvY2tfX3N1YnRpdGxlJyk7XG4gICAgaW5mb19fdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLndvcmQ7XG4gICAgY2FyZF9fY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt0aGlzLmNhcmREYXRhLmltYWdlfScpYDtcbiAgICBjYXJkX19pbmZvLmFwcGVuZENoaWxkKGNyZWF0ZV9yb3RhdGUpO1xuICB9XG5cbiAgcm90YXRlV29yZCgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG5cbiAgICBjb25zdCB3b3JkID0gdGhpcy5jYXJkRGF0YS53b3JkO1xuICAgIGNvbnN0IHRyYW5zbGF0ZV93b3JkID0gdGhpcy5jYXJkRGF0YS50cmFuc2xhdGlvbjtcbiAgICBjb25zdCByb3RhdGVfaW1nID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcucm90YXRlJyk7XG4gICAgY29uc3QgaW5mb19fdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX19zdWJ0aXRsZScpO1xuXG4gICAgZnVuY3Rpb24gcm90YXRlKCkge1xuICAgICAgaW5mb19fdGl0bGUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVfd29yZDtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnX3JvdGF0ZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJldHVybnMoKSB7XG4gICAgICBpbmZvX190aXRsZS5pbm5lclRleHQgPSB3b3JkO1xuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfcm90YXRlJyk7XG4gICAgfVxuXG4gICAgcm90YXRlX2ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZSk7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmV0dXJucyk7XG4gIH1cblxuICBwcm9ub3VuY2VXb3JkKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT09ICdzdWJDYXJkJykge1xuICAgICAgICBwbGF5QXVkaW8odGhpcy5jYXJkRGF0YS5hdWRpb1NyYyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJkcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi9hc3NldHMvd29yZHMtY2FyZHMuanNvbicpO1xuICBsZXQgY2FyZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjYXJkcztcbn0iLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7IGdldENhcmRzIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNoZWNrZWRNb2RlIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgU2NvcmUgfSBmcm9tICcuL3Njb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWVzLCBhdHRyLCB2YWx1ZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWVzKSkge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2xhc3NOYW1lcyA9PT0gJ3N0cmluZycpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XG4gIH1cbiAgYXR0ciAmJiB2YWx1ZSAmJiBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXJkKGRhdGEsIHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpZCwgaXRlbSk7XG4gICAgY2FyZC5idWlsZENhcmRDb250YWluZXIoc2VsZWN0b3IsIGNsYXNzTmFtZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllcyhkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoaXRlbSwgaWQpID0+IHtcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaWQsIGl0ZW0pO1xuICAgIGNhcmQucmVuZGVyQ2FyZENhdGVnb3J5KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV29yZHMoZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGl0ZW0sIGlkKSA9PiB7XG4gICAgY29uc3Qgc3ViQ2FyZCA9IG5ldyBDYXJkKGlkLCBpdGVtKTtcbiAgICBzdWJDYXJkLnJlbmRlckNhcmRXb3JkKCk7XG4gIH0pO1xuICBnYW1lU3RhcnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjb3JlKGRhdGEpIHtcbiAgY29uc3Qgc2NvcmUgPSBuZXcgU2NvcmUoZGF0YSk7XG4gIHNjb3JlLmJ1aWxkU2NvcmVDb250YWluZXIoJ21haW4nKTtcbiAgc2NvcmUucmVuZGVyU2NvcmUoKTtcbn1cblxuLyogZXhwb3J0IGZ1bmN0aW9uIGlkKGRhdGEpIHtcbiAgbGV0IGlkID0gKGRhdGEgKyAxKSAqIDhcbiAgcmV0dXJuIGlkXG59ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5QXVkaW8odXJsKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHVybCk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZShjYXRlZ29yeSwgZGF0YSkge1xuICBjb25zdCBnZXRDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhKTtcbiAgZ2V0Q29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgY29uc3QgbGluayA9IGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKG5hbWUgPT09IGNhdGVnb3J5KSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vRm9yIEdhbWVcbmV4cG9ydCBmdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0X2J0bicpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuICBsZXQgYyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc3RhcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gICAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGNvbnN0IG5hdmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBuYXZsaXN0LmNoaWxkcmVuO1xuICAgIGNvbnN0IGFyckVsZW1lbnQgPSBbLi4uY2hpbGRyZW5dO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJFbGVtZW50LmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2xhc3NOYW1lID09PSAnbmF2X2xpc3RfX2l0ZW0gX2FjdGl2ZScpO1xuICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBwbGF5R2FtZShpZCk7XG4gIH07XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gIG5hdmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubmF2X2xpc3RfX2xpbmsnKSkge1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIHN0YXJ0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdW5kKGRhdGEpIHtcbiAgbGV0IGFyciA9IGRhdGE7XG4gIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgbGV0IG9ialdvcmQgPSBhcnIuc3BsaWNlKHJhbmRvbU51bWJlciwgMSk7XG4gIGxldCBhdWRpbyA9IG9ialdvcmRbMF0uYXVkaW9TcmM7XG4gIHBsYXlBdWRpbyhhdWRpbyk7XG4gIHJldHVybiBvYmpXb3JkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGxheUdhbWUoaWQpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNvbnN0IGFycmF5V29yZCA9IGRhdGFbaWRdLndvcmRzO1xuICBjb25zdCBzdWJDYXJkc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3QgcmVwZWF0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXRfYnRuJyk7XG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuICBoZWFydF9zZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICBjb25zdCBhcnJEYXRhID0gYXJyYXlXb3JkO1xuICBsZXQgZGF0YVdvcmQgPSBnZXRTb3VuZChhcnJEYXRhKTtcbiAgY29uc3QgZ2V0Q29ycmVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvcnJlY3QnKSk7XG4gIGNvbnN0IGdldEVycm9yID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXJyb3InKSk7XG4gIGNvbnN0IGNvcnJlY3QgPSBnZXRDb3JyZWN0ID8gWy4uLmdldENvcnJlY3RdIDogW107XG4gIGNvbnN0IGVycm9yID0gZ2V0RXJyb3IgPyBbLi4uZ2V0RXJyb3JdIDogW107XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCByZXBlYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyckRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc291bmQgPSBkYXRhV29yZFswXS5hdWRpb1NyYztcbiAgICAgIHBsYXlBdWRpbyhzb3VuZCk7XG4gICAgfVxuICB9O1xuICBsZXQgY2FyZE9wZXJhdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zdWJDYXJkJykpIHtcbiAgICAgIGxldCBvYmogPSBkYXRhV29yZDtcbiAgICAgIGxldCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhcnQuY2xhc3NMaXN0LmFkZCgnaGVhcnQnKTtcbiAgICAgIGxldCBzdWJDYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBzdWJDYXJkTmFtZSA9IHN1YkNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBsZXQgd29yZCA9IG9ialswXS53b3JkO1xuICAgICAgaWYgKHN1YkNhcmROYW1lID09PSB3b3JkKSB7XG4gICAgICAgICsrY291bnQ7XG4gICAgICAgIHN1YkNhcmQuY2xhc3NMaXN0LmFkZCgncGFzc2VkJyk7XG4gICAgICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gICAgICAgIGhlYXJ0X3NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhcnQpO1xuICAgICAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL2NvcnJlY3QubXAzJyk7XG4gICAgICAgIGNyZWF0ZVNlY2Nlc3NEYXRhKGNvcnJlY3QsIHdvcmQpO1xuICAgICAgICByZW1vdmVIZWFydChjb3VudCk7XG4gICAgICAgIGlmIChhcnJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRhdGFXb3JkID0gZ2V0U291bmQoYXJyRGF0YSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5pc2hHYW1lKGNvcnJlY3QsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKytjb3VudDtcbiAgICAgICAgaGVhcnQuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbiAgICAgICAgaGVhcnRfc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgICAgIHBsYXlBdWRpbygnLi9hc3NldHMvYXVkaW8vZXJyb3IubXAzJyk7XG4gICAgICAgIGNyZWF0ZUVycm9yRGF0YShlcnJvciwgd29yZCk7XG4gICAgICAgIHJlbW92ZUhlYXJ0KGNvdW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHN1YkNhcmRzQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXJkT3BlcmF0aW9uKTtcbiAgcmVwZWF0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcGVhdCk7XG4gIG5hdmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubmF2X2xpc3RfX2xpbmsnKSkge1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIHJlcGVhdF9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXBlYXQpO1xuICAgICAgc3ViQ2FyZHNCbG9jay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRPcGVyYXRpb24pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckhlYXJ0U2VjdGlvbigpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG4gIHdoaWxlIChzZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICBzZWN0aW9uLnJlbW92ZUNoaWxkKHNlY3Rpb24uZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhlYXJ0KGNvdW50KSB7XG4gIGNvbnN0IGhlYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYXJ0Jyk7XG4gIGlmIChoZWFydC5sZW5ndGggPj0gOCkge1xuICAgIGhlYXJ0W2NvdW50IC0gOF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluaXNoR2FtZShjb3JyZWN0QXJyLCBlcnJvckFycikge1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpO1xuICBjb25zdCBzdWJDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViQ2FyZHNCbG9jaycpO1xuICBjb25zdCBpc1N1YkJsb2NrQ2hpbGRyZW4gPSBzdWJDYXJkQmxvY2suY2hpbGRyZW47XG4gIGNvbnN0IGFyclN1YkJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc1N1YkJsb2NrQ2hpbGRyZW5dO1xuICBjb25zdCBjaGlsZHJlbiA9IGhlYXJ0X3NlY3Rpb24uY2hpbGRyZW47XG4gIGNvbnN0IGFyckNvbGxlY3Rpb24gPSBbLi4uY2hpbGRyZW5dO1xuICBjb25zdCBjb3VudHMgPSBhcnJDb2xsZWN0aW9uLnJlZHVjZSgocHJldmlvdXNseSwgY3VycmVudCkgPT4ge1xuICAgIHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdID0gKHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdIHx8IDApICsgMTtcbiAgICByZXR1cm4gcHJldmlvdXNseTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IHdyb25nID0gY291bnRzWydoZWFydCB3cm9uZyddO1xuICBjb25zdCByaWdodCA9IGNvdW50c1snaGVhcnQgcmlnaHQnXTtcblxuICBjb25zdCBjb3JyZWN0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGNvcnJlY3RBcnIpO1xuICBjb25zdCBlcnJvckpzb24gPSBKU09OLnN0cmluZ2lmeShlcnJvckFycik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JyZWN0JywgY29ycmVjdEpzb24pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXJyb3InLCBlcnJvckpzb24pO1xuXG4gIGlmICh3cm9uZykge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGNvbnN0IHdyb25nX2Jsb2NrID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICd3cm9uZy1ibG9jaycpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cm9uZ19jb250YWluZXInKTtcbiAgICBjb25zdCBtaXN0YWtlcyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnd3JvbmdfbWlzdGFrZXMnKTtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3cm9uZ19pbWFnZScpO1xuXG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JvbmdfYmxvY2spO1xuICAgIHdyb25nX2Jsb2NrLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWlzdGFrZXMpO1xuXG4gICAgbWlzdGFrZXMudGV4dENvbnRlbnQgPSBgTWlzdGFrZXM6ICR7d3Jvbmd9YDtcbiAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL2ZhaWx1cmUubXAzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHdyb25nQmxvY2spO1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcbiAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgc3ViQ2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBidWlsZENhcmQoY2FyZHMsICcuY2FyZHNCbG9jaycsICdjYXJkJyk7XG4gICAgICByZW5kZXJDYXRlZ29yaWVzKGNhcmRzKTtcbiAgICAgIGNsZWFySGVhcnRTZWN0aW9uKCk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBpZiAoIXdyb25nKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3QgcmlnaHRCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAncmlnaHQtYmxvY2snKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncmlnaHRfY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGVyZmVjdCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAncmlnaHRfcGVyZmVjdCcpO1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3JpZ2h0X2ltYWdlJyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbmlzaCcpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChyaWdodEJsb2NrKTtcbiAgICByaWdodEJsb2NrLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGVyZmVjdCk7XG5cbiAgICBwZXJmZWN0LnRleHRDb250ZW50ID0gJ0dvb2Qgam9iJztcbiAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL3N1Y2Nlc3MubXAzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHJpZ2h0QmxvY2spO1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcbiAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgc3ViQ2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBjbGVhckhlYXJ0U2VjdGlvbigpO1xuICAgICAgYnVpbGRDYXJkKGNhcmRzLCAnLmNhcmRzQmxvY2snLCAnY2FyZCcpO1xuICAgICAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlY2Nlc3NEYXRhKGFyciwgZGF0YSkge1xuICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgYWRkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcbiAgICAgIGlmIChpdGVtWzBdID09PSBkYXRhKSB7XG4gICAgICAgICsraXRlbVsxXTtcbiAgICAgICAgYWRkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFkZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFyci5wdXNoKFtkYXRhLCAxXSk7XG4gICAgfVxuICB9XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgYXJyLnB1c2goW2RhdGEsIDFdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXJyb3JEYXRhKGFyciwgZGF0YSkge1xuICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgYWRkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcbiAgICAgIGlmIChpdGVtWzBdID09PSBkYXRhKSB7XG4gICAgICAgICsraXRlbVsxXTtcbiAgICAgICAgYWRkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFkZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFyci5wdXNoKFtkYXRhLCAxXSk7XG4gICAgfVxuICB9XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgYXJyLnB1c2goW2RhdGEsIDFdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDb3VudHMoKSB7XG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBibG9jay5jaGlsZHJlbjtcbiAgY29uc3QgYXJyQ29sbGVjdGlvbiA9IFsuLi5jaGlsZHJlbl07XG4gIGFyckNvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IG5hbWUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgaWYgKGNhcmQuY2xhc3NOYW1lID09PSAnc3ViQ2FyZCcpIHtcbiAgICAgICAgY29uc3QgZ2V0Q2xpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGljaycpKTtcbiAgICAgICAgY29uc3QgY2xpY2sgPSBnZXRDbGljayA/IFsuLi5nZXRDbGlja10gOiBbXTtcbiAgICAgICAgaWYgKGNsaWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgZmluZCA9IGZhbHNlO1xuICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY2xpY2spIHtcbiAgICAgICAgICAgIGlmIChpdGVtWzBdID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICsraXRlbVsxXTtcbiAgICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaW5kID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xpY2sucHVzaChbbmFtZSwgMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY2xpY2sucHVzaChbbmFtZSwgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrSnNvbiA9IEpTT04uc3RyaW5naWZ5KGNsaWNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsaWNrJywgY2xpY2tKc29uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29yZURhdGEoKSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX2NvbnRhaW5lcicpO1xuICBjb25zdCByb3cgPSB0YWJsZS5yb3dzO1xuICBjb25zdCBjb3JyZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvcnJlY3QnKSk7XG4gIGNvbnN0IGVycm9yRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Vycm9yJykpO1xuICBjb25zdCBjbGlja0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGljaycpKTtcbiAgZm9yIChsZXQgaXRlbSBvZiByb3cpIHtcbiAgICBjb25zdCBmaXJzdENlbGwgPSBpdGVtLmNlbGxzWzBdLmlubmVySFRNTDtcbiAgICBjb25zdCBjbGljayA9IGNsaWNrRGF0YSAmJiBjbGlja0RhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBjb25zdCBjb3JyZWN0ID0gY29ycmVjdERhdGEgJiYgY29ycmVjdERhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBjb25zdCBlcnJvciA9IGVycm9yRGF0YSAmJiBlcnJvckRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBpZiAoY2xpY2spIHtcbiAgICAgIGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID0gYCR7Y2xpY2tbMV19YDtcbiAgICB9XG4gICAgaWYgKGNvcnJlY3QpIHtcbiAgICAgIGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID0gYCR7Y29ycmVjdFsxXX1gO1xuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnMTAwJSc7XG4gICAgfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSBgJHtlcnJvclsxXX1gO1xuICAgIH1cbiAgICBpZiAoY29ycmVjdCAmJiBlcnJvciAmJiBjb3JyZWN0WzBdID09PSBlcnJvclswXSkge1xuICAgICAgY29uc3QgdG90YWxBdHRlbXB0cyA9IGNvcnJlY3RbMV0gKyBlcnJvclsxXTtcbiAgICAgIGNvbnN0IGFjY3VyYWN5ID0gKChjb3JyZWN0WzFdIC8gdG90YWxBdHRlbXB0cykgKiAxMDApLnRvRml4ZWQoKTtcbiAgICAgIGl0ZW0uY2VsbHNbNV0uaW5uZXJIVE1MID0gYCR7YWNjdXJhY3l9JWA7XG4gICAgfVxuICAgIGlmIChjb3JyZWN0RGF0YSA9PT0gbnVsbCAmJiBlcnJvckRhdGEgPT09IG51bGwgJiYgY2xpY2tEYXRhID09PSBudWxsKSB7XG4gICAgICBpdGVtLmNlbGxzWzJdLmlubmVySFRNTCA9PT0gJ0NsaWNrJyA/IChpdGVtLmNlbGxzWzJdLmlubmVySFRNTCA9ICdDbGljaycpIDogKGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID0gJy0nKTtcbiAgICAgIGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID09PSAnQ29ycmVjdCcgPyAoaXRlbS5jZWxsc1szXS5pbm5lckhUTUwgPSAnQ29ycmVjdCcpIDogKGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID0gJy0nKTtcbiAgICAgIGl0ZW0uY2VsbHNbNF0uaW5uZXJIVE1MID09PSAnRXJyb3InID8gKGl0ZW0uY2VsbHNbNF0uaW5uZXJIVE1MID0gJ0Vycm9yJykgOiAoaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSAnLScpO1xuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPT09ICdDb3JyZWN0IHNjb3JlJyA/IChpdGVtLmNlbGxzWzVdLmlubmVySFRNTCA9ICdDb3JyZWN0IHNjb3JlJykgOiAoaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnLScpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRTY29yZSgpIHtcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfYnRuJyk7XG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNjb3JlRGF0YSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRTY29yZSgpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJyk7XG4gIGNvbnN0IHJvdyA9IHRhYmxlLnJvd3M7XG4gIGNvbnN0IGhlYWRlciA9IHJvd1swXTtcbiAgbGV0IHNvcnRPcmRlciA9ICdhc2MnO1xuICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChzb3J0T3JkZXIgPT09ICdhc2MnKSB7XG4gICAgICBzb3J0T3JkZXIgPSAnZGVzYyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRPcmRlciA9ICdhc2MnO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5lbmdsaXNoJykpIHtcbiAgICAgIHNvcnRUYWJsZSgwLCBzb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5ydXNzaWFuJykpIHtcbiAgICAgIHNvcnRUYWJsZSgxLCBzb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5jbGljaycpKSB7XG4gICAgICBzb3J0VGFibGUoMiwgc29ydE9yZGVyKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuY29ycmVjdCcpKSB7XG4gICAgICBzb3J0VGFibGUoMywgc29ydE9yZGVyKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuZXJyb3InKSkge1xuICAgICAgc29ydFRhYmxlKDQsIHNvcnRPcmRlcik7XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnBlcmNlbnQnKSkge1xuICAgICAgc29ydFRhYmxlKDUsIHNvcnRPcmRlcik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZShjb2x1bW5JbmRleCwgc29ydERpcmVjdGlvbikge1xuICBsZXQgcm93cywgaSwgeCwgeSwgc2hvdWxkU3dpdGNoO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKTtcbiAgbGV0IHN3aXRjaGluZyA9IHRydWU7XG5cbiAgd2hpbGUgKHN3aXRjaGluZykge1xuICAgIHN3aXRjaGluZyA9IGZhbHNlO1xuICAgIHJvd3MgPSB0YWJsZS5yb3dzO1xuICAgIHNob3VsZFN3aXRjaCA9IGZhbHNlO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IHJvd3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZTtcblxuICAgICAgeCA9IHJvd3NbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJylbY29sdW1uSW5kZXhdO1xuICAgICAgeSA9IHJvd3NbaSArIDFdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZCcpW2NvbHVtbkluZGV4XTtcblxuICAgICAgY29uc3QgeFZhbHVlID0gZ2V0VmFsdWVGb3JTb3J0aW5nKHguaW5uZXJIVE1MKTtcbiAgICAgIGNvbnN0IHlWYWx1ZSA9IGdldFZhbHVlRm9yU29ydGluZyh5LmlubmVySFRNTCk7XG5cbiAgICAgIGlmICh4VmFsdWUgPT09ICctJyAmJiB5VmFsdWUgIT09ICctJykge1xuICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoeVZhbHVlID09PSAnLScgJiYgeFZhbHVlICE9PSAnLScpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgICBpZiAoeFZhbHVlID4geVZhbHVlKSB7XG4gICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0RGlyZWN0aW9uID09PSAnZGVzYycpIHtcbiAgICAgICAgaWYgKHhWYWx1ZSA8IHlWYWx1ZSkge1xuICAgICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3VsZFN3aXRjaCkge1xuICAgICAgcm93c1tpXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyb3dzW2kgKyAxXSwgcm93c1tpXSk7XG4gICAgICBzd2l0Y2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGb3JTb3J0aW5nKHZhbHVlKSB7XG4gIGNvbnN0IG51bWJlclJlZ2V4ID0gL14tP1xcZCsoPzpcXC5cXGQrKT8kLztcbiAgY29uc3QgcGVyY2VudGFnZVJlZ2V4ID0gL14tP1xcZCsoPzpcXC5cXGQrKT8lJC87XG5cbiAgaWYgKG51bWJlclJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2VSZWdleC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJyUnLCAnJykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHtcbiAgYWN0aXZlLFxuICBidWlsZENhcmQsXG4gIGNsaWNrQ291bnRzLFxuICByZW5kZXJDYXRlZ29yaWVzLFxuICByZW5kZXJXb3JkcyxcbiAgcmVzZXRTY29yZSxcbiAgc2NvcmVEYXRhLFxuICBzb3J0U2NvcmUsXG4gIGNyZWF0ZUVsZW1lbnQsXG59IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgbWFpblJlbmRlclN1YkNhcmQgfSBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRIZWFkZXJTdHJ1Y3R1cmUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWluZXInKTtcbiAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51Jyk7XG4gIGNvbnN0IGJ1cmdlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51X19idXJnZXInKTtcbiAgY29uc3QgbGluZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbGluZScpO1xuICBjb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KCduYXYnLCAnbWVudV9fbmF2Jyk7XG4gIGNvbnN0IG5hdl9saXN0ID0gY3JlYXRlRWxlbWVudCgndWwnLCAnbmF2X19saXN0Jyk7XG4gIGNvbnN0IGZpcnN0X21haW5faXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgWyduYXZfbGlzdF9faXRlbScsICdfYWN0aXZlJ10sICduYW1lJywgJ01haW4gUGFnZScpO1xuICBjb25zdCBzZWNvbmRfc2NvcmVfaXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ25hdl9saXN0X19pdGVtJywgJ25hbWUnLCAnU2NvcmUnKTtcbiAgY29uc3QgZmlyc3RfbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ25hdl9saXN0X19saW5rJywgJ19hY3RpdmUnXSk7XG4gIGNvbnN0IHNlY29uZF9saW5rID0gY3JlYXRlRWxlbWVudCgnYScsICduYXZfbGlzdF9fbGluaycpO1xuICBjb25zdCBzd2l0Y2hlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc3dpdGNoZXInLCAnZm9ybS1jaGVjaycsICdmb3JtLXN3aXRjaCddKTtcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIFsnaW5wdXQnLCAnZm9ybS1jaGVjay1pbnB1dCddKTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIFsnbGFiZWwnLCAnZm9ybS1jaGVjay1sYWJlbCddKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsICd0aXRsZScpO1xuICBjb25zdCBzaGFkb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2hhZG93Jyk7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVHJhaW4gJiBQbGF5JztcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnVHJhaW4nO1xuICBmaXJzdF9saW5rLnRleHRDb250ZW50ID0gJ01haW4gUGFnZSc7XG4gIHNlY29uZF9saW5rLnRleHRDb250ZW50ID0gJ1Njb3JlJztcblxuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2hhZG93KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzd2l0Y2hlcik7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChuYXYpO1xuICBtZW51LmFwcGVuZENoaWxkKGJ1cmdlcik7XG5cbiAgc3dpdGNoZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBzd2l0Y2hlci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdl9saXN0KTtcblxuICBuYXZfbGlzdC5hcHBlbmRDaGlsZChmaXJzdF9tYWluX2l0ZW0pO1xuICBuYXZfbGlzdC5hcHBlbmRDaGlsZChzZWNvbmRfc2NvcmVfaXRlbSk7XG4gIGZpcnN0X21haW5faXRlbS5hcHBlbmRDaGlsZChmaXJzdF9saW5rKTtcbiAgc2Vjb25kX3Njb3JlX2l0ZW0uYXBwZW5kQ2hpbGQoc2Vjb25kX2xpbmspO1xuICBidXJnZXIuYXBwZW5kQ2hpbGQobGluZSk7XG5cbiAgc2V0U3dpdGNoZXIoKTtcbiAgc2V0TmF2TWVudSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3dpdGNoZXIoKSB7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Jyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgb3B0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBvcHRpb25zW2F0dHJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIGlkOiAnZmxleFN3aXRjaENoZWNrRGVmYXVsdCcsXG4gIH0pO1xuXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZsZXhTd2l0Y2hDaGVja0RlZmF1bHQnKTtcblxuICBzd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGVja2VkTW9kZShpbnB1dC5jaGVja2VkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja2VkTW9kZShjaGVja2VkKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19uYXYnKTtcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lJyk7XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKTtcblxuICBjb25zdCBzdWJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1YkNhcmQnKTtcbiAgY29uc3QgY2FyZEluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvX2Jsb2NrX19pbmRpY2F0b3InKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm9fYmxvY2tfX3N1YnRpdGxlJyk7XG4gIGNvbnN0IGNhcmRSb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJyk7XG5cbiAgY29uc3Qgc3ViQ2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3Qgc3RhcnRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCByZXBlYXRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdF9idG4nKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG5cbiAgY29uc3Qgc3ViQ2FyZEJsb2NrQ291bnQgPSBzdWJDYXJkQmxvY2suY2hpbGRyZW4ubGVuZ3RoO1xuXG4gIGlmIChjaGVja2VkID09PSBmYWxzZSkge1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1RyYWluJztcbiAgICBjYXJkSW5kaWNhdG9yLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpO1xuICAgIGNhcmRUaXRsZS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpKTtcbiAgICBjYXJkUm90YXRlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpO1xuICAgIHN1YkNhcmQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKSk7XG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIHN0YXJ0X2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgICByZXBlYXRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIGhlYXJ0X3NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gIH1cbiAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQbGF5JztcbiAgICBzdWJDYXJkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIGNhcmRJbmRpY2F0b3IuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSk7XG4gICAgY2FyZFRpdGxlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIGNhcmRSb3RhdGUuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJyk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGlmIChzdWJDYXJkQmxvY2tDb3VudCA+IDApIHtcbiAgICAgIHN0YXJ0X2J0bi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE5hdk1lbnUoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY29uc3QgbmF2X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX25hdicpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhZG93Jyk7XG5cbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IGNhcmQ7XG4gICAgY29uc3QgbmF2X2xpc3RfX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBuYXZfbGlzdC5hcHBlbmRDaGlsZChuYXZfbGlzdF9faXRlbSk7XG4gICAgbmF2X2xpc3RfX2l0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICBuYXZfbGlzdF9faXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfbGlzdF9faXRlbScpO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2X2xpc3RfX2xpbmsnKTtcblxuICAgIG5hdl9saXN0X19pdGVtLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke2NhdGVnb3J5fWApO1xuICAgIG5hdl9saXN0X19pdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtjYXRlZ29yeX1gO1xuICB9KTtcblxuICBuYXZfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJyk7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJyk7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfYnRuJyk7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfbGlzdF9faXRlbScpO1xuICAgIGNvbnN0IGNhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc0Jsb2NrJyk7XG4gICAgY29uc3Qgc3ViQ2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgICBjb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcicpO1xuICAgIGNvbnN0IHN1YkNhcmRzQ2F0ZXJnb3J5ID0gY2FyZHNbaWRdPy5jYXRlZ29yeTtcbiAgICBpZiAobmFtZSA9PT0gc3ViQ2FyZHNDYXRlcmdvcnkgJiYgY2xhc3NOYW1lKSB7XG4gICAgICBjb25zdCBjYXJkID0gY2FyZHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gbmFtZSk7XG4gICAgICBjb25zdCBzdWJDYXJkcyA9IGNhcmQud29yZHM7XG4gICAgICBjb25zdCBpc1N1YkJsb2NrQ2hpbGRyZW4gPSBzdWJDYXJkQmxvY2suY2hpbGRyZW47XG4gICAgICBjb25zdCBpc0Jsb2NrQ2hpbGRyZW4gPSBjYXJkQmxvY2suY2hpbGRyZW47XG4gICAgICBjb25zdCBhcnJCbG9ja0NvbGxlY3Rpb24gPSBbLi4uaXNCbG9ja0NoaWxkcmVuXTtcbiAgICAgIGNvbnN0IGFyclN1YkJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc1N1YkJsb2NrQ2hpbGRyZW5dO1xuICAgICAgYXJyQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoaXNTdWJCbG9ja0NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBzdWJDYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBidWlsZENhcmQoc3ViQ2FyZHMsICcuc3ViQ2FyZHNCbG9jaycsICdzdWJDYXJkJyk7XG4gICAgICAgIHJlbmRlcldvcmRzKHN1YkNhcmRzKTtcbiAgICAgICAgY2xpY2tDb3VudHMoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N1YkJsb2NrQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZCk7XG4gICAgICAgIGJ1aWxkQ2FyZChzdWJDYXJkcywgJy5zdWJDYXJkc0Jsb2NrJywgJ3N1YkNhcmQnKTtcbiAgICAgICAgcmVuZGVyV29yZHMoc3ViQ2FyZHMpO1xuICAgICAgICBjbGlja0NvdW50cygpO1xuICAgICAgfVxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNoYWRvdy5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICByZXNldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGFjdGl2ZShuYW1lLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnTWFpbiBQYWdlJyAmJiBjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGlzU3ViQmxvY2tDaGlsZHJlbiA9IHN1YkNhcmRCbG9jay5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IGlzQmxvY2tDaGlsZHJlbiA9IGNhcmRCbG9jay5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IGFyckJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc0Jsb2NrQ2hpbGRyZW5dO1xuICAgICAgY29uc3QgYXJyU3ViQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzU3ViQmxvY2tDaGlsZHJlbl07XG4gICAgICBhcnJTdWJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBzdWJDYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChpc0Jsb2NrQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBhcnJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZCk7XG4gICAgICAgIGJ1aWxkQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgICAgICAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG4gICAgICB9XG4gICAgICBpZiAoaXNCbG9ja0NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBidWlsZENhcmQoY2FyZHMsICcuY2FyZHNCbG9jaycsICdjYXJkJyk7XG4gICAgICAgIHJlbmRlckNhdGVnb3JpZXMoY2FyZHMpO1xuICAgICAgfVxuICAgICAgbWFpblJlbmRlclN1YkNhcmQoKTtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzaGFkb3cuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICBhY3RpdmUobmFtZSwgJy5uYXZfbGlzdF9faXRlbScpO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gJ1Njb3JlJyAmJiBjbGFzc05hbWUpIHtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzaGFkb3cuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICBhY3RpdmUobmFtZSwgJy5uYXZfbGlzdF9faXRlbScpO1xuICAgICAgc2NvcmVEYXRhKCk7XG4gICAgICByZXNldFNjb3JlKCk7XG4gICAgICBzb3J0U2NvcmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKTtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xuICAgIHNoYWRvdy5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgYWN0aXZlLCBidWlsZENhcmQsIGNsaWNrQ291bnRzLCByZW5kZXJDYXRlZ29yaWVzLCBjcmVhdGVTY29yZSwgcmVuZGVyV29yZHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IGNoZWNrZWRNb2RlIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNYWluU3RydWN0dXJlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCBbJ3NlY3Rpb24nLCAnX2FjdGl2ZSddKTtcbiAgY29uc3QgY2F0ZWdvcnlDYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmRzQmxvY2snKTtcbiAgY29uc3Qgc3ViQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzdWJDYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IHN0YXJ0X2J0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnc3RhcnRfYnRuJywgJ2J0bicsICdidG4tc2Vjb25kYXJ5J10pO1xuICBjb25zdCByZXBlYXRfYnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydyZXBlYXRfYnRuJywgJ2J0bicsICdidG4tcHJpbWFyeSddKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFydF9zZWN0aW9uJyk7XG4gIHN0YXJ0X2J0bi50ZXh0Q29udGVudCA9ICdTVEFSVCc7XG4gIHJlcGVhdF9idG4udGV4dENvbnRlbnQgPSAnUkVQRUFUJztcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5Q2FyZCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViQ2FyZCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3RhcnRfYnRuKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChyZXBlYXRfYnRuKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydF9zZWN0aW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkU2NvcmUoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY3JlYXRlU2NvcmUoY2FyZHMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlyc3RSZW5kZXJDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGJ1aWxkQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluUmVuZGVyU3ViQ2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCBnZXRDYXJkcygpO1xuICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Jyk7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGNoaWxkcmVuID0gYmxvY2suY2hpbGRyZW47XG4gIGNvbnN0IGFyckNvbGxlY3Rpb24gPSBbLi4uY2hpbGRyZW5dO1xuICBhcnJDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBpZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgY29uc3QgbmFtZSA9IGNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2FyZHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gbmFtZSk7XG4gICAgICBpZiAoY2FyZHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gbmFtZSkpIHtcbiAgICAgICAgYXJyQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgYmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZWxlbWVudC53b3JkcztcbiAgICAgICAgYWN0aXZlKG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKTtcbiAgICAgICAgYnVpbGRDYXJkKGNhcmRzLCAnLnN1YkNhcmRzQmxvY2snLCAnc3ViQ2FyZCcpO1xuICAgICAgICByZW5kZXJXb3JkcyhyZW5kZXJFbGVtZW50KTtcbiAgICAgICAgY2xpY2tDb3VudHMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnX3JvdGF0ZScpKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ19yb3RhdGUnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjYXJkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgYnVpbGRTY29yZUNvbnRhaW5lcihzZWxlY3Rvcikge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3Qgc2NvcmVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCd0YWJsZScsICdzY29yZV9jb250YWluZXInKTtcbiAgICBjb25zdCBzY29yZUhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ3RyJywgJ3Njb3JlX2hlYWRlcicpO1xuICAgIGNvbnN0IHJlc2V0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydyZXNldF9idG4nLCAnYnRuJywgJ2J0bi1kYW5nZXInXSwgJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgY29uc3QgZGF0YUNlbGxFbmdXb3JkID0gY3JlYXRlRWxlbWVudCgndGQnLCAnZW5nbGlzaCcpO1xuICAgIGNvbnN0IGRhdGFDZWxsUnVzV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ3J1c3NpYW4nKTtcbiAgICBjb25zdCBkYXRhQ2VsbENsaWNrV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ2NsaWNrJyk7XG4gICAgY29uc3QgZGF0YUNlbGxDb3JyZWN0ID0gY3JlYXRlRWxlbWVudCgndGQnLCAnY29ycmVjdCcpO1xuICAgIGNvbnN0IGRhdGFDZWxsRXJyb3IgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdlcnJvcicpO1xuICAgIGNvbnN0IGRhdGFDb3JyZWN0UGVyY2VudCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ3BlcmNlbnQnKTtcblxuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHNjb3JlJztcbiAgICBkYXRhQ2VsbEVuZ1dvcmQudGV4dENvbnRlbnQgPSAnRW5nbGlzaCc7XG4gICAgZGF0YUNlbGxSdXNXb3JkLnRleHRDb250ZW50ID0gJ1J1c3NpYW4nO1xuICAgIGRhdGFDZWxsQ2xpY2tXb3JkLnRleHRDb250ZW50ID0gJ0NsaWNrJztcbiAgICBkYXRhQ2VsbENvcnJlY3QudGV4dENvbnRlbnQgPSAnQ29ycmVjdCc7XG4gICAgZGF0YUNlbGxFcnJvci50ZXh0Q29udGVudCA9ICdFcnJvcic7XG4gICAgZGF0YUNvcnJlY3RQZXJjZW50LnRleHRDb250ZW50ID0gJ0NvcnJlY3Qgc2NvcmUnO1xuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKHNjb3JlQ29udGFpbmVyKTtcbiAgICBzY29yZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZUhlYWRlcik7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxFbmdXb3JkKTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbFJ1c1dvcmQpO1xuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsQ2xpY2tXb3JkKTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbENvcnJlY3QpO1xuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsRXJyb3IpO1xuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDb3JyZWN0UGVyY2VudCk7XG4gIH1cblxuICByZW5kZXJTY29yZSgpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZGF0YSkge1xuICAgICAgaXRlbS53b3Jkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIG5ldyBTY29yZUJsb2NrKGl0ZW0pLnJlbmRlclNjb3JlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU2NvcmVCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHsgd29yZCwgdHJhbnNsYXRpb24gfSkge1xuICAgIHRoaXMuZGF0YSA9IHsgd29yZCwgdHJhbnNsYXRpb24gfTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKCkge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN0ckluZm8gPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IGRhdGFDZWxsRW5nV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNlbGxSdXNXb3JkID0gY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRhQ2VsbENvcnJlY3QgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRhdGFDZWxsQ2xpY2tXb3JkID0gY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRhQ2VsbEVycm9yID0gY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRhQ29ycmVjdFBlcmNlbnQgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgZGF0YUNlbGxFbmdXb3JkLnRleHRDb250ZW50ID0gdGhpcy5kYXRhLndvcmQ7XG4gICAgZGF0YUNlbGxSdXNXb3JkLnRleHRDb250ZW50ID0gdGhpcy5kYXRhLnRyYW5zbGF0aW9uO1xuICAgIGRhdGFDZWxsQ2xpY2tXb3JkLnRleHRDb250ZW50ID0gJy0nO1xuICAgIGRhdGFDZWxsQ29ycmVjdC50ZXh0Q29udGVudCA9ICctJztcbiAgICBkYXRhQ2VsbEVycm9yLnRleHRDb250ZW50ID0gJy0nO1xuICAgIGRhdGFDZWxsRXJyb3IudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgZGF0YUNvcnJlY3RQZXJjZW50LnRleHRDb250ZW50ID0gJy0nO1xuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoc3RySW5mbyk7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbEVuZ1dvcmQpO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNlbGxSdXNXb3JkKTtcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsQ2xpY2tXb3JkKTtcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsQ29ycmVjdCk7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbEVycm9yKTtcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDb3JyZWN0UGVyY2VudCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgeyBidWlsZEhlYWRlclN0cnVjdHVyZSB9IGZyb20gJy4vanMvaGVhZGVyLmpzJ1xuaW1wb3J0IHsgbWFpblJlbmRlclN1YkNhcmQsIGZpcnN0UmVuZGVyQ2FyZCwgYnVpbGRNYWluU3RydWN0dXJlLCBidWlsZFNjb3JlIH0gZnJvbSAnLi9qcy9tYWluLmpzJ1xuXG5idWlsZEhlYWRlclN0cnVjdHVyZSgpXG5idWlsZE1haW5TdHJ1Y3R1cmUoKVxuYnVpbGRTY29yZSgpXG5maXJzdFJlbmRlckNhcmQoKVxubWFpblJlbmRlclN1YkNhcmQoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9