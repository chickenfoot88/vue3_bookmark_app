import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IBookmark } from '@/interfaces/bookmark.interface'
import { API_ROUTES, http } from '@/api'
import type { ISortOption } from '@/interfaces/bookmark.sort.interface'
import { SORT_OPTIONS } from '@/constants'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([])
  const activeSort = ref<ISortOption['option']>(SORT_OPTIONS[0].option)

  async function getBookmarks(
    categoryId: number,
    sort: ISortOption['option'] = SORT_OPTIONS[0].option
  ) {
    const { data } = await http.get<IBookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort,
      },
    })
    bookmarks.value = data
  }

  async function deleteBookmark(id: number) {
    await http.delete<IBookmark[]>(API_ROUTES.bookmarks.delete(id))
    bookmarks.value = bookmarks.value.filter((bookmark) => bookmark.id !== id)
  }

  async function addBookmark(url: string, categoryId: number) {
    const { data } = await http.post<IBookmark>(API_ROUTES.bookmarks.create, {
      url,
      category_id: categoryId,
    })
    bookmarks.value.push(data)
  }

  return { bookmarks, getBookmarks, deleteBookmark, activeSort, addBookmark }
})
