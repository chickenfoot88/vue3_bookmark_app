<template>
  <div class="category-sort-wrapper">
    <button
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      :class="['sort-button', { active: activeSort == item.option }]"
      @click="() => emit('sort', item.option)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { SORT_OPTIONS } from '@/constants'

type option = (typeof SORT_OPTIONS)[0]['option']
const { activeSort = SORT_OPTIONS[0].option } = defineProps<{ activeSort: option }>()
const emit = defineEmits<{
  sort: [option]
}>()
</script>

<style scoped>
.category-sort-wrapper {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
}
.sort-button {
  background: none;
  border: none;
  color: var(--color-inactive);
  font-size: 16px;
  cursor: pointer;
}

.sort-button.active {
  color: var(--color-fg);
  border-bottom: 1px solid var(--color-fg);
  font-weight: 700;
}
</style>
