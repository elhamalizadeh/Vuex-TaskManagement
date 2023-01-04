import { createStore } from "vuex";
import axios from "axios";
import Swal from 'sweetalert2'

const store = createStore({
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    createTask(state , task){
      state.tasks.unshift(task)
    }
  },
  actions: {
    //-----fetch tasks action ----

    async fetchTasks({ commit }, limit) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );
        commit("setTasks", response.data);
      } catch (error) {
        console.log("error");
      }
    },
//------create task action ------
    async createTask({ commit } , title) {
      try{
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed : false
        }
        );
        commit("createTask", response.data);
        Swal.fire({
          title: "Task added",
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: 'top',
      });

      }catch(error){
        console.log("error");
      }

    },
  },
});

export default store;
