<template>
  <div class="Home">
    <div class="homeNr">
      <div class="homeImg">
        <img
          src="https://staticssl.kugou.com/public/root/images/logo.png"
          alt=""
          width="153px"
          height="37px"
        />
      </div>
      <div class="homeText">
        <input type="text" class="homeInput" placeholder="毛不易 如梦所期" />
      </div>
      <div class="homeUl">
        <ul>
          <li
            v-for="item in list"
            :key="item.id"
            @mouseover="ColorOver(item.id)"
            @mouseout="ColorOut()"
            :class="{ Color: isColor == item.id }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div
        class="Login1"
        @click="Login1"
        @mouseover="borRover()"
        @mouseout="borRout()"
        :class="{ borR: isborR == 1 }"
      >
        登录
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { id: 0, name: '客服中心' },
        { id: 1, name: '招贤纳士' },
        { id: 2, name: '会员中心' },
        { id: 3, name: '商务合作' }
      ],
      isColor: -1,
      isborR: 0
    }
  },
  methods: {
    Login1() {
      this.$router.push({
        path: '/Login'
      })
    },
    ColorOver(index) {
      this.isColor = index
    },
    ColorOut() {
      this.isColor = -1
    },
    borRover() {
      this.isborR = 1
    },
    borRout() {
      this.isborR = 0
    }
  }
}
</script>
<style>
.Home {
  width: 1000px;
  height: 80px;
  margin: 0 auto;
  overflow: hidden;
  /* background-color: red; */
}
.homeNr {
  display: flex;
  justify-content: space-between;
}
.homeNr > .homeImg > img {
  margin-top: 22px;
  cursor: pointer;
}
.homeNr > .homeText {
  margin-left: -100px;
  margin-top: 20px;
}
.homeInput {
  width: 300px;
  height: 37px;
  border: 1px solid #ccc;
  margin-left: 100px;
  padding-left: 10px;
}
.homeUl {
  margin-top: 28px;
  margin-left: -20px;
}
.homeNr > ul {
  width: 480px;
  height: 20px;
}
.homeNr > .homeUl > ul > li {
  margin-left: 10px;
  color: #777;
  font-size: 15px;
  float: left;
  cursor: pointer;
}
.Login1 {
  width: 50px;
  height: 30px;
  color: white;
  border-radius: 2px;
  line-height: 27px;
  border: 1px solid #ccc;
  background-color: #169af3;
  margin-top: 25px;
  margin-right: 20px;
  cursor: pointer;
}
.homeNr > .homeUl > ul > .Color {
  color: #0c8ed9;
}
.homeNr > .borR {
  box-shadow: 0px 0px 4px 1px #ccc;
}
</style>
