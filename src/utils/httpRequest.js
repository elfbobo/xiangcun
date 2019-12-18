import axios from 'axios'
import qs from 'qs'
import merge from 'lodash/merge'

// import { clearLoginInfo } from '@/utils'

const http = axios.create({
  timeout: 1000 * 60,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

if (process.env.NODE_ENV === 'development') {
  http.defaults.baseURL = 'http://203.156.203.8'
  // http.defaults.baseURL = 'http://192.168.26.20';
  // http.defaults.baseURL = 'http://localhost:8080';
  http.defaults.baseURL = 'http://localhost:8010'
} else if (process.env.NODE_ENV === 'debug') {
  console.log()
} else if (process.env.NODE_ENV === 'production') {
  http.defaults.baseURL = 'http://203.156.203.8'
  // http.defaults.baseURL = 'http://192.168.26.20';
  http.defaults.baseURL = 'http://localhost:8010'
}

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  config.headers['token'] = '7f95fee94d34b06d6fd52c2ef0ab99d9' // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    // clearLoginInfo()
    // router.push({ name: 'login' })
  }
  return response
}, error => {
  return Promise.reject(error)
})

/**
 * 请求地址处理
 * action方法名称
 */
http.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : http.defaults.baseURL) + actionName
}

/**
 * get请求参数处理
 *
 *
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    't': new Date().getTime()
  }
  return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
