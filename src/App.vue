<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view/>
  </div>
</template>

<script>
import VNav from "./components/nav/VNav";

export default {
  components: {VNav},
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*height: 100%;*/
  .app-top-lin {
    display: block;
    height: 0;
  }
}
</style>
