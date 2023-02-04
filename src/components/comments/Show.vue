<template>
  <div class="container">
        <div class="card-body">
          <div class="card-title">{{ comment.id }}</div>
          <div class="card-text">{{ comment.body }}</div>
        </div>
  </div>
</template>

<script>
export default {
name:'showComments',
props:{
  comment : Object
}
}
</script>

<style>

</style>