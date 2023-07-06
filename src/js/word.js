import { createElement, playAudio } from './function';

export class Word {
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
    this.rotate_img = createElement('img', 'rotate', 'src', './assets/img/rotate.svg');

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
        playAudio(this.cardData.audioSrc);
      }
    });
  }
}
