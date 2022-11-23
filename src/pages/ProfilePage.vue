<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <user-profile-card :user="user" />
        <user-profile-editor :user="user" />
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
import UserProfileCard from "@/components/UserProfileCard";
import UserProfileEditor from "@/components/UserProfileEditor";

import { useStore } from "vuex";
import { ref } from "vue";

export default {
  components: {
    PostListView,
    UserProfileCard,
    UserProfileEditor,
  },
  setup() {
    const store = useStore();
    const user = ref(store.getters.authUser);
    return {user}
  }
};
</script>

<style></style>
