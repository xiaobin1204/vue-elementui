import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import Login from '@/pages/LoginPage'
import List1 from '@/pages/List1Page'
import List2 from '@/pages/List2Page'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list1',
    name: 'list1',
    component: List1
  },
  {
    path: '/list2',
    name: 'list2',
    component: List2
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }
]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
