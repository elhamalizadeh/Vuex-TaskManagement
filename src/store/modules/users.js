import axios from "axios"
const user = {
namespaced : true,

    state:{
       users:[]
    },
    getters:{
        getAllUsers(state){
            return state.users;
        }

    },
    mutations:{
        setUsers(state , users){
            state.users= users;
        },
        createNewUser(state , name){
            state.users.unshift(name);
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
        }
    }
}
export default user;