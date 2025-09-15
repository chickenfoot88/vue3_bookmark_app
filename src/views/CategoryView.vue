<template>{{ category?.name }}</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/store/category.store'
import { watch } from 'vue'
import type { ICategory } from '@/interfaces/category.interface'
import { useBookmarkStore } from '@/store/bookmark.store'
const route = useRoute()
const categoryStore = useCategoryStore()
const category = ref<ICategory>()
const bookmarkStore = useBookmarkStore()

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias)
    if (category.value) {
      bookmarkStore.getBookmarks(category.value.id)
    }
  }
)
</script>

<style scoped></style>
