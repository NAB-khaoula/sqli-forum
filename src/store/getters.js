export default {
    authUser: (state) => {
            const user = state.jsonData.users.find(user => {
                return user.id === state.jsonData.authId
            })
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
    },
    getUser(state) {
        return state.user
    }
}