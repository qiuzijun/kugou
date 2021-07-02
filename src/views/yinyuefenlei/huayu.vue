<template>
  <div class="huayu">
    <div class="huayuGeDan">
      <div class="GeDan1">
        <ul class="huayuGeDan1">
          <li v-for="item in huayuGeDan.slice(0, 8)" :key="item.id">
            {{ item.name }}
            <img :src="imgUrl[0].img" alt="" />
          </li>
        </ul>
        <ul class="Time">
          <li v-for="(item, index) in huayuGeDanTime.slice(0, 8)" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="GeDan2">
        <ul class="huayuGeDan1">
          <li v-for="item in huayuGeDan.slice(9, 17)" :key="item.id">
            {{ item.name }}
            <img :src="imgUrl[0].img" alt="" />
          </li>
        </ul>
        <ul class="Time">
          <li v-for="(item, index) in huayuGeDanTime.slice(9, 17)" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="GeDan3">
        <ul class="huayuGeDan1">
          <li v-for="item in huayuGeDan.slice(17, 25)" :key="item.id">
            {{ item.name }}
            <img :src="imgUrl[0].img" alt="" />
          </li>
        </ul>
        <ul class="Time">
          <li
            v-for="(item, index) in huayuGeDanTime.slice(17, 25)"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="FanYe">
      <img :src="imgUrl[1].img" alt="" width="6px" height="9px" />
      <span>{{ L }}/3</span>
      <img :src="imgUrl[2].img" alt="" width="6px" height="9px" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      L: '1',
      huayuGeDan: [],
      huayuGeDanTime: [],
      imgUrl: [
        { id: 0, img: require('/src/assets/bofan1.png') },
        { id: 1, img: require('/src/assets/jiantouL.png') },
        { id: 2, img: require('/src/assets/jiantou.png') }
      ]
    }
  },
  async beforeCreate() {
    let result = await this.axios.get(
      'http://localhost:3000/top/playlist?cat=华语&order=hot'
    ) // console.log(request.data.playlists) // 遍历出歌单id
    for (let i = 0; i < 3; i++) {
      // 用遍历出的id请求歌曲id
      let res = await this.axios.get(
        'http://localhost:3000/playlist/detail?id=' +
          result.data.playlists[i].id
      )
      var huayuID = res.data.privileges
      for (let i = 0; i < huayuID.length; i++) {
        // console.log(huayuID[i].id)
        // 用歌曲id请求歌曲信息
        let detailRes = await this.axios.get(
          'http://localhost:3000/song/detail?ids=' + huayuID[i].id
        )
        // console.log(detailRes)
        // 请求出的歌曲信息push进husyuGeDan数组
        this.huayuGeDan.push(detailRes.data.songs[0])
        // console.log(detailRes.data.songs[0].dt)
        let Times = detailRes.data.songs[0].dt
        let Seconds = Times / 1000
        let m = parseInt(Seconds / 60)
        let s = parseInt(Seconds - m * 60)
        s = s < 10 ? '0' + s : s
        let time = m + ':' + s
        // console.log(time)
        this.huayuGeDanTime.push(time)
      }
    } // 将husyuGeDan赋值给huayuGeDan数组
    // console.log(this.huayuGeDan)
    // console.log(this.huayuGeDanTime)
  }
}
</script>
<style>
.huayu {
  width: 625px;
  height: 318px;
  overflow: hidden;
  /* background-color: orange; */
}
.huayuGeDan {
  width: 1875px;
  height: 280px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
}
.huayu > .huayuGeDan > .GeDan1 > .huayuGeDan1 {
  width: 625px;
  height: 280px;
  padding-top: 10px;
  /* background-color: pink; */
}
.huayu > .huayuGeDan > .GeDan1 > .huayuGeDan1 > li {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  text-align: left;
  margin-left: 10px;
  height: 35px;
  overflow: hidden;
  line-height: 35px;
  cursor: pointer;
}
.huayu > .huayuGeDan > .GeDan1 > .huayuGeDan1 > li > img {
  margin-top: 10px;
  margin-right: 60px;
  float: right;
}
.huayu > .huayuGeDan > .GeDan1 > .Time {
  width: 45px;
  height: 280px;
  margin-top: -290px;
  padding-top: 10px;
  float: right;
}
.huayu > .huayuGeDan > .GeDan1 > .Time > li {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
}
.huayu > .huayuGeDan > .GeDan2 > .huayuGeDan1 {
  width: 625px;
  height: 280px;
  padding-top: 10px;
  /* background-color: pink; */
}
.huayu > .huayuGeDan > .GeDan2 > .huayuGeDan1 > li {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  text-align: left;
  margin-left: 10px;
  height: 35px;
  overflow: hidden;
  line-height: 35px;
  cursor: pointer;
}
.huayu > .huayuGeDan > .GeDan2 > .huayuGeDan1 > li > img {
  margin-top: 10px;
  margin-right: 60px;
  float: right;
}
.huayu > .huayuGeDan > .GeDan2 > .Time {
  width: 45px;
  height: 280px;
  margin-top: -290px;
  padding-top: 10px;
  float: right;
}
.huayu > .huayuGeDan > .GeDan2 > .Time > li {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
}
.huayu > .huayuGeDan > .GeDan3 > .huayuGeDan1 {
  width: 625px;
  height: 280px;
  padding-top: 10px;
  /* background-color: pink; */
}
.huayu > .huayuGeDan > .GeDan3 > .huayuGeDan1 > li {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  text-align: left;
  margin-left: 10px;
  height: 35px;
  overflow: hidden;
  line-height: 35px;
  cursor: pointer;
}
.huayu > .huayuGeDan > .GeDan3 > .huayuGeDan1 > li > img {
  margin-top: 10px;
  margin-right: 60px;
  float: right;
}
.huayu > .huayuGeDan > .GeDan3 > .Time {
  width: 45px;
  height: 280px;
  margin-top: -290px;
  padding-top: 10px;
  float: right;
}
.huayu > .huayuGeDan > .GeDan3 > .Time > li {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
}
.huayu > .FanYe {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  margin-top: 5px;
}
.huayu > .FanYe > img:first-child {
  cursor: pointer;
  margin-right: 15px;
}
.huayu > .FanYe > img:last-child {
  cursor: pointer;
  margin-left: 15px;
}
</style>
