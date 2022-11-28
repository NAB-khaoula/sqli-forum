import { createRouter, createWebHistory, routerKey } from "vue-router";

import HomePage from "../pages/HomePage";
import ThreadsShow from "../pages/ThreadsShow";
import NotFound from "../pages/NotFound";
import ForumPage from "../pages/ForumPage";
import CategoryPage from "../pages/CategoryPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import { getAuth } from "firebase/auth";
const routes = [
  {
    path: "/thread/:id",
    component: ThreadsShow,
    props: true,
    name: "ThreadShow", meta: {
      requiresAuth: true
    }
  },
  {
    path: "/forum/:id", component: ForumPage, props: true, name: "ForumPage", meta: {
      requiresAuth: true
    }
  },
  {
    path: "/category/:id",
    component: CategoryPage,
    props: true,
    name: "CategoryPage",
    meta: {
      requiresAuth: true
    }
  },
  { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
  {
    path: "/me", name: "ProfilePage", component: ProfilePage, meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  { path: "/", component: HomePage, name: "HomePage" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser)
      next();
    else {
      alert('you don\'t have access !');
      next('/')
    }
  }
  else {
    next();
  }
})



export default router;
