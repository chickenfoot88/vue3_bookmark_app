import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IProfile } from '@/interfaces/profile.interface'
import { API_ROUTES } from '@/api'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>()

  async function getProfile() {
    const data = await fetch(API_ROUTES.profile)
    const result = (await data.json()) as IProfile
    profile.value = result
  }

  return { profile, getProfile }
})
