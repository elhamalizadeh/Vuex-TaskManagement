import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Tasks from './pages/tasks.vue';
import create from './components/tasks/create.vue';

const routes = [{ path: "/", name: "HomePage", component: Home },
{ path: "/tasks", name: "TasksPart", component: Tasks},
{ path: "/tasks/create", name: "CreateTask", component: create}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;