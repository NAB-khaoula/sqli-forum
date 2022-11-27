<!-- <template>
  <h1 class="push-top">
    Welcome to the Forum
  </h1>
  <CategoryList :categories="categories" />
</template> -->

<!-- Composition API -->
<!-- <script >
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import CategoryList from '@/components/CategoryList';
import { auth } from "../config/firebaseConfig"
export default {
  name: "HOME",
  components: {
    CategoryList
  },
  setup() {
    const store = useStore();
    const categories = computed(() => store.state.jsonData.categories);

    return { categories };
  },
};
</script>



<style scoped></style> -->


<!-- Testing Auth -->

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div v-if="user.loggedIn">
            <div class="card-header">
              Welcome, {{ user.data.displayName }}
            </div>
            <div class="card-body">
              <div
                class="alert alert-success"
                role="alert"
              >
                You are logged in!
                <div class="my-4">
                  <button
                    class="btn btn-primary"
                    @click.prevent="signOut"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="alert alert-danger"
            role="alert"
          >
            You are not logged in!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from "../main";
import { getAuth } from "@firebase/auth";

export default {
  name: "DashboardComponent",

  setup() {
    const store = useStore();
    const router = useRouter();

    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      console.log('store.getters', store.getters.getUser)
      return store.getters.getUser;
    });

    const signOut = async () => {
      await store.dispatch("logOut");
      router.push("/");
    };

    return { user, signOut };
  },
};
</script>
