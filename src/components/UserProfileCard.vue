<template>
  <div class="profile-card">
    <p class="text-center">
      <img
        :src="user.avatar"
        :alt="`${user.name} profile picture`"
      >
    </p>
    <h1 class="title">
      {{ user.username }}
    </h1>
    <p class="text-lead">
      {{ user.name }}
    </p>
    <p class="text-justify">
      {{ user.bio || "no specified user bio" }}
    </p>
    <span class="online">{{ user.username }} is online</span>
    <div class="stats">
      <span>{{ user.postsCount }} Posts</span>
      <span>{{ user.threadsCount }} Threads</span>
    </div>
    <hr>
    <p class="text-large text-center">
      <i class="fa fa-globe" />
      <a :href="user.website">{{ user.website }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
