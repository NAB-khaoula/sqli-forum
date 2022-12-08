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
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

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
  setup(props) {
    const store = useStore();
    const threads = computed(() => store.state.threads);
    const posts = computed(() => store.state.posts);
    const thread = computed(() => threads.value.find((thread) => thread.id == props.id));
    const threadPosts = computed(() => posts.value.filter(p => p.threadId === props.id));
    const addPost = ({ post }) => {
      post.threadId = props.id;
      store.dispatch('createPost', post);
    }
    return {threads, posts, thread, threadPosts, addPost}
  }
};
</script>

<style scoped></style>
