import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    huayuID: '',
    huayuUrl: [],
    huayuImg: '',
    huayuName: '',
    huayuTime: '',
    huayuDt: '',
    huayu: '',
    huayuTe: "",
    // 要不你这样？
    // 点击播放修改对象里的值，同时在把这个music对象放进localStorage里面
    music: {
      huayuID: '',
      huayuUrl: "",
      huayuImg: '',
      huayuName: '',
      huayuTime: '',
      huayuDt: '',
      huayu: '',
      huayuTe: "",
    },
    // 播放列表，这个也一样
    musicList: [{
      huayuID: '',
      huayuUrl: "",
      huayuImg: '',
      huayuName: '',
      huayuTime: '',
      huayuDt: '',
      huayu: '',
      huayuTe: "",
    }, ]
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
      state.huayuUrl.push(payload)
      state.music.huayuUrl = payload;
      // localStorage.setItem("music", JSON.stringify(state.music));
      // localStorage.setItem(5, JSON.stringify(payload))
    },
    setImg(state, payload) {
      // 歌曲图片
      state.huayuImg = payload
      console.log(payload);
      localStorage.setItem(1, JSON.stringify(payload))
    },
    setName(state, payload) {
      // 歌曲名字
      state.huayuName = payload
      state.music.huayuName = payload;
      // localStorage.setItem("music", JSON.stringify(state.music));
      // localStorage.setItem(2, JSON.stringify(payload))
    },
    setTime(state, payload) {
      // 歌曲时间
      state.huayuTime = payload
      localStorage.setItem(3, JSON.stringify(payload))
    },
    setDt(state, payload) {
      // 歌曲播放实时时间
      state.huayuDt = payload
      localStorage.setItem(4, JSON.stringify(payload))
    },
    sethuayu(state, payload) {
      // 歌曲总毫秒数
      state.huayu = payload

    },
    sethuayuTime(state, payload) {
      // 歌曲实时秒数
      state.huayuTe = payload

    }
  },
  actions: {

  },
  modules: {}
})
