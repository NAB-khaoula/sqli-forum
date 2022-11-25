import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default {
    async fetchUsersFromDB(context) {
        let usersCollection = firebase.firestore().collection('users');
        let users = []
        await usersCollection.onSnapshot(snapshot => {
            snapshot.docs.map((doc) => {
                users.push({ id: doc.id, ...doc.data() })
                context.commit('fetchUsers', users);
            })
        })
    },
    createPost(context, post) {
        post.id = "abcdefghij" + Math.random();
        context.commit('setPost', { post })
        context.commit("appendPostToThread", {
            postId: post.id,
            threadId: post.threadId
        })
    },
    updateUser({ commit }, { user }) {
        commit('setUser', { user, userId: user.id })
    }
}