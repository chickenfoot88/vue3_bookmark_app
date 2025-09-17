<template>
  <div class="auth-view">
    <div class="auth-view-wrapper">
      <h1 class="auth-view-header">Bookmarkly</h1>
      <form class="auth-form" action="" @submit="onSubmit">
        <InputString v-model="form.email" placeholder="e-mail" />
        <InputString v-model="form.password" placeholder="password" type="password" />
        <ButtonBase class="auth-form-submit" type="submit">Вход</ButtonBase>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ButtonBase from '@/components/ButtonBase.vue'
import InputString from '@/components/InputString.vue'
import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const form = ref<{ email?: string; password?: string }>({})

function onSubmit(event: Event) {
  event.preventDefault()
  if (!form.value.email || !form.value.password) {
    return
  }

  authStore.login(form.value.email, form.value.password)
  form.value = {}
}

const router = useRouter()

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' })
    }
  }
)
</script>

<style scoped>
.auth-view {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  width: 300px;
}

.auth-form-submit {
  align-self: center;
  margin-top: 20px;
  width: 120px;
}

.auth-view-header {
  font-size: 52px;
  font-weight: 700;
  cursor: default;
}

.auth-view-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 52px;
}
</style>
