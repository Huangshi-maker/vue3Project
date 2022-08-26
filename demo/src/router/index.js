import { createRouter, createWebHashHistory } from 'vue-router'

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
        path: '/usercenter',
        name:'usercenter',
        component:()=>import('../views/pages/usercenter.vue')
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

export default router
