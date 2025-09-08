import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IProfile } from '@/interfaces/profile.interface'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>()
  return { profile }
})
