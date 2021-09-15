import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import dashboard from '../views/dashboard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
