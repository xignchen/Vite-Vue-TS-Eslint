import axios from 'axios';
import { ElMessage } from 'element-plus'
import { getToken } from "../common.ts";

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(config => {
    config.headers['token'] = getToken()
    return config;
})

// 响应拦截器
axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.error('API 请求错误:', error)
    if (error.response) {
        const status = error.response.status
        let message = '请求错误'
        switch (status) {
            case 400:
                message = '请求出错'
                break
            case 401:
                ElMessage.warning('授权失败，请重新登录')
                // 此处可以更新登录状态
                // store.commit('LOGIN_OUT')
                // setTimeout(() => {
                //     window.location.reload()
                // }, 1000)
                return
            case 403:
                message = '拒绝访问'
                break
            case 404:
                message = '请求接口不存在'
                break
            case 500:
                message = '服务器端出错'
                break
            default:
                message = `请求错误 [${status}]`
        }
        ElMessage.error(message)
    } else if (error.request) {
        // 处理网络错误
        ElMessage.error('连接服务器失败！')
    } else {
        ElMessage.error('请求服务器错误！')
    }
    return Promise.reject(error)
});

export default axios;
