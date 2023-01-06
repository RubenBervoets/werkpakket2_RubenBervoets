import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: []
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(Number(payload))
        },
        removeFromCart(state, payload) {
            let indexToDelete = state.cart.indexOf(Number(payload));
            state.cart.splice(indexToDelete, 1)
        },
        decrementProductInventory(state, payload) {
            let product = state.products.find(product => product.id === Number(payload))
            product.stock--;
        },
        incrementProductInventory(state, payload) {
            let product = state.products.find(product => product.id === Number(payload))
            product.stock++;
        }
    },
    actions: {
        addToCart({commit}, payload) {
            commit('addToCart', payload),
                commit('decrementProductInventory', payload)
        },
        removeFromCart({commit}, payload) {
            commit('removeFromCart', payload)
            commit('incrementProductInventory', payload)
        }
    },
    getters: {
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
        },
        cartItems: (state) => {
            return state.cart.map(
                itemId => state.products.find(
                    product => product.id === itemId
                )
            )
        },
        featuredProducts: (state) => {
            return state.products.filter(p => p.featured)
        }
    }
});