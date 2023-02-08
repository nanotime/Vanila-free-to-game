/**
 * Build the main info data section
 *
 * @export
 * @param {import('./api').GameDetails} game
 */
export function renderMainInfo(game) {
  const mainInfoNode = document.querySelector('.game-details__main-info');
  // mainGalleryNode = document.querySelector('.game-details__gallery');

  const mainDataNode = buildMainData(game),
    metadataTableNode = buildMetadataTable(game),
    requirementsTableNode = buildReqsTable(game);

  mainInfoNode.replaceChildren(
    mainDataNode,
    metadataTableNode,
    requirementsTableNode
  );
}

/**
 *
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
 *
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
 *
 * @export
 * @param {import('./api').GameDetails} game
 * @return {HTMLTableElement}
 */
function buildReqsTable(game) {
  const tableRows = Object.entries(game.minimum_system_requirements);

  const tableContainerNode = document.createElement('div');
  const table = buildTable(tableRows);

  tableContainerNode.classList.add('main-info__reqs');
  tableContainerNode.appendChild(table);

  return tableContainerNode;
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
    const rowTitle = row[0].replace('_', ' ');
    const tr = document.createElement('tr'),
      title = document.createTextNode(rowTitle),
      tdTitle = document.createElement('td'),
      value = document.createTextNode(row[1]),
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
