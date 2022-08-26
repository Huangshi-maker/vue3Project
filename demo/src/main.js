import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/index.js'
// import echarts from './components/echarts/echarts.js'
// import * as echarts from 'echarts'



import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(store).use(router).mount('#app')


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.prototype.$echarts = echarts



