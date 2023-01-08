import { createStore } from "vuex";
import task from './modules/task.js';
import product from './modules/product.js';
import cart from './modules/cart.js'


const store = createStore({
modules:{
  task,
  product,
  cart
}
});
export default store;
