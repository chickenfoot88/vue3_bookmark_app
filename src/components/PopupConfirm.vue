<template>
  <Transition name="fade">
    <Teleport to="body">
      <div class="popup__cover" v-if="isOpened">
        <div class="popup">
          {{ text }}
          <div class="popup__actions">
            <ButtonBase @click="emit('ok')">Да</ButtonBase>
            <ButtonBase @click="emit('cencel')">Нет</ButtonBase>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/ButtonBase.vue'

const { isOpened, text } = defineProps<{
  isOpened: boolean
  text: string
}>()

const emit = defineEmits<{
  (e: 'ok'): void
  (e: 'cencel'): void
}>()
</script>

<style scoped>
.popup__cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-inactive);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup {
  padding: 20px;
  border-radius: 20px;
  background-color: var(--color-bg);
  min-width: 350px;
}
.popup__actions {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
