<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
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
            <span>{{ userPostsCount }}</span>
            <span>{{ userThreadsCount }}</span>
          </div>
          <hr>
          <p class="text-large text-center">
            <i class="fa fa-globe" />
            <a :href="user.website">{{ user.website }}</a>
          </p>
        </div>
        <p class="text-xsmall text-faded text-center">
          Member since june ...
        </p>
        <div class="text-center">
          <hr>
          <a
            href="#"
            class="btn-green btn-small"
          >Edit Profile</a>
        </div>
      </div>
      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead">{{ user.name }} recent activity</span>
          <a href="#">See only threads?</a>
        </div>
        <hr>
        <post-list-view :post="userPosts" />
      </div>
    </div>
  </div>
</template>

<script>
import PostListView from "../components/PostListView";
import { mapGetters } from "vuex";

export default {
  components: {
    PostListView,
  },
  computed: {
    ...mapGetters({ user: "authUser" }),
    userPosts() {
      return Object.values(this.$store.state.posts).filter(
        (post) => post.userId === this.user.id
      );
    },
    userPostsCount() {
      return this.userPosts.length;
    },
    userThread() {
      return Object.values(this.$store.state.threads).filter(
        (thread) => thread.userId === this.user.id
      );
    },
    userThreadsCount() {
      return this.userThread.length;
    },
  },
};
</script>

<style></style>
