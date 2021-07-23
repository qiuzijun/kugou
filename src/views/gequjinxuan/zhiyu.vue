<template>
  <div class="zhiyu">
    <ul>
      <li v-for="(item, index) in resultLm.slice(0, 9)" :key="index">
        <img
          :src="item.al.picUrl"
          alt=""
          width="71px"
          height="71px"
          @mouseover="msgOver(item.id)"
          @mouseout="msgOut()"
        />
        <img
          :src="img[1].name"
          v-show="msg == item.id"
          @mouseover="msgOver1(item.id)"
          @mouseout="msgOut1()"
          @click="bofan(item.id)"
        />
        <div class="zhiyuN">
          <div class="number1">
            <span>{{ item.name }}</span>
            <span>{{ item.ar[0].name }}</span>
          </div>
          <div class="number2">
            <img :src="img[0].name" alt="" />
            <span>{{ parseInt(item.m.size / 1000) }}万</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: -1,
      iszhiyuOt: false,
      isnumber1Cor: -1,
      isnumber2Cor: -1,
      resultLm: [],
      img: [
        { name: require('/src/assets/4.png') },
        { name: require('/src/assets/bofang1.png') }
      ]
    }
  },
  methods: {
    msgOver(index) {
      this.msg = index
    },
    msgOut() {
      this.msg = -1
    },
    msgOver1(index) {
      this.msg = index
      this.img[1].name = require('/src/assets/bofang2.png')
    },
    msgOut1() {
      this.img[1].name = require('/src/assets/bofang1.png')
    },
    async bofan(index) {
      let musicUrl = await this.axios.get(
        'https://wyymusicapi.vercel.app/song/url?id=' + index
      )
      if (musicUrl.data.data[0].url == null) {
        alert('Vip音乐')
      }
      // console.log(musicUrl)
      this.$store.commit('setUrl', musicUrl.data.data[0].url)

      let musiclist = await this.axios.get(
        'https://wyymusicapi.vercel.app/song/detail?ids=' + index
      )
      // console.log(require)
      if (musiclist.data.songs[0].al.picUrl == null) {
        alert('Vip音乐')
      }
      // 时间格式转化
      let Times = musiclist.data.songs[0].dt
      let Seconds = Times / 1000
      let m = parseInt(Seconds / 60)
      let s = parseInt(Seconds - m * 60)
      s = s < 10 ? '0' + s : s
      let time = m + ':' + s

      // console.log(require.data.songs[0].al.picUrl)
      this.$store.commit('setmusicList', musiclist)
      // 歌曲id
      this.$store.commit('setID', musiclist.data.songs[0].id)
      // 图片路径
      this.$store.commit('setImg', musiclist.data.songs[0].al.picUrl)
      // 名字
      this.$store.commit('setName', musiclist.data.songs[0].name)
      // 时间
      this.$store.commit('setTime', time)
      // 毫秒
      this.$store.commit('sethuayu', musiclist.data.songs[0].dt)
      // console.log(index)

      // console.log(this.$store.state.huayu)
      // console.log(index)
    }
  },
  async beforeMount() {
    let result1 = await this.axios.get(
      'https://wyymusicapi.vercel.app/top/playlist?cat=治愈&order=hot'
    )
    let result2 = await this.axios.get(
      'https://wyymusicapi.vercel.app/playlist/detail?id=' + result1.data.playlists[0].id
    )
    for (let i = 0; i < 9; i++) {
      // console.log(result2.data.privileges[i].id)
      let result3 = await this.axios.get(
        'https://wyymusicapi.vercel.app/song/detail?ids=' + result2.data.privileges[i].id
      )
      // console.log(result3.data.songs[0])
      this.resultLm.push(result3.data.songs[0])
    }
    // console.log(this.resultLm)
  }
}
</script>
<style>
.zhiyu {
  width: 1000px;
  height: 300px;
  display: flex;
  align-items: center;
}
.zhiyu > ul li {
  width: 300px;
  height: 71px;
  margin: 0 0 21px 23px;
  float: left;
}
.zhiyu > ul li > .zhiyuN {
  width: 229px;
  height: 71px;
  cursor: pointer;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zhiyu > ul li > .zhiyuN > .number1 {
  width: 180px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.zhiyu > ul li > img:first-child {
  cursor: pointer;
  float: left;
}
.zhiyu > ul li > img:first-child + img {
  margin-left: -55px;
  margin-top: 17px;
  cursor: pointer;
  float: left;
}
.zhiyu > ul li > .zhiyuN > .number1 > span:first-child {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.zhiyu > ul li > .zhiyuN > .number1 > span:first-child + span {
  font-size: 11px;
  color: #999;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zhiyu > ul li > .zhiyuN > .number2 {
  width: 60px;
  height: 18px;
}
.zhiyu > ul li > .zhiyuN > .number2 > span {
  color: #8d8d8d;
  font-size: 11px;
}
</style>
