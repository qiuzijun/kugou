<template>
  <div class="lianjie">
    <ul>
      <li
        v-for="item in ljUrl"
        :key="item.id"
        @mouseover="aOver(item.id)"
        @mouseout="aOut"
      >
        <a
          :href="item.url"
          target="_black"
          :class="{ aCor: index == item.id }"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: -1,
      ljUrl: [
        { id: 0, name: '汽车论坛', url: 'http://baa.bitauto.com/' },
        { id: 1, name: 'IT之家', url: 'http://www.ithome.com/' },
        { id: 2, name: '365音乐网', url: 'http://www.yue365.com/' },
        { id: 3, name: '软件下载', url: 'http://www.xiazaiba.com' },
        { id: 4, name: '漫漫看漫画', url: 'http://www.manmankan.com/' },
        { id: 5, name: '手机游戏', url: 'http://www.9game.cn' },
        { id: 6, name: '5sing原创音乐', url: 'http://5sing.kugou.com' },
        { id: 7, name: '腾讯音乐人', url: 'http://y.tencentmusic.com' },
        { id: 8, name: '豌豆荚', url: 'http://www.wandoujia.com/' },
        { id: 9, name: '5sing众筹', url: 'http://zc.kugou.com/#/zcintiate' },
        { id: 10, name: '智能电视网', url: 'https://www.znds.com/' }
      ]
    }
  },
  methods: {
    aOver(index) {
      this.index = index
    },
    aOut() {
      this.index = -1
    }
  }
}
</script>
<style>
.lianjie {
  width: 1000px;
  height: 98px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lianjie > ul {
  width: 950px;
  height: 60px;
}
.lianjie > ul li > a {
  font-size: 13px;
  margin-bottom: 25px;
  margin-right: 60px;
  float: left;
}
.lianjie > ul li > .aCor {
  color: #0c8ed9;
}
</style>
