<template>
  <div class="wrapper">
    <h1>Producten</h1>
    <ul class="wrapper item-grid">
      <li v-for="product in products" :key="product.id" class="item-grid__item">
        <router-link :to="{ name: 'product', params: { id: product.id}}">
          <img class="product-image" v-bind:src="product.image" alt="Product image">
          <p class="product-title">{{ product.title }}</p>
          <p><em>${{ product.price }}</em></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get('/products.json').then(response => {
      this.products = response.data;
    });
  },
};
</script>

<style lang="scss">
.item-grid {
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item-grid__item {
  box-sizing: border-box;
  text-align: center;
  padding: 1rem;
  flex: 0 0 33.3%;
  @media only screen and (max-width: 832px) {
    flex: 0 0 50%;
  }
  @media only screen and (max-width: 475px) {
    flex: 0 0 100%;
  }
}
</style>