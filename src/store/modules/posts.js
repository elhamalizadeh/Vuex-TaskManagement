import axios from "axios";
//import { useRoute } from "vue-router";
import Swal from 'sweetalert2'

const posts = {
namespaced: true,
state:{
    posts:[]
},


getters:{
    Allposts(state){
        return state.posts
    },
     SinglePost(state){
        return state.post
     }
}, 

mutations:{
    getAllPosts(state, posts){
    state.posts = posts
    },

    setSinglePost(state, post){
        state.post= post
    },

    deletePost(state , postId){
        state.posts = state.posts.filter(post => post.id != postId)
    },
    updatePost(state, post){
        state.post = post
    }

},

//-----------------------------------------------------  Actions -------------------
//---------------------------------------------------------- -------------------


actions:{
  async fetchPosts({commit}){
    try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    commit('getAllPosts', response.data)
    }catch(error){
     console.log("error")
     }
   },
//--------------------------------  FetchSinglePost -------------------

   async FetchSinglePost({commit} , id){
    try{
    //const route = useRoute();
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    commit("setSinglePost" , response.data)
    }catch(error){
        console.log("Error")
    }
   },
//-------------------------------------  Delete -------------------
   async deleteAction({commit}, id){
    try{
        //const route = useRoute();
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    commit("deletePost" , id)

    }catch(error){
        console.log("error")
    }
   }, 
//-----------------------------------  updatePost -------------------

   async updatePost({ commit } , post){
    try{
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
            title: post.title,
            body: post.body
        })
          commit("updatePost" , response.data);
          Swal.fire({
            title: "Thanks!",
            text: "Post updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
    }catch(error){
        console.log("error")
    }
   }


}

}
export default posts;
