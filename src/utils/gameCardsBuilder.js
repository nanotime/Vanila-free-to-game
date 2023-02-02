/**
 * Creates a game card with documentFragments
 *
 * @export
 * @param {Object} {
 *   img: { src, alt },
 *   anchor,
 *   title,
 *   description,
 * }
 * @return {HTMLDivElement}
 */
export function gameCardBuilder({
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
