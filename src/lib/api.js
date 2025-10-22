import axios from 'axios'
import { API_BASE } from '../config'

const api = axios.create({ baseURL: API_BASE, timeout: 15000 })

// Request interceptor to attach token
api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('medai_token')
  if(token){
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor: global error handling
api.interceptors.response.use(res => res, err => {
  // you can expand with toast notifications
  return Promise.reject(err)
})

export default api
