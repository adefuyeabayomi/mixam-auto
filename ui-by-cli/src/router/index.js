import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path : '/explore',
    name : 'explore',
    component : () => import ('../views/explore.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
