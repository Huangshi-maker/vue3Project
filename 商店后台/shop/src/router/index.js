import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from"../views/Layout/LayOut.vue"
import store from '../store/index.js'
const routes = [
 {
  path:"/",
  name:"layout",
  component:LayOut,
  redirect:"/index",
  children:[
    {
      path:"/index",
      name:"index",
      component:()=>import("../views/pages/index.vue")
    },
    {
      path:"/roles",
      name:"roles",
      component:()=>import("../views/pages/rolsList.vue")
    },
    {
      path:"/user",
      name:"user",
      component:()=>import("../views/pages/userList.vue")
    },
    {
      path:"/goods",
      name:"goods",
      component:()=>import("../views/pages/goodsList.vue")
    }
  ]
 },
 {
  path:"/login",
  name:"login",
  component:()=>import("../views/pages/login.vue")
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{

  console.log("store",store.state.uInfo)
  const uInfo = store.state.uInfo.userInfo
  if(!uInfo.username){
    if(to.path ==="/login"){
      next()
      return
    }
    next("/login")
  }
  else{
    next()
  }
  
  //判断用户是否登录

})

export default router
