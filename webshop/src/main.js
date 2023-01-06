import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
// import navbar from './components/Navbar.vue';
// import footer from './components/Footer.vue';
import featuredProducts from './components/FeaturedProducts.vue';
import productCard from './components/ProductCard.vue';
import productDetail from './components/ProductDetail.vue';
import login from './components/Login.vue';
// import home from './views/Home.vue';
import winkelmandje from "./views/Winkelmandje.vue";

import App from './App.vue'
// import store from "./store";

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: featuredProducts},
        {path: '/productpagina', component: productCard},
        {path: '/productDetail', component: productDetail},
        {path: '/login', component: login},
        {path: '/winkelmandje', component: winkelmandje}
    ]
})

const app = createApp(App);

app.use(router);
app.mount('#app');