<template>
  <nav-bar />
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    let fetchUsers = ["fetchUsersFromDB"];
    fetchUsers.forEach((user) => {
      store.dispatch(user);
    });
  },
};
</script>

<style scoped>
@import "./assets/style.css";
</style>
