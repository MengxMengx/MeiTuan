//配置对象
import axios from 'axios'
export const baseUrl = "http://localhost:3000"

// 开发阶段用这个
// https://www.fastmock.site/mock/99781f9120f3cae8b402f7fca81bd204/fullstack_music/banner

export const axiosInstance = axios.create({
    // 定义了一个常量 baseUrl，它表示请求的基本 URL 地址，
    // 这里设置为 http://localhost:3000，即请求会发送到本地服务器的端口 3000。
    baseURL: baseUrl
})

// 拦截器
axiosInstance.interceptors.request.use(
    // 使用 axiosInstance.interceptors.request.use() 方法添加了一个请求拦截器函数
    // 函数会在每次请求发送前执行，传入的参数 req 是当前的请求配置对象
    req => {
        console.log('开始请求');
        // let localToken = '1111111';
        req.headers['Authorization'] =
            "Bearer " + localToken
        return req
    },
    err => {
        console.log(err, '网络错误');

    }
)

axiosInstance.interceptors.response.use(
    // 使用 axiosInstance.interceptors.response.use() 方法添加了一个响应拦截器函数
    // 函数会在每次响应返回后执行，传入的参数 res 是响应数据
    res => res.data,
    err => {
        console.log(err.status, '网络错误', err);
    }
)

// 代码的作用是配置了一个 Axios 实例，并添加了请求和响应的拦截器。可以根据实际需要修改和扩展这些拦截器，以满足特定的业务逻辑和需求。