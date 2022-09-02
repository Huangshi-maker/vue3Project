import axios from 'axios'


const seriveforgithub = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 5000,

})

seriveforgithub.interceptors.request.use(req => {

    return req
})

seriveforgithub.interceptors.response.use(res => {

    if (res.data) {
        return res.data
    }

})

export default (url, method, submitData) => {
    //负责发请求,请求地址,请求方式,提交的数据

    return seriveforgithub({
        url,
        method,
        //1.如果是get请求,需要使用params来传递submiData
        //2.如果不是get请求,需要使用data来传递submiData   请求体传参
        // []设置一个动态的key,写js表达式,js表达式的执行结果当作key
        // method参数: get,Get,GET转化为小写再来判断
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}