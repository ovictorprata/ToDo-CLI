<template>
  <div>
    <card-task
      :tasks="tasks"
      @send-create="createPai"
      @send-update="updatePai"
      @send-delete="delecao"
    >
    </card-task>
  </div>
</template>

<script>
import CardTask from '@/components/CardTask.vue'
import ApiJS from '@/api.js'
export default {
  components: {
    CardTask,
  },
  data: () => ({
    tasks: {
      title: null,
      project: null,
      dueTo: null,
    },
  }),

  methods: {
    async delecao(id) {
      await ApiJS.deleteTasks(id)
      this.requestList()
    },
    requestList() {
      return ApiJS.getTasks().then((res) => (this.tasks = res.data))
    },
    createPai(tarefa) {
      return ApiJS.createTask(tarefa).then(() => {
        this.requestList()
      })
    },
    updatePai(tarefa) {
      return ApiJS.updateTask(tarefa).then(() => {
        this.requestList()
      })
    },
  },

  created() {
    this.requestList()
  },
}
</script>
