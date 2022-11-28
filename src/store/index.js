import { createStore } from 'vuex'
import actions from './actions'
import sourceData from '../data.json'
import mutations from './mutations'
import getters from './getters'

export default createStore({
    state() {
        return {
            ...sourceData,
            authId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
            user: {},
            users: [],
            isLoggedIn: false,
        }
    },
    actions,
    getters,
    mutations,
})