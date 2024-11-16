<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue';
import TabCompoenent from '@/components/TabCompoenent.vue';
import { useTaskStore } from '@/stores/task';
import { onMounted } from 'vue';

const taskStore = useTaskStore()

// fetch all tasks
onMounted(async () => {
  await taskStore.getTasks()
})

</script>

<template>
  <v-container>
    <h1>My Tasks</h1>
    <TaskForm class="mt-5" />
    <TabCompoenent />
  </v-container>
</template>
