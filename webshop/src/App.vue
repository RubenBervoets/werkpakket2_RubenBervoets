<template>
  <nav-component></nav-component>
  <router-view/>
  <footer-component></footer-component>
</template>

<script>
import NavComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';

export default {
  components: {
    navComponent: NavComponent,
    footerComponent: FooterComponent,
  },
};
</script>

<style lang="scss">

</style>
