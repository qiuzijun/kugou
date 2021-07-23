<template>
  <div>
    <Header></Header>
    <HeaderForm></HeaderForm>
    <div class="mv">
      <video
        :src="Url"
        controls="controls"
        autoplay
        width="1200px"
        height="678px"
      ></video>
    </div>
  </div>
</template>
<script>
import Header from '/src/components/Header/Header.vue'
import HeaderForm from '/src/components/headerForm/headerFrom.vue'
export default {
  data() {
    return {
      Url: ''
    }
  },
  components: {
    Header,
    HeaderForm
  },
  async beforeMount() {
    let musicMv = await this.axios.get(
      'https://wyymusicapi.vercel.app/mv/url?id=' + this.$route.query.id
    )
    this.Url = musicMv.data.data.url
    if (musicMv.data.data.url == null) {
      alert('该歌没有MV')
    }
    // console.log(musicMv)
    console.log(this.Url)
    let mv = await this.axios.get('https://wyymusicapi.vercel.app/mv/url?id=5436712')
    console.log(mv)
  }
}
</script>
<style>
.mv {
  margin-top: 50px;
}
</style>
