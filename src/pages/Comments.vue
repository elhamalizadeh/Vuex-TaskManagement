<template>
  <div class="container">
     <div v-if="loading" class="row">is loading</div>
    <div v-else class="row">
        <h1>Comments Main Page</h1>
        <div class="card col-md-9 mt-2 me-2" v-for="comment in comments" :key="comment.id">
           <Show :comment ="comment" />
                <div class="row ms-5">
                  <div class="col-md-1">
                  <router-link :to="{name:'updateComment' , params : { id: comment.id} }" :comment="comment" @formData="commentPage" class="btn btn-primary mb-2">Edit</router-link>
                  </div>
                  <div class="col-md-1">
                    <deletePart :id="comment.id" />
                  </div>
                </div>
        </div>
    </div>
  </div>
</template>

<script>
import Show from '../components/comments/Show.vue';
import deletePart from '../components/comments/delete.vue';
import { useStore } from "vuex";
import { computed  , ref  } from "vue";


export default {
name:'commentPage',
components:{
    Show,
    deletePart,
},
setup(){
   const loading = ref(false);
    const Store = useStore();
    const comments = computed(()=>Store.getters['comments/AllComments']);
    async function fetchComments(){
       loading.value= true;
        await Store.dispatch('comments/fetchComments');
         loading.value= false;
    }
    fetchComments();
    return { comments , loading }
}

}
</script>

<style>

</style>