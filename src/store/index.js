import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    huayuID: '',
    huayuUrl: [],
    huayuImg: [],
    huayuName: '',
    huayuTime: '',
    huayuDt: '',
    huayu: '',
    huayuTe: ""
  },
  mutations: {
    setID(state, payload) {
      state.huayuID = payload
      //这里打印下看下是否有接收到,
      // console.log(state.huayuID);
    },
    setUrl(state, payload) {
      state.huayuUrl.push(payload)
    },
    setImg(state, payload) {
      state.huayuImg.push(payload)
    },
    setName(state, payload) {
      state.huayuName = payload
    },
    setTime(state, payload) {
      state.huayuTime = payload
    },
    setDt(state, payload) {
      state.huayuDt = payload
    },
    sethuayu(state, payload) {
      state.huayu = payload
    },
    sethuayuTime(state, payload) {
      state.huayuTe = payload
    }
  },
  actions: {

  },
  modules: {}
})
