import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

/**
 * @typedef Game
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
 * @return {Game[]}
 */
export async function getGames({ tag, platform }) {
  try {
    const games = await api.query({ tag, platform }).get('/filter');
    return games;
  } catch (error) {
    console.log(error);
  }
}
