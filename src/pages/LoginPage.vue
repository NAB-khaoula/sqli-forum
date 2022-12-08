<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <div
              v-if="error"
              class="alert alert-danger"
            >
              {{ error }}
            </div>
            <form
              action="#"
              @submit.prevent="Login"
            >
              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                >Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                  >
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                >Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                  >
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button
                    type="submit"
                    class="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


export default {
  name: "LoginComponent",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    // const Login = async () => {
    //   try {
    //     await store
    //       .dispatch("logIn", {
    //         auth: getAuth(),
    //         email: email.value,
    //         password: password.value,
    //       })
    //       .then(() => {
    //         alert('You logged in successfully')
    //         router.push("/");
    //       });
    //   } catch (err) {
    //     error.value = err.message;
    //   }
    // };
    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          store.dispatch('logIn', {loggedIn: true})
          alert('You logged in successfully')
          router.push('/')
        })
        .catch(error => alert(error));
    }
    return { Login, email, password, error };
  },
};
</script>
