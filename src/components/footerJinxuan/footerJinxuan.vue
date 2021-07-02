<template>
  <div class="footerJinxuan">
    <div class="footerJinxuanTop">
      <h3><b>歌曲</b>精选</h3>
      <ul>
        <li v-for="item in Jinxuan" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="footerJinxuanBot"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Jinxuan: [
        { id: 0, name: '浪漫' },
        { id: 1, name: '治愈' },
        { id: 2, name: '清新' },
        { id: 3, name: '伤感' },
        { id: 4, name: '散步' }
      ]
    }
  }
}
</script>
<style>
.footerJinxuan {
  width: 1000px;
  height: 450px;
  margin: 0 auto;

  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerJinxuanTop {
  width: 1000px;
  height: 50px;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  background-color: pink;
}
.footerJinxuanTop > ul > li {
  float: left;
}
.footerJinxuanBot {
  width: 1000px;
  height: 300px;
  background-color: orange;
}
</style>
