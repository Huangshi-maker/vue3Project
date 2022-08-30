import request from "./request";



// export const loginApi = ({data}) => {
//     return request('/login', 'post',{data})
// }

export const loginApi = (data) => {
    return request('/login', 'post', data)
}
export const addUser = (data) => {
    return request('/addUser', 'post', data)
}
export const getHeadData = () => {
    return request('/GetHeadData', 'get')
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
export const editComminData = (data) => {
    return request('/editComminData', 'post', data)
}

export const deleteManData = (data) => {
    return request('/deleteManData', 'post', data)
}
export const addManData = (data) => {
    return request('/addManData', 'post', data)
}
export const deleteComminData = (data) => {
    return request('/deleteComminData', 'post', data)
}

export const addComminData = (data) => {
    return request('/addComminData', 'post', data)
}









