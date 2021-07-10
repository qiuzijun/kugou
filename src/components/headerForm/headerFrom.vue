<template>
  <div class="headerFrom">
    <div class="headerContent">
      <div class="headerLeft">
        <ul>
          <a :href="url" target="_blank">
            <li
              v-for="item in list1"
              :key="item.id"
              @mouseover="listover(item.id)"
              @mouseout="listout"
              @click="bangdan(item.id)"
              :class="{ backColor: item.id == current }"
            >
              {{ item.name }}
            </li>
          </a>
        </ul>
        <el-dropdown class="el-dropdown">
          <span
            class="el-dropdown-link"
            @mouseover="elLinkOver"
            @mouseout="elLinkOut"
            :class="{ elLinkColor: isElLinkColor }"
          >
            更多<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>电台</el-dropdown-item>
            <el-dropdown-item
              ><a href="http://localhost:8080/#/mvList" target="_black"
                >MV</a
              ></el-dropdown-item
            >
            <el-dropdown-item>歌单</el-dropdown-item>
            <el-dropdown-item>歌手</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="headerRight">
        <ul>
          <li
            v-for="item in list2"
            :key="item.id"
            @mouseover="listTover(item.id)"
            @mouseout="listTout(item.id)"
            :class="{ Color: item.id == msg }"
          >
            <img :src="item.img" alt="" />
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 0,
      list1: [
        { id: 0, name: '首页' },
        { id: 1, name: '榜单' },
        { id: 2, name: '下载酷狗' },
        { id: 3, name: '听歌识曲' }
      ],
      lsitUrl: [
        { id: 0, name: '' },
        { id: 1, name: 'http://localhost:8080/#/bangdan' },
        { id: 2, name: '' },
        { id: 3, name: '' }
      ],
      list2: [
        { id: 0, img: require('/src/assets/2.png'), name: '直播' },
        { id: 1, img: require('/src/assets/6.png'), name: '商城' },
        { id: 2, img: require('/src/assets/4.png'), name: '音乐人' },
        { id: 3, img: require('/src/assets/12.png'), name: '代理商' },
        { id: 4, img: require('/src/assets/8.png'), name: '主播电台' },
        { id: 5, img: require('/src/assets/10.png'), name: '开放平台' }
      ],
      current: -1,
      msg: -1,
      isElLinkColor: false
    }
  },
  methods: {
    listover(index) {
      this.current = index
      switch (index) {
        case (index = 1):
          this.url = this.lsitUrl[1].name
          break

        default:
          break
      }
    },
    listout() {
      this.current = -1
    },
    elLinkOver() {
      this.isElLinkColor = true
    },
    elLinkOut() {
      this.isElLinkColor = false
    },
    listTover(index) {
      this.msg = index
      switch (index) {
        case (index = 0):
          this.list2[0].img = require('/src/assets/' + 1 + '.png')
          break
        case (index = 1):
          this.list2[1].img = require('/src/assets/' + 5 + '.png')
          break
        case (index = 2):
          this.list2[2].img = require('/src/assets/' + 3 + '.png')
          break
        case (index = 3):
          this.list2[3].img = require('/src/assets/' + 11 + '.png')
          break
        case (index = 4):
          this.list2[4].img = require('/src/assets/' + 7 + '.png')
          break
        case (index = 5):
          this.list2[5].img = require('/src/assets/' + 9 + '.png')
          break

        default:
          break
      }
    },
    listTout(index) {
      this.msg = -1
      switch (index) {
        case (index = 0):
          this.list2[0].img = require('/src/assets/' + 2 + '.png')
          break
        case (index = 1):
          this.list2[1].img = require('/src/assets/' + 6 + '.png')
          break
        case (index = 2):
          this.list2[2].img = require('/src/assets/' + 4 + '.png')
          break
        case (index = 3):
          this.list2[3].img = require('/src/assets/' + 12 + '.png')
          break
        case (index = 4):
          this.list2[4].img = require('/src/assets/' + 8 + '.png')
          break
        case (index = 5):
          this.list2[5].img = require('/src/assets/' + 10 + '.png')
          break

        default:
          break
      }
    },
    bangdan(index) {
      switch (index) {
        case (index = 0):
          this.$router.push({
            path: '/Home'
          })
          break
        case (index = 1):
          break
        case (index = 2):
          break
        case (index = 3):
          break
        case (index = 4):
          break
        case (index = 5):
          break

        default:
          break
      }
    }
  }
}
</script>
<style>
.headerFrom {
  width: 100%;
  height: 54px;
  background-color: #2c323b;
}
.headerContent {
  width: 1000px;
  /* background-color: red; */
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}
.headerContent > .headerLeft {
  width: 500px;
  /* background-color: orange; */
}
.headerContent > .headerLeft > ul > a > li {
  padding: 16.5px 20px 16.5px 20px;
  float: left;
  color: white;
  cursor: pointer;
  /* background-color: #0c8ed9; */
}
.el-dropdown {
  margin-top: 19px;
}
.el-dropdown-link {
  padding: 21px 50px 16.5px 51px;
  /* background-color: #0c8ed9; */
  cursor: pointer;
}
.headerContent > .headerRight {
  width: 500px;
  /* background-color: pink; */
}
.backColor,
.elLinkColor {
  background-color: #0c8ed9;
}
.headerRight > ul {
  width: 500px;
  margin-top: 20px;
  margin-left: 70px;
}
.headerRight > ul > li {
  float: left;
  margin-left: 15px;
  color: #ccc;
  font-size: 12px;
  cursor: pointer;
}
.headerRight > ul > .Color {
  color: #0c8ed9;
}
</style>
