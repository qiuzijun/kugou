<template>
  <div class="footerDiantai">
    <div class="footerDiantaiTop">
      <div class="footerDiantaiTopL">
        <div class="footerDiantaiTopLt">热门电台</div>
        <div class="footerDiantaiTopLb">
          <diantai></diantai>
        </div>
      </div>
      <div class="footerDiantaiTopR">
        <div class="footerDiantaiTopRt"></div>
        <div class="footerDiantaiTopRb"></div>
      </div>
    </div>
    <div class="footerDiantaiBtn"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import diantai from '/src/views/diantai/diantai.vue'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['huayu'])
  },
  components: {
    diantai
  }
}
</script>
<style>
.footerDiantai {
  width: 1000px;
  height: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerDiantaiTop {
  width: 1000px;
  height: 368px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.footerDiantaiTop > .footerDiantaiTopL {
  width: 625px;
  height: 368px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerDiantaiTop > .footerDiantaiTopL > .footerDiantaiTopLt {
  width: 625px;
  height: 50px;
  background-color: springgreen;
}

.footerDiantaiTop > .footerDiantaiTopR {
  width: 320px;
  height: 368px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerDiantaiTop > .footerDiantaiTopR > .footerDiantaiTopRt {
  width: 320px;
  height: 50px;
  background-color: slateblue;
}
.footerDiantaiTop > .footerDiantaiTopR > .footerDiantaiTopRb {
  width: 320px;
  height: 318px;
  background-color: darkorchid;
}
.footerDiantaiBtn {
  width: 1000px;
  height: 80px;
  background-color: salmon;
}
</style>
