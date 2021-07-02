<template>
  <div>
    <Header></Header>
    <headerForm></headerForm>
    <Rubo></Rubo>
    <footerGedan></footerGedan>
    <footerShoufa></footerShoufa>
    <footerJinxuan></footerJinxuan>
  </div>
</template>
<script>
import Header from './components/Header/Header.vue'
import headerForm from './components/headerForm/headerFrom.vue'
import Rubo from './components/runbo/rubo.vue'
import footerGedan from './components/footerGedan/footerGedan.vue'
import footerShoufa from './components/footerShoufa/footerShoufa.vue'
import footerJinxuan from './components/footerJinxuan/footerJinxuan.vue'
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
    footerJinxuan
  }
}
</script>
<style></style>
