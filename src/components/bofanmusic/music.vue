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
    ></audio>
    <div class="musicContent">
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
        <img :src="Img" alt="Vip" width="60px" height="60px" />
      </div>
      <div class="musicTime">
        <div class="musicTime_Name">
          <div class="musicTime_Name_cor1">
            <span>{{ $store.state.huayuName }}</span>
          </div>
          <div class="musicTime_Name_cor2">
            <span>
              <i>{{ this.$store.state.huayuDt }}</i>
              /
              <i>{{ $store.state.huayuTime }}</i>
            </span>
          </div>
        </div>
        <el-progress
          :percentage="percentage"
          :color="customColor"
          :show-text="boolean"
        ></el-progress>
      </div>
      <div class="musicDownload">
        <img :src="musicImg[3].name" />
        <img :src="musicImg[4].name" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
    musicDown() {
      this.isMusicAnm1 = true
      this.isMusicAnm2 = false
    },
    musicUp() {
      this.isMusicAnm2 = true
      this.isMusicAnm1 = false
    },
    bofan() {
      if (this.msg == 0) {
        this.$refs.MusicPlay.play()
        this.msg = 1
        this.musicImg[1].name = require('/src/assets/bofan4.png')
        // this.timer = setInterval(this.startTimer, 1000)
        this.jindutiao = setInterval(this.increase, 1000)
      } else {
        this.$refs.MusicPlay.pause()
        this.msg = 0
        this.musicImg[1].name = require('/src/assets/bofan6.png')
        // clearInterval(this.timer)
        clearInterval(this.jindutiao)
      }
    },
    bofanL() {
      this.Url = this.$store.state.huayuUrl[
        this.$store.state.huayuUrl.length - 2
      ]
    },
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
    }
  },
  computed: {
    ...mapState(['huayu']),
    Url() {
      return this.$store.state.huayuUrl[this.$store.state.huayuUrl.length - 1]
    },
    Img() {
      return this.$store.state.huayuImg[this.$store.state.huayuImg.length - 1]
    }
  },
  watch: {
    Url(newName, oldName) {
      if (newName != oldName) {
        this.musicImg[1].name = require('/src/assets/bofan6.png')
      } else {
        this.musicImg[1].name = require('/src/assets/bofan4.png')
      }
      console.log(newName, oldName)
    }
  }
}
</script>
<style>
.music {
  width: 100%;
  height: 80px;
  background-color: rgba(230, 73, 11, 0.397);
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
.musicContent > .musicImg {
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
.musicContent > .musicDownload > img:first-child {
  margin-top: 35px;
  margin-left: 20px;
  float: left;
}
.musicContent > .musicDownload > img:last-child {
  margin-top: 35px;
  margin-right: 20px;
  float: right;
}
</style>
