<template>
  <div class="music">
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
        <img
          :src="huayuImg"
          alt="Vip"
          width="60px"
          height="60px"
          @click="geci()"
        />
      </div>
      <div class="musicTime">
        <div class="musicTime_Name">
          <div class="musicTime_Name_cor1">
            <!-- 歌曲名字 -->
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
          <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>
      </div>
      <div class="list">
        <img
          :src="listImg[0].name"
          width="60px"
          height="23px "
          @mouseover="listOver"
          @mouseout="listOut"
          @click="musicListNbr = !musicListNbr"
        />
        <p :class="{ pCor: ispCor }">
          {{ this.musicList.length - 1 == -1 ? 0 : this.musicList.length }}
        </p>
      </div>
    </div>
    <div class="musicList" v-show="musicListNbr">
      <div class="musicListTop">
        <p>
          播放列表/{{
            this.musicList.length - 1 == -1 ? 0 : this.musicList.length
          }}
        </p>
      </div>
      <div class="musicListBtn">
        <ul id="musicListS">
          <li v-for="(item, index) in musicList" :key="index" @click="qiehuan">
            {{ item.data.songs[0].name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
//music组件在Home组件里。我想放进歌词组件里，通过在huayu，liuxing，oumei，riben组件点击歌曲，跳转到歌词组件里播放音乐。
export default {
  data() {
    return {
      msg: 0,
      timer: '',
      jindutiao: '',
      minutes: 0,
      seconds: 0,
      volumeShow: false,
      value3: 20,
      ispCor: false,
      musicListNbr: false,
      musicImg: [
        { id: 0, name: require('/src/assets/bofanL2.png') },
        { id: 1, name: require('/src/assets/bofan6.png') },
        { id: 2, name: require('/src/assets/bofanR2.png') },
        { id: 3, name: require('/src/assets/laba1.png') },
        { id: 4, name: require('/src/assets/xiazai1.png') }
      ],
      listImg: [{ id: 0, name: require('/src/assets/list0.png') }],
      musicList: [],
      percentage: 0,
      boolean: false,
      customColor: '#409eff'
    }
  },
  methods: {
    // 播放按钮事件
    bofan() {
      if (this.msg == 0) {
        this.$refs.MusicPlay.play()
        this.msg = 1
        this.musicImg[1].name = require('/src/assets/bofan4.png')
        // this.timer = setInterval(this.startTimer, 1000)
        this.jindutiao = setInterval(this.increase, 1000)
        // console.log(this.$refs.MusicPlay.volume)

        // console.log(JSON.parse(localStorage.getItem('musicList')))
        // console.log(this.$store.state.huayuImg)
      } else {
        this.$refs.MusicPlay.pause()
        this.msg = 0
        this.musicImg[1].name = require('/src/assets/bofan6.png')
        // clearInterval(this.timer)
        clearInterval(this.jindutiao)
      }
      this.musicList = JSON.parse(localStorage.getItem('musicList'))
      console.log(this.musicList)
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
    },
    geci() {
      const { href } = this.$router.resolve({
        path: '/geci',
        query: {
          id: this.$store.state.huayuID,
          name: this.$store.state.huayuName,
          zhuanji: this.$store.state.musicXi.data.songs[0].al.name,
          geshouName: this.$store.state.musicXi.data.songs[0].ar[0].name,
          musicImg: this.$store.state.musicXi.data.songs[0].al.picUrl,
          musicUrl: this.$store.state.huayuUrl
        }
      })
      window.open(href, '_black')
    },
    // 列表
    listOver() {
      this.listImg[0].name = require('/src/assets/list1.png')
      this.ispCor = true
    },
    listOut() {
      this.listImg[0].name = require('/src/assets/list0.png')
      this.ispCor = false
    },
    qiehuan() {}
  },
  computed: {
    // 歌曲路径
    Url() {
      return this.$store.state.huayuUrl
    },
    huayuImg() {
      // 如果vuex里面没有就去缓存里面找
      // console.log('music', this.$store.state.huayuImg)
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
    },
    value3(newName) {
      this.$refs.MusicPlay.volume = parseFloat(newName / 100)
      // console.log(parseFloat(newName / 100))
    }
  },
  beforeMount() {
    // console.log(this.musicList[0])
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
  bottom: 0px;
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
  cursor: pointer;
}
.musicContent > .musicImg {
  width: 60px;
  height: 60px;
  background-color: red;
  cursor: pointer;
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
  margin-left: 70px;
  margin-top: 25px;
}
.musicContent > .musicDownload > img:first-child {
  margin-top: 35px;
  margin-left: 42px;
  float: left;
  cursor: pointer;
}
.musicContent > .musicDownload > img:first-child + a > img {
  margin-top: 35px;
  margin-right: 20px;
  float: right;
}
.musicContent > .list {
  width: 60px;
  height: 23px;
  float: right;
  cursor: pointer;
}
.musicContent > .list > p {
  margin-top: -20px;
  margin-left: 10px;
  color: #fff;
}
.musicContent > .list > .pCor {
  color: rgb(32, 185, 223);
}
.musicList {
  width: 480px;
  height: 412px;
  margin-top: -495px;
  margin-left: 950px;
  overflow: hidden;
  background-color: rgb(30, 28, 39);
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.musicList > .musicListTop {
  width: 450px;
  height: 50px;
  margin: 0 auto;
  overflow: hidden;
}
.musicList > .musicListTop > p {
  font-size: 16px;
  color: #ccc;
  text-align: left;
  margin-top: 15px;
}
.musicList > .musicListBtn {
  margin: 0 auto;
  overflow: hidden;
  /* background-color: pink; */
}
#musicListS {
  width: 450px;
  height: 360px;
  overflow-x: hidden;
  overflow-y: auto;
}
#musicListS > li {
  width: 450px;
  height: 40px;
  color: #ccc;
  cursor: pointer;
  text-align: left;
}
</style>
