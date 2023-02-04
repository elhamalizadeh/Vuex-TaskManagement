<template>
  <div class="container">
    <div class="row">
        <div class="col-md-9">
          <button class="btn btn-danger my-2 me-auto" @click="deletePost()">Delete</button>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
//import { computed } from "vue";
export default {
name:'deletePost',
props : ["id"],

setup(props){
const Store = useStore();
//const post = computed(()=> Store.getters["posts/deletePost"])
async function deletePost(){
    await Store.dispatch("posts/deleteAction" , props.id)
}

return { deletePost }
}
}
</script>

<style>

</style>