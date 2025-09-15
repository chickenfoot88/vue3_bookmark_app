<template>{{ category?.name }}</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useCategoryStore } from '@/store/category.store'
import { watch } from 'vue'
import type { ICategory } from '@/interfaces/category.interface'

const route = useRoute()
const store = useCategoryStore()
const category = ref<ICategory>()

onBeforeRouteUpdate((to) => {
  setCategoryByAlias(to.params.alias)
})

watch(
  () => ({
    categories: store.categories,
  }),
  () => {
    setCategoryByAlias(route.params.alias)
  }
)

function setCategoryByAlias(alias: string | string[]): void {
  category.value = store.getCategoryByAlias(alias)
}
</script>

<style scoped></style>
