<template>
  <div class="huayu">
    <ul>
      <li v-for="item in huayuGeDan" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      huayuGeDan: [],
      huayuID: [{ id: 0, name: '哈哈' }],
      huayuGeming: []
    }
  },
  async created() {
    let result = await this.axios.get(
      'http://localhost:3000/top/playlist?cat=华语&order=hot'
    ) // console.log(request.data.playlists) // 遍历出歌单id
    for (let i = 0; i < 3; i++) {
      // 用遍历出的id请求歌曲id
      let res = await this.axios.get(
        'http://localhost:3000/playlist/detail?id=' +
          result.data.playlists[i].id
      )
      var huayuID = res.data.privileges
      for (let i = 0; i < huayuID.length; i++) {
        // console.log(huayuID[i].id)
        // 用歌曲id请求歌曲信息
        let detailRes = await this.axios.get(
          'http://localhost:3000/song/detail?ids=' + huayuID[i].id
        )
        // console.log(detailRes)
        // 请求出的歌曲信息push进husyuGeDan数组
        this.huayuGeDan.push(detailRes.data.songs[0])
      }
    } // 将husyuGeDan赋值给huayuGeDan数组
    console.log(this.huayuGeDan)
  }
}
</script>
<style>
.huayu {
  width: 625px;
  height: 318px;
  background-color: orange;
}
.huayu li {
  color: red;
}
</style>
