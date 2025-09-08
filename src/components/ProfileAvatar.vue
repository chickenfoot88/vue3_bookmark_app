<template>
  <div class="profile-avatar">
    <img src="/public/avatar.png" alt="Изображение пользователя" class="profile-avatar-image" />
    <div>
      Привет, <strong>{{ userName }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const { userName } = defineProps<{ userName: string }>()
// defineEmits<>()
</script>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 18px;
}

.profile-avatar-image {
  width: 80px;
}
</style>
