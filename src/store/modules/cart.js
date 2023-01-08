import Swal from 'sweetalert2';

function UpdateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))

}
const cart = {
    namespaced: true,

    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters:{
      count(state){
        return state.cart.length
      },
      allItems(state){ 
        return state.cart
    },
    TotalAmount(state){
        return state.cart.reduce((total,p) => {
        return total + p.price * p.quantity
    },0)
    }
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
        },

        plus(state,id){
            const item = state.cart.find(p => p.id = id);
            if(item){
                item.quantity++
            }
            UpdateLocalStorage(state.cart)
        },

        minus(state,id){
            const item = state.cart.find(p => p.id = id);
            if(item){
                if(item.quantity>1){
                    item.quantity--
                }
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
        },

        plusAction({ commit }, id){
            commit('plus',id)
        },
        minusAction({ commit }, id){
            commit('minus',id)
        }

    }
    }

export default cart;