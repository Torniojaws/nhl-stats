<template>
  <div>
    <b-container>
      <b-row class="game">
        <b-col class="text-right"><b>{{ teams.home.team.name }}</b></b-col>
        <b-col sm="1"><span class="largeNumber text-right scorebox">{{ teams.home.score }}</span></b-col>
        <b-col sm="1"><span class="largeNumber">&ndash;</span></b-col>
        <b-col sm="1"><span class="largeNumber text-left scorebox">{{ teams.away.score }}</span></b-col>
        <b-col class="text-left"><b>{{ teams.away.team.name }}</b></b-col>
      </b-row>
      <b-row>
        <b-col class="text-right">
          <br />
          <game-points
            v-if="results.home.points"
            v-for="player in results.home.points"
            :key="player.name"
            :id="player.name"
            :player="player"
          ></game-points>
        </b-col>
        <b-col sm="1"></b-col>
        <b-col sm="1"></b-col>
        <b-col sm="1"></b-col>
        <b-col>
          <br />
          <game-points
            v-if="results.away.points"
            v-for="player in results.away.points"
            :key="player.name"
            :id="player.name"
            :player="player"
          ></game-points>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right">
          <br />
          <game-goalies
            v-if="results.home.goalies"
            v-for="goalie in results.home.goalies"
            :key="goalie.name"
            :id="goalie.name"
            :goalie="goalie"
          ></game-goalies>
        </b-col>
        <b-col sm="1"></b-col>
        <b-col sm="1"></b-col>
        <b-col sm="1"></b-col>
        <b-col>
          <br />
          <game-goalies
            v-if="results.away.goalies"
            v-for="goalie in results.away.goalies"
            :key="goalie.name"
            :id="goalie.name"
            :goalie="goalie"
          ></game-goalies>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const { getGameResult } = require('@/api/nhl');

export default {
  name: 'Game',
  props: ['id', 'teams'],
  data () {
    return {
      results: [],
    }
  },
  async mounted () {
    this.results = await getGameResult(this.id);
  }
}
</script>

<style>
.game {
  background-color: green;
  color: white;
  padding: 20px 0 20px 0;
}
.largeNumber {
  font-size: 130%;
}
.scorebox {
  background-color: white;
  color: black;
  padding: 20px;
}
</style>
