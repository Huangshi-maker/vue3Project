import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import elementIcon from "../plugins/icons.js"




createApp(App).use(store).use(router).use(ElementPlus).use(elementIcon).mount('#app')
