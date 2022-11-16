<template>
  <div class="col-ful">
    <div class="forum-list">
      <h2 class="list-title">
        <a href="#">Forums</a>
      </h2>
      <div
        v-for="forum in forums"
        :key="forum.id"
        class="forum-listing"
      >
        <div class="forum-details">
          <router-link :to="{ name: 'ForumPage', params: { id: forum.id } }">
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>
        <div class="threads-count">
          <p>
            <span class="count">
              {{ forum.threads?.length }}
              <p>
                {{ forumThreads(forum) }}
              </p>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      type: Array,
      required: true,
    },
  },
  methods: {
    forumThreads(forum) {
      if (forum.threads?.length) {
        return forum.threads.length > 1 ? "threads" : "thread";
      } else {
        return "no thread";
      }
    },
  },
};
</script>

<style></style>
