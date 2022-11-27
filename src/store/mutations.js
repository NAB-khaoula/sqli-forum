export default {
    SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
    },
    SET_USER(state, data) {
        state.user.data = data;
    },
    fetchUsers(state, users) {
        state.jsonData.users.push(...users);
    },
    setPost(state, { post }) {
        state.posts.push(post);
    },
    setUser(state, { user, userId }) {
        const userIndex = state.users.findIndex((user) => user.id === userId)
        state.users[userIndex] = user;
    },
    appendPostToThread(state, { postId, threadId }) {
        const thread = state.threads.find((thread) => thread.id === threadId)
        thread.posts.push(postId);
    }
}