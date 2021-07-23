import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import register from '../views/register.vue'
import Home from '../Home.vue'
import BangDan from '../views/bangdan/bangdan.vue'
import footerDedan from '../components/footerGedan/footerGedan.vue'
import geci from '../views/geci/geci.vue'
import MV from '../views/MV/mv.vue'
import mvList from '../views/mvList/mvList.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/bangdan',
    component: BangDan
  },
  {
    path: '/footerDedan',
    component: footerDedan
  },
  {
    path: '/geci',
    component: geci
  },
  {
    path: '/MV',
    component: MV
  },
  {
    path: '/mvList',
    component: mvList
  },

]

const router = new VueRouter({
  routes
})

export default router
