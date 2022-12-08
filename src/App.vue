<template>
  <nav-bar />
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import NavBar from "./components/NavBar";
import { onBeforeMount } from "vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import router from "./router";


export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      // let fetchUsers = ["fetchUsersFromDB"];
      // fetchUsers.forEach((user) => {
      //   store.dispatch(user);
      // });
      firebase.auth().onAuthStateChanged((user) => {
        if (!user)
            router.push('/login')
        else if (router.path == '/login' || route.path == "/register")
          router.push('/')
      })
    })
  },
};
</script>

<style scoped>
@import "./assets/style.css";
</style>
