<template>
  <!-- Using the Holy Grail layout -->
  <b-container fluid>

    <!-- Menu row -->
    <b-row><main-menu /></b-row>

    <!-- Three columns for the contents -->
    <b-row>
      <b-col><!-- left column --></b-col>
      <b-col cols="8"><router-view/></b-col>
      <b-col><!-- Right column --></b-col>
    </b-row>

    <!-- And bottom row -->
    <b-row><main-footer /></b-row>

  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  color: black;
}
h1 {
  color: green;
}
</style>
