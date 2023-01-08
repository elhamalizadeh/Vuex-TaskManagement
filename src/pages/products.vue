<template>
<div>
  <div class="container mt-5">
    <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3">
        <div class="card">
            <img class="card-img-top" :src="product.image" />
            <div class="card-body">
                <h5 class="card-title">
                    {{ product.name }}
                </h5>
                <p class="card-text"> {{ product.description }}</p>
            </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
            <button @click="AddToCart(product)" class="btn btn-outline-success btn-sm">Add to Cart</button>
            <span >{{ product.price }}</span>
        </div>
        </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue"
export default {
name : "productIndex",
setup(){
    const store = useStore();
    const products = computed(() => store.getters["product/allProducts"]);

    function AddToCart(product){
        //console.log("product is:" + product)
        store.dispatch('cart/addToCartAction' , product)
    }
    
return { products,AddToCart }
},
}
</script>

<style>

</style>