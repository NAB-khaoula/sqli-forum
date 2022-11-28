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
      <ul v-if="isLoggedIn">
        <li class="navbar-user">
          <router-link :to="{ name: `ProfilePage` }">
            <img
              src="../assets/images/professionnelPhoto.jpg"
              class="avatar-small"
            >
            <span>
              {{ authUser?.name }}
            </span>
          </router-link>
        </li>
      </ul>
      <ul v-else>
        <li class="navbar-user">
          <router-link :to="{ name: `Login` }">
            <button>
              Login
            </button>
          </router-link>
        </li>
        <span />
        <li class="navbar-user">
          <router-link :to="{ name: `Register` }">
            <button>
              Register
            </button>
          </router-link>
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
    const isLoggedIn = store.state.isLoggedIn;
    const authUser = computed(() => store.getters.authUser);
    return { isLoggedIn, authUser };
  },
};
</script>

<style></style>
