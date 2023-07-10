import { getCards } from './data';
import { activeCategory, createCard, clickCounts, renderCategories, createScore, renderWords, createElement } from './function';
import { checkedMode } from './header';

export function buildMainStructure() {
  const body = document.body;
  const main = createElement('main');
  const section = createElement('section', ['section', '_active']);
  const categoryCard = createElement('div', 'cardsBlock');
  const subCard = createElement('div', 'subCardsBlock');
  const start_btn = createElement('button', ['start_btn', 'btn', 'btn-secondary']);
  const repeat_btn = createElement('button', ['repeat_btn', 'btn', 'btn-primary']);
  const heart_section = createElement('div', 'heart_section');
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

export async function buildScore() {
  const cards = await getCards();
  createScore(cards);
}

export async function firstRenderCard() {
  const cards = await getCards();
  createCard(cards, '.cardsBlock', 'card');
  renderCategories(cards);
}

export async function mainRenderSubCard() {
  const cards = await getCards();
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
        checkedMode(checked);
        const renderElement = element.words;
        activeCategory(name, '.nav_list__item');
        createCard(cards, '.subCardsBlock', 'subCard');
        renderWords(renderElement);
        clickCounts();
      }
    });
  });
}
