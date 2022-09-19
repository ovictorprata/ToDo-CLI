<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="374"
      :key="tarefa.id"
      v-for="tarefa in tarefas"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>{{ tarefa.title }}</v-card-title>

      <v-card-text class="mb-4">
        <div class="my-4 mb-4 text-subtitle-1">{{ tarefa.project }}</div>

        <div>
          {{ tarefa.dueTo }}
        </div>
      </v-card-text>

      <v-row align="center" justify="space-around">
        <v-btn tile color="success" class="mb-3">
          <v-icon left> mdi-pencil </v-icon>
          Edit
        </v-btn>
        <v-btn
          depressed
          color="error"
          class="mb-3"
          @click="deleteHome(tarefa.id)"
        >
          Delete
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    deleteHome(id) {
      this.$emit('send-delete', id)
    },
  },
  props: {
    tarefas: Array,
  },
  data() {
    return {}
  },
}
</script>
