import Vue from 'vue'
import VueRouter from 'vue-router'
//一级路由
import Index from '../views/Index'
import Classification from '../views/Classification'
import Detail from '../views/Detail'
import Search from '../views/Search'
import Login from '../views/Login'
import Protocol from '../views/static/Protocol'
import Privacy from '../views/static/Privacy'
import Favorite from '../views/Favorite'

//二级路由
import Cart from '../views/Index/Cart'
import Shopping from '../views/Index/Shopping'
import User from '../views/Index/User'

//三级路由

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        redirect: '/shopping'
      },
      {
        path: '/shopping',
        name: 'Shopping',
        component: Shopping,
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: '/user',
        name: 'User',
        component: User,
      },

    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/classification',
    name: 'Classification',
    component: Classification
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/detail',
    name: 'Search',
    component: Search

  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy

  },
  {
    path: '/protocol',
    name: 'Protocol',
    component: Protocol

  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
