<template>
   <div class="row mt-5">
      New User:
      <form @submit.prevent="createUser" class="row">
        <div class="col-md-6">
          Name :<input type="text" class="form-control" v-model="name" />
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
name:'createUser',

setup(){
    const StoreU = useStore();
    const name = ref("");
    const loading = ref(false);

      async function createUser() {
        loading.value = true;
      await StoreU.dispatch("user/createUser", name.value);
       loading.value = false;
    }

    return { loading , createUser , name}

}
}
</script>

<style>

</style>