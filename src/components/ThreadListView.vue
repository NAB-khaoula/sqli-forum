<template>
  <div
    v-if="threads"
    class="col-full"
  >
    <div class="thread-list">
      <h2 class="list-title">
        Threads
      </h2>
      <div
        v-for="thread in threads"
        :key="thread.id"
        class="thread"
      >
        <div>
          <p>
            <router-link
              :to="{ name: `ThreadShow`, params: { id: thread.id } }"
            >
              {{ thread.title }}
            </router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a>{{ userById(thread.userId).name }}</a>,
            <app-date :time-stamp="thread.publishedAt" />
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} replies
          </p>
          <img
            :src="userById(thread.userId).avatar"
            alt="user avatar"
            class="avatar-medium"
          >
          <div>
            <p class="text-xsmall">
              <a href="#"> {{ userById(thread.userId).name }}</a>
            </p>
            <div class="text-faded text-xsmall">
              <app-date :time-stamp="thread.publishedAt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  props: {
    threads: { type: Array, required: true },
  },
  setup() {
    const store = useStore();
    const posts = computed(() => store.state.posts);
    const users = computed(() => store.state.users);
    const postById = ref((postId) => posts.value.find(p => p.id === postId));
    const userById = ref((userId) => users.value.find(u => u.id === userId));
    return {postById, userById}
  }
};
</script>


<style scoped></style>
