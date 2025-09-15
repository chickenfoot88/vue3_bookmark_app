<template>
  <div class="not-found">
    <div class="not-found-wrapper">
      <h1 class="not-found-header">404</h1>
      <ButtonBase @click="goToMain">На главную</ButtonBase>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonBase from '@/components/ButtonBase.vue'

const router = useRouter()

function goToMain() {
  router.push('main')
}
</script>

<style scoped>
.not-found {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.not-found-header {
  font-size: 128px;
  font-weight: 700;
}

.not-found-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 52px;
}
</style>
