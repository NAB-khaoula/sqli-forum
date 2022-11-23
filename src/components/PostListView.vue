<template>
  <div class="post-list">
    <div
      v-for="post in posts"
      :key="post.id"
      class="post"
    >
      <div class="user-info">
        <a
          href="#"
          class="user-name"
        >
          {{ userById(post.userId).name }}
        </a>
        <a href="#">
          <img
            :src="userById(post.userId).avatar"
            alt="user Avatar"
            class="avatar-large"
          >
        </a>
        <p class="desktop-only text-small">
          100 posts
        </p>
      </div>
      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>
      <div class="post-date text-faded">
        <app-date :time-stamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
  setup() {
    const store = useStore();
    const users = ref(store.state.users);
    const userById = (userId) => users.value.find((u) => u.id === userId)
    return { users, userById}
  }
}
</script>


<style></style>
