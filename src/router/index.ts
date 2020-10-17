import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/store'

// 导入组件
const Home = () => import('@/views/Home.vue')
const Login = () => import('@/views/Login.vue')
const Column = () => import('@/components/Colum/ColumnDetail.vue')
const Create = () => import('@/views/CreatePost.vue')

const routerHistory = createWebHistory()

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { redirectAlreadyLogin: true }
  },
  {
    path: '/column/:id',
    name: 'column',
    component: Column
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
    meta: { requiredLogin: true }// 需要登陆
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) { // 验证登陆 如果没有登陆
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) { // 登陆后跳转首页
    next('/')
  } else {
    next()
  }
})

export default router
