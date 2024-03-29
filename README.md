# :x: DEPRECATED

A more modern up-to-date version (Vue 3 + Typescript) is here: https://github.com/Torniojaws/nhl-stats-vue3

# NHL Statistics

Show the daily NHL statistics in a user-friendly format

## APIs

The data is collected from two public APIs provided by https://www.nhl.com

First we get the info which games were played "last night" (Finnish timezone) from:
https://statsapi.web.nhl.com/api/v1/schedule?date=2018-12-21
Where the games are in an array: ``dates[0].games[i]``. If you query by date range, there are
multiple items in the ``dates`` array. Each date array has an object with various pieces of data.
The game ID is in ``dates[0].games[i].gamePk``. The ID is then used below.

Using the game IDs (the number in the url), we retrieve the game results from:
https://statsapi.web.nhl.com/api/v1/game/2018020500/boxscore
Where the number is in format:
YYYY = Season, eg. 2018 means season 2018-2019
NN = Season type, where 01 = Preseason, 02 = Regular season, 03 = Playoffs
NNNN = Game number, starting from 0001 ending with 1271

So 2018020500 means the 2018-19 regular season game number 500.

## What is shown

There are multiple sites that show all kinds of data from the games, but we are only interested in
particular pieces of data:

- The teams and the game result (obviously)
- Who scored in the game
- Goalie statistics for both teams

## Stack

- SASS
- Vue
- Webpack
