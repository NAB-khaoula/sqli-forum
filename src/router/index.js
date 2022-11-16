
import { createRouter, createWebHistory } from "vue-router"

import HomePage from '../pages/HomePage'
import ThreadsShow from "../pages/ThreadsShow"
import NotFound from "../pages/NotFound"
import ForumPage from "../pages/ForumPage"

const routes = [
    { path: '/thread/:id', component: ThreadsShow, props: true, name:"ThreadShow"},
    { path: '/forum/:id', component: ForumPage, props: true, name:"ForumPage"},
    { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
    { path: '/', component: HomePage, name: 'HomePage' },
]

export default  createRouter({
   history: createWebHistory(),
  routes,
})