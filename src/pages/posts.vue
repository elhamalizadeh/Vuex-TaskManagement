<template>
  <div class="container-fluid">
    <h1>Posts</h1>
    <div class="row">
    <div class="card me-2 mt-3 col-md-3" style="width: 14rem;" v-for="post in posts" :key="post.id">
  <post :post="post" />
  </div>
      
      <div class="col-md-2">
Sidebar
      </div>
</div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import post from '../components/posts/post.vue'

export default {
name:'postsPage',
components:{
  post
},
setup(){
const PostStore = useStore();

const posts = computed(()=>PostStore.getters["posts/Allposts"]);
//--- notice / It is so much better to define namespace in large scale projects------

async function fetchPosts(){
   await PostStore.dispatch("posts/fetchPosts")

}
fetchPosts();

return { posts }

}

};

</script>

<style>

</style>