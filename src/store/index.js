import { createStore } from 'vuex'
import actions from './actions'
import sourceData from '../data.json'
import mutations from './mutations'

export default createStore({
    // state: {...sourceData, authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'},
    state() {
        return {
            jsonData: {
                ...sourceData,
                authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1',
                users: []
            }
        }
    },
    actions,
    getters: {
        authUser: (state) => {
            const user = state.jsonData.users.find(user => user.id === state.authId)
            console.log(state.users)
            if (!user) return null;
            return {
                ...user,
                get posts() {
                    return state.posts.filter((post) => post.userId === user.id);
                },
                get postsCount() {
                    return this.posts.length;
                },
                get threads() {
                    return state.threads.filter((thread) => thread.userId === user.id);
                },
                get threadsCount() {
                    return this.threads.length;
                },
            }
        }
    },
    mutations,
})