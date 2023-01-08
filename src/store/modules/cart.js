import Swal from 'sweetalert2';

function UpdateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))

}
const cart = {
    namespaced: true,

    state: {
        cart: localStorage.getItem('cart') ? JSON.parse (localStorage.getItem('cart')) : []
    },
    mutations: {
        add(state, product) {
            const item = state.cart.find(p => p.id == product.id)
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            }else{
                item.quantity++
            }
            UpdateLocalStorage(state.cart)
        }
    },
    actions: {
        addToCartAction({ commit }, product) {
            commit('add', product);
            Swal.fire({
                title: "product added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 850,
                toast: true,
                position: 'top',
            });
        }
    }
}

export default cart;