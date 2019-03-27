import mutations from './mutations'
import getters from './getters'
import actions from './actions'

let initialState = null

try {
    initialState = JSON.parse(localStorage.getItem('auth'))
} catch (e) {
    initialState = {
        user: null,
        token: null
    }
}

export default {
    state: initialState,
    actions,
    getters,
    mutations
}
