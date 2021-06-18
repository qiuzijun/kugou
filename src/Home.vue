<template>
  <div>
    <Header></Header>
    <headerForm></headerForm>
    <Rubo></Rubo>
    <footerGedan></footerGedan>
  </div>
</template>
<script>
import Header from './components/Header/Header.vue'
import headerForm from './components/headerForm/headerFrom.vue'
import Rubo from './components/runbo/rubo.vue'
import footerGedan from './components/footerGedan/footerGedan.vue'
export default {
  data() {
    return {}
  },
  components: {
    Header: Header,
    headerForm: headerForm,
    Rubo: Rubo,
    footerGedan: footerGedan
  }
}
</script>
<style></style>
