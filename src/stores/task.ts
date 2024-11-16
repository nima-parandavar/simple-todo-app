import { defineStore } from "pinia";
import type { TaskInterface } from "@/interface/Task";
import axios from "axios";


export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as TaskInterface[]
  }),
  actions: {
    async getTasks() {
      // return all tasks
      await axios.get('/todos', {
        method: 'GET',
      }).then(response => {
        this.tasks = response.data
      })
    },
    async add(title: string) {
      // add new tasks
      const task: TaskInterface = {
        title: title,
        createdAt: new Date(),
        bookmarked: false,
        compelete: false
      }
      // POST data
      await axios.post('/todos', task)
        .then(response => {
          this.tasks.unshift(response.data)
        })
    },
    async updateTask(id: number, body: object) {

      await axios.put(`/todos/${id}`, body)
        .then(response => {
          const index = this.tasks.findIndex(item => item.id === id)
          if (index) {
            this.tasks[index] = response.data
          }
        }).catch(error => {
          console.log(error)
        })
    },
    async deleteTask(id: number) {
      // delete a task
      const index = this.tasks.findIndex(item => item.id === id)
      await axios.delete(`/todos/${id}`)
        .then(response => {
          this.tasks.splice(index, 1)
        }).catch(error => {
          console.log(error)
        })
    }

  },
  getters: {
    completedTasks: (state) => state.tasks.filter(item => item.compelete), // return compelete tasks
    activeTasks: (state) => state.tasks.filter(item => !item.compelete), // return uncompelete tasks
  }

})

