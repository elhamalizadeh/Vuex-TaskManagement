import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
