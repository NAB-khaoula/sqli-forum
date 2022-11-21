<template>
  <!-- instead of importing component statically, we can use router-view to render the proper page of that route. -->
  <!-- <HomePage></HomePage> -->
  <nav-bar />
  <router-view />
</template>

<script>
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
};
</script>

<style scoped>
@import "./assets/style.css";
</style>
