<template>
  <ul v-if="store.categories.length" class="category-list">
    <li class="category-list-item" v-for="category in store.categories" :key="category.id">
      <RouterLink
        active-class="active-link"
        exact-active-class=""
        :to="`/main/${category.alias}`"
        >{{ category.name }}</RouterLink
      >
    </li>
  </ul>
  <ButtonIcon @click="store.createCategory">
    <IconPlus />
  </ButtonIcon>
  <a class="logout-link" @click="logout">Выход</a>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/store/category.store'
import { onMounted } from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconPlus from '@/icons/IconPlus.vue'
import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'vue-router'

const store = useCategoryStore()
const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  store.getCategories()
})

function logout() {
  authStore.clearToken()
  router.push({ name: 'auth' })
}
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}

.category-list-item {
  list-style-type: none;
}

.category-list-item a {
  text-decoration: none;
  font-size: 14px;
  transition: font-size 0.2s;
  color: var(--color-fg);
}

.category-list-item a:hover,
.category-list-item a.active-link {
  font-size: 24px;
  font-weight: 700;
}

.logout-link {
  cursor: pointer;
  margin-top: 30px;
  display: block;
}

.logout-link:hover {
  text-decoration: underline;
}
</style>
