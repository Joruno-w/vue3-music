import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('@/views/recommend')
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  },
  {
    path: '/singer',
    component: () => import('@/views/singer')
  },
  {
    path: '/top-list',
    component: () => import('@/views/top-list')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
