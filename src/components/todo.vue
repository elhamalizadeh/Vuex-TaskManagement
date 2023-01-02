<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ task.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{ task.id }}</h6>
    <p class="card-text"> {{ task.completed }}</p>
  </div>
</div>
</template>

<script>
export default {
name:'todoPart', 
props :{
    task : Object
}
}
</script>

<style>

</style>