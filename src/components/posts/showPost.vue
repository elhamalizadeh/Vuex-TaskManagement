<template>
  <div class="container">
    <div v-if="loading" class="row">is loading</div>

    <div v-else class="row">
        <div class="col-md-9">
        <p class="fw-bold"> {{ post.id }}</p>
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <router-link :to="{name:'update'}" class="btn btn-primary">Edit</router-link>
        </div>
        </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {computed , ref } from "vue";
import { useRoute } from "vue-router";

export default {
name:'showPost',

setup(){
    const route = useRoute();
         const Store = useStore();
        const post = computed(()=> Store.getters["posts/SinglePost"]); 
        const loading = ref(false);
        
         async function FetchSinglePost(){
            loading.value= true;
             await Store.dispatch("posts/FetchSinglePost" , route.params.id );
             loading.value= false;
         }
         FetchSinglePost();
        return{ post , loading}
     
}
}
</script>

<style>

</style>