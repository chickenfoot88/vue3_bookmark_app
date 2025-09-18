import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IBookmark } from '@/interfaces/bookmark.interface'
import { API_ROUTES, http } from '@/api'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([])

  async function getBookmarks(categoryId: number) {
    const { data } = await http.get<IBookmark[]>(API_ROUTES.bookmarks.get(categoryId))
    bookmarks.value = data
  }

  async function deleteBookmark(id: number) {
    await http.delete<IBookmark[]>(API_ROUTES.bookmarks.delete(id))
    bookmarks.value = bookmarks.value.filter((bookmark) => bookmark.id !== id)
  }
  return { bookmarks, getBookmarks, deleteBookmark }
})
