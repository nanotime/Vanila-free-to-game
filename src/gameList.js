/**
 * Card object used to render game cards
 * @typedef {Object} Card
 * @property {Object} img
 * @property {string} anchor
 * @property {string} title
 * @property {string} description
 * @property {number} id
 */

/**
 * Render the game cads on demand
 * @export
 * @param {Card[]} cards
 */
export async function renderGameCards(cards) {
  const gameList = document.querySelector('.game-list');
  cards.forEach(card => gameList.appendChild(gameCardBuilder(card)));
}

/**
 * Format the data coming from the FreeToGame API:
 * https://www.freetogame.com/api-doc
 *
 * @export
 * @param {import('./api').GameItem} data
 * @return {Card}
 */
export function formatCardData(data) {
  return {
    id: data.id,
    img: {
      src: data.thumbnail,
      alt: data.short_description,
    },
    anchor: '#game-details',
    title: data.title,
    description: data.short_description,
  };
}

/**
 * Creates a game card with documentFragments
 *
 * @export
 * @param {Card}
 * @return {HTMLDivElement}
 */
export function gameCardBuilder({
  id,
  img: { src, alt },
  anchor,
  title,
  description,
}) {
  // Base Nodes
  const card = document.createElement('div');
  const fragment = new DocumentFragment();
  const img = document.createElement('img');
  const overlay = document.createElement('div');
  const anchorNode = document.createElement('a');
  const h2 = document.createElement('h2');
  const titleNode = document.createTextNode(title);
  const descriptionNode = document.createTextNode(description);

  // Attributes and classes asignments
  card.classList.add('img-card');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  overlay.classList.add('img-card__overlay');
  anchorNode.setAttribute('id', id);
  anchorNode.setAttribute('href', anchor);

  // Insertions
  h2.append(titleNode);

  anchorNode.appendChild(h2);
  anchorNode.appendChild(descriptionNode);

  overlay.appendChild(anchorNode);

  fragment.appendChild(img);
  fragment.appendChild(overlay);

  card.appendChild(fragment);

  return card;
}
