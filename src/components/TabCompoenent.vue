<script setup lang="ts">
import { useTaskStore } from '@/stores/task';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import TaskCard from './TaskCard.vue';
const tab = ref(null)

const taskStore = useTaskStore()
const { tasks, completedTasks, activeTasks } = storeToRefs(taskStore)

async function updateTaskStatus(id: number, status: boolean) {
  await taskStore.updateTask(id, { compelete: status })
}
async function deleteTask(id: number) {
  await taskStore.deleteTask(id)
}
async function updateTask(id: number, newTitle: string) {
  await taskStore.updateTask(id, { title: newTitle })
}
</script>

<template>
  <div>
    <v-tabs v-model="tab" color="drop-blue-accent-4" align-tabs="center">
      <v-tab :value="'all'">All</v-tab>
      <v-tab :value="'active'">Active</v-tab>
      <v-tab :value="'compelete'">Compelete</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="all">
        <div v-if="tasks.length">
          <TaskCard v-for="task in tasks" :key="task.id" :title="task.title" :id="task.id" :compelete="task.compelete"
            :bookmarked="task.bookmarked" :created-at="task.createdAt" class="mt-5" @on-change-status="updateTaskStatus"
            @on-delete="deleteTask" @on-update="updateTask" />
        </div>
        <div v-else>
          <p class="text-center mt-5">Add a new task</p>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="active">
        <div v-if="activeTasks.length">
          <TaskCard v-for="task in activeTasks" :key="task.id" :title="task.title" :id="task.id"
            :compelete="task.compelete" :bookmarked="task.bookmarked" :created-at="task.createdAt" class="mt-5"
            @on-change-status="updateTaskStatus" @on-delete="deleteTask" @on-update="updateTask" />
        </div>
        <div v-else>
          <p class="text-center mt-5">No active task</p>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="compelete">
        <div v-if="completedTasks.length">
          <TaskCard v-for="task in completedTasks" :key="task.id" :title="task.title" :id="task.id"
            :compelete="task.compelete" :bookmarked="task.bookmarked" :created-at="task.createdAt" class="mt-5"
            @on-change-status="updateTaskStatus" @on-delete="deleteTask" @on-update="updateTask" />
        </div>
        <div v-else>
          <p class="text-center mt-5">No compelete task</p>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>

</template>
