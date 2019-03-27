import Router from 'vue-router'

import Home from '@pages/Home.vue'
import Login from '@pages/Login.vue'
import Register from '@pages/Register.vue'
import ForgotPassword from '@pages/ForgotPassword.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/auth/login',
            component: Login
        },
        {
            path: '/auth/register',
            component: Register
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/auth/passwords/email',
            component: ForgotPassword
        }
    ]
})
