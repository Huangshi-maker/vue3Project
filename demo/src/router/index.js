import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index.js'


const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    redirect: '/login',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/pages/index.vue')
      },
      {
        path: '/comin',
        name: 'comin',
        component: () => import('../views/pages/comin.vue')
      },
      {
        path: '/stratifiedManagement',
        name: 'stratifiedManagement',
        component: () => import('../views/pages/stratifiedManagement.vue')
      },
      {
        path: '/usercenter',
        name: 'usercenter',
        component: () => import('../views/pages/usercenter.vue')
      }

    ]
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


//判断用户是否登录，如果未登录，则不能通过改变url来切换页面
router.beforeEach((to, from, next) => {
  const uInfo = store.state.userInfo
  if (uInfo.username) {
    next()
  }
  else {
    if (to.path === "/login") {
      next()
      return
    }
    next("/login")

  }
})

export default router
