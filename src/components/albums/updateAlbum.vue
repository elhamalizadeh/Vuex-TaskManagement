<template>
  <div class="container">
    <h3>Edit Album</h3>
    <p>{{ param.id }}</p>
    <div class="form">
         <label class="form-label">UserId :</label>
       <input class="form-control" v-model.lazy.trim="album.userId" />

        <label class="form-label">Title :</label>
       <input class="form-control" v-model.lazy.trim="album.title" />

    <div class="btn btn-primary mt-3">save</div>
    </div>
<p>{{ album }}</p>
  </div>
</template>

<script>
import {useRoute} from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    name: 'UpdateAlbum',

    setup(){
       const route = useRoute();
       const param = route.params;

       const AlbumStore = useStore();
       const album = computed(()=> AlbumStore.getters["album/SingleAlbum"]);

        function getAlbum(){
        AlbumStore.dispatch("album/fetchSingleAlbum" ,param.id)
       }
       getAlbum()

        return { param , album }
    }

}
</script>

<style>

</style>