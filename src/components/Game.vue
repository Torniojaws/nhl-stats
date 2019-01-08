<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b>{{ teams.home.team.name }}</b><br />
          <span class="largeNumber">{{ teams.home.score }}</span>
        </b-col>
        <b-col>
          <b>{{ teams.away.team.name }}</b><br />
          <span class="largeNumber">{{ teams.away.score }}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <br />
          <game-points
            v-if="results.home.points"
            v-for="player in results.home.points"
            :key="player.name"
            :id="player.name"
            :player="player"
          ></game-points>
        </b-col>
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
        <b-col>
          Home Goalie(s):
        </b-col>
        <b-col>
          Away Goalie(s):
        </b-col>
      </b-row>
      <hr />
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
.largeNumber {
  font-size: 130%;
}
</style>
