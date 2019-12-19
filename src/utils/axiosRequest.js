import axios from 'axios'

const address = 'http://localhost:8081'
// const address = 'http://localhost:8010'

const instance = axios.create({
  timeout: 60 * 1000,
  baseURL: `${address}/sygc/xczx`,
  method: 'get'
})
export default instance
