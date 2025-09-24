<template>
  <CategoryHeader v-if="category" :category />
  <BookmarkSort :activeSort="bookmarkStore.activeSort" @sort="sortBookmarks"></BookmarkSort>
  <div class="bookmark-list">
    <BookmarkCard
      v-for="bookmark in bookmarkStore.bookmarks"
      v-bind="bookmark"
      :key="bookmark.id"
    />
    <BookmarkAdd v-if="category" :categoryId="category.id" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/store/category.store'
import { watch } from 'vue'
import type { ICategory } from '@/interfaces/category.interface'
import CategoryHeader from '@/components/CategoryHeader.vue'
import BookmarkCard from '@/components/BookmarkCard.vue'
import { useBookmarkStore } from '@/store/bookmark.store'
import BookmarkSort from '@/components/BookmarkSort.vue'
import type { ISortOption } from '@/interfaces/bookmark.sort.interface'
import BookmarkAdd from '@/components/BookmarkAdd.vue'

const route = useRoute()
const categoryStore = useCategoryStore()
const category = ref<ICategory>()
const bookmarkStore = useBookmarkStore()

onMounted(() => {
  getCategory(route.params.alias)
})

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    getCategory(data.alias)
    if (category.value) {
      bookmarkStore.getBookmarks(category.value.id, bookmarkStore.activeSort)
    }
  }
)

function getCategory(alias: string | string[]) {
  category.value = categoryStore.getCategoryByAlias(alias)
}

function sortBookmarks(sortOption: ISortOption['option']) {
  bookmarkStore.activeSort = sortOption
  if (category.value) {
    bookmarkStore.getBookmarks(category.value.id, bookmarkStore.activeSort)
  }
}
</script>

<style scoped>
.bookmark-list {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 350px);
  gap: 24px;
}
</style>
