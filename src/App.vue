<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar v-if="store.profile" :name="store.profile.name" />
    </nav>
    <main>Контент</main>
  </div>
</template>
<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import { onMounted } from 'vue'
import { API_ROUTES } from './api'
import { useProfileStore } from './store/profile.store'
import type { IProfile } from './interfaces/profile.interface'

const store = useProfileStore()

async function getProfile() {
  const data = await fetch(API_ROUTES.profile)
  const result = (await data.json()) as IProfile
  store.profile = result
}

onMounted(() => {
  getProfile()
})
</script>
<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1450px;
  margin: 140px auto 0 auto;
}

.nav {
  min-width: 400px;
}
</style>
