import axios from 'axios';
axios.defaults.timeout = 15000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
//http request 拦截器(请求前的拦截)
axios.interceptors.request.use((config) => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器(请求成功的统一处理)
axios.interceptors.response.use(response => {
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
                params:params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,JSON.stringify(data))
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}
