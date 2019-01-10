'use strict';

// The results from the API response contain a TON of data, but we are only interested in a couple
// of things. This helper collection does the heavy lifting.

/**
 * Get the points scored by players in a given team and return them sorted in descending order by
 * total points.
 * @param {string} team is either "home" or "away"
 * @param {object} data has the game details from which we get the points and player info
 * @return {array} contains objects of all players that scored points in the game
 */
const getPoints = (team, data) => {
  const allPlayers = data[team].players;
  // Find players in {team} that got points
  let scoringPlayers = [];
  Object.keys(allPlayers).forEach((key, index) => {
    const stats = allPlayers[key].stats.skaterStats
      ? allPlayers[key].stats.skaterStats
      : allPlayers[key].stats.goalieStats;

    // Some non-goalie players do not always have skaterStats. Then we can only skip them.
    if (!stats) return;

    if (stats.goals > 0 || stats.assists > 0) {
      const scorer = {
        assists: stats.assists,
        goals: stats.goals,
        name: allPlayers[key].person.fullName,
        nationality: allPlayers[key].person.nationality,
        plusMinus: stats.plusMinus || 0,
        points: (stats.goals + stats.assists),
      };
      scoringPlayers.push(scorer);
    }
  });
  // Sort by points. Highest points first
  return scoringPlayers.sort((a, b) => {
    return b.points - a.points;
  });
};

/**
 * Get the statistics for the goalies in the game.
 * @param {string} team is either home or away
 * @param {object} data contains the game data
 * @return {object} the goalie statistics
 */
const getGoalies = (team, data) => {
  const allPlayers = data[team].players;
  // Find the goalies - can be multiple in one game for the same team
  let goalies = [];
  Object.keys(allPlayers).forEach((key, index) => {
    const stats = allPlayers[key].stats.goalieStats
      ? allPlayers[key].stats.goalieStats
      : null;

    if (!stats) return;

    const goalie = {
      decision: stats.decision || 'x', // W for Win, L for Loss
      name: allPlayers[key].person.fullName,
      nationality: allPlayers[key].person.nationality,
      saves: stats.saves,
      savePercentage: stats.savePercentage.toFixed(2), // Round to 2 decimals, and .00 if exact
      shots: stats.shots,
      timeOnIce: stats.timeOnIce,
    };
    goalies.push(goalie);
  });
  return goalies;
};

/**
 * Pick the interesting things from the response, such as goals, assists and goalie info.
 * @param {object} response from the NHL API
 * @return {object} the interesting stuff
 */
const parseResults = (response) => {
  return {
    away: {
      goalies: getGoalies('away', response),
      points: getPoints('away', response),
    },
    home: {
      goalies: getGoalies('home', response),
      points: getPoints('home', response),
    }
  };
};

export {
  parseResults,
};
