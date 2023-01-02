<template>
  <div class="conrainer">
    <h1>List of Tasks</h1>
    <div class="row">
      <div class="col-md-3 ms-5 mt-2" v-for="task in tasks" :key="task.id">
        <todo :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import todo from "../components/todo.vue";
import { useStore } from 'vuex';
import { computed } from 'vue'

export default {
  name: "TasksPart",
  components: {
    todo,
  },
  setup(){
const store = useStore();
const tasks = computed(()=> store.getters.allTasks);

function fetchTasks(){
  store.dispatch("fetchTasks");
}
fetchTasks();
return { tasks }
  }

};
</script>

<style></style>
