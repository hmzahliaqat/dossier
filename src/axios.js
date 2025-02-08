import axios from 'axios'

const { VITE_APP_API_URL } = import.meta.env

const apiClient = axios.create({
  baseURL: VITE_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiClient
