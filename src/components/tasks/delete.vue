<template>
  <div>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
    <span @click="deleteTask" class="bi bi-trash-fill"></span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "deleteTask",
  props: ["id"],

  setup(props) {
    const store = useStore();
    const loading = ref(false);

    async function deleteTask() {
      loading.value = true;
      await store.dispatch("deleteTaskAction", props.id);
      loading.value = false;
    }
    return { loading, deleteTask };
  },
};
</script>

<style></style>
