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
    // this.axios
    //   .get('http://localhost:3000/song/url?id=33894312')
    //   .then(require => {
    //     console.log(require)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    console.log(this.msg[0])
  }
}
</script>
<style></style>
