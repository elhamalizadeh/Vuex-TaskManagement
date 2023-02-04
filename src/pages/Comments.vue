<template>
  <div class="container">
    <div class="row">
        <h1>Comments Main Page</h1>
        <div class="card col-md-8 mt-2 me-2" v-for="comment in comments" :key="comment.id">
           <Show :comment ="comment" />
        </div>
        <div class="col-md-3">SideBar</div>
    </div>
  </div>
</template>

<script>
import Show from '../components/comments/Show.vue';
import { useStore } from "vuex";
import { computed } from "vue";

export default {
name:'commentPage',
components:{
    Show
},
setup(){
    const Store = useStore();
    const comments = computed(()=>Store.getters['AllComments']);
    async function fetchComments(){
        await Store.dispatch('fetchComments')
    }
    fetchComments();
    return { comments }
}

}
</script>

<style>

</style>