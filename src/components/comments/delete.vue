<template>
  <div class="container">
<button class="btn btn-danger" @click="deleteComment()">Delete</button>  
</div>
</template>

<script>
import { useStore } from "vuex";
export default {
name:'deletePart',
props:["id"],
setup(props){
    const Store = useStore();
    async function deleteComment(){
       await Store.dispatch("comments/DeleteComment" , props.id)
    }
return { deleteComment }
}
}

</script>

<style>

</style>