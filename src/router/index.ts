import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
const Home = () => import('@/views/Home.vue')
const Login = () => import('@/views/Login.vue')
const Column = () => import('@/components/Colum/ColumnDetail.vue')

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
    component: Login
  },
  {
    path: '/column/:id',
    name: 'column',
    component: Column
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
