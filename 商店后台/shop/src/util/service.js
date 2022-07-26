import axios from "axios"
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import store from "../store/index.js"


let loadingObj = null
const Service = axios.create({
    timeout:8000,
    baseURL:"http://127.0.0.1:8888/api/private/v1/",
    headers:{
        "Content-type":"application/json;chartset=utf-8",
        "Authorization":store.state.uInfo.userInfo.token
    }
})


//请求拦截  

Service.interceptors.request.use(config=>{
    loadingObj = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
})
    return config
})

//响应拦截
Service.interceptors.response.use(response=>{

    loadingObj.close()
    const data = response.data
    if(data.meta.status>=400){
        ElMessage.error(data.meta.msg||"服务器错误")
        return data
    }
    else{
        ElMessage.success(data.meta.msg)
    }
    return data
},error=>{
    ElMessage({
        message: '服务器错误',
        type: 'error',
        duration:2000
      })
    loadingObj.close()
})


export  const post = config=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}

export  const get = config=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}


export const put =config=>{
    return Service({
        ...config,
        method:"put",
        data:config.data

    })
}

export const requesDelete =config=>{
    return Service({
        ...config,
        method:"delete",

    })
}







