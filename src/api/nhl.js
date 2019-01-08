'use strict';

import axios from 'axios';
const { parseResults } = require('./parser');

const baseUrl = 'https://statsapi.web.nhl.com/api/v1';

// Yesterday in YYYY-MM-DD format for the API call
const yesterday = new Date(Date.now() - (24*60*60*1000)).toISOString().split('T')[0];

/**
 * Get the result of a given game by its ID.
 * @param {int} id is the game's ID, eg. 2018020500
 * @return {object} the result
 */
const getGameResult = async (id) => {
  // https://statsapi.web.nhl.com/api/v1/game/2018020500/boxscore
  const url = `${baseUrl}/game/${id}/boxscore`;
  const response = await axios.get(url);
  // Parse the results, so the view can be rendered easily
  return parseResults(response.data.teams);
};

// Get games that were played last night
// TODO Possibly give the date as parameter?
const getGames = async () => {
  // https://statsapi.web.nhl.com/api/v1/schedule?date=2019-01-07
  const url = `${baseUrl}/schedule?date=${yesterday}`;
  const response = await axios.get(url);
  return response.data.dates[0].games;
};

export {
  getGames,
  getGameResult,
};
