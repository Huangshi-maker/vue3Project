import request from "./request";



// export const loginApi = ({data}) => {
//     return request('/login', 'post',{data})
// }

export const loginApi = (data) => {
    return request('/login', 'post',data)
}

export const getcomeinData = () => {
    return request('/api/user', 'get')
}



