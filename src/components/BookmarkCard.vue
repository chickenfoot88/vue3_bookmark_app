<template>
  <div class="bookmark-card">
    <div class="bookmark-card-image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="bookmark-card-title">
      {{ title }}
    </div>
    <div class="bookmark-card-footer">
      <ButtonIconBig @click="isOpened = !isOpened">
        <IconTrashWhite />
      </ButtonIconBig>
      <ButtonIconBig @click="openLink">
        <IconLinkWhite />
      </ButtonIconBig>
    </div>
    <PopupConfirm
      text="Хотите удалить закладку?"
      :is-opened="isOpened"
      @cencel="isOpened = !isOpened"
      @ok="deleteBookmark"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IBookmark } from '@/interfaces/bookmark.interface'
import { useBookmarkStore } from '@/store/bookmark.store'
import IconTrashWhite from '@/icons/IconTrashWhite.vue'
import IconLinkWhite from '@/icons/IconLinkWhite.vue'
import ButtonIconBig from '@/components/ButtonIconBig.vue'
import PopupConfirm from '@/components/PopupConfirm.vue'

const { title, image, url, id, category_id } = defineProps<IBookmark>()
console.log(id, category_id)

const bookmarkStore = useBookmarkStore()
const isOpened = ref<boolean>(false)

function openLink() {
  window.open(url, '_blank')
}

function deleteBookmark() {
  isOpened.value = !isOpened.value
  bookmarkStore.deleteBookmark(id)
}
</script>

<style scoped>
.bookmark-card {
  border-radius: 30px;
  background: var(--color-fg);
  box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.bookmark-card-image {
  min-height: 160px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}
.bookmark-card-title {
  color: var(--color-bg);
  font-size: 16px;
  font-weight: 500;
}
.bookmark-card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
}
</style>
