import axios from "axios"

const posts = {
namespaced: true,
state:{
    posts:[]
},


getters:{
    Allposts(state){
        return state.posts
    }
}, 

mutations:{
    getAllPosts(state, posts){
    state.posts = posts
    }

},


actions:{
  async fetchPosts({commit}){
    try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    commit('getAllPosts', response.data)
    }catch(error){
     console.log("error")
     }
   }


}

}
export default posts;
