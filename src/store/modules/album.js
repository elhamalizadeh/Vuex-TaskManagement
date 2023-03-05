import axios from "axios";
import Swal from 'sweetalert2'
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
        },
        updateAlbum(state,album){
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
        },

        async updateSingleAlbum({commit} , album){
            try{
                const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${album.id}`,{
                    userId : album.userId,
                    title : album.title
                }
                );
                commit("updateAlbum" , response.data);
                Swal.fire({
                    title: "Thanks!",
                    text: "Album updated successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                  });

            }catch(error){
                console.log("updateSingleAlbum error")
            }
        }
        

    }

}
export default albums;