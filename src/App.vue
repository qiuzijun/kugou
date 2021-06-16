<template>
  <div>
    <sgin-in></sgin-in>
  </div>
</template>

<script>
import Sigin from './components/Sigin.vue'

export default {
  data() {
    return {}
  },
  components: {
    sginIn: Sigin
  },
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

<style></style>
