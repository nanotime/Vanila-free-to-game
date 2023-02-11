/**
 * Build the main info data section
 *
 * @export
 * @param {import('./api').GameDetails} game
 */
export async function renderMainInfo(game) {
  const mainInfoNode = document.querySelector('.game-details__main-info'),
    mainGalleryNode = document.querySelector('.game-details__gallery');

  const mainDataNode = buildMainData(game),
    metadataTableNode = buildMetadataTable(game),
    requirementsTableNode = buildReqsTable(game),
    gallery = buildGallery(game);

  mainInfoNode.replaceChildren(
    mainDataNode,
    metadataTableNode,
    requirementsTableNode
  );

  mainGalleryNode.replaceChildren(gallery);
}

/**
 * Build the main data section
 * @export
 * @param {import('./api').GameDetails} game
 * @return {HTMLDivElement}
 */
function buildMainData(game) {
  const mainInfoContainer = document.createElement('div'),
    imgNode = document.createElement('img'),
    dataDiv = document.createElement('div'),
    titleNode = document.createElement('h2'),
    titleText = document.createTextNode(game.title),
    descriptionNode = document.createElement('p'),
    descriptionText = document.createTextNode(game.description);

  mainInfoContainer.classList.add('main-info__data');
  imgNode.setAttribute('src', game.thumbnail);
  imgNode.setAttribute('alt', `${game.title} thumbnail`);

  titleNode.appendChild(titleText);
  descriptionNode.appendChild(descriptionText);
  dataDiv.appendChild(titleNode);
  dataDiv.appendChild(descriptionNode);

  mainInfoContainer.appendChild(imgNode);
  mainInfoContainer.appendChild(dataDiv);

  return mainInfoContainer;
}

/**
 * Build meta data table
 * @export
 * @param {import('./api').GameDetails} game
 * @return {HTMLTableElement}
 */
function buildMetadataTable(game) {
  const keyMap = [
    'game_url',
    'genre',
    'platform',
    'publisher',
    'developer',
    'release_date',
  ];
  const rawData = Object.entries(game);
  const tableRows = rawData.filter(key => {
    return keyMap.find(k => k === key[0]);
  });

  const tableContainerNode = document.createElement('div');
  const table = buildTable(tableRows, game.title);

  tableContainerNode.classList.add('main-info__metadata');
  tableContainerNode.appendChild(table);

  return tableContainerNode;
}

/**
 * Buld requirements table
 * @export
 * @param {import('./api').GameDetails} game
 * @return {HTMLTableElement}
 */
function buildReqsTable(game) {
  const placeholder = {
    os: '--',
    processor: '--',
    genre: '--',
    graphics: '--',
    storage: '--',
  };

  let tableRows = Object.entries(placeholder);

  if (game.minimum_system_requirements) {
    tableRows = Object.entries(game.minimum_system_requirements);
  }

  const tableContainerNode = document.createElement('div');
  const table = buildTable(tableRows);

  tableContainerNode.classList.add('main-info__reqs');
  tableContainerNode.appendChild(table);

  return tableContainerNode;
}

/**
 * Build the game img gallery
 *
 * @export
 * @param {import('./api').GameDetails} game
 * @return {HTMLDivElement | null}
 */
export function buildGallery(game) {
  if (!game.screenshots) {
    return null;
  }

  const galleryListNode = document.createElement('div'),
    galleryFragment = new DocumentFragment();

  galleryListNode.classList.add('gallery__list');

  game.screenshots.forEach((item, idx) => {
    const imgNode = document.createElement('img');
    imgNode.setAttribute('src', item.image);
    imgNode.setAttribute('alt', `Screenshot number ${idx} of ${game.title}`);
    imgNode.classList.add('gallery__item');

    galleryFragment.appendChild(imgNode);
  });

  galleryListNode.appendChild(galleryFragment);

  return galleryListNode;
}

/**
 * Build and push an image into the modal lightbox
 *
 * @export
 * @param {HTMLDialogElement} target
 * @param {string} url
 * @param {string} alt
 */
export function pushModalImg(target, url, alt) {
  const oldImg = target.querySelector('img.lightbox-img');
  const newImg = document.createElement('img');

  newImg.setAttribute('src', url);
  newImg.setAttribute('alt', alt);
  newImg.classList.add('lightbox-img');

  if (!oldImg) {
    target.appendChild(newImg);
  } else {
    target.replaceChild(newImg, oldImg);
  }
}

/**
 * Build a table HTMLELEMENT
 *
 * @param {string[]} rows
 * @param {string} gameTitle
 * @return {HTMLTableElement}
 */
function buildTable(rows, gameTitle) {
  const table = document.createElement('table'),
    tbody = document.createElement('tbody'),
    tbodyFragment = new DocumentFragment();

  rows.forEach(row => {
    const isUrl = row[0] === 'game_url';
    const nullReplace = row[1] === null ? '--' : row[1];
    const rowTitle = row[0].replace('_', ' ');

    const tr = document.createElement('tr'),
      title = document.createTextNode(rowTitle),
      tdTitle = document.createElement('td'),
      value = document.createTextNode(nullReplace),
      tdValue = document.createElement('td'),
      linkNode = document.createElement('a');

    tdTitle.appendChild(title);

    if (!isUrl) {
      tdValue.appendChild(value);
    } else {
      linkNode.setAttribute('href', row[1]);
      linkNode.setAttribute('target', '_blank');
      linkNode.appendChild(document.createTextNode(gameTitle));
      tdValue.appendChild(linkNode);
    }

    tr.appendChild(tdTitle);
    tr.appendChild(tdValue);
    tbodyFragment.appendChild(tr);
  });

  tbody.appendChild(tbodyFragment);
  table.appendChild(tbody);

  return table;
}
