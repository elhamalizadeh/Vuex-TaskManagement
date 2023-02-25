<template>
  <div class="container">
    <h1>List of albums</h1>
    <div>{{  albums }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
 name:'albumsPage',

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