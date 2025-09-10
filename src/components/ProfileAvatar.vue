<template>
  <div v-if="store.profile" class="profile-avatar">
    <img src="/public/avatar.png" alt="Изображение пользователя" class="profile-avatar-image" />
    <div>
      Привет, <strong>{{ store.profile.name }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProfileStore } from '@/store/profile.store'

const store = useProfileStore()

onMounted(() => {
  store.getProfile()
})
</script>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 18px;
  margin-bottom: 40px;
}

.profile-avatar-image {
  width: 80px;
}
</style>
