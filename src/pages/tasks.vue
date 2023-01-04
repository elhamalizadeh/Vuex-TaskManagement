<template>
<div v-if="loading" class="container">
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>
  <div class="container" v-else>
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
import { computed , ref } from 'vue'

export default {
  name: "TasksPart",
  components: {
    todo,
  },
  setup(){
const loading = ref(false);
const store = useStore();
const tasks = computed(()=> store.getters.allTasks);

async function fetchTasks(){
  loading.value= true;
  await store.dispatch("fetchTasks");
  loading.value= false;
}
fetchTasks();
return { tasks, loading }
  }

};
</script>

<style></style>
