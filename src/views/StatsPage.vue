<template>
  <div id="stats">
    <h1>Games on {{ date }}</h1>
    <hr />
    <game-item
      v-if="games"
      v-for="game in games"
      :key="game.gamePk"
      :id="game.gamePk"
      :teams="game.teams"
    ></game-item>
  </div>
</template>

<script>
const { getGames } = require('@/api/nhl');

export default {
  name: 'Stats',
  data () {
    return {
      msg: 'active',
      date: new Date(Date.now() - (24*60*60*1000)).toISOString().split('T')[0],
      games: [],
    }
  },
  async mounted () {
    this.games = await getGames();
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
p {
  color: silver;
}
.header {
  font-weight: bold;
}
</style>
