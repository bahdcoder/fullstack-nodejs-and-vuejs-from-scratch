import Vue from 'vue'
import './styles/main.css'
import store from './store'
import router from './routes'
import Router from 'vue-router'
import Main from './pages/Main.vue'
import Validator from 'vee-validate'
import TextInput from '@/client/components/TextInput.vue'

Vue.use(Router)
Vue.use(Validator)
Vue.component('text-input', TextInput)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Main) 
})
