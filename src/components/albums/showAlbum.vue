<template>
  <div class="container">
    <p><router-link :to="{name:'albumContent', params:{ id: album.id , title: album.title , userId: album.userId } }">{{ album.userId }} /{{ album.id }} / {{ album.title }} </router-link></p>
  </div>
</template>

<script>
export default {
 name:"ShowAlbum",
 props: {
    album:Object,
 }
 
}
</script>

<style>

</style>