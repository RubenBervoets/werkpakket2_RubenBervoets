<template>
  <div class="wrapper">
    <h1>Winkelmandje</h1>
    <div class="flex-col">
      <ul class="cart-list">
        <li
            v-for="item in cartItems"
            :key="item.id"
            class="flex-col cart-list__item">
          <img class="product-image" v-bind:src="product.image" alt="Product image">
          <div class="flex-col cart-list__item__details">
            <div>
              <p>{{ item.title }}</p>
              <p>Details: {{ item.tags }}</p>
            </div>
            <p>{{ item.price }}</p>
            <button
                @click="removeFromCart(item.id)"
                class="btn cart-list__btn-remove">
              Remove
            </button>
          </div>
        </li>
      </ul>
      <section class="total-section">
        <ul class="total-section-list">
          <li class="total-section__item">
            <p class="total-section__item__label">{{ cartItemsCount }} items</p>
          </li>
          <li class="total-section__item">
            <p class="total-section__item__label">Subtotaal</p>
            <p>{{ subtotal }}</p>
          </li>
          <li class="total-section__item">
            <p class="total-section__item__label">btw 21%</p>
            <p>{{ btwApplied }}</p>
          </li>
          <li class="total-section__item">
            <p class="total-section__item__label">Totaal bedrag</p>
            <p>{{ total }}</p>
          </li>
        </ul>
        <button
            class="btn btn--grey total-section__checkout-button">
          Check out
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {
      salesTax: 0.21,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    subtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    btwApplied() {
      return (this.subtotal * this.salesTax).toFixed(2);
    },
    total() {
      return Number(this.subtotal) + Number(this.btwApplied);
    },
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId);
    },
  },
};
</script>

<style lang="scss">
.cart-list {
  width: 70%;
  margin-right: 1rem;
@media only screen and (max-width: 832px) {
  width: 100%;
}
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
&:hover {
   color: red;
 }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}
.total-section {
  background: #FAFAFA;
  padding: 0 1rem 1rem;
}
.total-section-list {
  margin: 0;
}
.total-section__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;
}
.total-section__checkout-button {
  width: 100%;
}
</style>