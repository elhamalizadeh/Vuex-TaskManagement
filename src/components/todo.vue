<template>
  <div class="card" style="width: 18rem;" :class="{'bg-primary text-light' : task.completed}">
  <div class="card-body">
    <div class="card-title">
      <del v-if="task.completed">{{ task.title}} </del>
      <div v-else >{{ task.title}} </div>
    <h6 class="card-subtitle mb-2 text-muted">{{ task.id }}</h6>
    <p class="card-text"> {{ task.completed }}</p>
  </div>
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