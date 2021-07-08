<template>
  <div class="geCi">
    <Header></Header>
    <HeaderForm></HeaderForm>
    <div class="geCic">
      <div class="geCicl">
        <img
          :src="require('/src/assets/radio_5.jpg')"
          alt=""
          width="260"
          height="260px"
        />
        <div
          class="xiazai"
          @mouseover="xiazaiOver"
          @mouseout="xiazaiOut"
          :class="{ xiazaiCor: isXiazaiCor }"
        >
          <a href="" :class="{ aCor: isaCor }">下载歌曲</a>
        </div>
      </div>
      <div class="geCicr">
        <div class="geCicrt">
          <div class="geCicrtt">
            <p>万疆</p>
            <img src="" alt="" />
          </div>
          <div class="geCicrtb">
            <p>专辑:</p>
            <p>歌手:</p>
          </div>
        </div>
        <div class="geCicrb" ref="lyric">
          <p v-for="item in geci" :key="item.id">{{ item }}</p>
        </div>
      </div>
    </div>
    <!-- <music></music> -->
  </div>
</template>
<script>
import Header from '/src/components/Header/Header.vue'
import HeaderForm from '/src/components/headerForm/headerFrom.vue'
import music from '/src/components/bofanmusic/music.vue'
export default {
  data() {
    return {
      isXiazaiCor: false,
      isaCor: false,
      geci: [],
      currentMUsicLyric: []
    }
  },
  components: {
    Header,
    HeaderForm
    // music
  },
  methods: {
    xiazaiOver() {
      this.isXiazaiCor = true
      this.isaCor = true
    },
    xiazaiOut() {
      this.isXiazaiCor = false
      this.isaCor = false
    }
  },
  // async beforeMount() {
  //   let ge = await this.axios.get('http://localhost:3000/lyric?id=33894312')
  //   // console.log(ge.data.lrc.lyric)
  //   // console.log(require.data.lrc.lyric.split('['))
  //   var a = ge.data.lrc.lyric.split('[')
  //   a.shift(']')
  //   a.pop(']')
  //   a.splice(0, 1)
  //   // console.log(a)
  //   for (let i = 0; i < a.length; i++) {
  //     // console.log(a[i].split(']'))
  //     this.geci.push(a[i].split(']')[1])
  //   }
  //   // console.log(this.geci)
  //   let lyricArr = ge.data.lrc.lyric.split('[').slice(1) // 先以[进行分割
  //   for (let i = 0; i < lyricArr.length; i++) {
  //     let arr = lyricArr[i].split(']') // 再分割右括号
  //     // 时间换算成秒
  //     let m = parseInt(arr[0].split(':')[0])
  //     let s = parseInt(arr[0].split(':')[1])
  //     arr[0] = m * 60 + s
  //     this.currentMUsicLyric.push(arr[0])
  //   }
  //   // 存储数据
  //   console.log(this.currentMUsicLyric)
  // },
  watch: {
    // 使用watch监听当前歌曲进度value的变化处理歌词位置
    value() {
      let i = 0
      // 循环歌词对象
      for (let key in this.currentMUsicLyric) {
        console.log(key)
        // key表示歌词对象中的时间，如果key等于歌曲进度value，改变当前歌词进度		lyricIndex
        if (+key == this.value) {
          this.lyricIndex = i
          // 当歌词进度大于5，即播放到了第5句歌词，开始滚动
          if (i > 5) {
            this.$refs.lyric.scrollTop = 30 * (i - 5)
          }
        }
        i++
      }
    }
  }
}
</script>
<style>
.gundongtiao {
  width: 5px;
  height: 100px;
  background-color: #ccc;
  border-radius: 10px;
}
.geCi > .geCic {
  width: 840px;
  height: 500px;
  margin: 100px auto 0px;
  display: flex;
  justify-content: space-between;
}
.geCi > .geCic > .geCicl {
  width: 260px;
  height: 500px;
}
.geCi > .geCic > .geCicl > .xiazai {
  width: 230px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin: 100px auto 0px;
  font-size: 20px;
  cursor: pointer;
}
.geCi > .geCic > .geCicl > .xiazaiCor {
  width: 230px;
  height: 50px;
  border: 1px solid #0c8ed9;
  border-radius: 30px;
  margin: 100px auto 0px;
  font-size: 20px;
  cursor: pointer;
}
.geCi > .geCic > .geCicl > .xiazai > a {
  color: #ccc;
  line-height: 50px;
}
.geCi > .geCic > .geCicl > .xiazai > .aCor {
  color: #0c8ed9;
  line-height: 50px;
}
.geCi > .geCic > .geCicr {
  width: 460px;
  height: 500px;
  /* background-color: orange; */
}
.geCi > .geCic > .geCicr > .geCicrt {
  width: 460px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.geCi > .geCic > .geCicr > .geCicrt > .geCicrtt {
  width: 460px;
  height: 36px;
  background-color: darkcyan;
}
.geCi > .geCic > .geCicr > .geCicrt > .geCicrtt p {
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  text-align: left;
}
.geCi > .geCic > .geCicr > .geCicrt > .geCicrtb {
  width: 460px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  background-color: darkcyan;
}
.geCi > .geCic > .geCicr > .geCicrt > .geCicrtb > p {
  font-size: 15px;
  color: #ccc;
}
.geCi > .geCic > .geCicr > .geCicrt > .geCicrtb p:last-child {
  margin-right: 100px;
}
.geCi > .geCic > .geCicr > .geCicrb {
  width: 460px;
  height: 430px;
  overflow: hidden;
  background-color: darkgray;
}
.geCi > .geCic > .geCicr > .geCicrb > p {
  text-align: left;
  font-size: 15px;
  margin-bottom: 15px;
  color: #ccc;
}
</style>
