<template>
  <CategoryHeader v-if="category" :category />
  <div class="bookmark-list">
    <BookmarkCard
      v-for="bookmark in bookmarkStore.bookmarks"
      v-bind="bookmark"
      :key="bookmark.id"
    />
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
  }
)

function getCategory(alias: string | string[]) {
  category.value = categoryStore.getCategoryByAlias(alias)
  if (category.value) {
    bookmarkStore.getBookmarks(category.value.id)
  }
}
</script>

<style scoped>
.bookmark-list {
  display: grid;
  grid-template: repeat(3, 1fr);
  gap: 24px;
}
</style>
