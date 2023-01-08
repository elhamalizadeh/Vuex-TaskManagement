<template>
  <div class="container">
     <div class="row mt-5">
      <div class="col-lg-12 pl-3 pt-3">
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
                            <h5>{{ item.name }}</h5>
                            <p>{{ item.description }}</p>
                         </div>
                    </div>
                    </td>
                <td class="align-middle">{{ item.price }}</td>
                <td class="align-middle">
                     <button class="btn btn-sm btn-dark me-2">+</button>
                   <span> {{ item.quantity }}</span>
                    <button class="btn btn-sm btn-dark ms-2">-</button></td>
                <td class="align-middle">{{ item.quantity * item.price }}</td>
                 <td class="align-middle" style="width: 15%">
                <button class="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
              <td>
                <a href="#" class="btn btn-dark">Clear Cart</a>
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

return{ items, cartTotalAmount }
}
}
</script>

<style>

</style>