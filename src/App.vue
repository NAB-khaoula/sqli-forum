<template>
  <layout-page> 
    <router-view />
  </layout-page>
</template>

<script>
import { useStore } from "vuex";
import LayoutPage from "./layout/LayoutPage";

export default {
  name: "App",
  components: {
    LayoutPage,
  },
  setup() {
    const store = useStore();
    let fetchUser = ["fetchUsersFromDB"];
    fetchUser.forEach((action) => {
      store.dispatch(action);
    });
  },
};
</script>

<style scoped>
@import "./assets/style.css";
</style>
