<template>
  <div class="container">
    <h3>Edit Album</h3>
    <p>{{ param.id }}</p>
    <form>
         <label class="form-label">UserId :</label>
       <input class="form-control" v-model.lazy.trim="album.userId" />

        <label class="form-label">Title :</label>
       <input class="form-control" v-model.lazy.trim="album.title" />

    <button type="submit" class="btn btn-primary mt-3">save</button>
    </form>
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

        async function getAlbum(){
        await AlbumStore.dispatch("album/fetchSingleAlbum" ,param.id)
       }
       getAlbum()

       async function updateAlbum(album){
        await AlbumStore.dispatch("album/updateSingleAlbum" , album)
       }

        return { param , album , updateAlbum}
    }

}
</script>

<style>

</style>