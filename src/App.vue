<template>
  <div id="app">
    <!-- <sgin-in></sgin-in> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Sigin from './components/Sigin.vue'

export default {
  data() {
    return {}
  },
  // components: {
  //   sginIn: Sigin
  // },
  created() {
    // this.axios
    //   .get('./mock/login.json')
    //   .then(function(response) {
    //     console.log(response)
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
