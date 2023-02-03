import { getGames } from './api';
const SELECTOR = '#game-search__categories-dropdown';

const categoriesDropdownData = {
  options: [
    { id: 'mmorpg', nodeLabel: 'mmorpg' },
    { id: 'shooter', nodeLabel: 'shooter' },
    { id: 'strategy', nodeLabel: 'strategy' },
    { id: 'moba', nodeLabel: 'moba' },
    { id: 'racing', nodeLabel: 'racing' },
    { id: 'sports', nodeLabel: 'sports' },
    { id: 'social', nodeLabel: 'social' },
    { id: 'sandbox', nodeLabel: 'sandbox' },
    { id: 'open-world', nodeLabel: 'open' },
    { id: 'survival', nodeLabel: 'survival' },
    { id: 'pvp', nodeLabel: 'pvp' },
    { id: 'pve', nodeLabel: 'pve' },
    { id: 'pixel', nodeLabel: 'pixel' },
    { id: 'voxel', nodeLabel: 'voxel' },
    { id: 'zombie', nodeLabel: 'zombie' },
    { id: 'turn-based', nodeLabel: 'turn-based' },
    { id: 'first-person', nodeLabel: 'first-person' },
    { id: 'third-person', nodeLabel: 'third-person' },
    { id: 'top-down', nodeLabel: 'top-down' },
    { id: 'tank', nodeLabel: 'tank' },
    { id: 'space', nodeLabel: 'space' },
    { id: 'sailing', nodeLabel: 'sailing' },
    { id: 'side-scroller', nodeLabel: 'side-scroller' },
    { id: 'superhero', nodeLabel: 'superhero' },
    { id: 'permadeath', nodeLabel: 'permadeath' },
    { id: 'card', nodeLabel: 'card' },
    { id: 'battle-royale', nodeLabel: 'battle-royale' },
    { id: 'mmo', nodeLabel: 'mmo' },
    { id: 'mmofps', nodeLabel: 'mmofps' },
    { id: 'mmotps', nodeLabel: 'mmotps' },
    { id: '3d', nodeLabel: '3d' },
    { id: '2d', nodeLabel: '2d' },
    { id: 'anime', nodeLabel: 'anime' },
    { id: 'fantasy', nodeLabel: 'fantasy' },
    { id: 'sci-fi', nodeLabel: 'sci-fi' },
    { id: 'fighting', nodeLabel: 'fighting' },
    { id: 'action-rpg', nodeLabel: 'action-rpg' },
    { id: 'action', nodeLabel: 'action' },
    { id: 'military', nodeLabel: 'military' },
    { id: 'martial-arts', nodeLabel: 'martial-arts' },
    { id: 'flight', nodeLabel: 'flight' },
    { id: 'low-spec', nodeLabel: 'low-spec' },
    { id: 'tower-defense', nodeLabel: 'tower-defense' },
    { id: 'horror', nodeLabel: 'horror' },
    { id: 'mmorts', nodeLabel: 'mmorts' },
  ],
};

/**
 * Renred the categories into the dropdown on index.htm header
 *
 * @export
 */
export function createCategoriesDropdown() {
  const categoriesContainer = document.querySelector(SELECTOR);
  categoriesContainer.appendChild(optionsBuilder(categoriesDropdownData));
}

/**
 * Catch SearchForm Data and format it to pass into the API
 *
 * @param {SubmitEvent} ev
 * @return {import('./api').Game[]} Game
 */
export async function handleForm(ev) {
  ev.preventDefault();

  const data = new FormData(ev.target);
  let platform;
  let categories;

  for (const [key, value] of data.entries()) {
    if (key === 'platform') platform = value;

    if (key !== 'platform') {
      categories = `${categories || ''}.${key}`;
      categories = categories.substring(1, categories.length);
    }
  }

  const games = await getGames({ tag: categories, platform });
  return games;
}

/**
 * Create a UL node element with a list of items inside to create a dropdown
 *
 * @export
 * @param {categoriesDropdownData} options
 * @return {HTMLUListElement}
 */
export function optionsBuilder({ options }) {
  const ul = document.createElement('ul');
  const fragment = new DocumentFragment();

  ul.setAttribute('role', 'listbox');

  options.forEach(option => {
    const item = listItem(option);
    fragment.appendChild(item);
  });

  ul.appendChild(fragment);

  return ul;
}

/**
 * Creates a list item for the ul built on optionsBuilder
 *
 * @param {*} { id: string, nodeLabel: string }
 * @return {HTMLLIElement}
 */
function listItem({ id, nodeLabel }) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const labelText = document.createTextNode(nodeLabel);

  label.setAttribute('for', id);
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', id);
  input.setAttribute('name', id);

  label.appendChild(input);
  label.appendChild(labelText);
  li.appendChild(label);

  return li;
}
