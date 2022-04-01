import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/user/index.vue')
    }
  ]
})
