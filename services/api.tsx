import axios from 'axios'
import { getUserLocalStorage } from '../context/AuthProvider/utils'

export const API = axios.create({
  baseURL: 'http://localhost:8080',
})


API.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage()

    API.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
