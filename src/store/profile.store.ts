import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IProfile } from '@/interfaces/profile.interface'
import { API_ROUTES, http } from '@/api'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>()

  async function getProfile() {
    const { data } = await http.get<IProfile>(API_ROUTES.auth.profile)
    profile.value = data
  }

  return { profile, getProfile }
})
