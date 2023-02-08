import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

/**
 * Item returned in the general list of FreeToGame API
 *
 * @typedef GameItem
 * @property {number} id
 * @property {string} title
 * @property {string} thumbnail
 * @property {string} short_description
 * @property {string} game_url
 * @property {string} genre
 * @property {string} platform
 * @property {string} publisher
 * @property {string} developer
 * @property {string} release_date
 */

/**
 * @typedef GameRequirements
 * @property {string} os
 * @property {string} processor
 * @property {string} memory
 * @property {string} graphics
 * @property {string} storage
 */

/**
 * @typedef GameScreenshots
 * @property {number} id
 * @property {string} image
 */

/**
 * @typedef GameDetails
 * @property {number} id
 * @property {string} title
 * @property {string} thumbnail
 * @property {string} status
 * @property {string} short_description
 * @property {string} description
 * @property {string} game_url
 * @property {string} genre
 * @property {string} platform
 * @property {string} publisher
 * @property {string} developer
 * @property {string} release_date
 * @property {string} freetogame_profile_url
 * @property {GameRequirements} minimum_system_requirements
 * @property {GameScreenshots[]} screenshots
 */

const api = wretch('https://free-to-play-games-database.p.rapidapi.com/api')
  .addon(QueryStringAddon)
  .headers({
    'X-RapidAPI-Key': '88dc5818f9msha2d2cd0ea348fe7p178d11jsn5224e0c97858',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  })
  .errorType('json')
  .options({ credentials: 'include', mode: 'cors' })
  .resolve(r => r.json());

/**
 * Call the FreeToGame API
 *
 * @param {*} { tag, platform }
 * @return {GameItem[]}
 */
export async function getGames({ tag, platform }) {
  try {
    const games = await api.query({ tag, platform }).get('/filter');
    return games;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get a single game from its ID
 *
 * @export
 * @param {number} id
 * @return {GameDetails}
 */
export async function getGame(id) {
  try {
    const game = await api.query({ id }).get('/game');
    return game;
  } catch (error) {
    console.log(error);
  }
}
