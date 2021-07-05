<template>
  <div class="footerLianjie">
    <div class="footerLianjieTop">
      <h3><b>友情</b>链接</h3>
      <a href="">更多</a>
    </div>
    <div class="footerLianjieBtn">
      <lianjie></lianjie>
    </div>
  </div>
</template>
<script>
import lianjie from '/src/views/lianjie/lianjie.vue'
export default {
  data() {
    return {}
  },
  components: {
    lianjie
  }
}
</script>
<style>
.footerLianjie {
  width: 1000px;
  height: 168px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerLianjieTop {
  width: 1000px;
  height: 50px;
  margin-top: 30px;
}
.footerLianjieTop > h3 {
  color: #555;
  font-size: 30px;
  font-weight: 300;
  float: left;
  cursor: pointer;
}

.footerLianjieTop > h3 b {
  color: #0c8ed9;
  font-weight: 300;
  cursor: pointer;
}
.footerLianjieTop > a {
  color: #ccc;
  font-size: 12px;
  margin-top: 15px;
  float: right;
}
</style>
