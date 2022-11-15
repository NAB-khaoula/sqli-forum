
import { createRouter, createWebHistory } from "vue-router"

import HomePage from '../pages/HomePage'
import ThreadsShow from "../pages/ThreadsShow"
import NotFound from "../pages/NotFound"

const routes = [
    { path: '/thread/:id', component: ThreadsShow, props: true, name:"ThreadShow"},
    { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
    { path: '/', component: HomePage, name: 'HomePage' },
]

export default  createRouter({
   history: createWebHistory(),
  routes,
})