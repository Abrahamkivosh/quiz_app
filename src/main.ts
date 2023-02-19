import { createApp } from 'vue'
import { createPinia} from 'pinia'
import './style.css'
import App from './App.vue'

import AlertMessage  from './components/AlertMessage.vue'
// register the component 
const pinia = createPinia();
const app = createApp(App)
app.component('alert-message', AlertMessage)
app.use(pinia)
app.mount('#app')
