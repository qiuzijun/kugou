<template>
  <div
    class="music"
    @mouseover="musicDown"
    @mouseout="musicUp"
    :class="{ musicAnm1: isMusicAnm1, musicAnm2: isMusicAnm2 }"
  >
    <audio
      src="http://m701.music.126.net/20210704142503/8d8575fbccd7b6d2466e8233ba252c65/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5258591663/61bf/33cf/e6a5/da47602351f7f71aea8c1e88de587411.mp3"
      ref="MusicPlay"
    ></audio>
    <div class="musicContent">
      <div class="musicBo">
        <img :src="musicImg[0].name" width="36px" height="36px" />
        <img
          :src="musicImg[1].name"
          width="60px"
          height="60px"
          @click="bofan"
        />
        <img :src="musicImg[2].name" width="36px" height="36px" />
      </div>
      <div class="musicImg"></div>
      <div class="musicTime">
        <div class="musicTime_Name">
          <div>
            <span>红船</span>
          </div>
          <div>
            <span>
              <i>00:00</i>
              /
              <i>03:24</i>
            </span>
          </div>
        </div>
        <div class="musicTimeProgress"></div>
      </div>
      <div class="musicDownload">
        <img :src="musicImg[3].name" />
        <img :src="musicImg[4].name" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMusicAnm1: false,
      isMusicAnm2: false,
      msg: 0,
      musicImg: [
        { id: 0, name: require('/src/assets/bofanL2.png') },
        { id: 1, name: require('/src/assets/bofan6.png') },
        { id: 2, name: require('/src/assets/bofanR2.png') },
        { id: 3, name: require('/src/assets/laba1.png') },
        { id: 4, name: require('/src/assets/xiazai1.png') }
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
      } else {
        this.$refs.MusicPlay.pause()
        this.msg = 0
        this.musicImg[1].name = require('/src/assets/bofan6.png')
      }
    },
    musicPause() {
      this.$refs.MusicPlay.pause()
    },
    musicPlay() {
      this.$refs.MusicPlay.play()
    },
    beforeCreate() {}
  }
}
</script>
<style>
.music {
  width: 100%;
  height: 80px;
  background-color: rgba(71, 207, 231, 0.397);
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
.musicContent > .musicTime > .musicTimeProgress {
  width: 370px;
  height: 5px;
  border-radius: 20px;
  background-color: lawngreen;
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
