<template>
  <div class="container">
    <h1>List of albums</h1>
    <div v-for="album in albums" :key="album.id">   
        <ShowAlbum :album="album" />
        </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ShowAlbum from "../components/albums/showAlbum.vue"
export default {
 name:'albumsPage',
 components:{
    ShowAlbum
 },
 setup(){
    const albumStore = useStore();
    const albums = computed(()=>albumStore.getters["album/Allalbums"]);

    async function getAlbums(){
        await albumStore.dispatch("album/getAllalbums");
    }
    getAlbums();

    return { albums }
 }
}
</script>
<style>

</style>