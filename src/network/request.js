import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // axios 拦截器
  instance.interceptors.request.use(config => {
    return config
  })

  // axios 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })

  // 发送真正的网络请求
  return instance(config)
}
