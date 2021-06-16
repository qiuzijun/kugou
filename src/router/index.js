import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import register from '../views/register.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Login
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/register',
    component: register
  }

]

const router = new VueRouter({
  routes
})

export default router
