<template>
  <div>
    <Header></Header>
    <HeaderForm></HeaderForm>
    <div class="mvList">
      <div class="mvListTop">
        <!-- 轮播图 -->
        <div class="mvListTopl" @mouseover="anmOver" @mouseout="anmOut">
          <ul ref="mvLi" :style="{ position: 'absolute', left: isleft }">
            <li v-for="item in runboMv" :key="item.id">
              <!-- 轮播图片 -->
              <img :src="item.mvImg" width="665px" height="325px" />
              <span class="mvName">
                <!-- mv名字 -->
                <span
                  :class="{ spanCor: isSpanCor == item.id }"
                  @mouseover="spanCorOver(item.id)"
                  @mouseout="spanCorOut()"
                  @click="bofanMv(item.mvId)"
                >
                  {{ item.name }}
                </span>
              </span>
            </li>
          </ul>
          <ul class="liLunbo">
            <li
              v-for="(item, index) in 5"
              :key="index"
              :class="{ liCor: index == indexList }"
              @mouseover="liLunboOver(index)"
            ></li>
          </ul>
        </div>
        <!-- 前10mv排名 -->
        <div class="mvListTopr">
          <div class="mvListToprt">
            <div class="p">
              <p>MV热度排行</p>
            </div>
            <div class="a">
              <a href="">更多</a>
            </div>
          </div>
          <div class="mvListToprb">
            <ul>
              <li
                v-for="item in mvPaih"
                :key="item.id"
                :class="{ limvPaih: islimvPaih == item.id }"
                @mouseover="limvPaihOver(item.id)"
                @mouseout="limvPaihOut()"
                @click="bofanPaih(item.mvId)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
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
      isleft: 0,
      index: 0,
      indexList: 0,
      islimvPaih: -1,
      isSpanCor: -1,
      runboMv: [
        {
          id: 0,
          mvId: 14260205,
          name: '薛之谦-彩券',
          mvImg:
            'http://p1.music.126.net/2W0p3OwRd5JLPsHHxzQLBQ==/109951165774418306.jpg'
        },
        {
          id: 1,
          mvId: 14214212,
          name: '久石譲-《崖上的波妞》中文版',
          mvImg:
            'http://p1.music.126.net/fGfDI7NWi4SsVSeoX5zWWQ==/109951165559112141.jpg'
        },
        {
          id: 2,
          mvId: 14276994,
          name: 'Melo-手术刀 Scalpel',
          mvImg:
            'http://p1.music.126.net/Y1ruXHVOLZoxDhflAdzojw==/109951165849915097.jpg'
        },
        {
          id: 3,
          mvId: 14215257,
          name: '苏婉-我们的罗曼史',
          mvImg:
            'http://p1.music.126.net/4_94IGzvAbm07_x_6oCjZg==/109951165559533061.jpg'
        },
        {
          id: 4,
          mvId: 10974182,
          name: '毕雯珺-欲控',
          mvImg:
            'http://p1.music.126.net/6AqD26CMFVXTJ2LrFD8zKQ==/109951165498552831.jpg'
        }
      ],
      mvPaih: [
        {
          id: 0,
          mvId: 14297776,
          name: '毛不易-海上日记'
        },
        {
          id: 1,
          mvId: 14299094,
          name: '茶理理-Moon Halo'
        },
        {
          id: 2,
          mvId: 14288274,
          name: '李玉刚-万疆'
        },
        {
          id: 3,
          mvId: 14295405,
          name: '任嘉伦-不说再见'
        },
        {
          id: 4,
          mvId: 14297814,
          name: 'Stake-爱情慢慢来'
        },
        {
          id: 5,
          mvId: 14298980,
          name: '岛屿心情-蝼蚁'
        },
        {
          id: 6,
          mvId: 14292547,
          name: '毛不易-城市傍晚'
        },
        {
          id: 7,
          mvId: 14296275,
          name: '徐佳莹-《最远的远方》'
        },
        {
          id: 8,
          mvId: 14295518,
          name: '网易云音乐-云村毕业路灯：24个乐评路灯写尽毕业故事'
        },
        {
          id: 9,
          mvId: 14297151,
          name: '88rising-California (Acoustic Live Version)'
        }
      ]
    }
  },
  components: {
    Header,
    HeaderForm
  },
  async beforeMount() {
    let musicMv = await this.axios.get('http://localhost:3000/top/mv?limit=10')
    console.log(musicMv)
  },
  mounted() {
    // 轮播图
    this.setInterval = setInterval(() => {
      this.index++
      this.indexList++
      if (this.index == 5) {
        this.index = 0
      }
      if (this.indexList >= 5) {
        this.indexList = 0
      }
      this.isleft = -665 * this.index
    }, 2500)
  },
  methods: {
    anmOver() {
      clearInterval(this.setInterval)
    },
    anmOut() {
      this.setInterval = setInterval(() => {
        this.index++
        this.indexList++
        if (this.index == 5) {
          this.index = 0
        }
        if (this.indexList >= 5) {
          this.indexList = 0
        }
        this.isleft = -665 * this.index
      }, 2500)
    },
    liLunboOver(index) {
      this.index = index
      this.isleft = -665 * index
      this.indexList = index
    },
    limvPaihOver(index) {
      this.islimvPaih = index
    },
    limvPaihOut() {
      this.islimvPaih = -1
    },
    spanCorOver(index) {
      this.isSpanCor = index
    },
    spanCorOut() {
      this.isSpanCor = -1
    },
    bofanMv(index) {
      const { href } = this.$router.resolve({
        path: '/MV',
        query: {
          id: index
        }
      })
      window.open(href, '_black')
    },
    bofanPaih(index) {
      const { href } = this.$router.resolve({
        path: '/MV',
        query: {
          id: index
        }
      })
      window.open(href, '_black')
    }
  }
}
</script>
<style>
.mvList > .mvListTop {
  width: 1000px;
  height: 325px;
  margin: 10px auto 0px;
  display: flex;
  justify-content: space-between;
}
/* 轮播图 */
.mvList > .mvListTop > .mvListTopl {
  width: 665px;
  height: 325px;
  overflow: hidden;
  position: relative;
}
.mvList > .mvListTop > .mvListTopl > ul {
  width: 3325px;
  height: 325px;
  transition: left 0.2s;
  cursor: pointer;
}
.mvList > .mvListTop > .mvListTopl > ul li {
  width: 665px;
  height: 325px;
  position: relative;
  float: left;
}
.mvList > .mvListTop > .mvListTopl > ul li > .mvName {
  width: 665px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
  position: absolute;
  z-index: 100;
  margin-top: -40px;
}

.mvList > .mvListTop > .mvListTopl > .liLunbo {
  margin-top: 300px;
  margin-left: 520px;
  position: absolute;
  z-index: 200;
}
.mvList > .mvListTop > .mvListTopl > .liLunbo li {
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 5px;
  float: left;
  margin-right: 15px;
  cursor: pointer;
}
.mvList > .mvListTop > .mvListTopl > .liLunbo > .liCor {
  background-color: rgb(29, 7, 143);
}
.mvList > .mvListTop > .mvListTopl ul li > .mvName span {
  color: #fff;
  font-size: 15px;
  display: block;
  text-align: left;
  margin: 7px 0 0 20px;
  cursor: pointer;
}
.mvList > .mvListTop > .mvListTopl ul li > .mvName .spanCor {
  color: orange;
}
/* mv排行 */
.mvList > .mvListTop > .mvListTopr {
  width: 318px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mvList > .mvListTop > .mvListTopr > .mvListToprt {
  width: 318px;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
.mvList > .mvListTop > .mvListTopr > .mvListToprt .p {
  width: 235px;
  height: 30px;
  color: #fff;
  background-color: orange;
  text-align: left;
}
.mvList > .mvListTop > .mvListTopr > .mvListToprt .p p {
  margin: 3px 0 0 10px;
}
.mvList > .mvListTop > .mvListTopr > .mvListToprt .a {
  width: 80px;
  height: 30px;
  background-color: rgb(63, 60, 60);
}
.mvList > .mvListTop > .mvListTopr > .mvListToprt .a a {
  color: #fff;
  line-height: 30px;
}
.mvList > .mvListTop > .mvListTopr > .mvListToprb {
  width: 318px;
  height: 290px;
  /* background-color: red; */
}
.mvList > .mvListTop > .mvListTopr > .mvListToprb > ul {
  width: 318px;
  height: 290px;
  background-color: rgb(63, 60, 60);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mvList > .mvListTop > .mvListTopr > .mvListToprb > ul li {
  width: 318px;
  height: 29px;
  color: #fff;
  text-align: left;
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.mvList > .mvListTop > .mvListTopr > .mvListToprb > ul .limvPaih {
  color: orange;
}
</style>
