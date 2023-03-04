import axios from "axios"
const user = {
namespaced : true,

    state:{
       users:[]
    },
    getters:{
        getAllUsers(state){
            return state.users;
        },
        SingleUser(state){
            return state.user;
        }
    },
    mutations:{
        setUsers(state , users){
            state.users= users;
        },
        createNewUser(state , name){
            state.users.unshift(name);
        },
        setSingleUser(state, user){
            state.user = user;
        }

    },
    actions:{
        async fetchUserList({ commit }){
            try {
             const response = await axios
             .get("https://jsonplaceholder.typicode.com/users");
             commit("setUsers" , response.data );
        } catch (error) {
            console.log("error");
        }
        },

        async createUser({ commit } , name){
            try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/users?",{
                name : name
            });
            commit("createNewUser" , response.data);
        }catch(error){
            console.log("error")
        }
        },

        async fetchSingleUser({ commit } , id ){ 
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                commit("setSingleUser" , response.data)
            }catch(error){
                console.log("fetchSingleUser has error")
            }
        }
    }
}
export default user;