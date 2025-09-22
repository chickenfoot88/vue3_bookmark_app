<template>
  <div class="category-header">
    <div class="category-header-input" v-show="isEdited">
      <InputString v-model="newCategoryName" />
      <ButtonIcon
        @click="confirmUpdate(category.name, newCategoryName, category.alias, category.id)"
      >
        <IconOk></IconOk>
      </ButtonIcon>
    </div>
    <div class="category-header-text" v-show="!isEdited">
      <span>{{ category.name }}</span>
      <ButtonIcon @click="toggleEdit">
        <IconEdit></IconEdit>
      </ButtonIcon>
      <ButtonIcon @click="deleteCategory(category.id)">
        <IconTrash></IconTrash>
      </ButtonIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ICategory } from '@/interfaces/category.interface'
import ButtonIcon from '@/components/ButtonIcon.vue'
import InputString from '@/components/InputString.vue'
import IconEdit from '@/icons/IconEdit.vue'
import IconTrash from '@/icons/IconTrash.vue'
import IconOk from '@/icons/IconOk.vue'
import { useCategoryStore } from '@/store/category.store'
import { router } from '@/routes'

const { category } = defineProps<{ category: ICategory }>()
const isEdited = ref<boolean>(false)

function toggleEdit() {
  isEdited.value = !isEdited.value
}

const store = useCategoryStore()
const newCategoryName = ref<string>(category.name)
async function confirmUpdate(oldValue: string, newValue: string, alias: string, id: number) {
  if (!newValue.length) {
    return
  }

  if (oldValue !== newValue) {
    await store.updateCategory(newValue, alias, id)
  }

  toggleEdit()
}

async function deleteCategory(id: number) {
  await store.deleteCategory(id)
  router.push({ name: 'main' })
}
</script>

<style scoped>
.category-header-input,
.category-header-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.category-header-text {
  font-size: 20px;
}

.category-header-text button:first-of-type {
  margin-left: auto;
}
</style>
