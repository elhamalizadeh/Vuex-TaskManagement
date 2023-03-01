<template>
  <div class="container">
    <h3>album Content</h3>
    <p> {{ params.id }}</p>
    <p>Title is : {{ album.title }}</p>
    <p>Id is : {{ album.id }}</p>
    <!---  پس با این روش پارامتر میشه اطلاعات رو توی ادرس ارسال کرد ولی اصولی نیست .برای توضیحات و عنوان، ادرس خیلی طولانی میشه. پس فقط ایدی رو بفرست و بعد از دیتابیس دوباره فراخوانی کن
    البته برای سئو خوبه که تایتل توی ادرس باشه -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

export default{
        name:"AlbumContent",
setup(){
const rout =  useRoute();
const params = rout.params;

const albumStore = useStore();
const album = computed(()=> albumStore.getters["album/SingleAlbum"]);

async function fetchSingle(){
  await albumStore.dispatch("album/fetchSingleAlbum" , params.id)

}
fetchSingle();
return { params , album }
}
}
</script>

<style>

</style>