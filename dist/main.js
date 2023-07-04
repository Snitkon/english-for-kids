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
    this.id = id
    this.cardData = cardData
  }

  buildCardContainer(selector, className) {
    const block = document.querySelector(selector)
    const card = document.createElement('div')
    const cover = document.createElement('div')
    const infoContainer = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const indicator = document.createElement('div')

    card.classList.add(className)
    cover.classList.add('card__cover')
    infoContainer.classList.add('card__info_block')
    cardTitle.classList.add('info_block__title')
    indicator.classList.add('info_block__indicator')

    card.setAttribute('id', this.id)

    block.appendChild(card)

    card.appendChild(cover)

    card.appendChild(infoContainer)
    infoContainer.appendChild(cardTitle)
    infoContainer.appendChild(indicator)
  }

  renderCard() {
    new RenderCard(this.cardData, this.id).render()
  }

  renderSubCard() {
    const subCard = new RenderSubCard(this.cardData, this.id)
    subCard.render()
    subCard.rotate()
    subCard.speech()
  }
}

class RenderCard {
  constructor({ category, cover, words }, id) {
    this.cardData = { category, cover, words }
    this.id = id
  }

  render() {
    const card = document.getElementById(this.id)
    const quantityWords = card.querySelector('.info_block__quantity')

    card.setAttribute('name', this.cardData.category)
    card.classList.add('card')

    const infoContainer = card.querySelector('.card__info_block')
    const cover = card.querySelector('.card__cover')
    const rotate = card.querySelector('.rotate')

    if (card.querySelector('.info_block__subtitle')) {
      const cardTitle = card.querySelector('.info_block__subtitle')
      cardTitle.className = 'info_block__title'
      cardTitle.innerText = this.cardData.category
    }
    if (card.querySelector('.info_block__title')) {
      const cardTitle = card.querySelector('.info_block__title')
      cardTitle.className = 'info_block__title'
      cardTitle.innerText = this.cardData.category
    }

    cover.style.backgroundImage = `url('${this.cardData.cover}')`
    if (quantityWords === null) {
      const createQuantityWords = document.createElement('p')
      createQuantityWords.classList.add('info_block__quantity')
      infoContainer.appendChild(createQuantityWords)
      createQuantityWords.innerText = this.cardData.words.length
    }
    rotate && infoContainer.removeChild(rotate)
  }
}

class RenderSubCard {
  constructor({ word, translation, image, audioSrc }, id) {
    this.cardData = { word, translation, image, audioSrc }
    this.id = id
  }

  render() {
    const card = document.getElementById(this.id)

    card.setAttribute('name', this.cardData.word)
    card.classList.add('subCard')

    const infoContainer = card.querySelector('.card__info_block')
    const cover = card.querySelector('.card__cover')
    const quantityWords = card.querySelector('.info_block__quantity')
    const cardTitle = card.querySelector('.info_block__title')
    const cardIndicator = card.querySelector('.info_block__indicator')
    cardTitle.className = 'info_block__subtitle'

    cardTitle.innerText = this.cardData.word
    cover.style.backgroundImage = `url('${this.cardData.image}')`
    const createRotate = document.createElement('img')
    createRotate.classList.add('rotate')
    createRotate.setAttribute('src', './assets/img/rotate.svg')
    infoContainer.appendChild(createRotate)

    quantityWords && infoContainer.removeChild(quantityWords)
  }

  rotate() {
    const card = document.getElementById(this.id)
    const rotateImg = card.querySelector('.rotate')
    const title = card.querySelector('.info_block__subtitle')

    function rotate(data) {
      title.innerText = data
      card.classList.add('_rotate')
    }

    function returns(data) {
      title.innerText = data
      card.classList.remove('_rotate')
    }

    rotateImg.addEventListener('click', () => {
      rotate(this.cardData.translation)
    })

    card.addEventListener('mouseleave', () => {
      returns(this.cardData.word)
    })
  }

  speech() {
    const card = document.getElementById(this.id)

    function pronunciation(data) {
      ;(0,_function__WEBPACK_IMPORTED_MODULE_0__.playAudio)(data)
    }

    card.addEventListener('click', (e) => {
      if (e.currentTarget.className === 'subCard') {
        pronunciation(this.cardData.audioSrc)
      }
    })
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
  const response = await fetch('./assets/words-cards.json')
  let cards = await response.json()
  return cards
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
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   createErrorData: () => (/* binding */ createErrorData),
/* harmony export */   createScore: () => (/* binding */ createScore),
/* harmony export */   createSeccessData: () => (/* binding */ createSeccessData),
/* harmony export */   createSubCard: () => (/* binding */ createSubCard),
/* harmony export */   finishGame: () => (/* binding */ finishGame),
/* harmony export */   gameStart: () => (/* binding */ gameStart),
/* harmony export */   getSound: () => (/* binding */ getSound),
/* harmony export */   getValueForSorting: () => (/* binding */ getValueForSorting),
/* harmony export */   id: () => (/* binding */ id),
/* harmony export */   playAudio: () => (/* binding */ playAudio),
/* harmony export */   playGame: () => (/* binding */ playGame),
/* harmony export */   removeHeart: () => (/* binding */ removeHeart),
/* harmony export */   resetScore: () => (/* binding */ resetScore),
/* harmony export */   scoreData: () => (/* binding */ scoreData),
/* harmony export */   sortScore: () => (/* binding */ sortScore),
/* harmony export */   sortTable: () => (/* binding */ sortTable)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score */ "./src/js/score.js");





function buildCard(data, selector, className) {
  data.forEach((item, id) => {
    const card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(id, item)
    card.buildCardContainer(selector, className)
  })
}

function createCard(data) {
  data.forEach((item, id) => {
    const card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(id, item)
    card.renderCard()
  })
}

function createSubCard(data) {
  data.forEach((item, id) => {
    const subCard = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(id, item)
    subCard.renderSubCard()
  })
  gameStart()
}

function createScore(data) {
  const score = new _score__WEBPACK_IMPORTED_MODULE_3__.Score(data)
  score.buildScoreContainer('main')
  score.renderScore()
}

function id(data) {
  let id = (data + 1) * 8
  return id
}

function playAudio(url) {
  const audio = new Audio(url)
  audio.play()
}

function active(category, data) {
  const getCollection = document.querySelectorAll(data)
  getCollection.forEach((item) => {
    const name = item.getAttribute('name')
    const link = item.firstElementChild
    if (name === category) {
      item.classList.add('_active')
      link.classList.add('_active')
    } else {
      item.classList.remove('_active')
      link.classList.remove('_active')
    }
  })
}


//For Game
function gameStart() {
  const startBtn = document.querySelector('.start_btn')
  const repeatBtn = document.querySelector('.repeat_btn')
  const navlist = document.querySelector('.nav__list')
  let c = function (e) {
    startBtn.classList.remove('play_mode')
    repeatBtn.classList.add('play_mode')
    const navlist = document.querySelector('.nav__list')
    const children = navlist.children
    const arrElement = [...children]
    const element = arrElement.find((item) => item.className === 'nav_list__item _active')
    const id = element.getAttribute('data-id')
    playGame(id)
  }
  startBtn.addEventListener('click', c)
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection()
      startBtn.removeEventListener('click', c)
    }
  })
}

function getSound(data) {
  let arr = data
  let randomNumber = Math.floor(Math.random() * arr.length)
  let objWord = arr.splice(randomNumber, 1)
  let audio = objWord[0].audioSrc
  playAudio(audio)
  return objWord
}

async function playGame(id) {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getCards)()
  const arrayWord = data[id].words
  const subCardsBlock = document.querySelector('.subCardsBlock')
  const repeat_btn = document.querySelector('.repeat_btn')
  const heart_section = document.querySelector('.heart_section')
  const navlist = document.querySelector('.nav__list')
  heart_section.classList.add('play_mode')
  const arrData = arrayWord
  let dataWord = getSound(arrData)
  const getCorrect = JSON.parse(localStorage.getItem('correct'))
  const getError = JSON.parse(localStorage.getItem('error'))
  const correct = getCorrect ? [...getCorrect] : []
  const error = getError ? [...getError] : []
  let count = 0
  let repeat = function () {
    if (arrData.length > 0) {
      const sound = dataWord[0].audioSrc
      playAudio(sound)
    }
  }
  let cardOperation = function (e) {
    if (e.target.closest('.subCard')) {
      let obj = dataWord
      let heart = document.createElement('div')
      heart.classList.add('heart')
      let subCard = e.target.parentElement
      let subCardName = subCard.getAttribute('name')
      let word = obj[0].word
      if (subCardName === word) {
        ++count
        subCard.classList.add('passed')
        heart.classList.add('right')
        heart_section.appendChild(heart)
        playAudio('./assets/audio/correct.mp3')
        createSeccessData(correct, word)
        removeHeart(count)
        if (arrData.length > 0) {
          setTimeout(() => {
            dataWord = getSound(arrData)
          }, 500)
        } else {
          finishGame(correct, error)
        }
      } else {
        ++count
        heart.classList.add('wrong')
        heart_section.appendChild(heart)
        playAudio('./assets/audio/error.mp3')
        createErrorData(error, word)
        removeHeart(count)
      }
    }
  }
  subCardsBlock.addEventListener('click', cardOperation)
  repeat_btn.addEventListener('click', repeat)
  navlist.addEventListener('click', (e) => {
    if (e.target.closest('.nav_list__link')) {
      clearHeartSection()
      repeat_btn.removeEventListener('click', repeat)
      subCardsBlock.removeEventListener('click', cardOperation)
    }
  })
}

function clearHeartSection() {
  const section = document.querySelector('.heart_section')
  while (section.firstChild) {
    section.removeChild(section.firstChild)
  }
}

function removeHeart(count) {
  const heart = document.querySelectorAll('.heart')
  if (heart.length >= 8) {
    heart[count - 8].style.display = 'none'
  }
}

async function finishGame(correctArr, errorArr) {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getCards)()
  const switcher = document.querySelector('.switcher')
  const heart_section = document.querySelector('.heart_section')
  const subCardBlock = document.querySelector('.subCardsBlock')
  const isSubBlockChildren = subCardBlock.children
  const arrSubBlockCollection = [...isSubBlockChildren]
  const children = heart_section.children
  const arrCollection = [...children]
  const counts = arrCollection.reduce((previously, current) => {
    previously[current.className] = (previously[current.className] || 0) + 1
    return previously
  }, {})

  const wrong = counts['heart wrong']
  const right = counts['heart right']

  const correctJson = JSON.stringify(correctArr)
  const errorJson = JSON.stringify(errorArr)
  localStorage.setItem('correct', correctJson)
  localStorage.setItem('error', errorJson)

  if (wrong) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')

    const wrongBlock = document.createElement('section')
    const container = document.createElement('div')
    const mistakes = document.createElement('span')
    const image = document.createElement('div')

    wrongBlock.classList.add('wrong-block')
    container.classList.add('wrong_container')
    image.classList.add('wrong_image')
    mistakes.classList.add('wrong_mistakes')
    main.classList.toggle('finish')

    body.appendChild(wrongBlock)
    wrongBlock.appendChild(container)
    container.appendChild(image)
    container.appendChild(mistakes)

    mistakes.textContent = `Mistakes: ${wrong}`
    playAudio('./assets/audio/failure.mp3')
    setTimeout(() => {
      body.removeChild(wrongBlock)
      main.classList.toggle('finish')
      let checked = (switcher.firstChild.checked = false)
      ;(0,_header__WEBPACK_IMPORTED_MODULE_2__.checkedMode)(checked)
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item)
      })
      buildCard(cards, '.cardsBlock', 'card')
      createCard(cards)
      clearHeartSection()
    }, 3000)
  }
  if (!wrong) {
    const body = document.querySelector('body')
    const main = document.querySelector('main')

    const rightBlock = document.createElement('section')
    const container = document.createElement('div')
    const perfect = document.createElement('span')
    const image = document.createElement('div')

    rightBlock.classList.add('right-block')
    container.classList.add('right_container')
    image.classList.add('right_image')
    perfect.classList.add('right_perfect')
    main.classList.toggle('finish')

    body.appendChild(rightBlock)
    rightBlock.appendChild(container)
    container.appendChild(image)
    container.appendChild(perfect)

    perfect.textContent = 'Good job'
    playAudio('./assets/audio/success.mp3')
    setTimeout(() => {
      body.removeChild(rightBlock)
      main.classList.toggle('finish')
      let checked = (switcher.firstChild.checked = false)
      ;(0,_header__WEBPACK_IMPORTED_MODULE_2__.checkedMode)(checked)
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item)
      })
      buildCard(cards, '.cardsBlock', 'card')
      createCard(cards)
      clearHeartSection()
    }, 3000)
  }
}

function createSeccessData(arr, data) {
  if (arr.length > 0) {
    let add = false
    for (let item of arr) {
      if (item[0] === data) {
        ++item[1]
        add = true
      }
    }
    if (add === false) {
      arr.push([data, 1])
    }
  }
  if (arr.length === 0) {
    arr.push([data, 1])
  }
}

function createErrorData(arr, data) {
  if (arr.length > 0) {
    let add = false
    for (let item of arr) {
      if (item[0] === data) {
        ++item[1]
        add = true
      }
    }
    if (add === false) {
      arr.push([data, 1])
    }
  }
  if (arr.length === 0) {
    arr.push([data, 1])
  }
}

function clickCounts() {
  const block = document.querySelector('.subCardsBlock')
  const children = block.children
  const arrCollection = [...children]
  arrCollection.forEach((item) => {
    item.addEventListener('click', (e) => {
      const card = e.currentTarget
      const name = card.getAttribute('name')
      if (card.className === 'subCard') {
        const getClick = JSON.parse(localStorage.getItem('click'))
        const click = getClick ? [...getClick] : []
        if (click.length > 0) {
          let find = false
          for (let item of click) {
            if (item[0] === name) {
              ++item[1]
              find = true
            }
          }
          if (find === false) {
            click.push([name, 1])
          }
        }
        if (click.length === 0) {
          click.push([name, 1])
        }
        const clickJson = JSON.stringify(click)
        localStorage.setItem('click', clickJson)
      }
    })
  })
}

function scoreData() {
  const table = document.querySelector('.score_container')
  const row = table.rows
  const correctData = JSON.parse(localStorage.getItem('correct'))
  const errorData = JSON.parse(localStorage.getItem('error'))
  const clickData = JSON.parse(localStorage.getItem('click'))
  for (let item of row) {
    const firstCell = item.cells[0].innerHTML
    const click = clickData && clickData.find((item) => item[0] === firstCell)
    const correct = correctData && correctData.find((item) => item[0] === firstCell)
    const error = errorData && errorData.find((item) => item[0] === firstCell)
    if (click) {
      item.cells[2].innerHTML = `${click[1]}`
    }
    if (correct) {
      item.cells[3].innerHTML = `${correct[1]}`
      item.cells[5].innerHTML = '100%'
    }
    if (error) {
      item.cells[4].innerHTML = `${error[1]}`
    }
    if (correct && error && correct[0] === error[0]) {
      const totalAttempts = correct[1] + error[1]
      const accuracy = ((correct[1] / totalAttempts) * 100).toFixed()
      item.cells[5].innerHTML = `${accuracy}%`
    }
    if (correctData === null && errorData === null && clickData === null) {
      item.cells[2].innerHTML === 'Click' ? (item.cells[2].innerHTML = 'Click') : (item.cells[2].innerHTML = '-')
      item.cells[3].innerHTML === 'Correct' ? (item.cells[3].innerHTML = 'Correct') : (item.cells[3].innerHTML = '-')
      item.cells[4].innerHTML === 'Error' ? (item.cells[4].innerHTML = 'Error') : (item.cells[4].innerHTML = '-')
      item.cells[5].innerHTML === 'Correct score' ? (item.cells[5].innerHTML = 'Correct score') : (item.cells[5].innerHTML = '-')
    }
  }
}

async function resetScore() {
  const resetBtn = document.querySelector('.reset_btn')
  resetBtn.addEventListener('click', () => {
    localStorage.clear()
    scoreData()
  })
}

function sortScore() {
  const table = document.querySelector('.score_container')
  const row = table.rows
  const header = row[0]
  let sortOrder = 'asc'
  header.addEventListener('click', (e) => {
    const target = e.target
    if (sortOrder === 'asc') {
      sortOrder = 'desc'
    } else {
      sortOrder = 'asc'
    }
    if (target.closest('.english')) {
      sortTable(0, sortOrder)
    }
    if (target.closest('.russian')) {
      sortTable(1, sortOrder)
    }
    if (target.closest('.click')) {
      sortTable(2, sortOrder)
    }
    if (target.closest('.correct')) {
      sortTable(3, sortOrder)
    }
    if (target.closest('.error')) {
      sortTable(4, sortOrder)
    }
    if (target.closest('.percent')) {
      sortTable(5, sortOrder)
    }
  })
}

function sortTable(columnIndex, sortDirection) {
  let rows, i, x, y, shouldSwitch
  const table = document.querySelector('.score_container')
  let switching = true

  while (switching) {
    switching = false
    rows = table.rows
    shouldSwitch = false

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false

      x = rows[i].getElementsByTagName('td')[columnIndex]
      y = rows[i + 1].getElementsByTagName('td')[columnIndex]

      const xValue = getValueForSorting(x.innerHTML)
      const yValue = getValueForSorting(y.innerHTML)

      if (xValue === '-' && yValue !== '-') {
        shouldSwitch = true
        break
      } else if (yValue === '-' && xValue !== '-') {
        continue
      }

      if (sortDirection === 'asc') {
        if (xValue > yValue) {
          shouldSwitch = true
          break
        }
      } else if (sortDirection === 'desc') {
        if (xValue < yValue) {
          shouldSwitch = true
          break
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
    }
  }
}

function getValueForSorting(value) {
  const numberRegex = /^-?\d+(?:\.\d+)?$/
  const percentageRegex = /^-?\d+(?:\.\d+)?%$/

  if (numberRegex.test(value)) {
    return parseFloat(value)
  } else if (percentageRegex.test(value)) {
    return parseFloat(value.replace('%', ''))
  } else {
    return value
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
  const body = document.body
  const header = document.createElement('header')
  const container = document.createElement('div')
  const menu = document.createElement('div')
  const burger = document.createElement('div')
  const line = document.createElement('span')
  const nav = document.createElement('nav')
  const nav_list = document.createElement('ul')
  const first_main_item = document.createElement('li')
  const second_score_item = document.createElement('li')
  const first_link = document.createElement('a')
  const second_link = document.createElement('a')
  const switcher = document.createElement('div')
  const input = document.createElement('input')
  const label = document.createElement('label')
  const title = document.createElement('h1')
  const shadow = document.createElement('div')

  header.classList.add('header')
  container.classList.add('container')
  title.classList.add('title')
  menu.classList.add('menu')
  nav.classList.add('menu__nav')
  nav_list.classList.add('nav__list')
  first_main_item.classList.add('nav_list__item', '_active')
  first_link.classList.add('nav_list__link', '_active')
  second_score_item.classList.add('nav_list__item')
  second_link.classList.add('nav_list__link')
  burger.classList.add('menu__burger')
  line.classList.add('line')
  switcher.classList.add('switcher', 'form-check', 'form-switch')
  input.classList.add('input', 'form-check-input')
  label.classList.add('label', 'form-check-label')
  shadow.classList.add('shadow')
  title.textContent = 'Train & Play'
  label.textContent = 'Train'
  first_link.textContent = 'Main Page'
  second_link.textContent = 'Score'

  first_main_item.setAttribute('name', 'Main Page')
  second_score_item.setAttribute('name', 'Score')

  body.appendChild(header)
  body.appendChild(shadow)

  header.appendChild(container)
  header.appendChild(title)

  container.appendChild(menu)
  container.appendChild(switcher)

  menu.appendChild(nav)
  menu.appendChild(burger)

  switcher.appendChild(input)
  switcher.appendChild(label)

  nav.appendChild(nav_list)

  nav_list.appendChild(first_main_item)
  nav_list.appendChild(second_score_item)
  first_main_item.appendChild(first_link)
  second_score_item.appendChild(second_link)
  burger.appendChild(line)

  setSwitcher()
  setNavMenu()
}

function setSwitcher() {
  const switcher = document.querySelector('.switcher')
  const input = document.querySelector('.input')
  const label = document.querySelector('.label')

  function setAttributes(el, options) {
    Object.keys(options).forEach((attr) => {
      el.setAttribute(attr, options[attr])
    })
  }

  setAttributes(input, {
    type: 'checkbox',
    id: 'flexSwitchCheckDefault',
  })

  label.setAttribute('for', 'flexSwitchCheckDefault')

  switcher.addEventListener('click', () => {
    checkedMode(input.checked)
  })
}

function checkedMode(checked) {
  const nav = document.querySelector('.menu__nav')
  const line = document.querySelector('.line')
  const burger = document.querySelector('.menu__burger')
  const label = document.querySelector('.label')

  const subCard = document.querySelectorAll('.subCard')
  const cardIndicator = document.querySelectorAll('.info_block__indicator')
  const cardTitle = document.querySelectorAll('.info_block__subtitle')
  const cardRotate = document.querySelectorAll('.rotate')

  const subCardBlock = document.querySelector('.subCardsBlock')
  const start_btn = document.querySelector('.start_btn')
  const repeat_btn = document.querySelector('.repeat_btn')
  const heart_section = document.querySelector('.heart_section')

  const subCardBlockCount = subCardBlock.children.length

  if (checked === false) {
    label.textContent = 'Train'
    cardIndicator.forEach((item) => item.classList.remove('play_mode'))
    cardTitle.forEach((item) => item.classList.remove('play_mode'))
    cardRotate.forEach((item) => item.classList.remove('play_mode'))
    subCard.forEach((item) => item.classList.remove('play_mode'))
    nav.classList.remove('play_mode')
    line.classList.remove('play_mode')
    burger.classList.remove('play_mode')
    start_btn.classList.remove('play_mode')
    repeat_btn.classList.remove('play_mode')
    heart_section.classList.remove('play_mode')
  }
  if (checked === true) {
    label.textContent = 'Play'
    subCard.forEach((item) => item.classList.add('play_mode'))
    cardIndicator.forEach((item) => item.classList.add('play_mode'))
    cardTitle.forEach((item) => item.classList.add('play_mode'))
    cardRotate.forEach((item) => item.classList.add('play_mode'))
    nav.classList.add('play_mode')
    line.classList.add('play_mode')
    burger.classList.add('play_mode')
    if (subCardBlockCount > 0) {
      start_btn.classList.add('play_mode')
    }
  }
}

async function setNavMenu() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)()
  const nav_list = document.querySelector('.nav__list')
  const burger = document.querySelector('.menu__burger')
  const nav = document.querySelector('.menu__nav')
  const body = document.querySelector('body')
  const shadow = document.querySelector('.shadow')

  cards.forEach((card, i) => {
    const { category } = card
    const nav_list__item = document.createElement('li')
    const link = document.createElement('a')

    nav_list.appendChild(nav_list__item)
    nav_list__item.appendChild(link)

    nav_list__item.classList.add('nav_list__item')
    link.classList.add('nav_list__link')

    nav_list__item.setAttribute('name', `${category}`)
    nav_list__item.setAttribute('data-id', i)
    link.textContent = `${category}`
  })

  nav_list.addEventListener('click', (e) => {
    const section = document.querySelector('.section')
    const table = document.querySelector('.score_container')
    const resetBtn = document.querySelector('.reset_btn')
    const name = e.target.parentElement.getAttribute('name')
    const id = e.target.parentElement.getAttribute('data-id')
    const className = e.target.parentElement.classList.contains('nav_list__item')
    const cardBlock = document.querySelector('.cardsBlock')
    const subCardBlock = document.querySelector('.subCardsBlock')
    const switcher = document.querySelector('.switcher')
    const subCardsCatergory = cards[id]?.category
    if (name === subCardsCatergory && className) {
      const card = cards.find((item) => item.category === name)
      const subCards = card.words
      const isSubBlockChildren = subCardBlock.children
      const isBlockChildren = cardBlock.children
      const arrBlockCollection = [...isBlockChildren]
      const arrSubBlockCollection = [...isSubBlockChildren]
      arrBlockCollection.forEach((item) => {
        cardBlock.removeChild(item)
      })
      if (isSubBlockChildren.length > 0) {
        arrSubBlockCollection.forEach((item) => {
          subCardBlock.removeChild(item)
        })
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(subCards, '.subCardsBlock', 'subCard')
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.createSubCard)(subCards)
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)()
      } else if (isSubBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(subCards, '.subCardsBlock', 'subCard')
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.createSubCard)(subCards)
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)()
      }
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      resetBtn.classList.remove('_active')
      table.classList.remove('_active')
      section.classList.add('_active')
      ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item')
    }
    if (name === 'Main Page' && className) {
      const isSubBlockChildren = subCardBlock.children
      const isBlockChildren = cardBlock.children
      const arrSubBlockCollection = [...isSubBlockChildren]
      arrSubBlockCollection.forEach((item) => {
        subCardBlock.removeChild(item)
      })
      if (isBlockChildren.length > 0) {
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards)
      } else if (isBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false)
        checkedMode(checked)
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(cards, '.cardsBlock', 'card')
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards)
      }
      (0,_main__WEBPACK_IMPORTED_MODULE_2__.mainRenderSubCard)()
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      resetBtn.classList.remove('_active')
      table.classList.remove('_active')
      section.classList.add('_active')
      ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item')
    }
    if (name === 'Score' && className) {
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_active')
      shadow.classList.remove('_active')
      section.classList.remove('_active')
      resetBtn.classList.add('_active')
      table.classList.add('_active')
      ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item')
      ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.scoreData)()
      ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.resetScore)()
      ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.sortScore)()
    }
  })

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('_active')
    nav.classList.toggle('_active')
    body.classList.toggle('_active')
    shadow.classList.toggle('_active')
  })
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
  const body = document.body
  const main = document.createElement('main')
  const section = document.createElement('section')
  const categoryCard = document.createElement('div')
  const subCard = document.createElement('div')
  const start_btn = document.createElement('button')
  const repeat_btn = document.createElement('button')
  const heart_section = document.createElement('div')
  start_btn.textContent = 'START'
  repeat_btn.textContent = 'REPEAT'

  section.classList.add('section', '_active')
  categoryCard.classList.add('cardsBlock')
  subCard.classList.add('subCardsBlock')
  start_btn.classList.add('start_btn', 'btn', 'btn-secondary')
  repeat_btn.classList.add('repeat_btn', 'btn', 'btn-primary')
  heart_section.classList.add('heart_section')

  body.appendChild(main)
  main.appendChild(section)
  section.appendChild(categoryCard)
  section.appendChild(subCard)
  section.appendChild(start_btn)
  section.appendChild(repeat_btn)
  section.appendChild(heart_section)
}

async function buildScore() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)()
  ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.createScore)(cards)
}

async function firstRenderCard() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)()
  ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(cards, '.cardsBlock', 'card')
  ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.createCard)(cards)
}

async function mainRenderSubCard() {
  const cards = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.getCards)()
  const block = document.querySelector('.cardsBlock')
  const input = document.querySelector('.input')
  const switcher = document.querySelector('.switcher')
  const children = block.children
  const arrCollection = [...children]
  arrCollection.forEach((item) => {
    item.addEventListener('click', (e) => {
      const card = e.currentTarget
      const id = card.getAttribute('id')
      const name = card.getAttribute('name')
      const element = cards.find((item) => item.category === name)
      if (cards.find((item) => item.category === name)) {
        arrCollection.forEach((item) => {
          block.removeChild(item)
        })
        let checked = (switcher.firstChild.checked = false)
        ;(0,_header__WEBPACK_IMPORTED_MODULE_2__.checkedMode)(checked)
        const renderElement = element.words
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.active)(name, '.nav_list__item')
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.buildCard)(cards, '.subCardsBlock', 'subCard')
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.createSubCard)(renderElement)
        ;(0,_function__WEBPACK_IMPORTED_MODULE_1__.clickCounts)()
      }
    })
    item.addEventListener('mouseleave', (e) => {
      const card = e.currentTarget
      if (card.classList.contains('_rotate')) {
        const name = card.getAttribute('name')
        card.classList.remove('_rotate')
        const title = card.lastElementChild.firstElementChild
        title.textContent = name
      }
    })
  })
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
class Score {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NzQiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy8uL3NyYy9qcy9jYXJkLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvZGF0YS5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvaGVhZGVyLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2pzL3Njb3JlLmpzIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW5nbGlzaC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VuZ2xpc2gtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmdsaXNoLWZvci1raWRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHBsYXlBdWRpbyB9IGZyb20gJy4vZnVuY3Rpb24nXG5cbmV4cG9ydCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoaWQsIGNhcmREYXRhKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5jYXJkRGF0YSA9IGNhcmREYXRhXG4gIH1cblxuICBidWlsZENhcmRDb250YWluZXIoc2VsZWN0b3IsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvdmVyJylcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2luZm9fYmxvY2snKVxuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvX2Jsb2NrX190aXRsZScpXG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZm9fYmxvY2tfX2luZGljYXRvcicpXG5cbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKVxuXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoY2FyZClcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY292ZXIpXG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkVGl0bGUpXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRpY2F0b3IpXG4gIH1cblxuICByZW5kZXJDYXJkKCkge1xuICAgIG5ldyBSZW5kZXJDYXJkKHRoaXMuY2FyZERhdGEsIHRoaXMuaWQpLnJlbmRlcigpXG4gIH1cblxuICByZW5kZXJTdWJDYXJkKCkge1xuICAgIGNvbnN0IHN1YkNhcmQgPSBuZXcgUmVuZGVyU3ViQ2FyZCh0aGlzLmNhcmREYXRhLCB0aGlzLmlkKVxuICAgIHN1YkNhcmQucmVuZGVyKClcbiAgICBzdWJDYXJkLnJvdGF0ZSgpXG4gICAgc3ViQ2FyZC5zcGVlY2goKVxuICB9XG59XG5cbmNsYXNzIFJlbmRlckNhcmQge1xuICBjb25zdHJ1Y3Rvcih7IGNhdGVnb3J5LCBjb3Zlciwgd29yZHMgfSwgaWQpIHtcbiAgICB0aGlzLmNhcmREYXRhID0geyBjYXRlZ29yeSwgY292ZXIsIHdvcmRzIH1cbiAgICB0aGlzLmlkID0gaWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZClcbiAgICBjb25zdCBxdWFudGl0eVdvcmRzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuaW5mb19ibG9ja19fcXVhbnRpdHknKVxuXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLmNhcmREYXRhLmNhdGVnb3J5KVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG5cbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW5mb19ibG9jaycpXG4gICAgY29uc3QgY292ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb3ZlcicpXG4gICAgY29uc3Qgcm90YXRlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcucm90YXRlJylcblxuICAgIGlmIChjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX19zdWJ0aXRsZScpKSB7XG4gICAgICBjb25zdCBjYXJkVGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX19zdWJ0aXRsZScpXG4gICAgICBjYXJkVGl0bGUuY2xhc3NOYW1lID0gJ2luZm9fYmxvY2tfX3RpdGxlJ1xuICAgICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IHRoaXMuY2FyZERhdGEuY2F0ZWdvcnlcbiAgICB9XG4gICAgaWYgKGNhcmQucXVlcnlTZWxlY3RvcignLmluZm9fYmxvY2tfX3RpdGxlJykpIHtcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmluZm9fYmxvY2tfX3RpdGxlJylcbiAgICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSAnaW5mb19ibG9ja19fdGl0bGUnXG4gICAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy5jYXJkRGF0YS5jYXRlZ29yeVxuICAgIH1cblxuICAgIGNvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5jYXJkRGF0YS5jb3Zlcn0nKWBcbiAgICBpZiAocXVhbnRpdHlXb3JkcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY3JlYXRlUXVhbnRpdHlXb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgY3JlYXRlUXVhbnRpdHlXb3Jkcy5jbGFzc0xpc3QuYWRkKCdpbmZvX2Jsb2NrX19xdWFudGl0eScpXG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVF1YW50aXR5V29yZHMpXG4gICAgICBjcmVhdGVRdWFudGl0eVdvcmRzLmlubmVyVGV4dCA9IHRoaXMuY2FyZERhdGEud29yZHMubGVuZ3RoXG4gICAgfVxuICAgIHJvdGF0ZSAmJiBpbmZvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHJvdGF0ZSlcbiAgfVxufVxuXG5jbGFzcyBSZW5kZXJTdWJDYXJkIHtcbiAgY29uc3RydWN0b3IoeyB3b3JkLCB0cmFuc2xhdGlvbiwgaW1hZ2UsIGF1ZGlvU3JjIH0sIGlkKSB7XG4gICAgdGhpcy5jYXJkRGF0YSA9IHsgd29yZCwgdHJhbnNsYXRpb24sIGltYWdlLCBhdWRpb1NyYyB9XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpXG5cbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuY2FyZERhdGEud29yZClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3N1YkNhcmQnKVxuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2luZm9fYmxvY2snKVxuICAgIGNvbnN0IGNvdmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY292ZXInKVxuICAgIGNvbnN0IHF1YW50aXR5V29yZHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX19xdWFudGl0eScpXG4gICAgY29uc3QgY2FyZFRpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuaW5mb19ibG9ja19fdGl0bGUnKVxuICAgIGNvbnN0IGNhcmRJbmRpY2F0b3IgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX19pbmRpY2F0b3InKVxuICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSAnaW5mb19ibG9ja19fc3VidGl0bGUnXG5cbiAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy5jYXJkRGF0YS53b3JkXG4gICAgY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt0aGlzLmNhcmREYXRhLmltYWdlfScpYFxuICAgIGNvbnN0IGNyZWF0ZVJvdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY3JlYXRlUm90YXRlLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpXG4gICAgY3JlYXRlUm90YXRlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZy9yb3RhdGUuc3ZnJylcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVJvdGF0ZSlcblxuICAgIHF1YW50aXR5V29yZHMgJiYgaW5mb0NvbnRhaW5lci5yZW1vdmVDaGlsZChxdWFudGl0eVdvcmRzKVxuICB9XG5cbiAgcm90YXRlKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKVxuICAgIGNvbnN0IHJvdGF0ZUltZyA9IGNhcmQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpXG4gICAgY29uc3QgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX2Jsb2NrX19zdWJ0aXRsZScpXG5cbiAgICBmdW5jdGlvbiByb3RhdGUoZGF0YSkge1xuICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gZGF0YVxuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdfcm90YXRlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5zKGRhdGEpIHtcbiAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGRhdGFcbiAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnX3JvdGF0ZScpXG4gICAgfVxuXG4gICAgcm90YXRlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcm90YXRlKHRoaXMuY2FyZERhdGEudHJhbnNsYXRpb24pXG4gICAgfSlcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHJldHVybnModGhpcy5jYXJkRGF0YS53b3JkKVxuICAgIH0pXG4gIH1cblxuICBzcGVlY2goKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpXG5cbiAgICBmdW5jdGlvbiBwcm9udW5jaWF0aW9uKGRhdGEpIHtcbiAgICAgIHBsYXlBdWRpbyhkYXRhKVxuICAgIH1cblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT09ICdzdWJDYXJkJykge1xuICAgICAgICBwcm9udW5jaWF0aW9uKHRoaXMuY2FyZERhdGEuYXVkaW9TcmMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJkcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi9hc3NldHMvd29yZHMtY2FyZHMuanNvbicpXG4gIGxldCBjYXJkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gY2FyZHNcbn0iLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9jYXJkJ1xuaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBjaGVja2VkTW9kZSB9IGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHsgU2NvcmUgfSBmcm9tICcuL3Njb3JlJ1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXJkKGRhdGEsIHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpZCwgaXRlbSlcbiAgICBjYXJkLmJ1aWxkQ2FyZENvbnRhaW5lcihzZWxlY3RvciwgY2xhc3NOYW1lKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoaXRlbSwgaWQpID0+IHtcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaWQsIGl0ZW0pXG4gICAgY2FyZC5yZW5kZXJDYXJkKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1YkNhcmQoZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGl0ZW0sIGlkKSA9PiB7XG4gICAgY29uc3Qgc3ViQ2FyZCA9IG5ldyBDYXJkKGlkLCBpdGVtKVxuICAgIHN1YkNhcmQucmVuZGVyU3ViQ2FyZCgpXG4gIH0pXG4gIGdhbWVTdGFydCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY29yZShkYXRhKSB7XG4gIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKGRhdGEpXG4gIHNjb3JlLmJ1aWxkU2NvcmVDb250YWluZXIoJ21haW4nKVxuICBzY29yZS5yZW5kZXJTY29yZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZChkYXRhKSB7XG4gIGxldCBpZCA9IChkYXRhICsgMSkgKiA4XG4gIHJldHVybiBpZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheUF1ZGlvKHVybCkge1xuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh1cmwpXG4gIGF1ZGlvLnBsYXkoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlKGNhdGVnb3J5LCBkYXRhKSB7XG4gIGNvbnN0IGdldENvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRhdGEpXG4gIGdldENvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgY29uc3QgbGluayA9IGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICBpZiAobmFtZSA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxuICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcbiAgICB9XG4gIH0pXG59XG5cblxuLy9Gb3IgR2FtZVxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVTdGFydCgpIHtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRfYnRuJylcbiAgY29uc3QgcmVwZWF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGVhdF9idG4nKVxuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpXG4gIGxldCBjID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKVxuICAgIHJlcGVhdEJ0bi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKVxuICAgIGNvbnN0IG5hdmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0JylcbiAgICBjb25zdCBjaGlsZHJlbiA9IG5hdmxpc3QuY2hpbGRyZW5cbiAgICBjb25zdCBhcnJFbGVtZW50ID0gWy4uLmNoaWxkcmVuXVxuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJFbGVtZW50LmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2xhc3NOYW1lID09PSAnbmF2X2xpc3RfX2l0ZW0gX2FjdGl2ZScpXG4gICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgcGxheUdhbWUoaWQpXG4gIH1cbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjKVxuICBuYXZsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLm5hdl9saXN0X19saW5rJykpIHtcbiAgICAgIGNsZWFySGVhcnRTZWN0aW9uKClcbiAgICAgIHN0YXJ0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYylcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VuZChkYXRhKSB7XG4gIGxldCBhcnIgPSBkYXRhXG4gIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKVxuICBsZXQgb2JqV29yZCA9IGFyci5zcGxpY2UocmFuZG9tTnVtYmVyLCAxKVxuICBsZXQgYXVkaW8gPSBvYmpXb3JkWzBdLmF1ZGlvU3JjXG4gIHBsYXlBdWRpbyhhdWRpbylcbiAgcmV0dXJuIG9ialdvcmRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsYXlHYW1lKGlkKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXJkcygpXG4gIGNvbnN0IGFycmF5V29yZCA9IGRhdGFbaWRdLndvcmRzXG4gIGNvbnN0IHN1YkNhcmRzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViQ2FyZHNCbG9jaycpXG4gIGNvbnN0IHJlcGVhdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0X2J0bicpXG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpXG4gIGNvbnN0IG5hdmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0JylcbiAgaGVhcnRfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKVxuICBjb25zdCBhcnJEYXRhID0gYXJyYXlXb3JkXG4gIGxldCBkYXRhV29yZCA9IGdldFNvdW5kKGFyckRhdGEpXG4gIGNvbnN0IGdldENvcnJlY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3JyZWN0JykpXG4gIGNvbnN0IGdldEVycm9yID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXJyb3InKSlcbiAgY29uc3QgY29ycmVjdCA9IGdldENvcnJlY3QgPyBbLi4uZ2V0Q29ycmVjdF0gOiBbXVxuICBjb25zdCBlcnJvciA9IGdldEVycm9yID8gWy4uLmdldEVycm9yXSA6IFtdXG4gIGxldCBjb3VudCA9IDBcbiAgbGV0IHJlcGVhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXJyRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzb3VuZCA9IGRhdGFXb3JkWzBdLmF1ZGlvU3JjXG4gICAgICBwbGF5QXVkaW8oc291bmQpXG4gICAgfVxuICB9XG4gIGxldCBjYXJkT3BlcmF0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnN1YkNhcmQnKSkge1xuICAgICAgbGV0IG9iaiA9IGRhdGFXb3JkXG4gICAgICBsZXQgaGVhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgaGVhcnQuY2xhc3NMaXN0LmFkZCgnaGVhcnQnKVxuICAgICAgbGV0IHN1YkNhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICBsZXQgc3ViQ2FyZE5hbWUgPSBzdWJDYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgICBsZXQgd29yZCA9IG9ialswXS53b3JkXG4gICAgICBpZiAoc3ViQ2FyZE5hbWUgPT09IHdvcmQpIHtcbiAgICAgICAgKytjb3VudFxuICAgICAgICBzdWJDYXJkLmNsYXNzTGlzdC5hZGQoJ3Bhc3NlZCcpXG4gICAgICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0JylcbiAgICAgICAgaGVhcnRfc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydClcbiAgICAgICAgcGxheUF1ZGlvKCcuL2Fzc2V0cy9hdWRpby9jb3JyZWN0Lm1wMycpXG4gICAgICAgIGNyZWF0ZVNlY2Nlc3NEYXRhKGNvcnJlY3QsIHdvcmQpXG4gICAgICAgIHJlbW92ZUhlYXJ0KGNvdW50KVxuICAgICAgICBpZiAoYXJyRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkYXRhV29yZCA9IGdldFNvdW5kKGFyckRhdGEpXG4gICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbmlzaEdhbWUoY29ycmVjdCwgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICsrY291bnRcbiAgICAgICAgaGVhcnQuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKVxuICAgICAgICBoZWFydF9zZWN0aW9uLmFwcGVuZENoaWxkKGhlYXJ0KVxuICAgICAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL2Vycm9yLm1wMycpXG4gICAgICAgIGNyZWF0ZUVycm9yRGF0YShlcnJvciwgd29yZClcbiAgICAgICAgcmVtb3ZlSGVhcnQoY291bnQpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN1YkNhcmRzQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXJkT3BlcmF0aW9uKVxuICByZXBlYXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVwZWF0KVxuICBuYXZsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLm5hdl9saXN0X19saW5rJykpIHtcbiAgICAgIGNsZWFySGVhcnRTZWN0aW9uKClcbiAgICAgIHJlcGVhdF9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXBlYXQpXG4gICAgICBzdWJDYXJkc0Jsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FyZE9wZXJhdGlvbilcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckhlYXJ0U2VjdGlvbigpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJylcbiAgd2hpbGUgKHNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQoc2VjdGlvbi5maXJzdENoaWxkKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIZWFydChjb3VudCkge1xuICBjb25zdCBoZWFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydCcpXG4gIGlmIChoZWFydC5sZW5ndGggPj0gOCkge1xuICAgIGhlYXJ0W2NvdW50IC0gOF0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5pc2hHYW1lKGNvcnJlY3RBcnIsIGVycm9yQXJyKSB7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKVxuICBjb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcicpXG4gIGNvbnN0IGhlYXJ0X3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhcnRfc2VjdGlvbicpXG4gIGNvbnN0IHN1YkNhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJDYXJkc0Jsb2NrJylcbiAgY29uc3QgaXNTdWJCbG9ja0NoaWxkcmVuID0gc3ViQ2FyZEJsb2NrLmNoaWxkcmVuXG4gIGNvbnN0IGFyclN1YkJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc1N1YkJsb2NrQ2hpbGRyZW5dXG4gIGNvbnN0IGNoaWxkcmVuID0gaGVhcnRfc2VjdGlvbi5jaGlsZHJlblxuICBjb25zdCBhcnJDb2xsZWN0aW9uID0gWy4uLmNoaWxkcmVuXVxuICBjb25zdCBjb3VudHMgPSBhcnJDb2xsZWN0aW9uLnJlZHVjZSgocHJldmlvdXNseSwgY3VycmVudCkgPT4ge1xuICAgIHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdID0gKHByZXZpb3VzbHlbY3VycmVudC5jbGFzc05hbWVdIHx8IDApICsgMVxuICAgIHJldHVybiBwcmV2aW91c2x5XG4gIH0sIHt9KVxuXG4gIGNvbnN0IHdyb25nID0gY291bnRzWydoZWFydCB3cm9uZyddXG4gIGNvbnN0IHJpZ2h0ID0gY291bnRzWydoZWFydCByaWdodCddXG5cbiAgY29uc3QgY29ycmVjdEpzb24gPSBKU09OLnN0cmluZ2lmeShjb3JyZWN0QXJyKVxuICBjb25zdCBlcnJvckpzb24gPSBKU09OLnN0cmluZ2lmeShlcnJvckFycilcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcnJlY3QnLCBjb3JyZWN0SnNvbilcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Vycm9yJywgZXJyb3JKc29uKVxuXG4gIGlmICh3cm9uZykge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5cbiAgICBjb25zdCB3cm9uZ0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtaXN0YWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIHdyb25nQmxvY2suY2xhc3NMaXN0LmFkZCgnd3JvbmctYmxvY2snKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3cm9uZ19jb250YWluZXInKVxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3dyb25nX2ltYWdlJylcbiAgICBtaXN0YWtlcy5jbGFzc0xpc3QuYWRkKCd3cm9uZ19taXN0YWtlcycpXG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gnKVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZCh3cm9uZ0Jsb2NrKVxuICAgIHdyb25nQmxvY2suYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWlzdGFrZXMpXG5cbiAgICBtaXN0YWtlcy50ZXh0Q29udGVudCA9IGBNaXN0YWtlczogJHt3cm9uZ31gXG4gICAgcGxheUF1ZGlvKCcuL2Fzc2V0cy9hdWRpby9mYWlsdXJlLm1wMycpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHdyb25nQmxvY2spXG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbmlzaCcpXG4gICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSlcbiAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpXG4gICAgICBhcnJTdWJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBzdWJDYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSlcbiAgICAgIH0pXG4gICAgICBidWlsZENhcmQoY2FyZHMsICcuY2FyZHNCbG9jaycsICdjYXJkJylcbiAgICAgIGNyZWF0ZUNhcmQoY2FyZHMpXG4gICAgICBjbGVhckhlYXJ0U2VjdGlvbigpXG4gICAgfSwgMzAwMClcbiAgfVxuICBpZiAoIXdyb25nKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcblxuICAgIGNvbnN0IHJpZ2h0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHBlcmZlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICByaWdodEJsb2NrLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWJsb2NrJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHRfY29udGFpbmVyJylcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdyaWdodF9pbWFnZScpXG4gICAgcGVyZmVjdC5jbGFzc0xpc3QuYWRkKCdyaWdodF9wZXJmZWN0JylcbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbmlzaCcpXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHJpZ2h0QmxvY2spXG4gICAgcmlnaHRCbG9jay5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJmZWN0KVxuXG4gICAgcGVyZmVjdC50ZXh0Q29udGVudCA9ICdHb29kIGpvYidcbiAgICBwbGF5QXVkaW8oJy4vYXNzZXRzL2F1ZGlvL3N1Y2Nlc3MubXAzJylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocmlnaHRCbG9jaylcbiAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoJylcbiAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKVxuICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZClcbiAgICAgIGFyclN1YkJsb2NrQ29sbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN1YkNhcmRCbG9jay5yZW1vdmVDaGlsZChpdGVtKVxuICAgICAgfSlcbiAgICAgIGJ1aWxkQ2FyZChjYXJkcywgJy5jYXJkc0Jsb2NrJywgJ2NhcmQnKVxuICAgICAgY3JlYXRlQ2FyZChjYXJkcylcbiAgICAgIGNsZWFySGVhcnRTZWN0aW9uKClcbiAgICB9LCAzMDAwKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWNjZXNzRGF0YShhcnIsIGRhdGEpIHtcbiAgaWYgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGFkZCA9IGZhbHNlXG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcbiAgICAgIGlmIChpdGVtWzBdID09PSBkYXRhKSB7XG4gICAgICAgICsraXRlbVsxXVxuICAgICAgICBhZGQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhZGQgPT09IGZhbHNlKSB7XG4gICAgICBhcnIucHVzaChbZGF0YSwgMV0pXG4gICAgfVxuICB9XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgYXJyLnB1c2goW2RhdGEsIDFdKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvckRhdGEoYXJyLCBkYXRhKSB7XG4gIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgIGxldCBhZGQgPSBmYWxzZVxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBpZiAoaXRlbVswXSA9PT0gZGF0YSkge1xuICAgICAgICArK2l0ZW1bMV1cbiAgICAgICAgYWRkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWRkID09PSBmYWxzZSkge1xuICAgICAgYXJyLnB1c2goW2RhdGEsIDFdKVxuICAgIH1cbiAgfVxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIGFyci5wdXNoKFtkYXRhLCAxXSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDb3VudHMoKSB7XG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKVxuICBjb25zdCBjaGlsZHJlbiA9IGJsb2NrLmNoaWxkcmVuXG4gIGNvbnN0IGFyckNvbGxlY3Rpb24gPSBbLi4uY2hpbGRyZW5dXG4gIGFyckNvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUuY3VycmVudFRhcmdldFxuICAgICAgY29uc3QgbmFtZSA9IGNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICAgIGlmIChjYXJkLmNsYXNzTmFtZSA9PT0gJ3N1YkNhcmQnKSB7XG4gICAgICAgIGNvbnN0IGdldENsaWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2xpY2snKSlcbiAgICAgICAgY29uc3QgY2xpY2sgPSBnZXRDbGljayA/IFsuLi5nZXRDbGlja10gOiBbXVxuICAgICAgICBpZiAoY2xpY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBmaW5kID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNsaWNrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVswXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICArK2l0ZW1bMV1cbiAgICAgICAgICAgICAgZmluZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbmQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGljay5wdXNoKFtuYW1lLCAxXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNsaWNrLnB1c2goW25hbWUsIDFdKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrSnNvbiA9IEpTT04uc3RyaW5naWZ5KGNsaWNrKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2xpY2snLCBjbGlja0pzb24pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjb3JlRGF0YSgpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJylcbiAgY29uc3Qgcm93ID0gdGFibGUucm93c1xuICBjb25zdCBjb3JyZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvcnJlY3QnKSlcbiAgY29uc3QgZXJyb3JEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXJyb3InKSlcbiAgY29uc3QgY2xpY2tEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2xpY2snKSlcbiAgZm9yIChsZXQgaXRlbSBvZiByb3cpIHtcbiAgICBjb25zdCBmaXJzdENlbGwgPSBpdGVtLmNlbGxzWzBdLmlubmVySFRNTFxuICAgIGNvbnN0IGNsaWNrID0gY2xpY2tEYXRhICYmIGNsaWNrRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtWzBdID09PSBmaXJzdENlbGwpXG4gICAgY29uc3QgY29ycmVjdCA9IGNvcnJlY3REYXRhICYmIGNvcnJlY3REYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW1bMF0gPT09IGZpcnN0Q2VsbClcbiAgICBjb25zdCBlcnJvciA9IGVycm9yRGF0YSAmJiBlcnJvckRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbVswXSA9PT0gZmlyc3RDZWxsKVxuICAgIGlmIChjbGljaykge1xuICAgICAgaXRlbS5jZWxsc1syXS5pbm5lckhUTUwgPSBgJHtjbGlja1sxXX1gXG4gICAgfVxuICAgIGlmIChjb3JyZWN0KSB7XG4gICAgICBpdGVtLmNlbGxzWzNdLmlubmVySFRNTCA9IGAke2NvcnJlY3RbMV19YFxuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnMTAwJSdcbiAgICB9XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBpdGVtLmNlbGxzWzRdLmlubmVySFRNTCA9IGAke2Vycm9yWzFdfWBcbiAgICB9XG4gICAgaWYgKGNvcnJlY3QgJiYgZXJyb3IgJiYgY29ycmVjdFswXSA9PT0gZXJyb3JbMF0pIHtcbiAgICAgIGNvbnN0IHRvdGFsQXR0ZW1wdHMgPSBjb3JyZWN0WzFdICsgZXJyb3JbMV1cbiAgICAgIGNvbnN0IGFjY3VyYWN5ID0gKChjb3JyZWN0WzFdIC8gdG90YWxBdHRlbXB0cykgKiAxMDApLnRvRml4ZWQoKVxuICAgICAgaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSBgJHthY2N1cmFjeX0lYFxuICAgIH1cbiAgICBpZiAoY29ycmVjdERhdGEgPT09IG51bGwgJiYgZXJyb3JEYXRhID09PSBudWxsICYmIGNsaWNrRGF0YSA9PT0gbnVsbCkge1xuICAgICAgaXRlbS5jZWxsc1syXS5pbm5lckhUTUwgPT09ICdDbGljaycgPyAoaXRlbS5jZWxsc1syXS5pbm5lckhUTUwgPSAnQ2xpY2snKSA6IChpdGVtLmNlbGxzWzJdLmlubmVySFRNTCA9ICctJylcbiAgICAgIGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID09PSAnQ29ycmVjdCcgPyAoaXRlbS5jZWxsc1szXS5pbm5lckhUTUwgPSAnQ29ycmVjdCcpIDogKGl0ZW0uY2VsbHNbM10uaW5uZXJIVE1MID0gJy0nKVxuICAgICAgaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPT09ICdFcnJvcicgPyAoaXRlbS5jZWxsc1s0XS5pbm5lckhUTUwgPSAnRXJyb3InKSA6IChpdGVtLmNlbGxzWzRdLmlubmVySFRNTCA9ICctJylcbiAgICAgIGl0ZW0uY2VsbHNbNV0uaW5uZXJIVE1MID09PSAnQ29ycmVjdCBzY29yZScgPyAoaXRlbS5jZWxsc1s1XS5pbm5lckhUTUwgPSAnQ29ycmVjdCBzY29yZScpIDogKGl0ZW0uY2VsbHNbNV0uaW5uZXJIVE1MID0gJy0nKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRTY29yZSgpIHtcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfYnRuJylcbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICBzY29yZURhdGEoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFNjb3JlKCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKVxuICBjb25zdCByb3cgPSB0YWJsZS5yb3dzXG4gIGNvbnN0IGhlYWRlciA9IHJvd1swXVxuICBsZXQgc29ydE9yZGVyID0gJ2FzYydcbiAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICAgIGlmIChzb3J0T3JkZXIgPT09ICdhc2MnKSB7XG4gICAgICBzb3J0T3JkZXIgPSAnZGVzYydcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydE9yZGVyID0gJ2FzYydcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuZW5nbGlzaCcpKSB7XG4gICAgICBzb3J0VGFibGUoMCwgc29ydE9yZGVyKVxuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5ydXNzaWFuJykpIHtcbiAgICAgIHNvcnRUYWJsZSgxLCBzb3J0T3JkZXIpXG4gICAgfVxuICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmNsaWNrJykpIHtcbiAgICAgIHNvcnRUYWJsZSgyLCBzb3J0T3JkZXIpXG4gICAgfVxuICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmNvcnJlY3QnKSkge1xuICAgICAgc29ydFRhYmxlKDMsIHNvcnRPcmRlcilcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuZXJyb3InKSkge1xuICAgICAgc29ydFRhYmxlKDQsIHNvcnRPcmRlcilcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KCcucGVyY2VudCcpKSB7XG4gICAgICBzb3J0VGFibGUoNSwgc29ydE9yZGVyKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZShjb2x1bW5JbmRleCwgc29ydERpcmVjdGlvbikge1xuICBsZXQgcm93cywgaSwgeCwgeSwgc2hvdWxkU3dpdGNoXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX2NvbnRhaW5lcicpXG4gIGxldCBzd2l0Y2hpbmcgPSB0cnVlXG5cbiAgd2hpbGUgKHN3aXRjaGluZykge1xuICAgIHN3aXRjaGluZyA9IGZhbHNlXG4gICAgcm93cyA9IHRhYmxlLnJvd3NcbiAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZVxuXG4gICAgZm9yIChpID0gMTsgaSA8IHJvd3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZVxuXG4gICAgICB4ID0gcm93c1tpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGQnKVtjb2x1bW5JbmRleF1cbiAgICAgIHkgPSByb3dzW2kgKyAxXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGQnKVtjb2x1bW5JbmRleF1cblxuICAgICAgY29uc3QgeFZhbHVlID0gZ2V0VmFsdWVGb3JTb3J0aW5nKHguaW5uZXJIVE1MKVxuICAgICAgY29uc3QgeVZhbHVlID0gZ2V0VmFsdWVGb3JTb3J0aW5nKHkuaW5uZXJIVE1MKVxuXG4gICAgICBpZiAoeFZhbHVlID09PSAnLScgJiYgeVZhbHVlICE9PSAnLScpIHtcbiAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIGlmICh5VmFsdWUgPT09ICctJyAmJiB4VmFsdWUgIT09ICctJykge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgICAgaWYgKHhWYWx1ZSA+IHlWYWx1ZSkge1xuICAgICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdkZXNjJykge1xuICAgICAgICBpZiAoeFZhbHVlIDwgeVZhbHVlKSB7XG4gICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3VsZFN3aXRjaCkge1xuICAgICAgcm93c1tpXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyb3dzW2kgKyAxXSwgcm93c1tpXSlcbiAgICAgIHN3aXRjaGluZyA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRm9yU29ydGluZyh2YWx1ZSkge1xuICBjb25zdCBudW1iZXJSZWdleCA9IC9eLT9cXGQrKD86XFwuXFxkKyk/JC9cbiAgY29uc3QgcGVyY2VudGFnZVJlZ2V4ID0gL14tP1xcZCsoPzpcXC5cXGQrKT8lJC9cblxuICBpZiAobnVtYmVyUmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgfSBlbHNlIGlmIChwZXJjZW50YWdlUmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCclJywgJycpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRDYXJkcyB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IGFjdGl2ZSwgYnVpbGRDYXJkLCBjbGlja0NvdW50cywgY3JlYXRlQ2FyZCwgY3JlYXRlU3ViQ2FyZCwgcmVzZXRTY29yZSwgc2NvcmVEYXRhLCBzb3J0U2NvcmUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgbWFpblJlbmRlclN1YkNhcmQgfSBmcm9tICcuL21haW4nXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhlYWRlclN0cnVjdHVyZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgY29uc3QgbmF2X2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gIGNvbnN0IGZpcnN0X21haW5faXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgY29uc3Qgc2Vjb25kX3Njb3JlX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIGNvbnN0IGZpcnN0X2xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgY29uc3Qgc2Vjb25kX2xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxuICBuYXYuY2xhc3NMaXN0LmFkZCgnbWVudV9fbmF2JylcbiAgbmF2X2xpc3QuY2xhc3NMaXN0LmFkZCgnbmF2X19saXN0JylcbiAgZmlyc3RfbWFpbl9pdGVtLmNsYXNzTGlzdC5hZGQoJ25hdl9saXN0X19pdGVtJywgJ19hY3RpdmUnKVxuICBmaXJzdF9saW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9saXN0X19saW5rJywgJ19hY3RpdmUnKVxuICBzZWNvbmRfc2NvcmVfaXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfbGlzdF9faXRlbScpXG4gIHNlY29uZF9saW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9saXN0X19saW5rJylcbiAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2J1cmdlcicpXG4gIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpXG4gIHN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaGVyJywgJ2Zvcm0tY2hlY2snLCAnZm9ybS1zd2l0Y2gnKVxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcsICdmb3JtLWNoZWNrLWlucHV0JylcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnLCAnZm9ybS1jaGVjay1sYWJlbCcpXG4gIHNoYWRvdy5jbGFzc0xpc3QuYWRkKCdzaGFkb3cnKVxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUcmFpbiAmIFBsYXknXG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ1RyYWluJ1xuICBmaXJzdF9saW5rLnRleHRDb250ZW50ID0gJ01haW4gUGFnZSdcbiAgc2Vjb25kX2xpbmsudGV4dENvbnRlbnQgPSAnU2NvcmUnXG5cbiAgZmlyc3RfbWFpbl9pdGVtLnNldEF0dHJpYnV0ZSgnbmFtZScsICdNYWluIFBhZ2UnKVxuICBzZWNvbmRfc2NvcmVfaXRlbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnU2NvcmUnKVxuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICBib2R5LmFwcGVuZENoaWxkKHNoYWRvdylcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzd2l0Y2hlcilcblxuICBtZW51LmFwcGVuZENoaWxkKG5hdilcbiAgbWVudS5hcHBlbmRDaGlsZChidXJnZXIpXG5cbiAgc3dpdGNoZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gIHN3aXRjaGVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gIG5hdi5hcHBlbmRDaGlsZChuYXZfbGlzdClcblxuICBuYXZfbGlzdC5hcHBlbmRDaGlsZChmaXJzdF9tYWluX2l0ZW0pXG4gIG5hdl9saXN0LmFwcGVuZENoaWxkKHNlY29uZF9zY29yZV9pdGVtKVxuICBmaXJzdF9tYWluX2l0ZW0uYXBwZW5kQ2hpbGQoZmlyc3RfbGluaylcbiAgc2Vjb25kX3Njb3JlX2l0ZW0uYXBwZW5kQ2hpbGQoc2Vjb25kX2xpbmspXG4gIGJ1cmdlci5hcHBlbmRDaGlsZChsaW5lKVxuXG4gIHNldFN3aXRjaGVyKClcbiAgc2V0TmF2TWVudSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTd2l0Y2hlcigpIHtcbiAgY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXInKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsJylcblxuICBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBvcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIG9wdGlvbnNbYXR0cl0pXG4gICAgfSlcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIGlkOiAnZmxleFN3aXRjaENoZWNrRGVmYXVsdCcsXG4gIH0pXG5cbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmxleFN3aXRjaENoZWNrRGVmYXVsdCcpXG5cbiAgc3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hlY2tlZE1vZGUoaW5wdXQuY2hlY2tlZClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrZWRNb2RlKGNoZWNrZWQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX25hdicpXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZScpXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKVxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpXG5cbiAgY29uc3Qgc3ViQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJDYXJkJylcbiAgY29uc3QgY2FyZEluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvX2Jsb2NrX19pbmRpY2F0b3InKVxuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mb19ibG9ja19fc3VidGl0bGUnKVxuICBjb25zdCBjYXJkUm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdGF0ZScpXG5cbiAgY29uc3Qgc3ViQ2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkNhcmRzQmxvY2snKVxuICBjb25zdCBzdGFydF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRfYnRuJylcbiAgY29uc3QgcmVwZWF0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBlYXRfYnRuJylcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFydF9zZWN0aW9uJylcblxuICBjb25zdCBzdWJDYXJkQmxvY2tDb3VudCA9IHN1YkNhcmRCbG9jay5jaGlsZHJlbi5sZW5ndGhcblxuICBpZiAoY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdUcmFpbidcbiAgICBjYXJkSW5kaWNhdG9yLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpXG4gICAgY2FyZFRpdGxlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJykpXG4gICAgY2FyZFJvdGF0ZS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpKVxuICAgIHN1YkNhcmQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKSlcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJylcbiAgICBsaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpXG4gICAgc3RhcnRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlfbW9kZScpXG4gICAgcmVwZWF0X2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5X21vZGUnKVxuICAgIGhlYXJ0X3NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgncGxheV9tb2RlJylcbiAgfVxuICBpZiAoY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1BsYXknXG4gICAgc3ViQ2FyZC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpKVxuICAgIGNhcmRJbmRpY2F0b3IuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSlcbiAgICBjYXJkVGl0bGUuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKSlcbiAgICBjYXJkUm90YXRlLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheV9tb2RlJykpXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3BsYXlfbW9kZScpXG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKVxuICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKVxuICAgIGlmIChzdWJDYXJkQmxvY2tDb3VudCA+IDApIHtcbiAgICAgIHN0YXJ0X2J0bi5jbGFzc0xpc3QuYWRkKCdwbGF5X21vZGUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0TmF2TWVudSgpIHtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCBnZXRDYXJkcygpXG4gIGNvbnN0IG5hdl9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlzdCcpXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKVxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbmF2JylcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhZG93JylcblxuICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gY2FyZFxuICAgIGNvbnN0IG5hdl9saXN0X19pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgIG5hdl9saXN0LmFwcGVuZENoaWxkKG5hdl9saXN0X19pdGVtKVxuICAgIG5hdl9saXN0X19pdGVtLmFwcGVuZENoaWxkKGxpbmspXG5cbiAgICBuYXZfbGlzdF9faXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfbGlzdF9faXRlbScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCduYXZfbGlzdF9fbGluaycpXG5cbiAgICBuYXZfbGlzdF9faXRlbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtjYXRlZ29yeX1gKVxuICAgIG5hdl9saXN0X19pdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpXG4gICAgbGluay50ZXh0Q29udGVudCA9IGAke2NhdGVnb3J5fWBcbiAgfSlcblxuICBuYXZfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJylcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9jb250YWluZXInKVxuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0X2J0bicpXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICBjb25zdCBjbGFzc05hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmF2X2xpc3RfX2l0ZW0nKVxuICAgIGNvbnN0IGNhcmRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc0Jsb2NrJylcbiAgICBjb25zdCBzdWJDYXJkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViQ2FyZHNCbG9jaycpXG4gICAgY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXInKVxuICAgIGNvbnN0IHN1YkNhcmRzQ2F0ZXJnb3J5ID0gY2FyZHNbaWRdPy5jYXRlZ29yeVxuICAgIGlmIChuYW1lID09PSBzdWJDYXJkc0NhdGVyZ29yeSAmJiBjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBjYXJkcy5maW5kKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSBuYW1lKVxuICAgICAgY29uc3Qgc3ViQ2FyZHMgPSBjYXJkLndvcmRzXG4gICAgICBjb25zdCBpc1N1YkJsb2NrQ2hpbGRyZW4gPSBzdWJDYXJkQmxvY2suY2hpbGRyZW5cbiAgICAgIGNvbnN0IGlzQmxvY2tDaGlsZHJlbiA9IGNhcmRCbG9jay5jaGlsZHJlblxuICAgICAgY29uc3QgYXJyQmxvY2tDb2xsZWN0aW9uID0gWy4uLmlzQmxvY2tDaGlsZHJlbl1cbiAgICAgIGNvbnN0IGFyclN1YkJsb2NrQ29sbGVjdGlvbiA9IFsuLi5pc1N1YkJsb2NrQ2hpbGRyZW5dXG4gICAgICBhcnJCbG9ja0NvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSlcbiAgICAgIH0pXG4gICAgICBpZiAoaXNTdWJCbG9ja0NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBzdWJDYXJkQmxvY2sucmVtb3ZlQ2hpbGQoaXRlbSlcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpXG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpXG4gICAgICAgIGJ1aWxkQ2FyZChzdWJDYXJkcywgJy5zdWJDYXJkc0Jsb2NrJywgJ3N1YkNhcmQnKVxuICAgICAgICBjcmVhdGVTdWJDYXJkKHN1YkNhcmRzKVxuICAgICAgICBjbGlja0NvdW50cygpXG4gICAgICB9IGVsc2UgaWYgKGlzU3ViQmxvY2tDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSAoc3dpdGNoZXIuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2UpXG4gICAgICAgIGNoZWNrZWRNb2RlKGNoZWNrZWQpXG4gICAgICAgIGJ1aWxkQ2FyZChzdWJDYXJkcywgJy5zdWJDYXJkc0Jsb2NrJywgJ3N1YkNhcmQnKVxuICAgICAgICBjcmVhdGVTdWJDYXJkKHN1YkNhcmRzKVxuICAgICAgICBjbGlja0NvdW50cygpXG4gICAgICB9XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxuICAgICAgc2hhZG93LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxuICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcbiAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpXG4gICAgICBhY3RpdmUobmFtZSwgJy5uYXZfbGlzdF9faXRlbScpXG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnTWFpbiBQYWdlJyAmJiBjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGlzU3ViQmxvY2tDaGlsZHJlbiA9IHN1YkNhcmRCbG9jay5jaGlsZHJlblxuICAgICAgY29uc3QgaXNCbG9ja0NoaWxkcmVuID0gY2FyZEJsb2NrLmNoaWxkcmVuXG4gICAgICBjb25zdCBhcnJTdWJCbG9ja0NvbGxlY3Rpb24gPSBbLi4uaXNTdWJCbG9ja0NoaWxkcmVuXVxuICAgICAgYXJyU3ViQmxvY2tDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgc3ViQ2FyZEJsb2NrLnJlbW92ZUNoaWxkKGl0ZW0pXG4gICAgICB9KVxuICAgICAgaWYgKGlzQmxvY2tDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKVxuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKVxuICAgICAgICBjcmVhdGVDYXJkKGNhcmRzKVxuICAgICAgfSBlbHNlIGlmIChpc0Jsb2NrQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCBjaGVja2VkID0gKHN3aXRjaGVyLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlKVxuICAgICAgICBjaGVja2VkTW9kZShjaGVja2VkKVxuICAgICAgICBidWlsZENhcmQoY2FyZHMsICcuY2FyZHNCbG9jaycsICdjYXJkJylcbiAgICAgICAgY3JlYXRlQ2FyZChjYXJkcylcbiAgICAgIH1cbiAgICAgIG1haW5SZW5kZXJTdWJDYXJkKClcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICBzaGFkb3cuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICByZXNldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcbiAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJylcbiAgICAgIGFjdGl2ZShuYW1lLCAnLm5hdl9saXN0X19pdGVtJylcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdTY29yZScgJiYgY2xhc3NOYW1lKSB7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxuICAgICAgc2hhZG93LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcbiAgICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKVxuICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpXG4gICAgICBhY3RpdmUobmFtZSwgJy5uYXZfbGlzdF9faXRlbScpXG4gICAgICBzY29yZURhdGEoKVxuICAgICAgcmVzZXRTY29yZSgpXG4gICAgICBzb3J0U2NvcmUoKVxuICAgIH1cbiAgfSlcblxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJylcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJylcbiAgICBzaGFkb3cuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBnZXRDYXJkcyB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IGFjdGl2ZSwgYnVpbGRDYXJkLCBjbGlja0NvdW50cywgY3JlYXRlQ2FyZCwgY3JlYXRlU2NvcmUsIGNyZWF0ZVN1YkNhcmQgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgY2hlY2tlZE1vZGUgfSBmcm9tICcuL2hlYWRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWFpblN0cnVjdHVyZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGNvbnN0IGNhdGVnb3J5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHN1YkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBzdGFydF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjb25zdCByZXBlYXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgY29uc3QgaGVhcnRfc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHN0YXJ0X2J0bi50ZXh0Q29udGVudCA9ICdTVEFSVCdcbiAgcmVwZWF0X2J0bi50ZXh0Q29udGVudCA9ICdSRVBFQVQnXG5cbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJywgJ19hY3RpdmUnKVxuICBjYXRlZ29yeUNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZHNCbG9jaycpXG4gIHN1YkNhcmQuY2xhc3NMaXN0LmFkZCgnc3ViQ2FyZHNCbG9jaycpXG4gIHN0YXJ0X2J0bi5jbGFzc0xpc3QuYWRkKCdzdGFydF9idG4nLCAnYnRuJywgJ2J0bi1zZWNvbmRhcnknKVxuICByZXBlYXRfYnRuLmNsYXNzTGlzdC5hZGQoJ3JlcGVhdF9idG4nLCAnYnRuJywgJ2J0bi1wcmltYXJ5JylcbiAgaGVhcnRfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoZWFydF9zZWN0aW9uJylcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbilcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChjYXRlZ29yeUNhcmQpXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViQ2FyZClcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChzdGFydF9idG4pXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQocmVwZWF0X2J0bilcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFydF9zZWN0aW9uKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVpbGRTY29yZSgpIHtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCBnZXRDYXJkcygpXG4gIGNyZWF0ZVNjb3JlKGNhcmRzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlyc3RSZW5kZXJDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IGdldENhcmRzKClcbiAgYnVpbGRDYXJkKGNhcmRzLCAnLmNhcmRzQmxvY2snLCAnY2FyZCcpXG4gIGNyZWF0ZUNhcmQoY2FyZHMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluUmVuZGVyU3ViQ2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCBnZXRDYXJkcygpXG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzQmxvY2snKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpXG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJylcbiAgY29uc3QgY2hpbGRyZW4gPSBibG9jay5jaGlsZHJlblxuICBjb25zdCBhcnJDb2xsZWN0aW9uID0gWy4uLmNoaWxkcmVuXVxuICBhcnJDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBlLmN1cnJlbnRUYXJnZXRcbiAgICAgIGNvbnN0IGlkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGNvbnN0IG5hbWUgPSBjYXJkLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgICBjb25zdCBlbGVtZW50ID0gY2FyZHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gbmFtZSlcbiAgICAgIGlmIChjYXJkcy5maW5kKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSBuYW1lKSkge1xuICAgICAgICBhcnJDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBibG9jay5yZW1vdmVDaGlsZChpdGVtKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgY2hlY2tlZCA9IChzd2l0Y2hlci5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZSlcbiAgICAgICAgY2hlY2tlZE1vZGUoY2hlY2tlZClcbiAgICAgICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGVsZW1lbnQud29yZHNcbiAgICAgICAgYWN0aXZlKG5hbWUsICcubmF2X2xpc3RfX2l0ZW0nKVxuICAgICAgICBidWlsZENhcmQoY2FyZHMsICcuc3ViQ2FyZHNCbG9jaycsICdzdWJDYXJkJylcbiAgICAgICAgY3JlYXRlU3ViQ2FyZChyZW5kZXJFbGVtZW50KVxuICAgICAgICBjbGlja0NvdW50cygpXG4gICAgICB9XG4gICAgfSlcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUuY3VycmVudFRhcmdldFxuICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfcm90YXRlJykpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNhcmQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfcm90YXRlJylcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjYXJkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cbiIsImV4cG9ydCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gIH1cblxuICBidWlsZFNjb3JlQ29udGFpbmVyKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIGNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKVxuICAgIGNvbnN0IHNjb3JlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuXG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGRhdGFDZWxsRW5nV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICBjb25zdCBkYXRhQ2VsbFJ1c1dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3QgZGF0YUNlbGxDbGlja1dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3QgZGF0YUNlbGxDb3JyZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIGNvbnN0IGRhdGFDZWxsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3QgZGF0YUNvcnJlY3RQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuXG4gICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXRfYnRuJywgJ2J0bicsICdidG4tZGFuZ2VyJylcbiAgICByZXNldEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzY29yZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY29yZV9jb250YWluZXInKVxuICAgIHNjb3JlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX2hlYWRlcicpXG4gICAgZGF0YUNlbGxFbmdXb3JkLmNsYXNzTGlzdC5hZGQoJ2VuZ2xpc2gnKVxuICAgIGRhdGFDZWxsUnVzV29yZC5jbGFzc0xpc3QuYWRkKCdydXNzaWFuJylcbiAgICBkYXRhQ2VsbENsaWNrV29yZC5jbGFzc0xpc3QuYWRkKCdjbGljaycpXG4gICAgZGF0YUNlbGxDb3JyZWN0LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKVxuICAgIGRhdGFDZWxsRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgIGRhdGFDb3JyZWN0UGVyY2VudC5jbGFzc0xpc3QuYWRkKCdwZXJjZW50JylcblxuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0J1xuICAgIGRhdGFDZWxsRW5nV29yZC50ZXh0Q29udGVudCA9ICdFbmdsaXNoJ1xuICAgIGRhdGFDZWxsUnVzV29yZC50ZXh0Q29udGVudCA9ICdSdXNzaWFuJ1xuICAgIGRhdGFDZWxsQ2xpY2tXb3JkLnRleHRDb250ZW50ID0gJ0NsaWNrJ1xuICAgIGRhdGFDZWxsQ29ycmVjdC50ZXh0Q29udGVudCA9ICdDb3JyZWN0J1xuICAgIGRhdGFDZWxsRXJyb3IudGV4dENvbnRlbnQgPSAnRXJyb3InXG4gICAgZGF0YUNvcnJlY3RQZXJjZW50LnRleHRDb250ZW50ID0gJ0NvcnJlY3Qgc2NvcmUnXG5cbiAgICBibG9jay5hcHBlbmRDaGlsZChyZXNldEJ0bilcbiAgICBibG9jay5hcHBlbmRDaGlsZChzY29yZUNvbnRhaW5lcilcbiAgICBzY29yZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZUhlYWRlcilcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbEVuZ1dvcmQpXG4gICAgc2NvcmVIZWFkZXIuYXBwZW5kQ2hpbGQoZGF0YUNlbGxSdXNXb3JkKVxuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsQ2xpY2tXb3JkKVxuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDZWxsQ29ycmVjdClcbiAgICBzY29yZUhlYWRlci5hcHBlbmRDaGlsZChkYXRhQ2VsbEVycm9yKVxuICAgIHNjb3JlSGVhZGVyLmFwcGVuZENoaWxkKGRhdGFDb3JyZWN0UGVyY2VudClcbiAgfVxuXG4gIHJlbmRlclNjb3JlKCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5kYXRhKSB7XG4gICAgICBpdGVtLndvcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbmV3IFNjb3JlQmxvY2soaXRlbSkucmVuZGVyU2NvcmUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU2NvcmVCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHsgd29yZCwgdHJhbnNsYXRpb24gfSkge1xuICAgIHRoaXMuZGF0YSA9IHsgd29yZCwgdHJhbnNsYXRpb24gfVxuICB9XG5cbiAgcmVuZGVyU2NvcmUoKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfY29udGFpbmVyJylcbiAgICBjb25zdCBzdHJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICAgIGNvbnN0IGRhdGFDZWxsRW5nV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICBjb25zdCBkYXRhQ2VsbFJ1c1dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3QgZGF0YUNlbGxDb3JyZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIGNvbnN0IGRhdGFDZWxsQ2xpY2tXb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIGNvbnN0IGRhdGFDZWxsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3QgZGF0YUNvcnJlY3RQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuXG4gICAgZGF0YUNlbGxFbmdXb3JkLnRleHRDb250ZW50ID0gdGhpcy5kYXRhLndvcmRcbiAgICBkYXRhQ2VsbFJ1c1dvcmQudGV4dENvbnRlbnQgPSB0aGlzLmRhdGEudHJhbnNsYXRpb25cbiAgICBkYXRhQ2VsbENsaWNrV29yZC50ZXh0Q29udGVudCA9ICctJ1xuICAgIGRhdGFDZWxsQ29ycmVjdC50ZXh0Q29udGVudCA9ICctJ1xuICAgIGRhdGFDZWxsRXJyb3IudGV4dENvbnRlbnQgPSAnLSdcbiAgICBkYXRhQ2VsbEVycm9yLnRleHRDb250ZW50ID0gJy0nXG4gICAgZGF0YUNvcnJlY3RQZXJjZW50LnRleHRDb250ZW50ID0gJy0nXG5cblxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHN0ckluZm8pXG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbEVuZ1dvcmQpXG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbFJ1c1dvcmQpXG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ2VsbENsaWNrV29yZClcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsQ29ycmVjdClcbiAgICBzdHJJbmZvLmFwcGVuZENoaWxkKGRhdGFDZWxsRXJyb3IpXG4gICAgc3RySW5mby5hcHBlbmRDaGlsZChkYXRhQ29ycmVjdFBlcmNlbnQpXG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgYnVpbGRIZWFkZXJTdHJ1Y3R1cmUgfSBmcm9tICcuL2pzL2hlYWRlci5qcydcbmltcG9ydCB7IG1haW5SZW5kZXJTdWJDYXJkLCBmaXJzdFJlbmRlckNhcmQsIGJ1aWxkTWFpblN0cnVjdHVyZSwgYnVpbGRTY29yZSB9IGZyb20gJy4vanMvbWFpbi5qcydcblxuYnVpbGRIZWFkZXJTdHJ1Y3R1cmUoKVxuYnVpbGRNYWluU3RydWN0dXJlKClcbmJ1aWxkU2NvcmUoKVxuZmlyc3RSZW5kZXJDYXJkKClcbm1haW5SZW5kZXJTdWJDYXJkKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==