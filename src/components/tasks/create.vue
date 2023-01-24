<template>
  <div class="row">
    <div class="col-md-12 mb-4">
      <h4>Create New Task :</h4>
      <form @submit.prevent="createNewTask" class="row">
        <div class="col-md-6">
          <input v-model="title" type="text" class="form-control" />
        <div class="form-text text-danger">{{ titleTextAlert }}</div>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary">
            Create
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
            ></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "CreateTask",
  setup() {
    const store = useStore();
    const title = ref("");
    const loading = ref(false);
    const titleTextAlert = ref("");

    async function createNewTask() {
      if (title.value == "") {
        titleTextAlert.value = " Title is required";
      } else {
        titleTextAlert.value = "";
        loading.value = true;
        await store.dispatch("task/createTask", title.value);
        loading.value = false;
      }
    }
    return { createNewTask, title, titleTextAlert, loading };
  },
};
</script>

<style></style>
