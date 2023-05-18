<script setup lang="ts">
import { useTodosStore } from '~/stores/todosStore';
const todosStore = useTodosStore()
</script>
<template>
  <div>
    <nav class="p-4 bg-amber-500 dark:bg-amber-700 flex items-center justify-end gap-8 text-white">
      <NuxtLink to="/">Home

        <UBadge v-if="todosStore.incompleteTodos.length > 0">{{ todosStore.incompleteTodos.length }}</UBadge>
      </NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
