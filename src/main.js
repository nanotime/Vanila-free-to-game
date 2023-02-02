import '@picocss/pico';
import './style.css';
import './styles/header.css';
import './styles/game-list.css';
import './styles/game-details.css';

import { createCategoriesDropdown } from './header';
import { createGameCards } from './gameList';

createCategoriesDropdown();
createGameCards();
