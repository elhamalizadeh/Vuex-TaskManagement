<template>
  <div class="container">
    <h1>Posts</h1>
    {{ posts }}
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
name:'postsPage',
setup(){
const PostStore = useStore();

//const posts = computed(()=>PostStore.getters.Allposts);
const posts = computed(()=>PostStore.getters["posts/Allposts"]);
//--- notice/ If you have defined namespace in posts.js, you should write the name of file before calling functions / 
//It is so much better to define namespace in large scale projects------


async function fetchPosts(){
   //await PostStore.dispatch("fetchPosts")
   await PostStore.dispatch("posts/fetchPosts")

}
fetchPosts();

return { posts }

}

};

</script>

<style>

</style>