<template>
  <div class="profile-card">
    <form>
      <p class="text-center">
        <img
          :src="user.avatar"
          :alt="`${user.name} profile picture`"
          class="avatar-xlarge img-update"
        >
      </p>
      <div class="form-group">
        <input
          v-model="activeUser.username"
          type="text"
          placeholder="userName"
          class="form-input text-lead text-bold"
        >
      </div>
      <div class="form-group">
        <input
          v-model="activeUser.name"
          type="text"
          placeholder="full name"
          class="form-input text-lead"
        >
      </div>
      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea
          id="user_bio"
          v-model="activeUser.bio"
          placeholder="write few words about yourself"
          cols="30"
          rows="10"
          class="form-input"
        />
      </div>
      <div class="stats">
        <span>{{ user.postsCount }} Posts</span>
        <span>{{ user.threadsCount }} Threads</span>
      </div>
      <hr>
      <div class="form-group">
        <label
          for="website"
          class="form-label"
        >Website</label>
        <input
          id="website"
          v-model="activeUser.website"
          type="text"
          class="form-input"
          autocomplete="off"
        >
      </div>
      <div class="form-group">
        <label
          for="email"
          class="form-label"
        >Email</label>
        <input
          id="email"
          v-model="activeUser.email"
          type="text"
          class="form-input"
          autocomplete="off"
        >
      </div>
      <div class="form-group">
        <label
          for="Location"
          class="form-label"
        >Location</label>
        <input
          id="Location"
          v-model="activeUser.location"
          type="text"
          class="form-input"
          autocomplete="off"
        >
      </div>
      <div class="btn-group space-betwenn">
        <button class="btn-ghost">
          Cancel
        </button>
        <button
          type="submit"
          class="btn-blue"
        >
          Save
        </button>
      </div>
    </form>
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
  data() {
    return {
      activeUser: {},
    };
  },
  beforeCreate() {
    this.activeUser = { ...this.user };
  },
  methods: {
    save() {
      this.$store.dispatch("updateUser", { ...this.activeUser });
    },
  },
};
</script>

<style></style>
