<template>
  <div class="container">
<div class="col-md-9">
    {{ comment }}
   
   <form>
    <label class="form-label">PostId</label>
    <p></p>
    <label class="form-label">Id</label>
    <p></p>

    <label class="form-label">Name</label>
<input class="form-control" type="text" v-model.lazy.trim="form.name" />  

    <label class="form-label">Email</label>
<input class="form-control" type="text" v-model.lazy.trim="form.email" />  

    <label class="form-label">Body</label>
<textarea class="form-control" v-model.lazy.trim="form.body"></textarea>

<button type="submit" class="btn btn-primary" @click="updateSingleComment()">Edit</button>
</form>
    </div>    

  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive } from "vue";
//import { computed } from "vue";
//import { useRoute } from "vue-router";
export default {
    name:"updateComment", 
     props:{
         comment :Object
     },

    setup(props){
                    const form = reactive({
                    name: "",
                    email: "",
                    body: "",
                    });

                    function setInput() {
                    if (props.comment !== undefined) {
                        form.name = props.comment.name;
                        form.email = props.comment.email;
                        form.body = props.comment.body;
                    }
                    }
                     setInput();

        const Store = useStore();
        //const route = useRoute();
        //const comment = computed(()=> Store.getters["comments/getSingleComment"])
        /*async function getSingleComment(){
            await Store.dispatch("comments/getSingleComment" , route.params.id)
        }
        getSingleComment();*/

      async function updateSingleComment(comment){
        await Store.dispatch("updateAsingleComment", comment)
        }
   
        return { updateSingleComment , form}
    }

}
</script>

<style>

</style>