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
/* harmony export */   activeCategory: () => (/* binding */ activeCategory),
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

function activeCategory(category, data) {
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
      // startBtn.removeEventListener('click', c);
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
  if (e.currentTarget) {
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
        return;
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
  return;
}

function repeatWordSound(arrData, dataWord) {
  console.log(dataWord);
  if (arrData.length >= 0) {
    const sound = dataWord.audioSrc;
    playAudio(sound);
  }
}

async function playGame(id) {
  const subCards = document.querySelectorAll('.subCard');
  const repeat_btn = document.querySelector('.repeat_btn');
  const heart_section = document.querySelector('.heart_section');
  const navlist = document.querySelector('.nav__list');
  heart_section.classList.add('play_mode');
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getCards)();
  const arrayWord = data[id].words;
  const arrData = arrayWord;
  let dataWord = getSound(arrData);
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
      subCards.forEach((subCard) => {
        subCard.removeEventListener('click', eventHandlerForCard);
      });
      repeat_btn.removeEventListener('click', eventHandlerForSound);
    }
    return;
  };

  subCards.forEach((subCard) => {
    subCard.addEventListener('click', eventHandlerForCard);
  });
  repeat_btn.addEventListener('click', eventHandlerForSound);
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection();
      repeat_btn.removeEventListener('click', eventHandlerForSound);
      subCards.forEach((subCard) => {
        subCard.removeEventListener('click', eventHandlerForCard);
      });
    }
  });
}

function clearHeartSection() {
  const section = document.querySelector('.heart_section');
  section.innerHTML = '';
  /*   while (section.firstChild) {
    section.removeChild(section.firstChild);
  } */
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
      activeCategory('Main Page', '.nav_list__item');
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
      activeCategory('Main Page', '.nav_list__item');
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
  let clickHandler = false;

  function sort(e) {
    const target = e.target;

    if (sortOrder === 'asc') {
      sortOrder = 'desc';
    } else {
      sortOrder = 'asc';
    }

    switch (target) {
      case target.closest('.english'):
        sortTable(0, sortOrder);
        break;
      case target.closest('.russian'):
        sortTable(1, sortOrder);
        break;
      case target.closest('.click'):
        sortTable(2, sortOrder);
        break;
      case target.closest('.correct'):
        sortTable(3, sortOrder);
        break;
      case target.closest('.error'):
        sortTable(4, sortOrder);
        break;
      case target.closest('.percent'):
        sortTable(5, sortOrder);
        break;
      default:
        return;
    }
  }

  function addListener() {
    header.addEventListener('click', sort);
    clickHandler = true
  }

  function removeListener() {
    header.removeEventListener('click', sort);
    clickHandler = false
  }

  return {
    add: addListener,
    remove: removeListener,
    isActive: clickHandler
  };
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
    const sortData = (0,_function__WEBPACK_IMPORTED_MODULE_1__.sortScore)();
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
        sortData.remove();
      }
      if (isSubBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(subCards, '.subCardsBlock', 'subCard');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderWords)(subCards);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)();
        sortData.remove();
      }
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      resetBtn.classList.remove('_active');
      table.classList.remove('_active');
      section.classList.add('_active');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.activeCategory)(name, '.nav_list__item');
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
        sortData.remove();
      }
      if (isBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards, '.cardsBlock', 'card');
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.renderCategories)(cards);
        sortData.remove();
      }
      (0,_main__WEBPACK_IMPORTED_MODULE_2__.mainRenderSubCard)();
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      resetBtn.classList.remove('_active');
      table.classList.remove('_active');
      section.classList.add('_active');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.activeCategory)(name, '.nav_list__item');
    }
    if (name === 'Score' && className) {
      let checked = (switcher.firstChild.checked = false);
      checkedMode(checked);
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      section.classList.remove('_active');
      resetBtn.classList.add('_active');
      table.classList.add('_active');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.activeCategory)(name, '.nav_list__item');
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.scoreData)();
      (0,_function__WEBPACK_IMPORTED_MODULE_1__.resetScore)();
      sortData.add();
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
        (0,_function__WEBPACK_IMPORTED_MODULE_1__.activeCategory)(name, '.nav_list__item');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDSztBQUNiOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQWE7QUFDOUIsd0JBQXdCLHdEQUFhO0FBQ3JDLHVCQUF1Qix3REFBYTtBQUNwQyx3QkFBd0Isd0RBQWE7QUFDckMsNEJBQTRCLHdEQUFhOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrQ0FBUTtBQUNqQztBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzJDOztBQUVwQztBQUNQLGdCQUFnQix3QkFBd0I7QUFDeEMsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Qsb0JBQW9COztBQUVwRTtBQUNBLDhCQUE4Qix3REFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKOEI7QUFDSTtBQUNLO0FBQ3FCO0FBQzVCOztBQUV6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxxQkFBcUIsdUNBQUk7QUFDekI7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLHFCQUFxQix1Q0FBSTtBQUN6QjtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0IseUNBQUs7QUFDekI7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUM5RXNEOztBQUUvQztBQUNQLGdCQUFnQixvQ0FBb0M7QUFDcEQsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQWE7O0FBRW5DO0FBQ0E7QUFDQSxxREFBcUQsb0JBQW9CO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDdkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNnQztBQUM0Qzs7QUFFakcsbUVBQW9CO0FBQ3BCLGdFQUFrQjtBQUNsQix3REFBVTtBQUNWLDZEQUFlO0FBQ2YsK0RBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9pbmRleC5zY3NzPzk3NzQiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9jYXJkLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9kYXRhLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvc2NvcmUuanMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy93b3JkLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi93b3JkJztcblxuZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihpZCwgY2FyZERhdGEpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5jYXJkRGF0YSA9IGNhcmREYXRhO1xuICB9XG5cbiAgY3JlYXRlQ2FyZENvbnRhaW5lcihzZWxlY3RvciwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY2xhc3NOYW1lKTtcbiAgICBjb25zdCBjYXJkX19jb3ZlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkX19jb3ZlcicpO1xuICAgIGNvbnN0IGNhcmRfX2luZm8gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZF9faW5mb19ibG9jaycpO1xuICAgIGNvbnN0IGluZm9fX3RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnaW5mb19ibG9ja19fdGl0bGUnKTtcbiAgICBjb25zdCBpbmZvX19pbmRpY2F0b3IgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaW5mb19ibG9ja19faW5kaWNhdG9yJyk7XG5cbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRfX2NvdmVyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRfX2luZm8pO1xuICAgIGNhcmRfX2luZm8uYXBwZW5kQ2hpbGQoaW5mb19fdGl0bGUpO1xuICAgIGNhcmRfX2luZm8uYXBwZW5kQ2hpbGQoaW5mb19faW5kaWNhdG9yKTtcbiAgfVxuXG4gIHJlbmRlckNhcmRDYXRlZ29yeSgpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh0aGlzLmNhcmREYXRhLCB0aGlzLmlkKTtcbiAgICBjYXRlZ29yeS5yZW5kZXJDYXRlZ29yeSgpO1xuICB9XG5cbiAgcmVuZGVyQ2FyZFdvcmQoKSB7XG4gICAgY29uc3Qgd29yZCA9IG5ldyBXb3JkKHRoaXMuY2FyZERhdGEsIHRoaXMuaWQpO1xuICAgIHdvcmQucmVuZGVyV29yZCgpO1xuICAgIHdvcmQucm90YXRlV29yZCgpO1xuICAgIHdvcmQucHJvbm91bmNlV29yZCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5IHtcbiAgY29uc3RydWN0b3IoeyBjYXRlZ29yeSwgY292ZXIsIHdvcmRzIH0sIGlkKSB7XG4gICAgdGhpcy5jYXJkRGF0YSA9IHsgY2F0ZWdvcnksIGNvdmVyLCB3b3JkcyB9O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIHJlbmRlckNhdGVnb3J5KCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBjb25zdCBpbmZvX19xdWFudGl0eSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmluZm9fYmxvY2tfX3F1YW50aXR5Jyk7XG5cbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuY2FyZERhdGEuY2F0ZWdvcnkpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZF9fY292ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb3ZlcicpO1xuICAgIGNvbnN0IGNhcmRfX2luZm8gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbmZvX2Jsb2NrJyk7XG4gICAgY29uc3QgaW5mb19fdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX190aXRsZScpO1xuXG4gICAgaW5mb19fdGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mb19ibG9ja19fdGl0bGUnKTtcbiAgICBpbmZvX190aXRsZS50ZXh0Q29udGVudCA9IHRoaXMuY2FyZERhdGEuY2F0ZWdvcnk7XG4gICAgY2FyZF9fY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt0aGlzLmNhcmREYXRhLmNvdmVyfScpYDtcblxuICAgIGlmIChpbmZvX19xdWFudGl0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY3JlYXRlX3F1YW50aXR5ID0gY3JlYXRlRWxlbWVudCgncCcsICdpbmZvX2Jsb2NrX19xdWFudGl0eScpO1xuICAgICAgY2FyZF9faW5mby5hcHBlbmRDaGlsZChjcmVhdGVfcXVhbnRpdHkpO1xuICAgICAgY3JlYXRlX3F1YW50aXR5LnRleHRDb250ZW50ID0gdGhpcy5jYXJkRGF0YS53b3Jkcy5sZW5ndGg7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyZHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4vYXNzZXRzL3dvcmRzLWNhcmRzLmpzb24nKTtcbiAgbGV0IGNhcmRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gY2FyZHM7XG59IiwiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgeyBnZXRDYXJkcyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjaGVja2VkTW9kZSB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IGZpcnN0UmVuZGVyQ2FyZCwgbWFpblJlbmRlclN1YkNhcmQgfSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgU2NvcmUgfSBmcm9tICcuL3Njb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWVzLCBhdHRyLCB2YWx1ZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWVzKSkge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2xhc3NOYW1lcyA9PT0gJ3N0cmluZycpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XG4gIH1cbiAgYXR0ciAmJiB2YWx1ZSAmJiBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhLCBzZWxlY3RvciwgY2xhc3NOYW1lKSB7XG4gIGRhdGEuZm9yRWFjaCgoaXRlbSwgaWQpID0+IHtcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaWQsIGl0ZW0pO1xuICAgIGNhcmQuY3JlYXRlQ2FyZENvbnRhaW5lcihzZWxlY3RvciwgY2xhc3NOYW1lKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXRlZ29yaWVzKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpZCwgaXRlbSk7XG4gICAgY2FyZC5yZW5kZXJDYXJkQ2F0ZWdvcnkoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXb3JkcyhkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoaXRlbSwgaWQpID0+IHtcbiAgICBjb25zdCBzdWJDYXJkID0gbmV3IENhcmQoaWQsIGl0ZW0pO1xuICAgIHN1YkNhcmQucmVuZGVyQ2FyZFdvcmQoKTtcbiAgfSk7XG4gIGdhbWVTdGFydCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NvcmUoZGF0YSkge1xuICBjb25zdCBzY29yZSA9IG5ldyBTY29yZShkYXRhKTtcbiAgc2NvcmUuYnVpbGRTY29yZUNvbnRhaW5lcignbWFpbicpO1xuICBzY29yZS5yZW5kZXJTY29yZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheUF1ZGlvKHVybCkge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh1cmwpO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmVDYXRlZ29yeShjYXRlZ29yeSwgZGF0YSkge1xuICBjb25zdCBnZXRDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhKTtcbiAgZ2V0Q29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgY29uc3QgbGluayA9IGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKG5hbWUgPT09IGNhdGVnb3J5KSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vRm9yIEdhbWVcblxuZnVuY3Rpb24gYyhlKSB7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCByZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0X2J0bicpO1xuICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgcmVwZWF0QnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuICBjb25zdCBjaGlsZHJlbiA9IG5hdmxpc3QuY2hpbGRyZW47XG4gIGNvbnN0IGFyckVsZW1lbnQgPSBbLi4uY2hpbGRyZW5dO1xuICBjb25zdCBlbGVtZW50ID0gYXJyRWxlbWVudC5maW5kKChpdGVtKSA9PiBpdGVtLmNsYXNzTmFtZSA9PT0gJ25hdl9saXN0X19pdGVtIF9hY3RpdmUnKTtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBwbGF5R2FtZShpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpO1xuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gIG5hdmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubmF2X2xpc3RfX2xpbmsnKSkge1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIC8vIHN0YXJ0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdW5kKGRhdGEpIHtcbiAgbGV0IGFyciA9IGRhdGE7XG4gIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgbGV0IG9ialdvcmQgPSBhcnIuc3BsaWNlKHJhbmRvbU51bWJlciwgMSk7XG4gIGxldCBhdWRpbyA9IG9ialdvcmRbMF0uYXVkaW9TcmM7XG4gIHBsYXlBdWRpbyhhdWRpbyk7XG4gIHJldHVybiBvYmpXb3JkWzBdO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FyZE9wZXJhdGlvbihlLCBoZWFydF9zZWN0aW9uLCBkYXRhV29yZCwgYXJyRGF0YSwgY29ycmVjdCwgZXJyb3IsIGNvdW50KSB7XG4gIGlmIChlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICBsZXQgdG90YWxpemVyID0gY291bnQ7XG4gICAgbGV0IG9iaiA9IGRhdGFXb3JkO1xuICAgIGxldCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoJ2hlYXJ0Jyk7XG4gICAgbGV0IHN1YkNhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBzdWJDYXJkTmFtZSA9IHN1YkNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHdvcmQgPSBvYmoud29yZDtcbiAgICBpZiAoc3ViQ2FyZE5hbWUgPT09IHdvcmQpIHtcbiAgICAgICsrdG90YWxpemVyO1xuICAgICAgc3ViQ2FyZC5jbGFzc0xpc3QuYWRkKCdwYXNzZWQnKTtcbiAgICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gICAgICBoZWFydF9zZWN0aW9uLmFwcGVuZENoaWxkKGhlYXJ0KTtcbiAgICAgIHBsYXlBdWRpbygnLi9hc3NldHMvYXVkaW8vY29ycmVjdC5tcDMnKTtcbiAgICAgIGdlbmVyYXRlRGF0YUFycmF5KGNvcnJlY3QsIHdvcmQpO1xuICAgICAgcmVtb3ZlSGVhcnQodG90YWxpemVyKTtcbiAgICAgIGlmIChhcnJEYXRhLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBkYXRhV29yZCA9IGdldFNvdW5kKGFyckRhdGEpO1xuICAgICAgICByZXR1cm4gW2RhdGFXb3JkLCB0b3RhbGl6ZXJdO1xuICAgICAgfVxuICAgICAgaWYgKCFhcnJEYXRhLmxlbmd0aCkge1xuICAgICAgICBmaW5pc2hHYW1lKGNvcnJlY3QsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICArK3RvdGFsaXplcjtcbiAgICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG4gICAgICBoZWFydF9zZWN0aW9uLmFwcGVuZENoaWxkKGhlYXJ0KTtcbiAgICAgIHBsYXlBdWRpbygnLi9hc3NldHMvYXVkaW8vZXJyb3IubXAzJyk7XG4gICAgICBnZW5lcmF0ZURhdGFBcnJheShlcnJvciwgd29yZCk7XG4gICAgICByZW1vdmVIZWFydCh0b3RhbGl6ZXIpO1xuICAgICAgcmV0dXJuIFtkYXRhV29yZCwgdG90YWxpemVyXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiByZXBlYXRXb3JkU291bmQoYXJyRGF0YSwgZGF0YVdvcmQpIHtcbiAgY29uc29sZS5sb2coZGF0YVdvcmQpO1xuICBpZiAoYXJyRGF0YS5sZW5ndGggPj0gMCkge1xuICAgIGNvbnN0IHNvdW5kID0gZGF0YVdvcmQuYXVkaW9TcmM7XG4gICAgcGxheUF1ZGlvKHNvdW5kKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGxheUdhbWUoaWQpIHtcbiAgY29uc3Qgc3ViQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViQ2FyZCcpO1xuICBjb25zdCByZXBlYXRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdF9idG4nKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG4gIGNvbnN0IG5hdmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XG4gIGhlYXJ0X3NlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXJkcygpO1xuICBjb25zdCBhcnJheVdvcmQgPSBkYXRhW2lkXS53b3JkcztcbiAgY29uc3QgYXJyRGF0YSA9IGFycmF5V29yZDtcbiAgbGV0IGRhdGFXb3JkID0gZ2V0U291bmQoYXJyRGF0YSk7XG4gIGNvbnN0IGdldENvcnJlY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3JyZWN0JykpO1xuICBjb25zdCBnZXRFcnJvciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Vycm9yJykpO1xuICBjb25zdCBjb3JyZWN0ID0gZ2V0Q29ycmVjdCA/IFsuLi5nZXRDb3JyZWN0XSA6IFtdO1xuICBjb25zdCBlcnJvciA9IGdldEVycm9yID8gWy4uLmdldEVycm9yXSA6IFtdO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGNvbnN0IGV2ZW50SGFuZGxlckZvclNvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHJlcGVhdFdvcmRTb3VuZChhcnJEYXRhLCBkYXRhV29yZCk7XG4gIH07XG5cbiAgY29uc3QgZXZlbnRIYW5kbGVyRm9yQ2FyZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHByb2Nlc3NDYXJkT3BlcmF0aW9uKGUsIGhlYXJ0X3NlY3Rpb24sIGRhdGFXb3JkLCBhcnJEYXRhLCBjb3JyZWN0LCBlcnJvciwgY291bnQpO1xuICAgIGlmIChuZXdEYXRhICE9IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IFtkYXRhV29yZE5ldywgdG90YWxpemVyXSA9IG5ld0RhdGE7XG4gICAgICBkYXRhV29yZCA9IGRhdGFXb3JkTmV3O1xuICAgICAgY291bnQgPSB0b3RhbGl6ZXI7XG4gICAgfVxuICAgIGlmIChuZXdEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN1YkNhcmRzLmZvckVhY2goKHN1YkNhcmQpID0+IHtcbiAgICAgICAgc3ViQ2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50SGFuZGxlckZvckNhcmQpO1xuICAgICAgfSk7XG4gICAgICByZXBlYXRfYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyRm9yU291bmQpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH07XG5cbiAgc3ViQ2FyZHMuZm9yRWFjaCgoc3ViQ2FyZCkgPT4ge1xuICAgIHN1YkNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXJGb3JDYXJkKTtcbiAgfSk7XG4gIHJlcGVhdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXJGb3JTb3VuZCk7XG4gIG5hdmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubmF2X2xpc3RfX2xpbmsnKSkge1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIHJlcGVhdF9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXJGb3JTb3VuZCk7XG4gICAgICBzdWJDYXJkcy5mb3JFYWNoKChzdWJDYXJkKSA9PiB7XG4gICAgICAgIHN1YkNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXJGb3JDYXJkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckhlYXJ0U2VjdGlvbigpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gIC8qICAgd2hpbGUgKHNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQoc2VjdGlvbi5maXJzdENoaWxkKTtcbiAgfSAqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSGVhcnQoY291bnQpIHtcbiAgY29uc3QgaGVhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQnKTtcbiAgY29uc3QgbWF4X2NvdW50ID0gODtcbiAgaWYgKGhlYXJ0Lmxlbmd0aCA+PSBtYXhfY291bnQpIHtcbiAgICBoZWFydFtjb3VudCAtIG1heF9jb3VudF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluaXNoR2FtZShjb3JyZWN0QXJyLCBlcnJvckFycikge1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydF9idG4nKTtcbiAgY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXInKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG4gIGNvbnN0IHN1YkNhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJDYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IGlzU3ViQmxvY2tDaGlsZHJlbiA9IHN1YkNhcmRCbG9jay5jaGlsZHJlbjtcbiAgY29uc3QgYXJyU3ViQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzU3ViQmxvY2tDaGlsZHJlbl07XG4gIGNvbnN0IGNoaWxkcmVuID0gaGVhcnRfc2VjdGlvbi5jaGlsZHJlbjtcbiAgY29uc3QgYXJyQ29sbGVjdGlvbiA9IFsuLi5jaGlsZHJlbl07XG4gIGNvbnN0IGNvdW50cyA9IGFyckNvbGxlY3Rpb24ucmVkdWNlKChwcmV2aW91c2x5LCBjdXJyZW50KSA9PiB7XG4gICAgcHJldmlvdXNseVtjdXJyZW50LmNsYXNzTmFtZV0gPSAocHJldmlvdXNseVtjdXJyZW50LmNsYXNzTmFtZV0gfHwgMCkgKyAxO1xuICAgIHJldHVybiBwcmV2aW91c2x5O1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgd3JvbmcgPSBjb3VudHNbJ2hlYXJ0IHdyb25nJ107XG4gIGNvbnN0IHJpZ2h0ID0gY291bnRzWydoZWFydCByaWdodCddO1xuXG4gIGNvbnN0IGNvcnJlY3RKc29uID0gSlNPTi5zdHJpbmdpZnkoY29ycmVjdEFycik7XG4gIGNvbnN0IGVycm9ySnNvbiA9IEpTT04uc3RyaW5naWZ5KGVycm9yQXJyKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcnJlY3QnLCBjb3JyZWN0SnNvbik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlcnJvcicsIGVycm9ySnNvbik7XG5cbiAgaWYgKHdyb25nKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3Qgd3JvbmdfYmxvY2sgPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ3dyb25nLWJsb2NrJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyb25nX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1pc3Rha2VzID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICd3cm9uZ19taXN0YWtlcycpO1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dyb25nX2ltYWdlJyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbmlzaCcpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZCh3cm9uZ19ibG9jayk7XG4gICAgd3JvbmdfYmxvY2suYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtaXN0YWtlcyk7XG5cbiAgICBtaXN0YWtlcy50ZXh0Q29udGVudCA9IGBNaXN0YWtlczogJHt3cm9uZ31gO1xuICAgIHBsYXlBdWRpbygnLi9hc3NldHMvYXVkaW8vZmFpbHVyZS5tcDMnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQod3JvbmdfYmxvY2spO1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcbiAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgc3ViQ2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBzdGFydEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGMpO1xuICAgICAgZmlyc3RSZW5kZXJDYXJkKCk7XG4gICAgICBtYWluUmVuZGVyU3ViQ2FyZCgpO1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5KCdNYWluIFBhZ2UnLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBpZiAoIXdyb25nKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3QgcmlnaHRCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAncmlnaHQtYmxvY2snKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncmlnaHRfY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGVyZmVjdCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAncmlnaHRfcGVyZmVjdCcpO1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3JpZ2h0X2ltYWdlJyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbmlzaCcpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChyaWdodEJsb2NrKTtcbiAgICByaWdodEJsb2NrLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGVyZmVjdCk7XG5cbiAgICBwZXJmZWN0LnRleHRDb250ZW50ID0gJ0dvb2Qgam9iJztcbiAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL3N1Y2Nlc3MubXAzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHJpZ2h0QmxvY2spO1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKTtcbiAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgc3ViQ2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBzdGFydEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGMpO1xuICAgICAgY2xlYXJIZWFydFNlY3Rpb24oKTtcbiAgICAgIGZpcnN0UmVuZGVyQ2FyZCgpO1xuICAgICAgbWFpblJlbmRlclN1YkNhcmQoKTtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5KCdNYWluIFBhZ2UnLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRGF0YUFycmF5KGFyciwgZGF0YSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGxldCBhZGQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFycikge1xuICAgICAgaWYgKGl0ZW1bMF0gPT09IGRhdGEpIHtcbiAgICAgICAgKytpdGVtWzFdO1xuICAgICAgICBhZGQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWFkZCkge1xuICAgICAgYXJyLnB1c2goW2RhdGEsIDFdKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgYXJyLnB1c2goW2RhdGEsIDFdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDb3VudHMoKSB7XG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBibG9jay5jaGlsZHJlbjtcbiAgY29uc3QgYXJyQ29sbGVjdGlvbiA9IFsuLi5jaGlsZHJlbl07XG4gIGFyckNvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IG5hbWUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgaWYgKGNhcmQuY2xhc3NOYW1lID09PSAnc3ViQ2FyZCcpIHtcbiAgICAgICAgY29uc3QgZ2V0Q2xpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGljaycpKTtcbiAgICAgICAgY29uc3QgY2xpY2sgPSBnZXRDbGljayA/IFsuLi5nZXRDbGlja10gOiBbXTtcbiAgICAgICAgaWYgKGNsaWNrLmxlbmd0aCkge1xuICAgICAgICAgIGxldCBmaW5kID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjbGljaykge1xuICAgICAgICAgICAgaWYgKGl0ZW1bMF0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgKytpdGVtWzFdO1xuICAgICAgICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFmaW5kKSB7XG4gICAgICAgICAgICBjbGljay5wdXNoKFtuYW1lLCAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghY2xpY2subGVuZ3RoKSB7XG4gICAgICAgICAgY2xpY2sucHVzaChbbmFtZSwgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrSnNvbiA9IEpTT04uc3RyaW5naWZ5KGNsaWNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsaWNrJywgY2xpY2tKc29uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29yZURhdGEoKSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX2NvbnRhaW5lcicpO1xuICBjb25zdCByb3cgPSB0YWJsZS5yb3dzO1xuICBjb25zdCBjb3JyZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvcnJlY3QnKSk7XG4gIGNvbnN0IGVycm9yRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Vycm9yJykpO1xuICBjb25zdCBjbGlja0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGljaycpKTtcbiAgZm9yIChsZXQgaXRlbSBvZiByb3cpIHtcbiAgICBjb25zdCBmaXJzdENlbGwgPSBpdGVtLmNlbGxzWzBdLmlubmVySFRNTDtcbiAgICBjb25zdCBjbGljayA9IGNsaWNrRGF0YSAmJiBjbGlja0RhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBjb25zdCBjb3JyZWN0ID0gY29ycmVjdERhdGEgJiYgY29ycmVjdERhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBjb25zdCBlcnJvciA9IGVycm9yRGF0YSAmJiBlcnJvckRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKTtcbiAgICBpZiAoY2xpY2spIHtcbiAgICAgIGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID0gYCR7Y2xpY2tbMV19YDtcbiAgICB9XG4gICAgaWYgKGNvcnJlY3QpIHtcbiAgICAgIGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID0gYCR7Y29ycmVjdFsxXX1gO1xuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnMTAwJSc7XG4gICAgfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSBgJHtlcnJvclsxXX1gO1xuICAgIH1cbiAgICBpZiAoY29ycmVjdCAmJiBlcnJvciAmJiBjb3JyZWN0WzBdID09PSBlcnJvclswXSkge1xuICAgICAgY29uc3QgdG90YWxBdHRlbXB0cyA9IGNvcnJlY3RbMV0gKyBlcnJvclsxXTtcbiAgICAgIGNvbnN0IGFjY3VyYWN5ID0gKChjb3JyZWN0WzFdIC8gdG90YWxBdHRlbXB0cykgKiAxMDApLnRvRml4ZWQoKTtcbiAgICAgIGl0ZW0uY2VsbHNbNV0uaW5uZXJIVE1MID0gYCR7YWNjdXJhY3l9JWA7XG4gICAgfVxuICAgIGlmIChjb3JyZWN0RGF0YSA9PT0gbnVsbCAmJiBlcnJvckRhdGEgPT09IG51bGwgJiYgY2xpY2tEYXRhID09PSBudWxsKSB7XG4gICAgICBpdGVtLmNlbGxzWzJdLmlubmVySFRNTCA9PT0gJ0NsaWNrJyA/IChpdGVtLmNlbGxzWzJdLmlubmVySFRNTCA9ICdDbGljaycpIDogKGl0ZW0uY2VsbHNbMl0uaW5uZXJIVE1MID0gJy0nKTtcbiAgICAgIGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID09PSAnQ29ycmVjdCcgPyAoaXRlbS5jZWxsc1szXS5pbm5lckhUTUwgPSAnQ29ycmVjdCcpIDogKGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID0gJy0nKTtcbiAgICAgIGl0ZW0uY2VsbHNbNF0uaW5uZXJIVE1MID09PSAnRXJyb3InID8gKGl0ZW0uY2VsbHNbNF0uaW5uZXJIVE1MID0gJ0Vycm9yJykgOiAoaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSAnLScpO1xuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPT09ICdDb3JyZWN0IHNjb3JlJyA/IChpdGVtLmNlbGxzWzVdLmlubmVySFRNTCA9ICdDb3JyZWN0IHNjb3JlJykgOiAoaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnLScpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRTY29yZSgpIHtcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfYnRuJyk7XG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNjb3JlRGF0YSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRTY29yZSgpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJyk7XG4gIGNvbnN0IHJvdyA9IHRhYmxlLnJvd3M7XG4gIGNvbnN0IGhlYWRlciA9IHJvd1swXTtcbiAgbGV0IHNvcnRPcmRlciA9ICdhc2MnO1xuICBsZXQgY2xpY2tIYW5kbGVyID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc29ydChlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICBpZiAoc29ydE9yZGVyID09PSAnYXNjJykge1xuICAgICAgc29ydE9yZGVyID0gJ2Rlc2MnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0T3JkZXIgPSAnYXNjJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRhcmdldCkge1xuICAgICAgY2FzZSB0YXJnZXQuY2xvc2VzdCgnLmVuZ2xpc2gnKTpcbiAgICAgICAgc29ydFRhYmxlKDAsIHNvcnRPcmRlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YXJnZXQuY2xvc2VzdCgnLnJ1c3NpYW4nKTpcbiAgICAgICAgc29ydFRhYmxlKDEsIHNvcnRPcmRlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0YXJnZXQuY2xvc2VzdCgnLmNsaWNrJyk6XG4gICAgICAgIHNvcnRUYWJsZSgyLCBzb3J0T3JkZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGFyZ2V0LmNsb3Nlc3QoJy5jb3JyZWN0Jyk6XG4gICAgICAgIHNvcnRUYWJsZSgzLCBzb3J0T3JkZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGFyZ2V0LmNsb3Nlc3QoJy5lcnJvcicpOlxuICAgICAgICBzb3J0VGFibGUoNCwgc29ydE9yZGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRhcmdldC5jbG9zZXN0KCcucGVyY2VudCcpOlxuICAgICAgICBzb3J0VGFibGUoNSwgc29ydE9yZGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7XG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydCk7XG4gICAgY2xpY2tIYW5kbGVyID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgaGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydCk7XG4gICAgY2xpY2tIYW5kbGVyID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkOiBhZGRMaXN0ZW5lcixcbiAgICByZW1vdmU6IHJlbW92ZUxpc3RlbmVyLFxuICAgIGlzQWN0aXZlOiBjbGlja0hhbmRsZXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZShjb2x1bW5JbmRleCwgc29ydERpcmVjdGlvbikge1xuICBsZXQgcm93cywgaSwgeCwgeSwgc2hvdWxkU3dpdGNoO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKTtcbiAgbGV0IHN3aXRjaGluZyA9IHRydWU7XG5cbiAgd2hpbGUgKHN3aXRjaGluZykge1xuICAgIHN3aXRjaGluZyA9IGZhbHNlO1xuICAgIHJvd3MgPSB0YWJsZS5yb3dzO1xuICAgIHNob3VsZFN3aXRjaCA9IGZhbHNlO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IHJvd3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZTtcblxuICAgICAgeCA9IHJvd3NbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJylbY29sdW1uSW5kZXhdO1xuICAgICAgeSA9IHJvd3NbaSArIDFdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZCcpW2NvbHVtbkluZGV4XTtcblxuICAgICAgY29uc3QgeFZhbHVlID0gZ2V0VmFsdWVGb3JTb3J0aW5nKHguaW5uZXJIVE1MKTtcbiAgICAgIGNvbnN0IHlWYWx1ZSA9IGdldFZhbHVlRm9yU29ydGluZyh5LmlubmVySFRNTCk7XG5cbiAgICAgIGlmICh4VmFsdWUgPT09ICctJyAmJiB5VmFsdWUgIT09ICctJykge1xuICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoeVZhbHVlID09PSAnLScgJiYgeFZhbHVlICE9PSAnLScpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgICBpZiAoeFZhbHVlID4geVZhbHVlKSB7XG4gICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0RGlyZWN0aW9uID09PSAnZGVzYycpIHtcbiAgICAgICAgaWYgKHhWYWx1ZSA8IHlWYWx1ZSkge1xuICAgICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3VsZFN3aXRjaCkge1xuICAgICAgcm93c1tpXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyb3dzW2kgKyAxXSwgcm93c1tpXSk7XG4gICAgICBzd2l0Y2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGb3JTb3J0aW5nKHZhbHVlKSB7XG4gIGNvbnN0IG51bWJlclJlZ2V4ID0gL14tP1xcZCsoPzpcXC5cXGQrKT8kLztcbiAgY29uc3QgcGVyY2VudGFnZVJlZ2V4ID0gL14tP1xcZCsoPzpcXC5cXGQrKT8lJC87XG5cbiAgaWYgKG51bWJlclJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2VSZWdleC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJyUnLCAnJykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHtcbiAgYWN0aXZlQ2F0ZWdvcnksXG4gIGNyZWF0ZUNhcmQsXG4gIGNsaWNrQ291bnRzLFxuICByZW5kZXJDYXRlZ29yaWVzLFxuICByZW5kZXJXb3JkcyxcbiAgcmVzZXRTY29yZSxcbiAgc2NvcmVEYXRhLFxuICBzb3J0U2NvcmUsXG4gIGNyZWF0ZUVsZW1lbnQsXG59IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgbWFpblJlbmRlclN1YkNhcmQgfSBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRIZWFkZXJTdHJ1Y3R1cmUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWluZXInKTtcbiAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51Jyk7XG4gIGNvbnN0IGJ1cmdlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51X19idXJnZXInKTtcbiAgY29uc3QgbGluZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbGluZScpO1xuICBjb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KCduYXYnLCAnbWVudV9fbmF2Jyk7XG4gIGNvbnN0IG5hdl9saXN0ID0gY3JlYXRlRWxlbWVudCgndWwnLCAnbmF2X19saXN0Jyk7XG4gIGNvbnN0IGZpcnN0X21haW5faXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgWyduYXZfbGlzdF9faXRlbScsICdfYWN0aXZlJ10sICduYW1lJywgJ01haW4gUGFnZScpO1xuICBjb25zdCBzZWNvbmRfc2NvcmVfaXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ25hdl9saXN0X19pdGVtJywgJ25hbWUnLCAnU2NvcmUnKTtcbiAgY29uc3QgZmlyc3RfbGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ25hdl9saXN0X19saW5rJywgJ19hY3RpdmUnXSk7XG4gIGNvbnN0IHNlY29uZF9saW5rID0gY3JlYXRlRWxlbWVudCgnYScsICduYXZfbGlzdF9fbGluaycpO1xuICBjb25zdCBzd2l0Y2hlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc3dpdGNoZXInLCAnZm9ybS1jaGVjaycsICdmb3JtLXN3aXRjaCddKTtcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIFsnaW5wdXQnLCAnZm9ybS1jaGVjay1pbnB1dCddKTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIFsnbGFiZWwnLCAnZm9ybS1jaGVjay1sYWJlbCddKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsICd0aXRsZScpO1xuICBjb25zdCBzaGFkb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2hhZG93Jyk7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVHJhaW4gJiBQbGF5JztcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnVHJhaW4nO1xuICBmaXJzdF9saW5rLnRleHRDb250ZW50ID0gJ01haW4gUGFnZSc7XG4gIHNlY29uZF9saW5rLnRleHRDb250ZW50ID0gJ1Njb3JlJztcblxuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2hhZG93KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzd2l0Y2hlcik7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChuYXYpO1xuICBtZW51LmFwcGVuZENoaWxkKGJ1cmdlcik7XG5cbiAgc3dpdGNoZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBzd2l0Y2hlci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdl9saXN0KTtcblxuICBuYXZfbGlzdC5hcHBlbmRDaGlsZChmaXJzdF9tYWluX2l0ZW0pO1xuICBuYXZfbGlzdC5hcHBlbmRDaGlsZChzZWNvbmRfc2NvcmVfaXRlbSk7XG4gIGZpcnN0X21haW5faXRlbS5hcHBlbmRDaGlsZChmaXJzdF9saW5rKTtcbiAgc2Vjb25kX3Njb3JlX2l0ZW0uYXBwZW5kQ2hpbGQoc2Vjb25kX2xpbmspO1xuICBidXJnZXIuYXBwZW5kQ2hpbGQobGluZSk7XG5cbiAgc2V0U3dpdGNoZXIoKTtcbiAgc2V0TmF2TWVudSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3dpdGNoZXIoKSB7XG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Jyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgb3B0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBvcHRpb25zW2F0dHJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIGlkOiAnZmxleFN3aXRjaENoZWNrRGVmYXVsdCcsXG4gIH0pO1xuXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZsZXhTd2l0Y2hDaGVja0RlZmF1bHQnKTtcblxuICBzd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGVja2VkTW9kZShpbnB1dC5jaGVja2VkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja2VkTW9kZShjaGVja2VkKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19uYXYnKTtcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lJyk7XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKTtcblxuICBjb25zdCBzdWJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1YkNhcmQnKTtcbiAgY29uc3QgY2FyZEluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvX2Jsb2NrX19pbmRpY2F0b3InKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm9fYmxvY2tfX3N1YnRpdGxlJyk7XG4gIGNvbnN0IGNhcmRSb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJyk7XG5cbiAgY29uc3Qgc3ViQ2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKTtcbiAgY29uc3Qgc3RhcnRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0X2J0bicpO1xuICBjb25zdCByZXBlYXRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdF9idG4nKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJyk7XG5cbiAgY29uc3Qgc3ViQ2FyZEJsb2NrQ291bnQgPSBzdWJDYXJkQmxvY2suY2hpbGRyZW4ubGVuZ3RoO1xuXG4gIGlmICghY2hlY2tlZCkge1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1RyYWluJztcbiAgICBjYXJkSW5kaWNhdG9yLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpO1xuICAgIGNhcmRUaXRsZS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpKTtcbiAgICBjYXJkUm90YXRlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpO1xuICAgIHN1YkNhcmQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKSk7XG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIHN0YXJ0X2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKTtcbiAgICByZXBlYXRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpO1xuICAgIGhlYXJ0X3NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJyk7XG4gIH1cbiAgaWYgKGNoZWNrZWQpIHtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQbGF5JztcbiAgICBzdWJDYXJkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIGNhcmRJbmRpY2F0b3IuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSk7XG4gICAgY2FyZFRpdGxlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpO1xuICAgIGNhcmRSb3RhdGUuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJyk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpO1xuICAgIGlmIChzdWJDYXJkQmxvY2tDb3VudCA+IDApIHtcbiAgICAgIHN0YXJ0X2J0bi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE5hdk1lbnUoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY29uc3QgbmF2X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX25hdicpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhZG93Jyk7XG5cbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IGNhcmQ7XG4gICAgY29uc3QgbmF2X2xpc3RfX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBuYXZfbGlzdC5hcHBlbmRDaGlsZChuYXZfbGlzdF9faXRlbSk7XG4gICAgbmF2X2xpc3RfX2l0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICBuYXZfbGlzdF9faXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfbGlzdF9faXRlbScpO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2X2xpc3RfX2xpbmsnKTtcblxuICAgIG5hdl9saXN0X19pdGVtLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke2NhdGVnb3J5fWApO1xuICAgIG5hdl9saXN0X19pdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtjYXRlZ29yeX1gO1xuICB9KTtcblxuICBuYXZfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgc29ydERhdGEgPSBzb3J0U2NvcmUoKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24nKTtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldF9idG4nKTtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9saXN0X19pdGVtJyk7XG4gICAgY29uc3QgY2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzQmxvY2snKTtcbiAgICBjb25zdCBzdWJDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViQ2FyZHNCbG9jaycpO1xuICAgIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyk7XG4gICAgY29uc3Qgc3ViQ2FyZHNDYXRlcmdvcnkgPSBjYXJkc1tpZF0/LmNhdGVnb3J5O1xuICAgIGlmIChuYW1lID09PSBzdWJDYXJkc0NhdGVyZ29yeSAmJiBjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBjYXJkcy5maW5kKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSBuYW1lKTtcbiAgICAgIGNvbnN0IHN1YkNhcmRzID0gY2FyZC53b3JkcztcbiAgICAgIGNvbnN0IGlzU3ViQmxvY2tDaGlsZHJlbiA9IHN1YkNhcmRCbG9jay5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IGlzQmxvY2tDaGlsZHJlbiA9IGNhcmRCbG9jay5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IGFyckJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc0Jsb2NrQ2hpbGRyZW5dO1xuICAgICAgY29uc3QgYXJyU3ViQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzU3ViQmxvY2tDaGlsZHJlbl07XG4gICAgICBhcnJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChpc1N1YkJsb2NrQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBhcnJTdWJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHN1YkNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZCk7XG4gICAgICAgIGNyZWF0ZUNhcmQoc3ViQ2FyZHMsICcuc3ViQ2FyZHNCbG9jaycsICdzdWJDYXJkJyk7XG4gICAgICAgIHJlbmRlcldvcmRzKHN1YkNhcmRzKTtcbiAgICAgICAgY2xpY2tDb3VudHMoKTtcbiAgICAgICAgc29ydERhdGEucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdWJCbG9ja0NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpO1xuICAgICAgICBjcmVhdGVDYXJkKHN1YkNhcmRzLCAnLnN1YkNhcmRzQmxvY2snLCAnc3ViQ2FyZCcpO1xuICAgICAgICByZW5kZXJXb3JkcyhzdWJDYXJkcyk7XG4gICAgICAgIGNsaWNrQ291bnRzKCk7XG4gICAgICAgIHNvcnREYXRhLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNoYWRvdy5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICByZXNldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5KG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKTtcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdNYWluIFBhZ2UnICYmIGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgaXNTdWJCbG9ja0NoaWxkcmVuID0gc3ViQ2FyZEJsb2NrLmNoaWxkcmVuO1xuICAgICAgY29uc3QgaXNCbG9ja0NoaWxkcmVuID0gY2FyZEJsb2NrLmNoaWxkcmVuO1xuICAgICAgY29uc3QgYXJyQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzQmxvY2tDaGlsZHJlbl07XG4gICAgICBjb25zdCBhcnJTdWJCbG9ja0NvbGxlY3Rpb24gPSBbLi4uaXNTdWJCbG9ja0NoaWxkcmVuXTtcbiAgICAgIGFyclN1YkJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN1YkNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzQmxvY2tDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFyckJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgY2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY3JlYXRlQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgICAgICAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG4gICAgICAgIHNvcnREYXRhLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzQmxvY2tDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY3JlYXRlQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKTtcbiAgICAgICAgcmVuZGVyQ2F0ZWdvcmllcyhjYXJkcyk7XG4gICAgICAgIHNvcnREYXRhLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgbWFpblJlbmRlclN1YkNhcmQoKTtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICBzaGFkb3cuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICBhY3RpdmVDYXRlZ29yeShuYW1lLCAnLm5hdl9saXN0X19pdGVtJyk7XG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnU2NvcmUnICYmIGNsYXNzTmFtZSkge1xuICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZCk7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgc2hhZG93LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgYWN0aXZlQ2F0ZWdvcnkobmFtZSwgJy5uYXZfbGlzdF9faXRlbScpO1xuICAgICAgc2NvcmVEYXRhKCk7XG4gICAgICByZXNldFNjb3JlKCk7XG4gICAgICBzb3J0RGF0YS5hZGQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKTtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xuICAgIHNoYWRvdy5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgYWN0aXZlQ2F0ZWdvcnksIGNyZWF0ZUNhcmQsIGNsaWNrQ291bnRzLCByZW5kZXJDYXRlZ29yaWVzLCBjcmVhdGVTY29yZSwgcmVuZGVyV29yZHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IGNoZWNrZWRNb2RlIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNYWluU3RydWN0dXJlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCBbJ3NlY3Rpb24nLCAnX2FjdGl2ZSddKTtcbiAgY29uc3QgY2F0ZWdvcnlDYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmRzQmxvY2snKTtcbiAgY29uc3Qgc3ViQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzdWJDYXJkc0Jsb2NrJyk7XG4gIGNvbnN0IHN0YXJ0X2J0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnc3RhcnRfYnRuJywgJ2J0bicsICdidG4tc2Vjb25kYXJ5J10pO1xuICBjb25zdCByZXBlYXRfYnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydyZXBlYXRfYnRuJywgJ2J0bicsICdidG4tcHJpbWFyeSddKTtcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFydF9zZWN0aW9uJyk7XG4gIHN0YXJ0X2J0bi50ZXh0Q29udGVudCA9ICdTVEFSVCc7XG4gIHJlcGVhdF9idG4udGV4dENvbnRlbnQgPSAnUkVQRUFUJztcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5Q2FyZCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViQ2FyZCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3RhcnRfYnRuKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChyZXBlYXRfYnRuKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydF9zZWN0aW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkU2NvcmUoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY3JlYXRlU2NvcmUoY2FyZHMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlyc3RSZW5kZXJDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IGdldENhcmRzKCk7XG4gIGNyZWF0ZUNhcmQoY2FyZHMsICcuY2FyZHNCbG9jaycsICdjYXJkJyk7XG4gIHJlbmRlckNhdGVnb3JpZXMoY2FyZHMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpblJlbmRlclN1YkNhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNCbG9jaycpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xuICBjb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcicpO1xuICBjb25zdCBjaGlsZHJlbiA9IGJsb2NrLmNoaWxkcmVuO1xuICBjb25zdCBhcnJDb2xsZWN0aW9uID0gWy4uLmNoaWxkcmVuXTtcbiAgYXJyQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgaWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNhcmRzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IG5hbWUpO1xuICAgICAgaWYgKGNhcmRzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IG5hbWUpKSB7XG4gICAgICAgIGFyckNvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKTtcbiAgICAgICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGVsZW1lbnQud29yZHM7XG4gICAgICAgIGFjdGl2ZUNhdGVnb3J5KG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKTtcbiAgICAgICAgY3JlYXRlQ2FyZChjYXJkcywgJy5zdWJDYXJkc0Jsb2NrJywgJ3N1YkNhcmQnKTtcbiAgICAgICAgcmVuZGVyV29yZHMocmVuZGVyRWxlbWVudCk7XG4gICAgICAgIGNsaWNrQ291bnRzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGJ1aWxkU2NvcmVDb250YWluZXIoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IHNjb3JlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgndGFibGUnLCAnc2NvcmVfY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2NvcmVIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCd0cicsICdzY29yZV9oZWFkZXInKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsncmVzZXRfYnRuJywgJ2J0bicsICdidG4tZGFuZ2VyJ10sICd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRhdGFDZWxsRW5nV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ2VuZ2xpc2gnKTtcbiAgICBjb25zdCBkYXRhQ2VsbFJ1c1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdydXNzaWFuJyk7XG4gICAgY29uc3QgZGF0YUNlbGxDbGlja1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdjbGljaycpO1xuICAgIGNvbnN0IGRhdGFDZWxsQ29ycmVjdCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgJ2NvcnJlY3QnKTtcbiAgICBjb25zdCBkYXRhQ2VsbEVycm9yID0gY3JlYXRlRWxlbWVudCgndGQnLCAnZXJyb3InKTtcbiAgICBjb25zdCBkYXRhQ29ycmVjdFBlcmNlbnQgPSBjcmVhdGVFbGVtZW50KCd0ZCcsICdwZXJjZW50Jyk7XG5cbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9ICdSZXNldCBzY29yZSc7XG4gICAgZGF0YUNlbGxFbmdXb3JkLnRleHRDb250ZW50ID0gJ0VuZ2xpc2gnO1xuICAgIGRhdGFDZWxsUnVzV29yZC50ZXh0Q29udGVudCA9ICdSdXNzaWFuJztcbiAgICBkYXRhQ2VsbENsaWNrV29yZC50ZXh0Q29udGVudCA9ICdDbGljayc7XG4gICAgZGF0YUNlbGxDb3JyZWN0LnRleHRDb250ZW50ID0gJ0NvcnJlY3QnO1xuICAgIGRhdGFDZWxsRXJyb3IudGV4dENvbnRlbnQgPSAnRXJyb3InO1xuICAgIGRhdGFDb3JyZWN0UGVyY2VudC50ZXh0Q29udGVudCA9ICdDb3JyZWN0IHNjb3JlJztcblxuICAgIGJsb2NrLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChzY29yZUNvbnRhaW5lcik7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVIZWFkZXIpO1xuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsRW5nV29yZCk7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxSdXNXb3JkKTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbENsaWNrV29yZCk7XG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxDb3JyZWN0KTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbEVycm9yKTtcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ29ycmVjdFBlcmNlbnQpO1xuICB9XG5cbiAgcmVuZGVyU2NvcmUoKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZW0ud29yZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBuZXcgU2NvcmVCbG9jayhpdGVtKS5yZW5kZXJTY29yZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFNjb3JlQmxvY2sge1xuICBjb25zdHJ1Y3Rvcih7IHdvcmQsIHRyYW5zbGF0aW9uIH0pIHtcbiAgICB0aGlzLmRhdGEgPSB7IHdvcmQsIHRyYW5zbGF0aW9uIH07XG4gIH1cblxuICByZW5kZXJTY29yZSgpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKTtcbiAgICBjb25zdCBzdHJJbmZvID0gY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBkYXRhQ2VsbEVuZ1dvcmQgPSBjcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRhdGFDZWxsUnVzV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNlbGxDb3JyZWN0ID0gY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkYXRhQ2VsbENsaWNrV29yZCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNlbGxFcnJvciA9IGNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0YUNvcnJlY3RQZXJjZW50ID0gY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgIGRhdGFDZWxsRW5nV29yZC50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS53b3JkO1xuICAgIGRhdGFDZWxsUnVzV29yZC50ZXh0Q29udGVudCA9IHRoaXMuZGF0YS50cmFuc2xhdGlvbjtcbiAgICBkYXRhQ2VsbENsaWNrV29yZC50ZXh0Q29udGVudCA9ICctJztcbiAgICBkYXRhQ2VsbENvcnJlY3QudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgZGF0YUNlbGxFcnJvci50ZXh0Q29udGVudCA9ICctJztcbiAgICBkYXRhQ2VsbEVycm9yLnRleHRDb250ZW50ID0gJy0nO1xuICAgIGRhdGFDb3JyZWN0UGVyY2VudC50ZXh0Q29udGVudCA9ICctJztcblxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHN0ckluZm8pO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNlbGxFbmdXb3JkKTtcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsUnVzV29yZCk7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbENsaWNrV29yZCk7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbENvcnJlY3QpO1xuICAgIHN0ckluZm8uYXBwZW5kQ2hpbGQoZGF0YUNlbGxFcnJvcik7XG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ29ycmVjdFBlcmNlbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBwbGF5QXVkaW8gfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3Rvcih7IHdvcmQsIHRyYW5zbGF0aW9uLCBpbWFnZSwgYXVkaW9TcmMgfSwgaWQpIHtcbiAgICB0aGlzLmNhcmREYXRhID0geyB3b3JkLCB0cmFuc2xhdGlvbiwgaW1hZ2UsIGF1ZGlvU3JjIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY2FyZDtcbiAgICB0aGlzLmNhcmRfX2NvdmVyO1xuICAgIHRoaXMuY2FyZF9faW5mbztcbiAgICB0aGlzLmluZm9fX3RpdGxlO1xuICAgIHRoaXMucm90YXRlX2ltZztcbiAgfVxuXG4gIHJlbmRlcldvcmQoKSB7XG4gICAgdGhpcy5jYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG5cbiAgICB0aGlzLmNhcmQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5jYXJkRGF0YS53b3JkKTtcbiAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LmFkZCgnc3ViQ2FyZCcpO1xuXG4gICAgdGhpcy5jYXJkX19jb3ZlciA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY292ZXInKTtcbiAgICB0aGlzLmNhcmRfX2luZm8gPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2luZm9fYmxvY2snKTtcbiAgICB0aGlzLmluZm9fX3RpdGxlID0gdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX190aXRsZScpO1xuICAgIHRoaXMucm90YXRlX2ltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICdyb3RhdGUnLCAnc3JjJywgJy4vYXNzZXRzL2ltZy9yb3RhdGUuc3ZnJyk7XG5cbiAgICB0aGlzLmluZm9fX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9fYmxvY2tfX3N1YnRpdGxlJyk7XG4gICAgdGhpcy5pbmZvX190aXRsZS50ZXh0Q29udGVudCA9IHRoaXMuY2FyZERhdGEud29yZDtcbiAgICB0aGlzLmNhcmRfX2NvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5jYXJkRGF0YS5pbWFnZX0nKWA7XG4gICAgdGhpcy5jYXJkX19pbmZvLmFwcGVuZENoaWxkKHRoaXMucm90YXRlX2ltZyk7XG4gIH1cblxuICByb3RhdGVXb3JkKCkge1xuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5mb19fdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmNhcmREYXRhLnRyYW5zbGF0aW9uO1xuICAgICAgdGhpcy5jYXJkLmNsYXNzTGlzdC5hZGQoJ19yb3RhdGUnKTtcbiAgICAgIHRoaXMuY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmV0dXJucyk7XG4gICAgICB0aGlzLnJvdGF0ZV9pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXR1cm5zID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbmZvX190aXRsZS50ZXh0Q29udGVudCA9IHRoaXMuY2FyZERhdGEud29yZDtcbiAgICAgIHRoaXMuY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfcm90YXRlJyk7XG4gICAgICB0aGlzLmNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJldHVybnMpO1xuICAgICAgdGhpcy5yb3RhdGVfaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5yb3RhdGVfaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlKTtcbiAgfVxuXG4gIHByb25vdW5jZVdvcmQoKSB7XG4gICAgdGhpcy5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09PSAnc3ViQ2FyZCcpIHtcbiAgICAgICAgcGxheUF1ZGlvKHRoaXMuY2FyZERhdGEuYXVkaW9TcmMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgYnVpbGRIZWFkZXJTdHJ1Y3R1cmUgfSBmcm9tICcuL2pzL2hlYWRlci5qcydcbmltcG9ydCB7IG1haW5SZW5kZXJTdWJDYXJkLCBmaXJzdFJlbmRlckNhcmQsIGJ1aWxkTWFpblN0cnVjdHVyZSwgYnVpbGRTY29yZSB9IGZyb20gJy4vanMvbWFpbi5qcydcblxuYnVpbGRIZWFkZXJTdHJ1Y3R1cmUoKVxuYnVpbGRNYWluU3RydWN0dXJlKClcbmJ1aWxkU2NvcmUoKVxuZmlyc3RSZW5kZXJDYXJkKClcbm1haW5SZW5kZXJTdWJDYXJkKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==