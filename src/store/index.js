import { createStore } from "vuex";
import task from './modules/task.js';
import product from './modules/product.js'


const store = createStore({
modules:{
  task,
  product
}
});
export default store;
