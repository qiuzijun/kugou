<template>
  <div id="ribenTj">
    <ul>
      <li v-for="item in ribenTjmv" :key="item.id">
        <img
          :src="item.cover"
          :alt="item.name"
          :title="item.name"
          width="140px"
          height="78px"
          @mouseover="ribenTjmvOver(item.id)"
          @mouseout="ribenTjmvOut()"
        />
        <img
          :src="bofanTj[0].name"
          @mouseover="bofanTjOver(item.id)"
          @mouseout="bofanTjOut()"
          v-show="imgBo == item.id"
          @click="bofanMv(item.id)"
        />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgBo: -1,
      ribenTjmv: [],
      bofanTj: [{ id: 0, name: require('/src/assets/bofang1.png') }]
    }
  },
  async beforeMount() {
    let type = await this.axios.get(
      'http://localhost:3000/mv/first?limit=20&area=日本'
    )
    console.log(type)
    for (let i = 0; i < type.data.data.length; i++) {
      this.ribenTjmv.push(type.data.data[i])
    }
    // console.log(this.ribenTjmv[0])
  },
  methods: {
    bofanTjOver(index) {
      this.imgBo = index
      this.bofanTj[0].name = require('/src/assets/bofang2.png')
    },
    bofanTjOut() {
      this.bofanTj[0].name = require('/src/assets/bofang1.png')
    },
    ribenTjmvOver(index) {
      this.imgBo = index
    },
    ribenTjmvOut() {
      this.imgBo = -1
    },
    bofanMv(index) {
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
#ribenTj {
  width: 780px;
  height: 520px;
}
#ribenTj > ul > li {
  width: 140px;
  height: 110px;
  margin: 0 16px 10px 0;
  float: left;
}
#ribenTj > ul > li > img {
  border-radius: 7px;
  cursor: pointer;
}
#ribenTj > ul > li > img:first-child + img {
  position: relative;
  z-index: 100;
  margin-top: -55px;
}
#ribenTj > ul > li > span {
  color: #555;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
  width: 124px;
  margin: 5px 0 0 3px;
  text-align: left;
  font-size: 12px;
  font-family: '微软雅黑', Arial, Helvetica, sans-serif;
  font-size: 14px;
}
</style>
