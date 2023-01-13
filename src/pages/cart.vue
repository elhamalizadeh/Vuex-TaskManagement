<template>
  <div class="container">
     <div class="row mt-5">
      <div v-if="items.length == 0" class="text-center">
      <div  style="font-size:70px">
        <i class="bi bi-basket"></i>
        </div>
        <h3>Cart Is Empty</h3>
        <router-link :to="{name:'products'}" class="btn btn-primary">Products</router-link>
        </div>
      <div v-else class="col-lg-12 pl-3 pt-3">
    <table class="table table-hover border bg-white">
        <thead>
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th style="width: 10%">Quantity</th>
            <th>SubTotal</th>
            <th>Action></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td class="align-middle">
                    <div class="row">
                        <div class="col-lg-2">
                         <img
                      :src="item.image"
                      alt="..."
                      class="img-fluid"
                    />
                        </div>
                         <div class="col-lg-10">
                            <h5>{{ item.id }}/{{ item.name }}</h5>
                            <p>{{ item.description }}</p>
                         </div>
                    </div>
                    </td>
                <td class="align-middle">{{ item.price }}</td>
                <td class="align-middle">
                     <button @click="increment(item.id)" class="btn btn-sm btn-dark me-2">+</button>
                   <span> {{ item.quantity }}</span>
                    <button @click="decrement(item.id)" class="btn btn-sm btn-dark ms-2">-</button></td>
                <td class="align-middle">{{ item.quantity * item.price }}</td>
                 <td class="align-middle" style="width: 15%">
                <button @click="deleteFromCart(item.id)" class="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
              <td>
                <button @click="clearAll" href="#" class="btn btn-dark">Clear Cart</button>
              </td>
              <td colspan="2" class="hidden-xs"></td>
              <td class="hidden-xs text-center" style="width: 15%">
                <strong>Total : {{ cartTotalAmount }}</strong>
              </td>
              <td>
                <a href="#" class="btn btn-success btn-block">Checkout</a>
              </td>
            </tr>
          </tfoot>
    </table>
      </div></div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed} from "vue"
export default {
name: "cartIndex",
setup(){
    const store = useStore();
    const items = computed(()=> store.getters['cart/allItems']);
    const cartTotalAmount = computed(()=> store.getters['cart/TotalAmount'])

function increment(id){
    store.dispatch("cart/plusAction", id)
}
function decrement(id){
    store.dispatch("cart/minusAction" , id)
}
function deleteFromCart(id){
  store.dispatch("cart/deleteAction", id)
}
function clearAll(){
  store.dispatch('cart/clearAction')
}

return{ items, cartTotalAmount,increment,decrement ,deleteFromCart,clearAll}
}
}
</script>

<style>

</style>