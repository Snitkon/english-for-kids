import { Category } from './category';
import { createElement } from './function';
import { Word } from './word';

export class Card {
  constructor(id, cardData) {
    this.id = id;
    this.cardData = cardData;
  }

  createCardContainer(selector, className) {
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
