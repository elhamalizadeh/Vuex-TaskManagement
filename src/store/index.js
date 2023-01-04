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
    },
    updateTask(state, updatetask){
      const index = state.tasks.findIndex(task => task.id == updatetask.id);
      if(index != -1){
        state.tasks.splice(index, 1,updatetask) // --- replace
      }
    },
    removeTask(state, id){
        state.tasks = state.tasks.filter(task => task.id != id)

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

      //-----update tasks action ----

      async updateTaskAction({ commit }, task) {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
              id: task.id,
              title: task.title,
              completed: !task.completed
          })

          commit('updateTask', response.data); // -- call mutations
          Swal.fire({
            title: "Task updated",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
  
        } catch (error) {
          console.log("error");
        }
      },

       //-----delete tasks action ----

       async deleteTaskAction({ commit }, id) {
        try {
          await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          commit('removeTask', id); // -- call mutations
          Swal.fire({
            title: "Task deleted",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
  
        } catch (error) {
          console.log("error");
        }
      },
  },
});

export default store;
