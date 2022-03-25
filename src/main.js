import { createApp } from 'vue'
import router from './routers/index.js'
import wrapperComponent from './wrapperComponent.vue'

createApp(wrapperComponent).use(router).mount('#app')

