import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
import animated from 'animate.css'
import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(HappyScroll)
Vue.use(animated)

Vue.config.silent = true
Vue.config.productionTip = true
Vue.prototype.axios = axios
// axios.defaults.baseURL = '/api'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
