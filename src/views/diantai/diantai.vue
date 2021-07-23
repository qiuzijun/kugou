<template>
  <div class="diantai">哈哈哈</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  async beforeMount() {
    let daintai = await this.axios
      .get('https://wyymusicapi.vercel.app/dj/personalize/recommend')
      .then(require => {
        console.log(require)
      })
      .catch(error => {
        console.log(error)
      })
    return daintai
  }
}
</script>
<style>
.diantai {
  width: 625px;
  height: 318px;
  background-color: red;
}
</style>
