<script setup lang="ts">
const props = defineProps<{
    id: string;
    todoText: string;
    isComplete: boolean
}>()
const emit = defineEmits<{
    trigger: [id: string]
}>()
</script>

<template>
    <div class="flex gap-4 p-4  text-white items-center" :class="props.isComplete ? 'bg-amber-400' : 'bg-amber-800'">
        <UToggle :model-value="props.isComplete" @update:model-value="emit('trigger', props.id)" />
        <span :class="props.isComplete && 'line-through'">{{ props.todoText }}</span>
    </div>
</template>
