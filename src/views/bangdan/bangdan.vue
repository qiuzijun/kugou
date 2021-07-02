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
      .get('http://localhost:3000/song/url?id=391566')
      .then(require => {
        console.log(require.data.data[0].url)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style></style>
