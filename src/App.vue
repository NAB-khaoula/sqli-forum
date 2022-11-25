<template>
  <!-- instead of importing component statically, we can use router-view to render the proper page of that route. -->
  <!-- <HomePage></HomePage> -->
  <nav-bar />
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  // components: {
  // HomePage,
  // ThreadsShowPage,
  // ThreadListView
  // }
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    let storeActions = [
      "fetchUsersFromDB"
    ];
    storeActions.forEach((action) => {
      store.dispatch(action);
    });
  },
};
</script>

<style scoped>
@import "./assets/style.css";
</style>
