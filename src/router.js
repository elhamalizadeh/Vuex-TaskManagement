import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Tasks from './pages/tasks.vue';
import create from './components/tasks/create.vue';
import productIndex from './pages/products.vue';
import cartIndex from './pages/cart.vue';
import users from './pages/users.vue';
import posts from './pages/posts.vue';
import showPost from './components/posts/showPost.vue';
import update from './components/posts/update.vue';
import updateComment from './components/comments/update.vue';
import comments from './pages/Comments.vue';

const routes = [{ path: "/", name: "HomePage", component: Home },
{ path: "/tasks", name: "TasksPart", component: Tasks},
{ path: "/tasks/create", name: "CreateTask", component: create},
{ path: "/products", name: "products", component: productIndex},
{ path: "/cart", name: "cart", component: cartIndex},
{ path: "/users", name: "users", component: users},
{ path: "/posts", name: "posts", component: posts},
{ path: "/posts/:id", name: "showPost", component: showPost},
{ path: "/editpost/:id", name: "update", component: update},
{ path: "/comments", name: "comments", component: comments},
{ path: "/editComment/:id", name: "updateComment", component: updateComment}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;