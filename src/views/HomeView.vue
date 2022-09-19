<template>
  <div>
    <card-task :tarefas="tasks" @send-delete="delecao"> </card-task>
  </div>
</template>

<script>
import CardTask from '@/components/CardTask.vue'
import tasksAPI from '@/api.js'
export default {
  components: {
    CardTask,
  },
  data: () => ({
    tasks: null,
  }),

  methods: {
    async delecao(id) {
      await tasksAPI.deleteTasks(id)
      this.requestList()
    },
    requestList() {
      return tasksAPI.getTasks().then((res) => (this.tasks = res.data))
    },
  },

  created() {
    this.requestList()
  },
}
</script>
