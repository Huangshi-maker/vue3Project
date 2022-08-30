import axios from 'axios'
// import { ElLoading } from 'element-plus'
// import { ElMessage } from 'element-plus'


const serive = axios.create({
    // baseURL: 'https://www.fastmock.site/mock/997a02c93f90ab9a9f0d446b0cd01df1/api',
    timeout: 5000,

})
let loadingObj = null
serive.interceptors.request.use(req => {
    loadingObj = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })


    return req
})

serive.interceptors.response.use(res => {
    loadingObj.close()
    if (res.data) {
        return res.data
    }

})

export default (url, method, submitData) => {
    //负责发请求,请求地址,请求方式,提交的数据

    return serive({
        url,
        method,
        //1.如果是get请求,需要使用params来传递submiData
        //2.如果不是get请求,需要使用data来传递submiData   请求体传参
        // []设置一个动态的key,写js表达式,js表达式的执行结果当作key
        // method参数: get,Get,GET转化为小写再来判断
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}