<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main>Контент</main>
  </div>
</template>
<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import CategoryList from '@/components/CategoryList.vue'
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
