import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: AuthView,
    },
    {
      path: '/main',
      component: () => import('@/views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/IndexView.vue'),
          name: 'main',
        },
        {
          path: ':alias',
          component: () => import('@/views/CategoryView.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
})
