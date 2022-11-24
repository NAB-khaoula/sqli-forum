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
          <router-link :to="{name: `ProfilePage`}">
            <img
              :src="authUser?.avatar"
              :alt="authUser?.name"
              class="avatar-small"
            >
            <span>
              {{ authUser?.name }}
            </span>
          </router-link>
          <div id="user-dropdown">
            <div class="triangle-drop" />
            <ul class="dropdown-menu">
              <li class="dropdown-meni-item">
                <a href="#">View Profile</a>
              </li>
              <li class="dropdown-meni-item">
                <a href="#">Log OUT</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {

  setup() {
    const store = useStore();
    console.log('user', store.getters.authUser)
    const authUser = computed(() => store.getters.authUser)
    return { authUser }
  }
}
</script>


<style></style>
