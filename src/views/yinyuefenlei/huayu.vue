<template>
  <div class="huayu">
    华语
  </div>
</template>
<script>
export default {
  data() {
    return {
      huayuGeDan: [],
      huayuID: [],
      huayuGeming: []
    }
  },
  created() {
    this.axios
      .get('http://localhost:3000/top/playlist?cat=华语&order=hot')
      .then(request => {
        console.log(request.data.playlists)
        for (let i = 0; i < request.data.playlists.length; i++) {
          console.log(request.data.playlists[i].id)
          this.huayuGeDan.push(request.data.playlists[i].id)
        }
      })
      .catch(error => {
        console.log(error)
      })
    console.log(this.huayuGeDan[0])

    // console.log(this.huayuGeDan)
    // for (var j = 0; j < this.huayuGeDan.length; j++) {
    //   console.log(this.huayuGeDan[j])
    // }
    this.axios
      .get('http://localhost:3000/playlist/detail?id=2900343697')
      .then(request => {
        console.log(request.data.privileges)
        var huayuID = request.data.privileges
        for (let i = 0; i < huayuID.length; i++) {
          // this.huayuID.push(huayuID[i].id)
          console.log(huayuID[i].id)
          this.axios
            .get('http://localhost:3000/song/detail?ids=' + huayuID[i].id)
            .then(request => {
              console.log(request.data.songs[0].name)
              this.huayuGeming.push(request.data.songs[0].name)
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
      .catch(error => {
        console.log(error)
      })
    console.log(this.huayuGeming[0])

    // this.axios
    //   .get('http://localhost:3000/playlist/detail?id=5172410111')
    //   .then(request => {
    //     console.log(request.data.privileges)
    //     var huayuID = request.data.privileges
    //     for (let i = 0; i < huayuID.length; i++) {
    //       console.log(huayuID[i].id)
    //       this.huayuID.push(huayuID[i].id)
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    // this.axios
    //   .get('http://localhost:3000/playlist/detail?id=6703233707')
    //   .then(request => {
    //     console.log(request.data.privileges)
    //     var huayuID = request.data.privileges
    //     for (let i = 0; i < 4; i++) {
    //       console.log(huayuID[i].id)
    //       this.huayuID.push(huayuID[i].id)
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // console.log(this.huayuID)
    // this.axios
    //   .get('http://localhost:3000/playlist/detail?id=6703233707')
    //   .then(request => {
    //     console.log(request.data.privileges)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // this.axios
    //   .get('http://localhost:3000/song/url?id=1855149638')
    //   .then(request => {
    //     console.log(request.data.data[0].url)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}
</script>
<style>
.huayu {
  width: 625px;
  height: 318px;
  background-color: orange;
}
</style>
