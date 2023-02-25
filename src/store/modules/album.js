import axios from "axios";
const albums ={
    namespaced:true,

    state:{
         albums:[]
    },
    getters:{
        Allalbums(state){
            return state.albums
        }
    },
    mutations:{
        setAllalbums(state, albums){
            state.albums = albums
        }
    },
    actions:{
        async getAllalbums({commit}){
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
                commit('setAllalbums', response.data)

            }catch(error){
                console.log("error dare")
            }
        }

    }

}
export default albums;