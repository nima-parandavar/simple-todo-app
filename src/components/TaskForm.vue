<script setup lang="ts">
import { useTaskStore } from '@/stores/task';
import { ref } from 'vue';


const title = ref<string>('')
const taskStore = useTaskStore()

async function addTask() {
  await taskStore.add(title.value)
  title.value = ''
}

</script>


<template>
  <v-form class="d-flex flex-row justify-center align-center ga-2" @submit.prevent="addTask">
    <v-text-field placeholder="Add a new task" rounded v-model="title" />
    <v-btn text="add" size="large" variant="tonal" color="blue-lighten-1" prepend-icon="mdi-plus" type="submit" />
  </v-form>
</template>
