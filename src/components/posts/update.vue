<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <h1>Update post</h1>
      <PostForm  :post="post" @formData="updatePost" :button-loading="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '../posts/PostForm.vue';
import { useStore } from "vuex";
import { computed , ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "UpdatePost",
  components:{
    PostForm
  },
  setup() {
     const loading = ref(false);
    const route = useRoute();
    const Store = useStore();
    const post = computed(()=>Store.getters["posts/SinglePost"]);
    console.log("post is:" + post.value );

async function FetchSinglePost(){
    await Store.dispatch("posts/FetchSinglePost" , route.params.id)
      
}
FetchSinglePost()

async function updatePost(post){
    loading.value = true;
    await Store.dispatch("posts/updatePost", post)
    loading.value = false;

}

return { post , updatePost , loading}
  },
};
</script>

<style>
</style>