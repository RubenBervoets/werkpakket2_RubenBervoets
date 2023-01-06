<template>
  <header>
    <img class="jumbotron" src="assets/RolexJumbotron.jpg" alt="Foto Rolex">
  </header>
  <div>
    <router-view>{{ featuredProducts }}</router-view>
  </div>
</template>

<script>
import featuredProducts from "../components/FeaturedProducts.vue";
import {defineComponent} from "vue";

export default defineComponent({
  computed: {
    featuredProducts() {
      return featuredProducts
    }
  }
})
</script>

<style lang="scss">
.jumbotron img {
  width: 100%;
}
</style>