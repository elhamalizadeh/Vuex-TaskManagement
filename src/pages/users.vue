<template>
  <div v-if="loading" class="container">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <div v-else class="container">
    <!----->
  <form @submit.prevent="createUser" class="row">
        <div class="col-md-6">
          Name :<input type="text" class="form-control" v-model="name" />
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary">Create</button>
        </div>
      </form>
    <!---
   <createUser />--->
    <div class="row">
      <div class="col-md-4 mt-2" v-for="user in users" :key="user.id">
        <div class="card">
          <div class="card-body">
            <div class="card-title fw-bold">{{ user.id }}</div>
            <p class="card-text">{{ user.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import createUser from '../components/createUser.vue';
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  name: "usersPage",
  components:{
//createUser
  },

  setup() {
    const StoreU = useStore();
    const loading = ref(false);
      const name = ref("");
    const users = computed(() => StoreU.getters["user/getAllUsers"]);

    async function fetchUser() {
      loading.value = true;
      await StoreU.dispatch("user/fetchUserList");
      loading.value = false;
    }

         async function createUser() {
        loading.value = true;
      await StoreU.dispatch("user/createUser", name.value);
       loading.value = false;
    }

  
    fetchUser();
    return { users, loading , createUser , name };
  },
};
</script>

<style>
</style>