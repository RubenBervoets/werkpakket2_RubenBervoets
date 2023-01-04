<template>
  <div>
    <section class="wrapper">
      <h2>Onze bestsellers</h2>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items__item">
          <img class="product-image" :src="imagePath(product)" alt="">
          <p class="product-title">{{ product.title }}</p>
          <p><em>{{ product.price }}</em></p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    imagePath(product) {
      return require(`../assets/${product.images[0]}`);
    }
  }
};
</script>
