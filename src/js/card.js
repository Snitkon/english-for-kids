import { createElement, playAudio } from './function';

export class Card {
  constructor(id, cardData) {
    this.id = id;
    this.cardData = cardData;
  }

  buildCardContainer(selector, className) {
    const block = document.querySelector(selector);
    const card = createElement('div', className);
    const card__cover = createElement('div', 'card__cover');
    const card__info = createElement('div', 'card__info_block');
    const info__title = createElement('h2', 'info_block__title');
    const info__indicator = createElement('div', 'info_block__indicator');

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
      const create_quantity = createElement('p', 'info_block__quantity');
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
    const create_rotate = createElement('img', 'rotate', 'src', './assets/img/rotate.svg');

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
        playAudio(this.cardData.audioSrc);
      }
    });
  }
}
