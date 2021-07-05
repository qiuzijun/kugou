<template>
  <div>
    <Header></Header>
    <headerForm></headerForm>
    <Rubo></Rubo>
    <footerGedan></footerGedan>
    <footerShoufa></footerShoufa>
    <footerJinxuan></footerJinxuan>
    <footerLianjie></footerLianjie>
    <Footer class="Footer"></Footer>
    <el-backtop
      class=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop>
    <music></music>
  </div>
</template>
<script>
import Header from './components/Header/Header.vue'
import headerForm from './components/headerForm/headerFrom.vue'
import Rubo from './components/runbo/rubo.vue'
import footerGedan from './components/footerGedan/footerGedan.vue'
import footerShoufa from './components/footerShoufa/footerShoufa.vue'
import footerJinxuan from './components/footerJinxuan/footerJinxuan.vue'
import footerDiantai from './components/footerDiantai/footerDiantai.vue'
import footerLianjie from './components/footerLianjie/footerLianjie.vue'
import Footer from './components/Footer/Footer.vue'
import music from './components/bofanmusic/music.vue'
export default {
  data() {
    return {}
  },
  components: {
    Header,
    headerForm,
    Rubo,
    footerGedan,
    footerShoufa,
    footerJinxuan,
    footerLianjie,
    Footer,
    music
  }
}
</script>
<style>
.Footer {
  width: 100%;
}
</style>
