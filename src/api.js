import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'

// function getMaxId(items) {
//   return Math.max(...items.map((item) => item.id))
// }

export default {
  getTasks() {
    return axios.get('/tasks')
  },

  deleteTasks(id) {
    return axios.delete(`/tasks/${id}`)
  },
  createTask(tarefa) {
    return axios.post(`/tasks`, tarefa).then((r) => r.data)
  },
  getTask: (taskId) => {
    axios
      .get(`http://localhost:3000/tasks/${taskId}`)
      .then((response) => response.data)
  },
  updateTask: (task) => {
    console.log(task)
    return axios
      .patch(`http://localhost:3000/tasks/${task.id}`, task)
      .then((response) => response.data)
  },
}
