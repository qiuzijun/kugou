import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    huayuID: '',
    huayuUrl: '',
    huayuImg: '',
    huayuName: '',
    huayuTime: '',
    huayuDt: '',
    huayu: '',
    huayuTe: "",
    // 播放列表
    musicXi: ''
  },
  // 都在music组件里
  mutations: {
    setID(state, payload) {
      state.huayuID = payload
      //这里打印下看下是否有接收到,
      // console.log(state.huayuID);
    },
    setUrl(state, payload) {
      // 歌曲地址
      state.huayuUrl = payload

    },
    setImg(state, payload) {
      // 歌曲图片
      state.huayuImg = payload

    },
    setName(state, payload) {
      // 歌曲名字
      state.huayuName = payload

    },
    setTime(state, payload) {
      // 歌曲时间
      state.huayuTime = payload

    },
    setDt(state, payload) {
      // 歌曲播放实时时间
      state.huayuDt = payload

    },
    sethuayu(state, payload) {
      // 歌曲总毫秒数
      state.huayu = payload


    },
    sethuayuTime(state, payload) {
      // 歌曲实时秒数
      state.huayuTe = payload
      // console.log(state.huayuTe)

    },
    setmusicList(state, payload) {
      // localStorage.setItem('musicList', JSON.stringify(state.musicList))
      state.musicXi = payload
      console.log(state.musicXi)
      // console.log(localStorage.getItem('musicList'))
    }
  },
  actions: {

  },
  modules: {}
})
