<template>
  <div class="footerJinxuan">
    <div class="footerJinxuanTop">
      <h3><b>歌曲</b>精选</h3>
      <ul>
        <li
          v-for="item in Jinxuan"
          :key="item.id"
          @mouseover="jinXuanLiover(item.id)"
          :class="{ jinXuanCor: msg == item.id }"
        >
          {{ item.name }}
        </li>
      </ul>
      <a href="">更多</a>
    </div>
    <div class="footerJinxuanBot">
      <langman v-show="jX == 0"></langman>
      <zhiyu v-show="jX == 1"></zhiyu>
      <qingxin v-show="jX == 2"></qingxin>
      <shanggan v-show="jX == 3"></shanggan>
      <shanbu v-show="jX == 4"></shanbu>
    </div>
  </div>
</template>
<script>
import langman from '/src/views/gequjinxuan/langman.vue'
import zhiyu from '/src/views/gequjinxuan/zhiyu.vue'
import qingxin from '/src/views/gequjinxuan/qingxin.vue'
import shanggan from '/src/views/gequjinxuan/shanggan.vue'
import shanbu from '/src/views/gequjinxuan/shanbu.vue'
export default {
  data() {
    return {
      jX: 0,
      msg: -1,
      Jinxuan: [
        { id: 0, name: '浪漫' },
        { id: 1, name: '治愈' },
        { id: 2, name: '清新' },
        { id: 3, name: '伤感' },
        { id: 4, name: '散步' }
      ]
    }
  },
  components: {
    langman,
    zhiyu,
    qingxin,
    shanggan,
    shanbu
  },
  methods: {
    jinXuanLiover(index) {
      this.msg = index
      switch (index) {
        case (index = 0):
          this.jX = 0
          break
        case (index = 1):
          this.jX = 1
          break
        case (index = 2):
          this.jX = 2
          break
        case (index = 3):
          this.jX = 3
          break
        case (index = 4):
          this.jX = 4
          break

        default:
          break
      }
    },
    jinXuanLiout(index) {}
  }
}
</script>
<style>
.footerJinxuan {
  width: 1000px;
  height: 450px;
  margin: 0 auto;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerJinxuanTop {
  width: 1000px;
  height: 50px;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
  /* background-color: pink; */
}
.footerJinxuanTop > h3 {
  color: #555;
  font-size: 30px;
  font-weight: 300;
  margin-top: 20px;
  float: left;
  cursor: pointer;
}
.footerJinxuanTop > h3 b {
  color: #0c8ed9;
  font-weight: 300;
  cursor: pointer;
}

.footerJinxuanTop > ul {
  width: 250px;
  height: 20px;
  margin-left: 150px;
  margin-top: 30px;
}
.footerJinxuanTop > ul > li {
  float: left;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
}
.footerJinxuanTop > ul > .jinXuanCor {
  color: #0c8ed9;
}
.footerJinxuanTop > a {
  color: #ccc;
  font-size: 12px;
  margin-top: -18px;
  float: right;
}
</style>
