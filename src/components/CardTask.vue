<template>
  <div>
    <v-form>
      <v-container>
        <h1>Nova task:</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Título"
              required
              v-model="tarefa.title"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              label="Categoria"
              required
              v-model="tarefa.project"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              label="Data"
              required
              v-model="tarefa.dueTo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2" class="mt-3">
            <v-btn depressed color="primary" @click="createHome(tarefa)"
              >SALVAR</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-card
      class="mx-auto my-12"
      max-width="374"
      :key="task.id"
      v-for="task in tasks"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>{{ task.title }}</v-card-title>

      <v-card-text class="mb-4">
        <div class="my-4 mb-4 text-subtitle-1">{{ task.project }}</div>

        <div>
          {{ task.dueTo }}
        </div>
      </v-card-text>

      <v-row align="center" justify="space-around">
        <v-btn tile color="success" class="mb-3" @click="updateHome(task)">
          <v-icon left> mdi-pencil </v-icon>
          Edit
        </v-btn>

        <v-btn
          depressed
          color="error"
          class="mb-3"
          @click="deleteHome(task.id)"
        >
          Delete
        </v-btn>
      </v-row>
      <template>
        <div>
          <v-text-field
            class="ma-6"
            label="Título"
            hide-details="auto"
            v-model="task.title"
          >
          </v-text-field>
          <v-text-field
            class="ma-6"
            label="Categoria"
            hide-details="auto"
            v-model="task.project"
          >
          </v-text-field>
          <v-text-field
            class="ma-6"
            label="Data"
            hide-details="auto"
            v-model="task.dueTo"
          >
          </v-text-field>
        </div>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    deleteHome(id) {
      this.$emit('send-delete', id)
    },
    createHome(tarefa) {
      this.$emit('send-create', tarefa)
    },
    updateHome(tarefa) {
      console.log('id: ' + tarefa.id)
      console.log('title: ' + tarefa.title)
      this.$emit('send-update', tarefa)
    },
  },
  props: {
    tasks: {},
  },
  data() {
    return {
      tarefa: {
        title: null,
        project: null,
        dueTo: null,
      },
    }
  },
}
</script>
