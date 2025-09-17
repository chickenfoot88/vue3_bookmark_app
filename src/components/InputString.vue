<template>
  <input class="input-string" v-model="data" ref="input" :type />
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'

const data = defineModel<string>()
const input = useTemplateRef<HTMLInputElement>('input')

const { isFocused = false, type = 'text' } = defineProps<{ isFocused?: boolean; type?: string }>()

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus()
  }
})
</script>

<style scoped>
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  color: var(--color-fg);
  font-size: 24px;
  outline: none;
}
.input-string::placeholder {
  color: var(--color-inactive);
  font-size: 18px;
}
</style>
