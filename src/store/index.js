import { createStore } from "vuex";
import task from './modules/task.js';
import product from './modules/product.js';
import cart from './modules/cart.js';
import user from './modules/users.js';
import posts from './modules/posts.js';
import comments from './modules/comments.js';
import album from './modules/album.js';


const store = createStore({
modules:{
  task,
  product,
  cart, 
  user,
  posts,
  comments,
  album
}
});
export default store;
