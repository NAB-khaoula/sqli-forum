import { createStore } from 'vuex'
import actions from './actions'
import sourceData from '../data.json'
import mutations from './mutations'
import getters from './getters'

export default createStore({
    // state: {...sourceData, authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'},
    state() {
        return {
            jsonData: {
                ...sourceData,
                authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1',
                users: []
            },
            user: {
                loggedIn: false,
                data: null
            },
        }
    },
    actions,
    getters,
    mutations,
})