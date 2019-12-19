import axios from 'axios'

const address = 'http://localhost:8081'
// const address = 'http://192.168.26.21:8010'

const instance = axios.create({
  timeout: 60 * 1000,
  baseURL: `${address}/sygc/xczx`,
  method: 'get'
})
export default instance
