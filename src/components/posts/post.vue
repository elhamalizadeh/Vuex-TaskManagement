<template>
  <div class="container">
    <div class="row">
        <div class="card-body">
    <h5 class="card-title"> {{ post.id }}/{{ post.title }}</h5>
    <p class="card-text"> {{ post.body }}</p>
    <router-link :to="{name:'showPost', params : { id: post.id} }" class="btn btn-primary me-2 my-2">more</router-link>
    <deletePost :id="post.id" />

  </div>
    </div>
  </div>
</template>

<script>

import deletePost from '../posts/delete.vue';
export default {
    name: 'SingelPost',
    props:{
        post : Object
    },
    components:{
        deletePost
    },
    




}
</script>

<style>

</style>