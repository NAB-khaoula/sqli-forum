import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default {
    async register(context, { auth, email, password }) {
        await createUserWithEmailAndPassword(auth, email, password).then((response) => {
            if (response) {
                context.commit('SET_USER', response.user);
            }
            else
                throw new Error('Unable to register user')
        })
    },

    async logIn(context, { loggedIn }) {
        //TODO - Set The user from Registration
        context.commit('LoggedIn', loggedIn)
    },

    async logOut(context) {
        await signOut(getAuth())
        context.commit('SET_USER', null)
    },

    async fetchUser(context, user) {
        context.commit("SET_LOGGED_IN", user !== null);
        if (user) {
            context.commit("SET_USER", {
                name: user.displayName,
                email: user.email
            });
        } else {
            context.commit("SET_USER", null);
        }
    },
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