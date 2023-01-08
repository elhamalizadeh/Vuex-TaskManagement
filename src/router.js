import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Tasks from './pages/tasks.vue';
import create from './components/tasks/create.vue';
import productIndex from './pages/products.vue';
import cartIndex from './pages/cart.vue';

const routes = [{ path: "/", name: "HomePage", component: Home },
{ path: "/tasks", name: "TasksPart", component: Tasks},
{ path: "/tasks/create", name: "CreateTask", component: create},
{ path: "/products", name: "products", component: productIndex},
{ path: "/cart", name: "cart", component: cartIndex}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;