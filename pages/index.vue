<script setup lang="ts">
import { useTodosStore } from '~/stores/todosStore';
const currentTodoText = ref("")
const todoStore = useTodosStore()
const addTodo = () => {
    if (currentTodoText.value.trim() != "") {
        todoStore.addTodo(currentTodoText.value.trim())
    }
}
</script>

<template>
    <UContainer class="py-8">
        <h1 class="font-bold text-3xl">Todo List Nuxt UI</h1>
        <div class="space-y-4 my-4">
            <UInput name="currentTodoText" v-model:model-value="currentTodoText"/>
            <UButton @click="addTodo">Submit</UButton>
        </div>
        <div class="flex gap-8 my-8 flex-col">
        <Todo
        v-for="todo in todoStore.todos"
        :key="todo.id"
        @trigger="todoStore.triggerTodo(todo.id)" id="12" :todo-text="todo.todoText" :is-complete="todo.isComplete"></Todo>
        </div>
    </UContainer>
</template>
