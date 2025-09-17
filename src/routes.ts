import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import { useAuthStore } from './store/auth.store'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: import('@/views/NotFoundView.vue'),
      name: 'notFound',
    },
    {
      path: '/',
      component: AuthView,
      name: 'auth',
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

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.getToken && to.name !== 'auth') {
    return { name: 'auth' }
  }

  if (authStore.getToken && to.name == 'auth') {
    return { name: 'main' }
  }
})
