import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Watch from '../views/Watch.vue'
import Marketplace from '../views/Marketplace.vue'
import Groups from '../views/Groups.vue'
import Gaming from '../views/Gaming.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/gaming',
    name: 'Gaming',
    component: Gaming
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router