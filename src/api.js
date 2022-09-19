import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'

export default {
  getTasks() {
    return axios.get('/tasks')
  },

  deleteTasks(id) {
    return axios.delete(`/tasks/${id}`)
  },
}
