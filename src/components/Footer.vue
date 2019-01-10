<template>
  <b-container fluid>
    <footer class="fixed-bottom text-center">
      @ {{ date }} Juha Untinen - <a href="https://github.com/Torniojaws">GitHub</a>
      <br />
      Built with Vue v2.5
    </footer>
  </b-container>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      date: new Date().getFullYear(),
    }
  }
}
</script>

<style>
footer {
  background-color: #efefef;
}
</style>
