import axios from 'axios'
import util from './util'

// axios.defaults.baseURL="http://www.hww.cool:3380";
// axios.defaults.withCredentials = true

//请求拦截
axios.interceptors.request.use(config => {
    util.showLoading();
    return config;
}, error => {
    util.showMessage(error);
    return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
    util.endLoading();

    if(response.data.stat=="OK")return response;
    else{
        util.showMessage(response.data.message);
        return Promise.reject(response.data.message);
    }
}, error => {
    util.endLoading();
    util.showMessage(error);
    return Promise.reject(error);
})

export default axios