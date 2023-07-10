import { getCards } from './data';
import {
  active,
  createCard,
  clickCounts,
  renderCategories,
  renderWords,
  resetScore,
  scoreData,
  sortScore,
  createElement,
} from './function';
import { mainRenderSubCard } from './main';

export function buildHeaderStructure() {
  const body = document.body;
  const header = createElement('header', 'header');
  const container = createElement('div', 'container');
  const menu = createElement('div', 'menu');
  const burger = createElement('div', 'menu__burger');
  const line = createElement('span', 'line');
  const nav = createElement('nav', 'menu__nav');
  const nav_list = createElement('ul', 'nav__list');
  const first_main_item = createElement('li', ['nav_list__item', '_active'], 'name', 'Main Page');
  const second_score_item = createElement('li', 'nav_list__item', 'name', 'Score');
  const first_link = createElement('a', ['nav_list__link', '_active']);
  const second_link = createElement('a', 'nav_list__link');
  const switcher = createElement('div', ['switcher', 'form-check', 'form-switch']);
  const input = createElement('input', ['input', 'form-check-input']);
  const label = createElement('label', ['label', 'form-check-label']);
  const title = createElement('h1', 'title');
  const shadow = createElement('div', 'shadow');

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

export function setSwitcher() {
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

export function checkedMode(checked) {
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

export async function setNavMenu() {
  const cards = await getCards();
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
        createCard(subCards, '.subCardsBlock', 'subCard');
        renderWords(subCards);
        clickCounts();
      }
      if (isSubBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        createCard(subCards, '.subCardsBlock', 'subCard');
        renderWords(subCards);
        clickCounts();
      }
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      resetBtn.classList.remove('_active');
      table.classList.remove('_active');
      section.classList.add('_active');
      active(name, '.nav_list__item');
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
        createCard(cards, '.cardsBlock', 'card');
        renderCategories(cards);
      }
      if (isBlockChildren.length === 0) {
        let checked = (switcher.firstChild.checked = false);
        checkedMode(checked);
        createCard(cards, '.cardsBlock', 'card');
        renderCategories(cards);
      }
      mainRenderSubCard();
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      resetBtn.classList.remove('_active');
      table.classList.remove('_active');
      section.classList.add('_active');
      active(name, '.nav_list__item');
    }
    if (name === 'Score' && className) {
      burger.classList.remove('_active');
      nav.classList.remove('_active');
      body.classList.remove('_active');
      shadow.classList.remove('_active');
      section.classList.remove('_active');
      resetBtn.classList.add('_active');
      table.classList.add('_active');
      active(name, '.nav_list__item');
      scoreData();
      resetScore();
      sortScore();
    }
  });

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('_active');
    nav.classList.toggle('_active');
    body.classList.toggle('_active');
    shadow.classList.toggle('_active');
  });
}
