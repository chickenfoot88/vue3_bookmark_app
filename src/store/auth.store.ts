import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_ROUTES, http } from '@/api'
import type { ILoginResponse } from '@/interfaces/auth.interface'
import { setAxiosInterceptors } from '@/api'

const TOKEN_STORE_KEY = 'token-store'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()
  const storedToken = localStorage.getItem(TOKEN_STORE_KEY)

  if (storedToken) {
    token.value = storedToken
  }

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken)
  }

  function clearToken() {
    token.value = ''
    localStorage.removeItem(TOKEN_STORE_KEY)
    setAxiosInterceptors()
  }

  const getToken = computed(() => token.value)

  async function login(email: string, password: string) {
    const { data } = await http.post<ILoginResponse>(API_ROUTES.auth.login, {
      email,
      password,
    })
    setToken(data.token)
  }

  return { getToken, login, clearToken }
})
