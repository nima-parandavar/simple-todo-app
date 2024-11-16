<script setup lang="ts">
import { computed, ref } from 'vue';

const prop = withDefaults(defineProps<{
  id: number,
  title: string,
  bookmarked: boolean,
  createdAt: Date | string,
  compelete: boolean
}>(), { bookmarked: false, compelete: false })

defineEmits(['onChangeStatus', 'onDelete', 'onUpdate'])
const editTitle = ref(prop.title)
const d2j = computed(() => {
  return new Intl.DateTimeFormat('fa-IR').format(new Date(prop.createdAt))
})
</script>

<template>
  <v-card class="py-2" variant="text" color="blue">
    <div class="d-flex flex-row align-center justify-space-between">
      <div>
        <v-card-title>
          <p :class="{ 'text-decoration-line-through': compelete }">{{ title }}</p>
        </v-card-title>
        <v-card-subtitle><small>{{ d2j }}</small></v-card-subtitle>
      </div>
      <div>
        <v-card-actions class="d-flex flex-row justify-space-between ga-3">
          <div class="d-flex ga-3">
            <v-btn icon="mdi-check" variant="flat" color="green" size="x-small" v-if="!compelete"
              @click="$emit('onChangeStatus', id, !compelete)" />

            <v-btn icon="mdi-close" variant="tonal" color="red" size="x-small" v-else
              @click="$emit('onChangeStatus', id, !compelete)" />

            <v-btn icon="mdi-delete" variant="tonal" color="red" size="x-small" @click="$emit('onDelete', id)" />

            <v-bottom-sheet inset>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-pen" size="x-small" color="orange" variant="tonal"></v-btn>
              </template>

              <v-card title="Edit Task" class="pa-5">
                <v-form @submit.prevent="$emit('onUpdate', id, editTitle)">
                  <v-text-field rounded v-model="editTitle" />
                  <v-btn type="submit" color="orange" variant="tonal" text="edit" />
                </v-form>
              </v-card>
            </v-bottom-sheet>

          </div>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>
