
import { createRouter, createWebHistory } from "vue-router"

import HomePage from '../pages/HomePage'
import ThreadsShow from "../pages/ThreadsShow"
import NotFound from "../pages/NotFound"
import ForumPage from "../pages/ForumPage"
import CategoryPage from "../pages/CategoryPage"
import ProfilePage from "../pages/ProfilePage"
const routes = [
    { path: '/thread/:id', component: ThreadsShow, props: true, name:"ThreadShow"},
    { path: '/forum/:id', component: ForumPage, props: true, name:"ForumPage"},
    { path: '/category/:id', component: CategoryPage, props: true, name:"CategoryPage"},
    { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/me', name: 'ProfilePage', component: ProfilePage}
]

export default  createRouter({
   history: createWebHistory(),
  routes,
})