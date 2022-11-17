<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">
          {{ forum.description }}
        </p>
      </div>
      <a
        href="#"
        class="btn-green btn-small"
      >Start a new Thread</a>
    </div>
    <div class="col-full push-top">
      <thread-list-view :threads="threads" />
    </div>
  </div>
</template>

<script>
import ThreadListView from "../components/ThreadListView";
export default {
  components: {
    ThreadListView,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    forum() {
      return this.$store.state.forums.find(f => f.id === this.id);
    },
    threads() {
      console.log()
      return this.$store.state.threads.filter(thread => thread.forumId === this.id);
    }
  },
};
</script>

<style></style>
