import { createRouter, createWebHistory } from "vue-router";

import { getAuth } from "firebase/auth";
const routes = [
  {
    path: "/thread/:id",
    component: () => import('../pages/ThreadsShow'),
    props: true,
    name: "ThreadShow", meta: {
      requiresAuth: true
    }
  },
  {
    path: "/forum/:id", component: () => import('../pages/ForumPage'), props: true, name: "ForumPage", meta: {
      requiresAuth: true
    }
  },
  {
    path: "/category/:id",
    component: () => import('../pages/CategoryPage'),
    props: true,
    name: "CategoryPage",
    meta: {
      requiresAuth: true
    }
  },
  { path: "/:pathMatch(.*)*", component: () => import('../pages/NotFound'), name: "NotFound" },
  {
    path: "/me", name: "ProfilePage", component: () => import('../pages/ProfilePage'), meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../pages/LoginPage'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/RegisterPage')
  },
  { path: "/", component: () => import('../pages/HomePage'), name: "HomePage" },
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
