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
import ThreadListView from "@/components/ThreadListView";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  components: { ThreadListView },
  props: { id: { type: String, required: true } },
  setup(props) {
    const store = useStore();
    const forum = computed(() =>
      store.state.forums.find((f) => f.id === props.id)
    );
    const threads = computed(() =>
      store.state.threads.filter((thread) => thread.forumId === props.id)
    );
    return { forum, threads };
  },
};
</script>

<style></style>
