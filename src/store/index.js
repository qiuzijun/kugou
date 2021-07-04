import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    huayu: ''
  },
  mutations: {
    setData(state, payload) {
      state.huayu = payload
      //这里打印下看下是否有接收到,
      console.log(state.huayu);
    }
  },
  actions: {

  },
  modules: {}
})
