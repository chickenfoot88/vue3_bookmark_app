<template>
  <div class="auth-view">
    <div class="auth-view-wrapper">
      <h1 class="auth-view-header">Bookmarkly</h1>
      <ButtonBase @click="goToMain">Вход</ButtonBase>
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
.auth-view {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.auth-view-header {
  font-size: 52px;
  font-weight: 700;
}

.auth-view-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 52px;
}
</style>
