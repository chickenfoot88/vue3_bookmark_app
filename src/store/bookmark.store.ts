import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IBookmark } from '@/interfaces/bookmark.interface'
import { API_ROUTES, http } from '@/api'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([])

  async function getBookmarks(categoryId: number) {
    const { data } = await http.get<IBookmark[]>(API_ROUTES.bookmarks(categoryId))
    bookmarks.value = data
  }

  return { bookmarks, getBookmarks }
})
