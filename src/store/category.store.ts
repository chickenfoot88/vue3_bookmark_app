import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICategory } from '@/interfaces/category.interface'
import { API_ROUTES, http } from '@/api'
import { v4 as uuidv4 } from 'uuid'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([])

  async function getCategories() {
    const { data } = await http.get<ICategory[]>(API_ROUTES.categories)
    categories.value = data
  }

  async function createCategory() {
    const { data } = await http.post<ICategory>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })
    categories.value.push(data)
  }

  async function updateCategory(name: string, alias: string, id: number) {
    await http.put<ICategory>(`${API_ROUTES.categories}/${id}`, {
      name,
      alias,
    })

    const editedCategory = categories.value.find((category) => category.id === id)
    if (editedCategory) editedCategory.name = name
  }

  async function deleteCategory(id: number) {
    await http.delete(`${API_ROUTES.categories}/${id}`)
    categories.value = categories.value.filter((category) => category.id !== id)
  }

  function getCategoryByAlias(alias: string | string[]): ICategory | undefined {
    if (typeof alias === 'string') {
      return categories.value.find((category) => category.alias === alias)
    }

    return
  }

  return {
    categories,
    getCategories,
    createCategory,
    updateCategory,
    getCategoryByAlias,
    deleteCategory,
  }
})
