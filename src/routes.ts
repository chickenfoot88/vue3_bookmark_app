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
      name: 'main',
      component: () => import('@/views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/MainView.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
})
