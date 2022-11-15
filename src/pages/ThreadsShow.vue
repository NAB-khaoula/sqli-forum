<template>
    <div class="col-large push-top" v-if="thread">

        <h3>{{ thread.title }}</h3>
        <PostListViewVue :posts="threadPosts"/>
    </div>
    <div v-else class="col-full text-center">
        No Thread Found
    </div>
</template>

<script>

import sourceData from '../data.json'
import PostListViewVue from '../components/PostListView';

export default {
    components: {
        PostListViewVue    
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

    },
}

</script>


<style scoped>

</style>