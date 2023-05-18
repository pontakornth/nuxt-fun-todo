import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export interface TodoItem {
  id: string;
  todoText: string;
  isComplete: boolean;
}

export const useTodosStore = defineStore("todos", () => {
  const todos = reactive<TodoItem[]>([
    {
      todoText: "Drink water",
      id: nanoid(),
      isComplete: false,
    },
    {
      todoText: "Finish this app",
      id: nanoid(),
      isComplete: true,
    },
  ]);
  const addTodo = (todoText: string) => {
    todos.push({
      id: nanoid(),
      todoText,
      isComplete: false,
    });
  };
  const triggerTodo = (todoId: string) => {
    const todo = todos.find((x) => x.id === todoId);
    if (todo) {
      todo.isComplete = !todo.isComplete;
    }
  };
  const completeTodos = computed(() => todos.filter((t) => t.isComplete));
  const incompleteTodos = computed(() => todos.filter((t) => !t.isComplete));
  return {
    todos,
    addTodo,
    triggerTodo,
    completeTodos,
    incompleteTodos,
  };
});
