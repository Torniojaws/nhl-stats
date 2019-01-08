<template>
  <div v-bind:class="{ finnish: player.nationality === 'FIN' }">
    {{ player.name }}: {{ player.goals }}+{{ player.assists}}={{ player.points }}
  </div>
</template>

<script>
export default {
  name: 'GamePoints',
  props: ['id', 'player'],
  data () {
    return {}
  }
}
</script>

<style>
.finnish {
  color: #00aaff;
  font-weight: bold;
}
</style>
