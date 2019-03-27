import Axios from 'axios'
import store from '@store'

const axios = Axios.create({
    baseURL: '/api/v1/'
})

axios.interceptors.request.use(function(config) {
    if (!!store.state.auth.user && !!store.state.auth.token) {
        config.headers = {
            access_token: store.state.auth.token
        }
    }

    return config
})

export default axios
