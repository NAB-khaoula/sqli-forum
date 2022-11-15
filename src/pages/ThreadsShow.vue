<template>
    <div class="col-large push-top" v-if="thread">

        <h3>{{ thread.title }}</h3>
        <post-list-view :posts="threadPosts" />
        <post-editor @save="addPost"/>
    </div>
    <div v-else class="col-full text-center">
        No Thread Found
    </div>
</template>

<script>

import sourceData from '../data.json'
import PostListView from '../components/PostListView';
import PostEditor from '../components/PostEditor';

export default {
    components: {
        PostListView,
        PostEditor
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            threads: sourceData.threads,
            posts: sourceData.posts,
        };
    },
    computed: {
        thread() {
            return this.threads.find((thread) => thread.id === this.id);
        },
        threadPosts() {
            return this.posts.filter((p) => p.threadId === this.id)
        }
    },
    methods: {
        addPost({ post }) {
            post.threadId = this.id
            this.posts.push(post);
            this.thread.posts.push(post.id);
        }
    },
}

</script>


<style scoped>

</style>