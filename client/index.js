import Vue from 'vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from './pages/Main.vue'

Vue.use(Router)

const app = new Vue({
    el: '#app',
    router,
    render: h => h(Main) 
})
