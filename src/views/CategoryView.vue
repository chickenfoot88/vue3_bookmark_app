<template>{{ category?.name }}</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/store/category.store'
import { watch } from 'vue'
import type { ICategory } from '@/interfaces/category.interface'
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

<style scoped></style>
