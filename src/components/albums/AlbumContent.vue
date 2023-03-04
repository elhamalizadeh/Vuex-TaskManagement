<template>
  <div class="container">
    <h3>album Content</h3>
     <p>Id : {{ album.id }}</p>
    <!-- <p>user info is: {{ user.name }}</p>-->
     <p>userId: {{ album.userId }}</p>
     <p>Title: {{ album.title }}</p>
    <!---  پس با این روش پارامتر میشه اطلاعات رو توی ادرس ارسال کرد ولی اصولی نیست .برای توضیحات و عنوان، ادرس خیلی طولانی میشه. پس فقط ایدی رو بفرست و بعد از دیتابیس دوباره فراخوانی کن
    البته برای سئو خوبه که تایتل توی ادرس باشه -->
    <router-link :to="{name:'UpdateAlbum', id:album.id }" class="btn btn-primary">Edit2</router-link>
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
const parametr = rout.params;

const albumStore = useStore();
const album = computed(()=> albumStore.getters["album/SingleAlbum"]);
const user = computed(()=> albumStore.getters["users/SingleUser"]);

async function fetchSingle(){
  await albumStore.dispatch("album/fetchSingleAlbum" , rout.params.id);
}
async function fetchUser(){
  await albumStore.dispatch("users/fetchSingleUser" , rout.params.userId)
}

  fetchUser();
  fetchSingle();


return { parametr , album , user }
}
}
</script>

<style>

</style>