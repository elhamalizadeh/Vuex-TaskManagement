import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Tasks from './pages/tasks.vue'

const routes = [{ path: "/", name: "HomePage", component: Home },
{ path: "/tasks", name: "TasksPart", component: Tasks }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;