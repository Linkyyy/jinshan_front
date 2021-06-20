import axios from 'axios'
import store from './store/index'

axios.defaults.baseURL="http://www.hww.cool:3380";

//请求拦截
axios.interceptors.request.use(config => {
    store.commit("setIsLoading",true);
    return config;
}, error => {
    return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
    store.commit("setIsLoading",false);

    if(response.data.stat=="OK")return response;
    else{
        return Promise.reject(response.data.message);
    }
}, error => {
    store.commit("setIsLoading",false);
    return Promise.reject(error);
})

export default axios