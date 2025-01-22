import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost:5173/',
})

export default request
