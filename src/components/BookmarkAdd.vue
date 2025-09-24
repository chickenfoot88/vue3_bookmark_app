<template>
  <div class="bookmark-add">
    <ButtonIcon :size="48" v-show="!isEdited" @click="toggleEditMode">
      <IconPlusBig />
    </ButtonIcon>
    <div class="bookmark-add-form" v-show="isEdited">
      <InputString v-model="newUrl" />
      <ButtonIcon @click="addBookmark(categoryId)"><IconOk v-model="newUrl" /></ButtonIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonIcon from '@/components/ButtonIcon.vue'
import InputString from '@/components/InputString.vue'
import IconPlusBig from '@/icons/IconPlusBig.vue'
import IconOk from '@/icons/IconOk.vue'
import { ref } from 'vue'
import { useBookmarkStore } from '@/store/bookmark.store'

const isEdited = ref<boolean>(false)
const newUrl = ref<string>()
const { categoryId } = defineProps<{ categoryId: number }>()
const bookmarkStore = useBookmarkStore()

function toggleEditMode() {
  isEdited.value = !isEdited.value
}

function addBookmark(categoryId: number) {
  if (newUrl.value) {
    bookmarkStore.addBookmark(newUrl.value, categoryId)
    newUrl.value = ''
    toggleEditMode()
  }
}
</script>

<style scoped>
.bookmark-add {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px dashed var(--color-fg);
  max-width: 300px;
  width: 300px;
}

.bookmark-add-form {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.bookmark-add-form input.input-string {
  width: 200px;
}
</style>
