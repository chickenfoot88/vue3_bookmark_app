<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-fg);
  cursor: pointer;
  border-radius: 25px;
  height: 50px;
  padding: 12px 24px;
  border: none;
  color: var(--color-bg);
  font-size: 18px;
}

.button:hover {
  background: var(--color-inactive);
}
</style>
