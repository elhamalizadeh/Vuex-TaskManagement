import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state:{
     tasks :[],
  },
  getters:{
      allTasks(state){
        return state.tasks
      }
  },
  mutations:{
    setTasks(state,tasks){
      state.tasks = tasks;
    }
  },
  actions:{
    async fetchTasks({ commit }){
      try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('setTasks', response.data)
  }
  catch(error){
    console.log("error")
  }
 }
    }


})

export default store;
