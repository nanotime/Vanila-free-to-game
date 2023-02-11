import '@picocss/pico';
import './style.css';
import './styles/header.css';
import './styles/game-list.css';
import './styles/game-details.css';

import { createCategoriesDropdown, handleForm } from './header';
import { renderGameCards, formatCardData } from './gameList';
import { getGame } from './api';
import { renderMainInfo, pushModalImg } from './gameDetails';

createCategoriesDropdown();

const search = document.querySelector('.header__search');
const modal = document.querySelector('dialog');
const modalCloseIcon = document.querySelector('dialog .icon-close');

modalCloseIcon.addEventListener('click', closeModal);

search.addEventListener('submit', onSubmit);

async function onSubmit(ev) {
  const gameListContainerNode = document.querySelector('.game-list'),
    noContent = document.querySelector('.no-content-list');

  try {
    if (noContent) noContent.classList.add('invisible');

    gameListContainerNode.setAttribute('aria-busy', 'true');
    gameListContainerNode.replaceChildren();

    const games = await handleForm(ev);
    const cards = games.map(formatCardData);

    await renderGameCards(cards);

    gameListContainerNode.removeAttribute('aria-busy');

    const cardNodes = document.querySelectorAll('.img-card__overlay a');

    cardNodes.forEach(card => card.addEventListener('click', onCardClick));
  } catch (error) {
    handleError(gameListContainerNode, noContent);
  }
}

async function onCardClick() {
  const gameDetailsNode = document.querySelector('.game-details'),
    noContent = document.querySelector('.no-content-details');

  try {
    if (noContent) noContent.classList.add('invisible');

    gameDetailsNode.setAttribute('aria-busy', 'true');

    const game = await getGame(this.id);
    gameDetailsNode.removeAttribute('aria-busy');

    await renderMainInfo(game);

    document
      .querySelectorAll('.gallery__item')
      .forEach(img => img.addEventListener('click', showModal));
  } catch (error) {
    handleError(gameDetailsNode, noContent);
  }
}

function showModal() {
  pushModalImg(modal, this.src, this.alt);
  modal.showModal();
}

function closeModal() {
  modal.close();
}

function handleError(container, noContent) {
  container.removeAttribute('aria-busy');

  if (noContent) {
    noContent.classList.remove('invisible');
    noContent.replaceChildren();
    noContent.textContent = 'Loading error :(';
  }

  container.replaceChildren();
}
