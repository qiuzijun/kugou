<template>
  <div
    class="music"
    @mouseover="musicDown"
    @mouseout="musicUp"
    :class="{
      musicAnm1: isMusicAnm1,
      musicAnm2: isMusicAnm2
    }"
  >
    <audio
      :src="Url"
      ref="MusicPlay"
      @timeupdate="onTimeupdate"
      @ended="overAudio"
      @pause="outAudio"
    ></audio>
    <div class="musicContent">
      <!-- 播放按钮 -->
      <div class="musicBo">
        <img
          :src="musicImg[0].name"
          width="36px"
          height="36px"
          @click="bofanL"
        />
        <img
          :src="musicImg[1].name"
          width="60px"
          height="60px"
          @click="bofan"
        />
        <img
          :src="musicImg[2].name"
          width="36px"
          height="36px"
          @click="bofanR"
        />
      </div>
      <div class="musicImg">
        <!-- 歌曲图片 -->
        <img :src="huayuImg" alt="Vip" width="60px" height="60px" />
      </div>
      <div class="musicTime">
        <div class="musicTime_Name">
          <div class="musicTime_Name_cor1">
            <!-- 歌曲名字 -->
            <!-- 还有这个this可以不写 -->
            <span>{{ this.$store.state.huayuName }}</span>
          </div>
          <div class="musicTime_Name_cor2">
            <span>
              <!-- 歌曲实时播放时间 -->
              <i>{{ this.$store.state.huayuDt }}</i>
              /
              <!-- 歌曲总时间 -->
              <i>{{ this.$store.state.huayuTime }}</i>
            </span>
          </div>
        </div>
        <!-- 进度条 -->
        <el-progress
          :percentage="percentage"
          :color="customColor"
          :show-text="boolean"
        ></el-progress>
      </div>
      <div class="musicDownload">
        <!-- 下载 -->
        <img :src="musicImg[3].name" @click="volumeShow = !volumeShow" />
        <a :href="this.Url" download="mp3" target="_black"
          ><img :src="musicImg[4].name"
        /></a>
        <div class="volume" v-show="volumeShow">
          <el-progress
            :percentage="percentage1"
            :color="customColor"
            :show-text="boolean"
          ></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//music组件在Home组件里。我想放进歌词组件里，通过在huayu，liuxing，oumei，riben组件点击歌曲，跳转到歌词组件里播放音乐。
export default {
  data() {
    return {
      isMusicAnm1: false,
      isMusicAnm2: false,
      msg: 0,
      timer: '',
      jindutiao: '',
      minutes: 0,
      seconds: 0,
      volumeShow: false,
      Img: '',
      musicImg: [
        { id: 0, name: require('/src/assets/bofanL2.png') },
        { id: 1, name: require('/src/assets/bofan6.png') },
        { id: 2, name: require('/src/assets/bofanR2.png') },
        { id: 3, name: require('/src/assets/laba1.png') },
        { id: 4, name: require('/src/assets/xiazai1.png') }
      ],
      percentage: 0,
      boolean: false,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  methods: {
    // 播放动画时间
    musicDown() {
      this.isMusicAnm1 = true
      this.isMusicAnm2 = false
    },
    musicUp() {
      this.isMusicAnm2 = true
      this.isMusicAnm1 = false
    },
    // 播放按钮事件
    bofan() {
      if (this.msg == 0) {
        this.$refs.MusicPlay.play()
        this.msg = 1
        this.musicImg[1].name = require('/src/assets/bofan4.png')
        // this.timer = setInterval(this.startTimer, 1000)
        this.jindutiao = setInterval(this.increase, 1000)
        this.$refs.MusicPlay.volume = 0.1
        // console.log(this.$refs.MusicPlay.volume)
      } else {
        this.$refs.MusicPlay.pause()
        this.msg = 0
        this.musicImg[1].name = require('/src/assets/bofan6.png')
        // clearInterval(this.timer)
        clearInterval(this.jindutiao)
      }
    },
    // 左切换
    bofanL() {
      this.Url = this.$store.state.huayuUrl[
        this.$store.state.huayuUrl.length - 2
      ]
    },
    // 右切换
    bofanR() {
      this.Url = this.$store.state.huayuUrl[
        this.$store.state.huayuUrl.length - 1
      ]
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    // 音乐实时进度条
    increase() {
      if (this.$store.state.huayuDt == '00:00') {
        this.percentage = 0
      } else {
        this.percentage += 100 / parseInt(this.$store.state.huayu / 1000)
        // console.log(this.percentage)
        if (parseInt(this.percentage) == 100) {
          this.percentage = 0
          clearInterval(this.jindutiao)
        }
      }
    },
    // 音乐实时时间
    onTimeupdate() {
      let m = parseInt(parseInt(event.target.currentTime) / 60)
      m = m < 10 ? '0' + m : m
      let s = parseInt(parseInt(event.target.currentTime) - m * 60)
      s = s < 10 ? '0' + s : s
      let time = m + ':' + s
      this.$store.commit('setDt', time)
      this.$store.commit('sethuayuTime', parseInt(event.target.currentTime))
      // console.log(parseInt(event.target.currentTime))
    },
    overAudio() {
      this.musicImg[1].name = require('/src/assets/bofan6.png')
    },
    outAudio() {
      clearInterval(this.jindutiao)
    },
    downloadExcel() {
      window.location.href = this.Url
    }
  },
  computed: {
    // 歌曲路径
    Url() {
      return this.$store.state.huayuUrl[this.$store.state.huayuUrl.length - 1]
    },
    huayuImg() {
      // 如果vuex里面没有就去缓存里面找
      console.log('music', this.$store.state.huayuImg)
      return this.$store.state.huayuImg || JSON.parse(localStorage.getItem(1))
    }
  },
  // 监听url变化
  watch: {
    Url(newName, oldName) {
      if (newName != oldName) {
        this.musicImg[1].name = require('/src/assets/bofan6.png')
      } else {
        this.musicImg[1].name = require('/src/assets/bofan4.png')
      }
      // console.log(newName, oldName)
    }
  },
  beforeMount() {
    // 删了
    // localStorage
  }
}
</script>
<style>
.music {
  width: 100%;
  height: 80px;
  background-color: rgb(32, 185, 223);
  box-shadow: 0 0 3px 2px #ccc;
  position: fixed;
  bottom: -78px;
  cursor: pointer;
}
.musicAnm1 {
  position: fixed;
  bottom: 0px;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: linear;
}
.musicAnm2 {
  position: fixed;
  bottom: -78px;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: linear;
}
.musicContent {
  width: 1000px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.musicContent > .musicBo {
  width: 160px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.musicContent > a > .musicImg {
  width: 60px;
  height: 60px;
  background-color: red;
}
.musicContent > .musicTime {
  width: 370px;
  height: 80px;
}
.musicContent > .musicTime > .musicTime_Name {
  width: 370px;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.musicContent > .musicTime > .musicTime_Name > .musicTime_Name_cor1 {
  font-size: 13px;
  color: #ccc;
}
.musicContent > .musicTime > .musicTime_Name > .musicTime_Name_cor2 > span i {
  font-size: 13px;
  font-style: normal;
  color: #ccc;
}

.musicContent > .musicDownload {
  width: 260px;
  height: 80px;
}
.musicContent > .musicDownload > .volume {
  width: 100px;
  transform: rotate(90deg);
  margin-top: -30px;
  margin-left: -58px;
  float: left;
}
.musicContent > .musicDownload > img:first-child {
  margin-top: 35px;
  margin-left: 42px;
  float: left;
}
.musicContent > .musicDownload > img:first-child + a > img {
  margin-top: 35px;
  margin-right: 20px;
  float: right;
}
</style>
