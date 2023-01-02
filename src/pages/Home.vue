<template>
  <h1>Home Page</h1>
{{ count }}
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue'

export default {
name:'HomePage',

setup(){
    const store = useStore();
    const count = computed(()=>store.state.count);
    return { count }
}
}
</script>

<style>

</style>