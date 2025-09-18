import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { useAuthStore } from '@/store/auth.store'

export const API_BASE = 'http://localhost:3000/api'
export const API_ROUTES = {
  profile: '/profile',
  categories: '/categories',
  auth: {
    login: '/auth/login',
    profile: '/auth/profile',
  },
  bookmarks: {
    get: (id: number) => `/categories/${id}/bookmarks`,
    delete: (id: number) => `/bookmarks/${id}`,
    create: `bookmarks`,
  },
}

export const http: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
})

export function setAxiosInterceptors() {
  const authStore = useAuthStore()

  http.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${authStore.getToken}`
    return config
  })
}
