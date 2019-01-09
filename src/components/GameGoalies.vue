<template>
  <div v-bind:class="{ finnish: goalie.nationality === 'FIN' }">
    <b>{{ goalie.decision }}</b> - {{ goalie.name }}<br />
    Saves: {{ goalie.savePercentage }} % &ndash; {{ goalie.saves }} / {{ goalie.shots }}<br />
    {{ goalie.timeOnIce }} TOI
  </div>
</template>

<script>
export default {
  name: 'GameGoalies',
  props: ['id', 'goalie'],
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
