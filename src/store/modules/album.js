import axios from "axios";
const albums = {
    namespaced: true,
    state:{
         albums:[]
    },
    getters:{
        Allalbums(state){
            return state.albums
        },
        SingleAlbum(state){
           return state.album
        }
        

    },
    mutations:{
        setAllalbums(state, albums){
            state.albums = albums
        },
        setSingleAlbum(state , album){
            state.album = album
        }
    },
    actions:{
        async getAllalbums({commit}){
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
                commit('setAllalbums', response.data)

            }catch(error){
                console.log("getAllalbums error dare")
            }
        },
        
        async fetchSingleAlbum({commit} , id){
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
                commit("setSingleAlbum", response.data)
            }catch(error){
                console.log ("singleAlbum has ERROR")
            }
        }
        

    }

}
export default albums;