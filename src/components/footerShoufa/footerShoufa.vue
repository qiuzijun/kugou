<template>
  <div class="footerShoufa">
    <div class="footerShoufaTop">
      <div class="footerShoufaTopL">
        <div class="footerShoufaTopLTop">
          <h3><b>新歌</b>首发</h3>
          <ul>
            <li
              v-for="item in listShoufa"
              :key="item.id"
              @mouseover="Shoufa(item.id)"
              :class="{ Color: msg == item.id }"
            >
              {{ item.name }}
            </li>
          </ul>
          <div
            class="ShoufaBofan"
            :class="{ pColor: isPColor }"
            @mouseover="bofan1"
            @mouseout="bofan2"
          >
            <img :src="imgUrl[0].img" alt="" />
            <p>全部播放</p>
          </div>
        </div>
        <div class="footerShoufaTopLBot">
          <huayu v-show="ShowFl == 0"></huayu>
          <oumei v-show="ShowFl == 1"></oumei>
          <liuxing v-show="ShowFl == 2"></liuxing>
          <riben v-show="ShowFl == 3"></riben>
        </div>
      </div>
      <div class="footerShoufaTopR">
        <div class="footerShoufaTopRTop">
          <h3><b>推荐</b>MV</h3>
          <a href="">更多</a>
        </div>
        <div
          class="footerShoufaTopRContent"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/20210612221811813300.png') + ')'
          }"
          @mouseover="cYimgovr1"
          @mouseout="cYimgovr2"
        >
          <img
            :src="imgUrl[1].img"
            alt=""
            width="40px"
            height="40px"
            v-show="cYimg1"
            @mouseover="cYimgH1"
            @mouseout="cYimgH2"
          />
          <div class="footerShoufaTopRContentBot">
            <p>我不在是从前</p>
            <p>陈雅森</p>
          </div>
        </div>
        <div class="footerShoufaTopRBot">
          <div
            class="footerShoufaTopRBotL"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/20210611161859875812.png') + ')',
              backgroundRepeat: 'no-repeat'
            }"
            @mouseover="cYimgovr3"
            @mouseout="cYimgovr4"
          >
            <p>Shockwave</p>
            <img
              :src="imgUrl[1].img"
              alt=""
              width="40px"
              height="40px"
              v-show="cYimg2"
              @mouseover="cYimgH3"
              @mouseout="cYimgH4"
            />
            <p>Marshmello</p>
          </div>
          <div
            class="footerShoufaTopRBotR"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/20210611094651504326.png') + ')',
              backgroundRepeat: 'no-repeat'
            }"
            @mouseover="cYimgovr5"
            @mouseout="cYimgovr6"
          >
            <p>斗罗大陆-凤凰火</p>
            <img
              :src="imgUrl[1].img"
              alt=""
              width="40px"
              height="40px"
              v-show="cYimg3"
              @mouseover="cYimgH5"
              @mouseout="cYimgH6"
            />
            <p>胡夏</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footerShoufaBot"
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/a78fb55213f7a1eb4f1a11f3634cb8a7.jpg') +
          ')',
        backgroundRepeat: 'no-repeat'
      }"
    ></div>
  </div>
</template>
<script>
import huayu from '/src/views/yinyuefenlei/huayu'
import oumei from '/src/views/yinyuefenlei/oumei'
import liuxing from '/src/views/yinyuefenlei/liuxing'
import riben from '/src/views/yinyuefenlei/riben'
export default {
  data() {
    return {
      ShowFl: 0,
      msg: 0,
      isPColor: false,
      cYimg1: false,
      cYimg2: false,
      cYimg3: false,
      listShoufa: [
        { id: 0, name: '华语' },
        { id: 1, name: '欧美' },
        { id: 2, name: '流行' },
        { id: 3, name: '日本' }
      ],
      imgUrl: [
        { id: 0, img: require('/src/assets/bofan1.png') },
        { id: 1, img: require('/src/assets/bofang1.png') },
        { id: 2, img: require('/src/assets/bofang2.png') }
      ]
    }
  },
  components: {
    huayu: huayu,
    oumei: oumei,
    liuxing: liuxing,
    riben: riben
  },
  methods: {
    Shoufa(index) {
      this.ShowFl = index
      this.msg = index
    },
    bofan1() {
      this.isPColor = true
      this.imgUrl[0].img = require('/src/assets/bofan2.png')
    },
    bofan2() {
      this.isPColor = false
      this.imgUrl[0].img = require('/src/assets/bofan1.png')
    },
    cYimgovr1() {
      this.cYimg1 = true
    },
    cYimgovr2() {
      this.cYimg1 = false
    },
    cYimgovr3() {
      this.cYimg2 = true
    },
    cYimgovr4() {
      this.cYimg2 = false
    },
    cYimgovr5() {
      this.cYimg3 = true
    },
    cYimgovr6() {
      this.cYimg3 = false
    },
    cYimgH1() {
      this.imgUrl[1].img = require('/src/assets/bofang2.png')
    },
    cYimgH2() {
      this.imgUrl[1].img = require('/src/assets/bofang1.png')
    },
    cYimgH3() {
      this.imgUrl[1].img = require('/src/assets/bofang2.png')
    },
    cYimgH4() {
      this.imgUrl[1].img = require('/src/assets/bofang1.png')
    },
    cYimgH5() {
      this.imgUrl[1].img = require('/src/assets/bofang2.png')
    },
    cYimgH6() {
      this.imgUrl[1].img = require('/src/assets/bofang1.png')
    }
  }
}
</script>
<style>
.footerShoufa {
  width: 1000px;
  height: 520px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footerShoufaTop {
  width: 1000px;
  height: 368px;
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footerShoufaTop > .footerShoufaTopL {
  width: 625px;
  height: 368px;
  /* background-color: red; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop {
  width: 625px;
  height: 50px;
  /* background-color: pink; */
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > h3 {
  color: #555;
  font-size: 30px;
  font-weight: 300;
  float: left;
  cursor: pointer;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > h3 b {
  color: #0c8ed9;
  font-weight: 300;
  cursor: pointer;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > ul {
  width: 200px;
  height: 20px;
  margin-left: 150px;
  margin-top: 12px;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > ul li {
  float: left;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > ul > .Color {
  color: #0c8ed9;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > .ShoufaBofan {
  width: 91px;
  height: 31px;
  border: 1px solid #dbdbdb;
  margin-top: -28px;
  font-size: 13px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  float: right;
  cursor: pointer;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > .pColor {
  border: 1px solid #0c8ed9;
}

.footerShoufaTop
  > .footerShoufaTopL
  > .footerShoufaTopLTop
  > .ShoufaBofan
  > img {
  margin-left: 10px;
}

.footerShoufaTop > .footerShoufaTopL > .footerShoufaTopLTop > .ShoufaBofan > p {
  margin-right: 10px;
}

.footerShoufaTop > .footerShoufaTopR {
  width: 320px;
  height: 368px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footerShoufaTop > .footerShoufaTopR > .footerShoufaTopRTop {
  width: 320px;
  height: 50px;
  /* background-color: orchid; */
}

.footerShoufaTop > .footerShoufaTopR > .footerShoufaTopRTop > h3 {
  color: #555;
  font-size: 35px;
  font-weight: 300;
  float: left;
  cursor: pointer;
}

.footerShoufaTop > .footerShoufaTopR > .footerShoufaTopRTop > h3 b {
  color: #0c8ed9;
  font-weight: 300;
  font-size: 30px;
  float: left;
  cursor: pointer;
}

.footerShoufaTop > .footerShoufaTopR > .footerShoufaTopRTop > a {
  color: #ccc;
  font-size: 12px;
  margin-top: 15px;
  float: right;
}

.footerShoufaTop > .footerShoufaTopR > .footerShoufaTopRContent {
  width: 320px;
  height: 176px;
  cursor: pointer;
  /* background-color: rgba(0, 0, 0, 0.5); */
}

.footerShoufaTop > .footerShoufaTopR > .footerShoufaTopRContent > img {
  margin-top: 20%;
  margin-left: 40%;
  float: left;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRContent
  > .footerShoufaTopRContentBot {
  width: 320px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 126px;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRContent
  > .footerShoufaTopRContentBot
  > p:first-child {
  width: 100px;
  height: 21px;
  color: white;
  /* margin-left: -180px; */
  margin-top: 20px;
  margin-left: 20px;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRContent
  > .footerShoufaTopRContentBot
  > p:last-child {
  width: 50px;
  height: 21px;
  color: #ccc;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 20px;
}

.footerShoufaTop > .footerShoufaTopR > .footerShoufaTopRBot {
  width: 320px;
  height: 132px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  /* background-color: orchid; */
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotL {
  width: 156px;
  height: 130px;
  cursor: pointer;
  /* background-color: orchid; */
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotL
  > img {
  margin-top: -58%;
  margin-left: 40%;
  float: left;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotL
  p:first-child {
  color: black;
  width: 100px;
  margin-top: 95px;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotL
  p:last-child {
  color: #ccc;
  width: 100px;
  font-size: 15px;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotR {
  width: 156px;
  height: 130px;
  cursor: pointer;
  /* background-color: orchid; */
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotR
  > img {
  margin-top: -58%;
  margin-left: 40%;
  float: left;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotR
  p:first-child {
  color: black;
  width: 156px;
  margin-top: 90px;
  margin-left: -20px;
}

.footerShoufaTop
  > .footerShoufaTopR
  > .footerShoufaTopRBot
  > .footerShoufaTopRBotR
  p:last-child {
  color: #ccc;
  width: 80px;
  margin-left: -20px;
}

.footerShoufaBot {
  width: 1000px;
  height: 80px;
  background-color: orange;
}
</style>
