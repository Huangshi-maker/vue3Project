import requestforGithub from "./requestforGithub.js";


export const getGithubuserinfo = () => {
    return requestforGithub('/users/Huangshi-maker', 'get')
}
export const getGithubfollowers = ()=>{
    return requestforGithub('/users/Huangshi-maker/followers', 'get')
}
export const getGithubfollowing = ()=>{
    return requestforGithub('/users/Huangshi-maker/following', 'get')
}


export const getGithubreposdata =()=>{
    return requestforGithub('users/Huangshi-maker/repos','get')
}