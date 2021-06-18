<template>
  <div class="footerGedan">
    <div class="gedanTop">
      <div class="gedanLeft">
        <div class="gedanLeftTop">
          <h3><b>精选</b>歌单</h3>
          <a href="">更多</a>
        </div>
        <div class="gedanLeftBot">
          <div
            class="gedanLeftBot1"
            @mouseover="gedanBgover1"
            @mouseout="gedanBgout1"
            :class="{ gedanBg1: isgedanBg == 1 }"
          >
            <img
              :src="this.imgUrl[0].img"
              alt=""
              width="325px"
              height="325px"
            />
            <div id="gedanLeftBot1B">
              <div class="gedanLeftBot1B">
                <p>乡村之旅：安静惬意·与自然同在</p>
                <p>蔓若</p>
              </div>
              <img :src="this.imgUrl[10].img" alt="" v-show="seen1 == 1" />
            </div>
          </div>
          <div class="gedanLeftBot2">
            <div class="gedanLeftBot2L">
              <div
                class="gedanLeftBot2LT"
                @mouseover="gedanBgover2"
                @mouseout="gedanBgout2"
                :class="{ gedanBg2: isgedanBg == 2 }"
              >
                <img
                  :src="this.imgUrl[1].img"
                  alt=""
                  width="160px"
                  height="160px"
                />
                <div id="gedanLeftBot1BT">
                  <div class="gedanLeftBot1BT">
                    <p>励志华语｜加班党的自我救赎</p>
                    <p>你的美</p>
                  </div>
                  <img :src="this.imgUrl[10].img" alt="" v-show="seen2" />
                </div>
              </div>
              <div
                class="gedanLeftBot2LB"
                @mouseover="gedanBgover3"
                @mouseout="gedanBgout3"
                :class="{ gedanBg3: isgedanBg == 3 }"
              >
                <img
                  :src="this.imgUrl[2].img"
                  alt=""
                  width="160px"
                  height="160px"
                />
                <div id="gedanLeftBot1BT">
                  <div class="gedanLeftBot1BT">
                    <p>【国创音乐精选】聆听穿越动漫世界</p>
                    <p>成功</p>
                  </div>
                  <img :src="this.imgUrl[10].img" alt="" v-show="seen3" />
                </div>
              </div>
            </div>
            <div class="gedanLeftBot2R">
              <div
                class="gedanLeftBot2RT"
                @mouseover="gedanBgover4"
                @mouseout="gedanBgout4"
                :class="{ gedanBg4: isgedanBg == 4 }"
              >
                <img
                  :src="this.imgUrl[3].img"
                  alt=""
                  width="160px"
                  height="160px"
                />
                <div id="gedanLeftBot1BT">
                  <div class="gedanLeftBot1BT">
                    <p>国风新歌：一品人间，录红尘万千</p>
                    <p>国风小编</p>
                  </div>
                  <img :src="this.imgUrl[10].img" alt="" v-show="seen4" />
                </div>
              </div>
              <div
                class="gedanLeftBot2RB"
                @mouseover="gedanBgover5"
                @mouseout="gedanBgout5"
                :class="{ gedanBg5: isgedanBg == 5 }"
              >
                <img
                  :src="this.imgUrl[4].img"
                  alt=""
                  width="160px"
                  height="160px"
                />
                <div id="gedanLeftBot1BT">
                  <div class="gedanLeftBot1BT">
                    <p>通勤路上不孤单！华语情歌来相伴</p>
                    <p>仙女散花</p>
                  </div>
                  <img :src="this.imgUrl[10].img" alt="" v-show="seen5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gedanRight">
        <div class="gedanRight1">
          <h3><b>热门</b>榜单</h3>
          <a href="">更多</a>
        </div>
        <div class="gedanRight2">
          <img :src="this.imgUrl[5].img" alt="" width="90px" height="90px" />
          <h5>酷狗飙升榜</h5>
          <ol>
            <li v-for="item in biaoS1" :key="item.id">{{ item.name }}</li>
          </ol>
          <img :src="this.imgUrl[9].img" alt="" />
        </div>
        <div class="gedanRight3">
          <img :src="this.imgUrl[6].img" alt="" width="90px" height="90px" />
          <h5>酷狗TOP500</h5>
          <ol>
            <li v-for="item in biaoS2" :key="item.id">{{ item.name }}</li>
          </ol>
          <img :src="this.imgUrl[9].img" alt="" />
        </div>
        <div class="gedanRight4">
          <img :src="this.imgUrl[7].img" alt="" width="90px" height="90px" />
          <h5>网络红歌榜</h5>
          <ol>
            <li v-for="item in biaoS3" :key="item.id">{{ item.name }}</li>
          </ol>
          <img :src="this.imgUrl[9].img" alt="" />
        </div>
      </div>
    </div>
    <div class="gedanBot">
      <img :src="this.imgUrl[8].img" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: [
        { img: require('/src/assets/20201207134716994336.jpg') },
        { img: require('/src/assets/20210613084804655840.jpg') },
        { img: require('/src/assets/20201029175832367762.jpg') },
        { img: require('/src/assets/20210616155438836313.jpg') },
        { img: require('/src/assets/20201206141703862350.jpg') },
        {
          img: require('/src/assets/04b10ec0bb3d8dfdc2b6cf0d30e0ebd3.jpg_240x240.jpg')
        },
        {
          img: require('/src/assets/bc23a80bf7a2e9179460ed2b6e384849.jpg_240x240.jpg')
        },
        {
          img: require('/src/assets/47e76f9757c6bbb670630b4671961759.jpg_240x240.jpg')
        },
        { img: require('/src/assets/a78fb55213f7a1eb4f1a11f3634cb8a7.jpg') },
        { img: require('/src/assets/jiantou.png') },
        { img: require('/src/assets/bofang1.png') }
      ],
      biaoS1: [
        { id: 0, name: '1.金池 - 我陪你熬过的苦' },
        { id: 1, name: '2.灼夭、戾格、小田音乐社 - 刺客' }
      ],
      biaoS2: [
        { id: 0, name: '1.王赫野 - 大风吹' },
        { id: 1, name: '2.王靖雯不胖 - 沦陷' }
      ],
      biaoS3: [
        { id: 0, name: '1.王赫野 - 大风吹' },
        { id: 1, name: '2.王靖雯不胖 - 沦陷' }
      ],
      seen1: 0,
      isgedanBg: 0
    }
  },
  methods: {
    gedanBgover1() {
      this.isgedanBg = 1
      this.seen1 = 1
    },
    gedanBgout1() {
      this.isgedanBg = 0
      this.seen1 = 0
    },
    gedanBgover2() {
      this.isgedanBg = 2
      this.seen2 = 2
    },
    gedanBgout2() {
      this.isgedanBg = 0
      this.seen2 = 0
    },
    gedanBgover3() {
      this.isgedanBg = 3
      this.seen3 = 3
    },
    gedanBgout3() {
      this.isgedanBg = 0
      this.seen3 = 0
    },
    gedanBgover4() {
      this.isgedanBg = 4
      this.seen4 = 4
    },
    gedanBgout4() {
      this.isgedanBg = 0
      this.seen4 = 0
    },
    gedanBgover5() {
      this.isgedanBg = 5
      this.seen5 = 5
    },
    gedanBgout5() {
      this.isgedanBg = 0
      this.seen5 = 0
    }
  }
}
</script>
<style>
.gedanLeftBot > .gedanBg1 {
  background-color: black;
  opacity: 0.8;
}
.gedanLeftBot2L > .gedanBg2 {
  background-color: black;
  opacity: 0.8;
}
.gedanLeftBot2L > .gedanBg3 {
  background-color: black;
  opacity: 0.8;
}
.gedanLeftBot2R > .gedanBg4 {
  background-color: black;
  opacity: 0.8;
}
.gedanLeftBot2R > .gedanBg5 {
  background-color: black;
  opacity: 0.8;
}
.footerGedan {
  width: 1000px;
  height: 520px;
  /* background-color: pink; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerGedan > .gedanTop {
  width: 1000px;
  height: 385px;
  margin-top: 30px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
}
.footerGedan > .gedanTop > .gedanLeft {
  width: 653px;
  height: 385px;
  /* background-color: burlywood; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerGedan > .gedanTop > .gedanLeft > .gedanLeftTop {
  width: 653px;
  height: 50px;
  /* background-color: pink; */
}
.footerGedan > .gedanTop > .gedanLeft > .gedanLeftTop a {
  color: #ccc;
  font-size: 12px;
  margin-top: 15px;
  float: right;
}
.footerGedan > .gedanTop > .gedanLeft > .gedanLeftTop h3 {
  color: #555;
  font-size: 30px;
  font-weight: 300;
  float: left;
  cursor: pointer;
}
.footerGedan > .gedanTop > .gedanLeft > .gedanLeftTop h3 b {
  color: #0c8ed9;
  font-weight: 300;
  cursor: pointer;
}
.footerGedan > .gedanTop > .gedanLeft > .gedanLeftBot {
  width: 653px;
  height: 325px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.footerGedan > .gedanTop > .gedanLeft > .gedanLeftBot > .gedanLeftBot1 {
  width: 325px;
  height: 325px;

  /* background-color: pink; */
}
.footerGedan > .gedanTop > .gedanLeft > .gedanLeftBot > .gedanLeftBot2 {
  width: 325px;
  height: 325px;
  /* background-color: olivedrab; */
  display: flex;
  justify-content: space-between;
}
.footerGedan
  > .gedanTop
  > .gedanLeft
  > .gedanLeftBot
  > .gedanLeftBot2
  > .gedanLeftBot2L {
  width: 160px;
  height: 325px;
  /* background-color: darkcyan; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerGedan
  > .gedanTop
  > .gedanLeft
  > .gedanLeftBot
  > .gedanLeftBot2
  > .gedanLeftBot2L
  > .gedanLeftBot2LT {
  width: 160px;
  height: 160px;
  /* background-color: pink; */
}
.footerGedan
  > .gedanTop
  > .gedanLeft
  > .gedanLeftBot
  > .gedanLeftBot2
  > .gedanLeftBot2L
  > .gedanLeftBot2LB {
  width: 160px;
  height: 160px;
  /* background-color: pink; */
}
.footerGedan
  > .gedanTop
  > .gedanLeft
  > .gedanLeftBot
  > .gedanLeftBot2
  > .gedanLeftBot2R {
  width: 160px;
  height: 325px;
  /* background-color: darkcyan; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerGedan
  > .gedanTop
  > .gedanLeft
  > .gedanLeftBot
  > .gedanLeftBot2
  > .gedanLeftBot2R
  > .gedanLeftBot2RT {
  width: 160px;
  height: 160px;
  /* background-color: pink; */
}
.footerGedan
  > .gedanTop
  > .gedanLeft
  > .gedanLeftBot
  > .gedanLeftBot2
  > .gedanLeftBot2R
  > .gedanLeftBot2RB {
  width: 160px;
  height: 160px;
  /* background-color: pink; */
}
.footerGedan > .gedanTop > .gedanRight {
  width: 321px;
  height: 385px;
  /* background-color: orchid; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerGedan > .gedanBot {
  width: 1000px;
  height: 80px;
  /* background-color: orange; */
}

.gedanRight1 {
  width: 321px;
  height: 90px;
}
.gedanRight2,
.gedanRight3,
.gedanRight4 {
  width: 321px;
  height: 90px;
  cursor: pointer;
  background-color: #f6f6f6;
}
.gedanRight1 a {
  color: #ccc;
  font-size: 12px;
  margin-top: 15px;
  float: right;
}
.gedanRight1 h3 {
  cursor: pointer;
  color: #555;
  font-size: 30px;
  font-weight: 300;
  float: left;
}
.gedanRight1 h3 b {
  color: #0c8ed9;
  font-weight: 300;
}
.gedanRight2 > ol {
  width: 200px;
  height: 50px;
  margin-top: 10px;
  margin-left: 50px;
}
.gedanRight2 > ol li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
.gedanRight2 > img:first-child {
  float: left;
}
.gedanRight2 > img:last-child {
  margin-top: -35px;
  float: right;
}
.gedanRight3 > ol {
  width: 200px;
  height: 50px;
  margin-top: 10px;
}
.gedanRight3 > ol li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
.gedanRight3 > img:first-child {
  float: left;
}
.gedanRight3 > img:last-child {
  margin-top: -35px;
  float: right;
}
.gedanRight4 > ol {
  width: 200px;
  height: 50px;
  margin-top: 10px;
}
.gedanRight4 > ol li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
.gedanRight4 > img:first-child {
  float: left;
}
.gedanRight4 > img:last-child {
  margin-top: -35px;
  float: right;
}
#gedanLeftBot1B {
  width: 325px;
  height: 50px;
  background-color: black;
  opacity: 0.5;
  margin-top: -54px;
}
#gedanLeftBot1B > img {
  float: right;
  margin-top: -45px;
  margin-right: 10px;
}
#gedanLeftBot1B > .gedanLeftBot1B {
  width: 270px;
  height: 50px;
}
#gedanLeftBot1B > .gedanLeftBot1B > p:first-child {
  color: white;
}
#gedanLeftBot1B > .gedanLeftBot1B > p:last-child {
  color: #ccc;
  float: left;
  margin-left: 20px;
}
#gedanLeftBot1BT {
  width: 160px;
  height: 50px;
  background-color: black;
  opacity: 0.5;
  margin-top: -54px;
}
#gedanLeftBot1BT > img {
  float: right;
  margin-top: -45px;
  margin-right: 10px;
}
#gedanLeftBot1BT > .gedanLeftBot1BT {
  width: 160px;
  height: 50px;
}
#gedanLeftBot1BT > .gedanLeftBot1BT > p:first-child {
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
#gedanLeftBot1BT > .gedanLeftBot1BT > p:last-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ccc;
  float: left;
  margin-left: 20px;
  font-size: 14px;
}
</style>
