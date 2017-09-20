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
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const authUser = JSON.parse(window.localStorage.getItem('authUser'))
      if (authUser && authUser.access_token) {
        next({name: 'home'})
      } else {
        next()
      }
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAtuh: true }
  },
  {
    path: '/list1',
    name: 'list1',
    component: List1,
    meta: { requiresAtuh: true }
  },
  {
    path: '/list2',
    name: 'list2',
    component: List2,
    meta: { requiresAtuh: true }
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
