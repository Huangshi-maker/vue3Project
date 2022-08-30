import request from "./request";

//登录
export const loginApi = (data) => {
    return request('/login', 'post', data)
}
//注册
export const addUser = (data) => {
    return request('/addUser', 'post', data)
}

//获取首页头部展示数据
export const getHeadData = () => {
    return request('/GetHeadData', 'get')
}
//获取出入境人数数据
export const getcomeinData = () => {
    return request('/getEntryAndExitData', 'get')
}
//获取分层管理数据
export const getstratifiedManagementData = () => {
    return request('/stratifiedManagementData', 'get')
}

//修改分层管理数据
export const editManData = (data) => {
    return request('/editManData', 'post', data)
}
//修改出入境数据
export const editComminData = (data) => {
    return request('/editComminData', 'post', data)
}
//删除分层管理数据
export const deleteManData = (data) => {
    return request('/deleteManData', 'post', data)
}
//新增分层管理数据
export const addManData = (data) => {
    return request('/addManData', 'post', data)
}
//删除出入境数据
export const deleteComminData = (data) => {
    return request('/deleteComminData', 'post', data)
}
//新增出入境数据
export const addComminData = (data) => {
    return request('/addComminData', 'post', data)
}









