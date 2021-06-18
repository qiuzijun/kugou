<template>
  <div class="rubo">
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in list3" :key="item.id">
          <img :src="item.img" alt="轮播图" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list3: [
        { id: 0, img: require('/src/assets/20200407114244160948.jpg') },
        { id: 1, img: require('/src/assets/20200406233800728240.jpg') },
        { id: 2, img: require('/src/assets/20210612181825242425.jpg') },
        { id: 3, img: require('/src/assets/20210612182031972219.jpg') },
        { id: 4, img: require('/src/assets/20210612190438492212.jpg') },
        { id: 5, img: require('/src/assets/20210612212552848073.jpg') }
      ]
    }
  }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
