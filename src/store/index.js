import { createStore } from "vuex";
import task from './modules/task.js'


const store = createStore({
modules:{
  task
}
});
export default store;
