import { createStore } from 'vuex'
import sourceData from '../data.json'

export default createStore({
    state: {...sourceData, authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'},
    actions: {
        createPost(context, post) {
            post.id = "abcdefghij" + Math.random();
            context.commit('setPost', { post })
            context.commit("appendPostToThread", {
                postId: post.id,
                threadId: post.threadId
            })
        }
    },
    getters: {
        authUser: state => state.users.find(user => user.id === state.authId)
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post);
        },
        appendPostToThread(state, {postId, threadId}) {
            const thread = state.threads.find((thread) => thread.id === threadId)
            thread.posts.push(postId);
        }
    }
})