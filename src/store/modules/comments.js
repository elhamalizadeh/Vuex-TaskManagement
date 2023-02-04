import axios from "axios"

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
        fetchAllComments(state , comments){
            state.comments = comments
        }


    },
    actions:{
       async fetchComments({ commit }){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            commit('fetchAllComments' , response.data)
        }catch(error){
            console.log("Has Error")
        }
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