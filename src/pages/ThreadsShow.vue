<template>
  <div
    v-if="thread"
    class="col-large push-top"
  >
    <h3>{{ thread.title }}</h3>
    <post-list-view :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
  <div
    v-else
    class="col-full text-center"
  >
    No Thread Found
  </div>
</template>

<script>
import PostListView from "../components/PostListView";
import PostEditor from "../components/PostEditor";

export default {
  components: {
    PostListView,
    PostEditor,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id);
    },
    threadPosts() {
      return this.posts.filter((p) => p.threadId === this.id);
    },
    threads() {
      return this.$store.state.threads;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    addPost({ post }) {
      post.threadId = this.id;
      this.$store.dispatch("createPost",  post );
    },
  },
};
</script>

<style scoped></style>
