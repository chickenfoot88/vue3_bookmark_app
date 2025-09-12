<template>
  <ul v-if="store.categories.length" class="category-list">
    <li class="category-list-item" v-for="category in store.categories" :key="category.id">
      <RouterLink :to="`/main/${category.alias}`">{{ category }}</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/store/category.store'
import { onMounted } from 'vue'

// defineProps<>()
const store = useCategoryStore()

onMounted(() => {
  store.getCategories()
})
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

.category-list-item {
  list-style-type: none;
}

.category-list-item a {
  text-decoration: none;
  font-size: 14px;
  transition: font-size 0.2s;
  color: var(--color-fg);
}

.category-list-item a:hover {
  font-size: 24px;
  font-weight: 700;
}
</style>
