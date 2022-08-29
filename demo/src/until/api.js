import request from "./request";



// export const loginApi = ({data}) => {
//     return request('/login', 'post',{data})
// }

export const loginApi = (data) => {
    return request('/login', 'post', data)
}

export const getcomeinData = () => {
    return request('/getEntryAndExitData', 'get')
}

export const getstratifiedManagementData = () => {
    return request('/stratifiedManagementData', 'get')
}

export const editManData = (data) => {
    return request('/editManData', 'post', data)
}





