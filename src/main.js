import { createApp } from 'vue'
import App from './App.vue'
import Homepage from './components/Homepage.vue'
import 'bootstrap' //npm install bootstrap jquery popper.js 
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
const app= createApp(App)
app.component("Homepage",Homepage)
app.mount('#app')
