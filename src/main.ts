import { createApp } from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from './common/vantui'

createApp(App).use(store).use(router).use(vant).mount('#app')
