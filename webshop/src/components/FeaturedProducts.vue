<template>
  <div>
    <section class="wrapper">
      <h2>Onze bestsellers</h2>
      <h3>Deze horloges vallen het beste in de smaak bij onze gebruikers.</h3>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items__item">
          <router-link :to="{ name: 'product', params: { id: product.id}}">
            <img class="product-image" v-bind:src="product.image" alt="Product image">
            <p class="product-title">{{ product.title }}</p>
            <p>{{ product.price }}</p>
          </router-link>
        </li>
      </ul>
    </section>
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
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
</style>