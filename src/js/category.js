import { createElement } from "./function";

export class Category {
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
