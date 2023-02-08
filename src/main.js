import '@picocss/pico';
import './style.css';
import './styles/header.css';
import './styles/game-list.css';
import './styles/game-details.css';

import { createCategoriesDropdown, handleForm } from './header';
import { renderGameCards, formatCardData } from './gameList';
import { getGame } from './api';
import { renderMainInfo } from './gameDetails';

createCategoriesDropdown();

const search = document.querySelector('.header__search');

search.addEventListener('submit', async ev => {
  const games = await handleForm(ev);
  const cards = games.map(formatCardData);

  renderGameCards(cards);

  const cardNodes = document.querySelectorAll('.img-card__overlay a');
  Array.from(cardNodes).forEach(card =>
    card.addEventListener('click', onCardClick)
  );
});

async function onCardClick() {
  const game = await getGame(this.id);
  renderMainInfo(game);
}
