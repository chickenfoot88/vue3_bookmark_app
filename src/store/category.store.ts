import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICategory } from '@/interfaces/category.interface'
import { API_ROUTES, http } from '@/api'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([])

  async function getCategories() {
    const { data } = await http.get<ICategory[]>(API_ROUTES.categories)
    categories.value = data
  }

  return { categories, getCategories }
})
