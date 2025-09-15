<template>
  <div class="index-view">
    <span class="index-view-header"> Добро пожаловать в Bookmarkly! </span>
    <span class="index-view-body"
      >Чтобы начать пользоваться выберите категорию закладок или создайте новую.</span
    >
  </div>
</template>

<script setup lang="ts">
// defineProps<>()
// defineEmits<>()
</script>
<style scoped>
.index-view {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  align-items: center;
  padding-top: 20%;
  gap: 25px;
}

.index-view-header {
  font-size: 24px;
  font-weight: 500;
}

.index-view-body {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
</style>
