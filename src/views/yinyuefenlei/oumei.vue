<template>
  <div class="huayu">
    <ul class="huayuGeDan" ref="name">
      <li class="GeDan1">
        <ul class="huayuGeDan1">
          <li
            v-for="item in huayuGeDan.slice(0, 8)"
            :key="item.id"
            @mouseover="liBckCor1(item.id)"
            @mouseout="liBckCor2(item.id)"
            :class="{ liBckCor: isLiBckCor == item.id }"
          >
            {{ item.name }}

            <img
              :src="imgUrl[0].img"
              alt=""
              v-show="imgBo == item.id"
              @mouseover="imgCor1"
              @mouseout="imgCor2"
              @click="bofan1(item.id)"
            />
          </li>
        </ul>
        <ul class="Time">
          <li v-for="(item, index) in huayuGeDanTime.slice(0, 8)" :key="index">
            {{ item }}
          </li>
        </ul>
      </li>
      <li class="GeDan2">
        <ul class="huayuGeDan1">
          <li
            v-for="item in huayuGeDan.slice(9, 17)"
            :key="item.id"
            @mouseover="liBckCor3(item.id)"
            @mouseout="liBckCor4(item.id)"
            :class="{ liBckCor1: isLiBckCor1 == item.id }"
          >
            {{ item.name }}

            <img
              :src="imgUrl[0].img"
              alt=""
              v-show="imgBo1 == item.id"
              @mouseover="imgCor3"
              @mouseout="imgCor4"
              @click="bofan2(item.id)"
            />
          </li>
        </ul>
        <ul class="Time">
          <li v-for="(item, index) in huayuGeDanTime.slice(9, 17)" :key="index">
            {{ item }}
          </li>
        </ul>
      </li>
      <li class="GeDan3">
        <ul class="huayuGeDan1">
          <li
            v-for="item in huayuGeDan.slice(17, 25)"
            :key="item.id"
            @mouseover="liBckCor5(item.id)"
            @mouseout="liBckCor6(item.id)"
            :class="{ liBckCor2: isLiBckCor2 == item.id }"
          >
            {{ item.name }}

            <img
              :src="imgUrl[0].img"
              alt=""
              v-show="imgBo2 == item.id"
              @mouseover="imgCor5"
              @mouseout="imgCor6"
              @click="bofan3(item.id)"
            />
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
      </li>
    </ul>

    <div class="FanYe">
      <img :src="imgUrl[1].img" alt="" width="6px" height="9px" />
      <span>{{ L }}/3</span>
      <img :src="imgUrl[2].img" alt="" width="6px" height="9px" @click="imgR" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      L: 1,
      huayuGeDan: [],
      huayuGeDanTime: [],
      isLiBckCor: -1,
      isLiTmBckCor: -1,
      imgBo: -1,
      index: 0,
      isLiBckCor1: -1,
      imgBo1: -1,
      isLiBckCor2: -1,
      imgBo2: -1,
      imgUrl: [
        { id: 0, img: require('/src/assets/bofan1.png') },
        { id: 1, img: require('/src/assets/jiantouL.png') },
        { id: 2, img: require('/src/assets/jiantou.png') }
      ]
    }
  },
  methods: {
    liBckCor1(index) {
      this.imgBo = index
      this.isLiBckCor = index
    },
    liBckCor2() {
      this.imgBo = -1
      this.isLiBckCor = -1
    },
    liBckCor3(index) {
      this.imgBo1 = index
      this.isLiBckCor1 = index
    },
    liBckCor4() {
      this.imgBo1 = -1
      this.isLiBckCor1 = -1
    },
    liBckCor5(index) {
      this.imgBo2 = index
      this.isLiBckCor2 = index
    },
    liBckCor6() {
      this.imgBo2 = -1
      this.isLiBckCor2 = -1
    },
    imgCor1() {
      this.imgUrl[0].img = require('/src/assets/bofan2.png')
    },
    imgCor2() {
      this.imgUrl[0].img = require('/src/assets/bofan1.png')
    },
    imgCor3() {
      this.imgUrl[0].img = require('/src/assets/bofan2.png')
    },
    imgCor4() {
      this.imgUrl[0].img = require('/src/assets/bofan1.png')
    },
    imgCor5() {
      this.imgUrl[0].img = require('/src/assets/bofan2.png')
    },
    imgCor6() {
      this.imgUrl[0].img = require('/src/assets/bofan1.png')
    },
    imgR() {
      this.index = this.index + 1
      this.$refs.name.style.left = -625 * this.index + 'px'
      if (this.index >= 3) {
        this.index = 0
        this.$refs.name.style.left = 0 + 'px'
      }
      this.L = this.L + 1
      if (this.L >= 4) {
        this.L = 1
      }
      // console.log(this.$refs.name)
    },
    bofan1(index) {
      this.axios
        .get('http://localhost:3000/song/url?id=' + index)
        .then(require => {
          // console.log(require.data.data[0].url)
          if (require.data.data[0].url == null) {
            alert('Vip音乐')
          }
          this.$store.commit('setUrl', require.data.data[0].url)
        })
        .catch(error => {
          console.log(error)
        })

      // console.log(index)
    },
    bofan2(index) {
      this.axios
        .get('http://localhost:3000/song/url?id=' + index)
        .then(require => {
          // console.log(require.data.data[0].url)
          if (require.data.data[0].url == null) {
            alert('Vip音乐')
          }
          this.$store.commit('setUrl', require.data.data[0].url)
        })
        .catch(error => {
          console.log(error)
        })
      this.axios
        .get('http://localhost:3000/song/detail?ids=' + index)
        .then(require => {
          // console.log(require)
          if (require.data.songs[0].al.picUrl == null) {
            alert('Vip音乐')
          }
          let Times = require.data.songs[0].dt
          let Seconds = Times / 1000
          let m = parseInt(Seconds / 60)
          let s = parseInt(Seconds - m * 60)
          s = s < 10 ? '0' + s : s
          let time = m + ':' + s

          this.$store.commit('setImg', require.data.songs[0].al.picUrl)
          this.$store.commit('setName', require.data.songs[0].name)
          this.$store.commit('setTime', time)
          this.$store.commit('sethuayu', require.data.songs[0].dt)
        })
        .catch(error => {
          console.log(error)
        })
      // console.log(index)
    },
    bofan3(index) {
      this.axios
        .get('http://localhost:3000/song/url?id=' + index)
        .then(require => {
          // console.log(require.data.data[0].url)
          if (require.data.data[0].url == null) {
            alert('Vip音乐')
          }
          this.$store.commit('setUrl', require.data.data[0].url)
        })
        .catch(error => {
          console.log(error)
        })
      this.axios
        .get('http://localhost:3000/song/detail?ids=' + index)
        .then(require => {
          // console.log(require)
          if (require.data.songs[0].al.picUrl == null) {
            alert('Vip音乐')
          }
          let Times = require.data.songs[0].dt
          let Seconds = Times / 1000
          let m = parseInt(Seconds / 60)
          let s = parseInt(Seconds - m * 60)
          s = s < 10 ? '0' + s : s
          let time = m + ':' + s

          this.$store.commit('setImg', require.data.songs[0].al.picUrl)
          this.$store.commit('setName', require.data.songs[0].name)
          this.$store.commit('setTime', time)
          this.$store.commit('sethuayu', require.data.songs[0].dt)
        })
        .catch(error => {
          console.log(error)
        })
      // console.log(index)
    }
  },
  mounted() {
    // let imgL = document.querySelector('imgL')
    // imgL.addEventListener("click",()=>{
    // })
    // let imgR = document.querySelector('imgR')
    // console.log(this.$refs.name)
  },
  async beforeCreate() {
    let result = await this.axios.get(
      'http://localhost:3000/top/playlist?cat=欧美&order=hot'
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
  position: relative;
  left: 0;
}
.huayuGeDan > li {
  float: left;
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
  /* background-color: red; */
  cursor: pointer;
}
.huayu > .huayuGeDan > .GeDan1 > .huayuGeDan1 > .liBckCor {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  text-align: left;
  margin-left: 10px;
  height: 35px;
  overflow: hidden;
  line-height: 35px;
  background-color: #f5f8fb;
  color: #0c8ed9;
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
.huayu > .huayuGeDan > .GeDan2 > .huayuGeDan1 > .liBckCor1 {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  text-align: left;
  margin-left: 10px;
  height: 35px;
  overflow: hidden;
  line-height: 35px;
  background-color: #f5f8fb;
  color: #0c8ed9;
  cursor: pointer;
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
.huayu > .huayuGeDan > .GeDan3 > .huayuGeDan1 > .liBckCor2 {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  text-align: left;
  margin-left: 10px;
  height: 35px;
  overflow: hidden;
  background-color: #f5f8fb;
  color: #0c8ed9;
  line-height: 35px;
  cursor: pointer;
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
