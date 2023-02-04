import axios from "axios";
import Swal from 'sweetalert2'

const comments = {
    namespaced: true,
    state:{
        comments:[]
    },
    //----------------------------------------------------------------------------------------------
    getters:{
        AllComments(state){
        return state.comments
    },
    getSingleComment(state){
        return state.comment
    }
    },

    //----------------------------------------------------------------------------------------------
    mutations:{
        fetchAllComments(state , comments){
            state.comments = comments
        },

        DeleteAComment(state, commentId){
            state.comments = state.comments.filter(comment => comment.id != commentId )
        },
        /*getAComment(state, comment){
            state.commet = comment
        },*/

        updateSingle(state, comment){
            state.comment = comment

        }

    },
    //----------------------------------------------------------------------------------------------
    actions:{
       async fetchComments({ commit }){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            commit('fetchAllComments' , response.data)
        }catch(error){
            console.log("Has Error")
        }
        },
//----------------------------- Delete Comment ---------------
        async DeleteComment({ commit } , id){
            try{
                await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
                commit('DeleteAComment', id)

            }catch(error){
                console.log("Has Error")
            }
        },


 /*async getSingleComment({commit} , id ){
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
        commit("getAComment" , response.date)

    }catch(error){
console.log("error")
    }
 },*/
 //------------------------ Update Comment --------------------

 async updateAsingleComment({commit} , comment ){
   const response = await axios.put(`https://jsonplaceholder.typicode.com/comments/${comment.id}`,{
    name: comment.name,
    email: comment.email,
    body: comment.body,
   })
   commit('updateSingle' , response.data);
        Swal.fire({
            title: "Thanks!",
            text: "Post updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
        });
        }

    }
}
export default comments;




























/*
const comments = {
state:{
     comments:[]
},
getters:{
    AllComments(state){
        return state.comments
    }
},
mutations:{
    getAllComments(state, comments){
        state.comments = comments
    }

},
actions:{
    async fetchComments({ commit }){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            commit('getAllComments', response.data)
        }catch(error){
            console.log('Error')
        }
    }

}

}
export default comments
*/