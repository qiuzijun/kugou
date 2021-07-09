<template>
  <div class="geCi">
    <Header></Header>
    <HeaderForm></HeaderForm>
    <div class="geCi1">
      <img :src="myDiv[0].name" width="100%" height="803px" class="filer" />
      <div class="geCic">
        <div class="geCicl">
          <img :src="$route.query.musicImg" alt="" width="260" height="260px" />
          <div
            class="xiazai"
            @mouseover="xiazaiOver"
            @mouseout="xiazaiOut"
            :class="{ xiazaiCor: isXiazaiCor }"
          >
            <a
              :href="$route.query.musicUrl"
              :class="{ aCor: isaCor }"
              target="_black"
              >下载歌曲</a
            >
          </div>
        </div>
        <div class="geCicr">
          <div class="geCicrt">
            <div class="geCicrtt">
              <p>
                {{ $route.query.name }}
                <img
                  :src="myDiv[1].name"
                  width="25px"
                  height="13px"
                  @mouseover="myDivOver"
                  @mouseout="myDivOut"
                  @click="bofanMv"
                />
              </p>
            </div>
            <div class="geCicrtb">
              <p>专辑:{{ $route.query.zhuanji }}</p>
              <p>歌手:{{ $route.query.geshouName }}</p>
            </div>
          </div>
          <happy-scroll color="rgba(0,0,0,0.5)" size="5">
            <div id="geCicrb">
              <p v-for="item in geci" :key="item.id">{{ item }}</p>
            </div>
          </happy-scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '/src/components/Header/Header.vue'
import HeaderForm from '/src/components/headerForm/headerFrom.vue'
export default {
  data() {
    return {
      isXiazaiCor: false,
      isaCor: false,
      geci: [],
      currentMUsicLyric: [],
      myDiv: [
        { id: 0, name: require('/src/assets/bj.png') },
        { id: 1, name: require('/src/assets/mv2.png') }
      ]
    }
  },
  components: {
    Header,
    HeaderForm
  },
  methods: {
    xiazaiOver() {
      this.isXiazaiCor = true
      this.isaCor = true
    },
    xiazaiOut() {
      this.isXiazaiCor = false
      this.isaCor = false
    },
    myDivOver() {
      this.myDiv[1].name = require('/src/assets/mv1.png')
    },
    myDivOut() {
      this.myDiv[1].name = require('/src/assets/mv2.png')
    },
    bofanMv() {
      const { href } = this.$router.resolve({
        path: '/MV',
        query: {
          id: this.$route.query.id
        }
      })
      window.open(href, '_black')
    }
  },
  async beforeMount() {
    let ge = await this.axios.get(
      'http://localhost:3000/lyric?id=' + this.$route.query.id
    )
    var a = ge.data.lrc.lyric.split('[')
    a.shift(']')
    a.pop(']')
    a.splice(0, 1)
    // console.log(a)
    for (let i = 0; i < a.length; i++) {
      // console.log(a[i].split(']'))
      this.geci.push(a[i].split(']')[1])
    }
    // console.log(this.geci)
    let lyricArr = ge.data.lrc.lyric.split('[').slice(1) // 先以[进行分割
    for (let i = 0; i < lyricArr.length; i++) {
      let arr = lyricArr[i].split(']') // 再分割右括号
      // 时间换算成秒
      let m = parseInt(arr[0].split(':')[0])
      let s = parseInt(arr[0].split(':')[1])
      arr[0] = m * 60 + s
      this.currentMUsicLyric.push(arr[0])
    }
    // 存储数据
    // console.log(this.geci)
    // console.log(this.currentMUsicLyric)
    console.log(this.$store.state.huayuID)
  },
  watch: {
    value() {}
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
.geCi > .geCi1 > .geCic {
  width: 840px;
  height: 500px;
  margin: -700px auto 0px;
  display: flex;
  justify-content: space-between;
}
.geCi > .geCi1 > .geCic > .geCicl {
  width: 260px;
  height: 500px;
}
.geCi > .geCi1 > .geCic > .geCicl > .xiazai {
  width: 230px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin: 100px auto 0px;
  font-size: 20px;
  cursor: pointer;
}
.geCi > .geCi1 > .geCic > .geCicl > .xiazaiCor {
  width: 230px;
  height: 50px;
  border: 1px solid #0c8ed9;
  border-radius: 30px;
  margin: 100px auto 0px;
  font-size: 20px;
  cursor: pointer;
}
.geCi > .geCi1 > .geCic > .geCicl > .xiazai > a {
  color: #ccc;
  line-height: 50px;
}
.geCi > .geCi1 > .geCic > .geCicl > .xiazai > .aCor {
  color: #0c8ed9;
  line-height: 50px;
}
.geCi > .geCi1 > .geCic > .geCicr {
  width: 460px;
  height: 500px;
  /* background-color: orange; */
}
.geCi > .geCi1 > .geCic > .geCicr > .geCicrt {
  width: 460px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.geCi > .geCi1 > .geCic > .geCicr > .geCicrt > .geCicrtt {
  width: 460px;
  height: 36px;
  /* background-color: darkcyan; */
}
.geCi > .geCi1 > .geCic > .geCicr > .geCicrt > .geCicrtt p {
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  text-align: left;
}
.geCi > .geCi1 > .geCic > .geCicr > .geCicrt > .geCicrtt p > img {
  cursor: pointer;
}
.geCi > .geCi1 > .geCic > .geCicr > .geCicrt > .geCicrtb {
  width: 460px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  /* background-color: darkcyan; */
}
.geCi > .geCi1 > .geCic > .geCicr > .geCicrt > .geCicrtb > p {
  font-size: 15px;
  color: #ccc;
}
.geCi > .geCi1 > .geCic > .geCicr > .geCicrt > .geCicrtb p:last-child {
  margin-right: 100px;
}
#geCicrb {
  width: 460px;
  height: 430px;
}
#geCicrb > p {
  text-align: left;
  font-size: 15px;
  margin-bottom: 15px;
  color: #ccc;
}
</style>
