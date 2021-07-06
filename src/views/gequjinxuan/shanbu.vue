<template>
  <div class="shanbu">
    <ul>
      <li v-for="(item, index) in resultLm.slice(0, 9)" :key="index">
        <img
          :src="item.al.picUrl"
          alt=""
          width="71px"
          height="71px"
          @mouseover="msgOver(item.id)"
          @mouseout="msgOut()"
        />
        <img
          :src="img[1].name"
          v-show="msg == item.id"
          @mouseover="msgOver1(item.id)"
          @mouseout="msgOut1()"
        />
        <div class="shanbuN">
          <div class="number1">
            <span>{{ item.name }}</span>
            <span>{{ item.ar[0].name }}</span>
          </div>
          <div class="number2">
            <img :src="img[0].name" alt="" />
            <span>{{ parseInt(item.m.size / 1000) }}万</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: -1,
      isshanbuOt: false,
      isnumber1Cor: -1,
      isnumber2Cor: -1,
      resultLm: [],
      img: [
        { name: require('/src/assets/4.png') },
        { name: require('/src/assets/bofang1.png') }
      ]
    }
  },
  methods: {
    msgOver(index) {
      this.msg = index
    },
    msgOut() {
      this.msg = -1
    },
    msgOver1(index) {
      this.msg = index
      this.img[1].name = require('/src/assets/bofang2.png')
    },
    msgOut1() {
      this.img[1].name = require('/src/assets/bofang1.png')
    }
  },
  async beforeMount() {
    let result1 = await this.axios.get(
      'http://localhost:3000/top/playlist?cat=散步&order=hot'
    )
    let result2 = await this.axios.get(
      'http://localhost:3000/playlist/detail?id=' + result1.data.playlists[0].id
    )
    for (let i = 0; i < 9; i++) {
      // console.log(result2.data.privileges[i].id)
      let result3 = await this.axios.get(
        'http://localhost:3000/song/detail?ids=' + result2.data.privileges[i].id
      )
      // console.log(result3.data.songs[0])
      this.resultLm.push(result3.data.songs[0])
    }
    // console.log(this.resultLm)
  }
}
</script>
<style>
.shanbu {
  width: 1000px;
  height: 300px;
  display: flex;
  align-items: center;
}
.shanbu > ul li {
  width: 300px;
  height: 71px;
  margin: 0 0 21px 23px;
  float: left;
}
.shanbu > ul li > .shanbuN {
  width: 229px;
  height: 71px;
  cursor: pointer;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shanbu > ul li > .shanbuN > .number1 {
  width: 180px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shanbu > ul li > img:first-child {
  cursor: pointer;
  float: left;
}
.shanbu > ul li > img:first-child + img {
  margin-left: -55px;
  margin-top: 17px;
  cursor: pointer;
  float: left;
}
.shanbu > ul li > .shanbuN > .number1 > span:first-child {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.shanbu > ul li > .shanbuN > .number1 > span:first-child + span {
  font-size: 11px;
  color: #999;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shanbu > ul li > .shanbuN > .number2 {
  width: 60px;
  height: 18px;
}
.shanbu > ul li > .shanbuN > .number2 > span {
  color: #8d8d8d;
  font-size: 11px;
}
</style>
