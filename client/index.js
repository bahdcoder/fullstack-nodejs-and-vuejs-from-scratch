import Vue from 'vue'
import './styles/main.css'
import Main from './pages/Main.vue'

const app = new Vue({
    el: '#app',
    render: h => h(Main) 
})
