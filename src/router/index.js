import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Snq.vue')
  },
  {
    path: '/zdrw',
    name: 'zdrw',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Zdrw.vue')
  },
  {
    path: '/cydw',
    name: 'cydw',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Cydw.vue')
  },
  {
    path: '/snq',
    name: 'snq',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Snq.vue')
  },
  {
    path: '/snqmx',
    name: 'snqmx',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Snqmx.vue')
  },
  {
    path: '/happiness',
    name: 'happiness',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Happiness.vue')
  },
  {
    path: '/green',
    name: 'green',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Green.vue')
  },
  {
    path: '/beautiful',
    name: 'beautiful',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Beautiful.vue')
  },
  {
    path: '/hangpai',
    name: 'hangpai',
    component: () => import('../views/HangPai.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
