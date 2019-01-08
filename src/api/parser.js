'use strict';

// The results from the API response contain a TON of data, but we are only interested in a couple
// of things. This helper collection does the heavy lifting.

const getPoints = (team, data) => {
  console.log(`Getting ${team} points`);
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
      console.log("He shoots he scores!", scorer);
      scoringPlayers.push(scorer);
    }
  });
  // We want to return results eg.
  // [ { "name": "Some Dude", "goals": 1, "assists": 0", "plusMinus": 1, "nationality": "FIN" } ]
  // We also want to sort them so that they are in total points order, with goals having priority:
  // 2+0 is before 1+1, and 0+2 is before 1+0
  return scoringPlayers;
};

// TODO
const getGoalies = (team, data) => {
  return 'yes';
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
