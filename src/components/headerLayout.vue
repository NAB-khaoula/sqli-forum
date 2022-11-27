<template>
  <header
    id="header"
    class="header"
  >
    <router-link
      class="logo"
      :to="{ name: 'HomePage' }"
    >
      <img
        src="../assets/svg/forum-logo.svg"
        alt=""
      >
    </router-link>
    <div class="btn-hamburger">
      <div class="top bar" />
      <div class="middle bar" />
      <div class="bottom bar" />
    </div>
    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <router-link :to="{ name: `LoginPage` }" />
          <router-link :to="{ name: `RegisterPage` }" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const authUser = computed(() => store.getters.authUser);
    return { authUser };
  },
};
</script>

<style></style>
