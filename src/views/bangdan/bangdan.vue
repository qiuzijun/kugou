<template>
  <div>
    哈哈哈
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: [1, 2, 3]
    }
  },
  created() {
    this.axios
      .get('https://wyymusicapi.vercel.app/top/playlist')
      .then(require => {
        console.log(require)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style></style>
