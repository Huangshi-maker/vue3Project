import {post,get,put,requesDelete} from "./service"


export const loginApi=data=>{
    return post({
        url:"/login",
        data
    })
}

//获取用户列表
export const userListApi = data=>{
    return get({
        url:"/users",
        data
    })
}

//新增用户列表

export const userAddApi = data=>{
    return post({
        url:"/users",
        data
    })
}

export const userChangeStateApi = data=>{
    return put({
        url:`/users/${data.id}/state/${data.mg_state}`,
        data
    })
}

export const  userChangeInfoApi= data=>{
    return put({
        url:`users/${data.id}`,
        data
    })
}

export const  userDeleteApi= data=>{
    return requesDelete({
        url:`users/${data.id}`,
        
    })
}


export const rolsListApi =data=>{
    return get({
        url:"roles",
        data
    })
}

export const rolsAddApi = data=>{
    return post({
        url:"roles",
        data
    })
}
export const rolsEdApi = data=>{
    return put({
        url:`roles/${data.id}`,
        data
    })
}

export const delrolsApi = data=>{
    return  requesDelete({
        url:`roles/${data.id}`
    })
}


export const goodsListApi = data=>{
    return get({
        url:"goods",
        data
    })
}