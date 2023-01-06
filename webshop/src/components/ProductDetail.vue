<template>
  <div v-for="product in products" :key="product.id" class="small-container single-product">
    <div class="row">
      <div class="col-2">
        <img class="product-image" v-bind:src="product.image" width=100% alt="Product image">
      </div>
      <div class="col-2">
        <img class="brand" src="assets/RolexLogoKleur.png">
        <h1>{{ product.title }}</h1>
        <h4>{{ product.price}}</h4>
        <input type="number" value="1">
        <a href="" class="btn"><span><i class="fas fa-shopping-cart"></i></span> In winkelwagen</a>
        <p class="detail">{{ product.descriptionIntro}}</p>
        <p class="detail">{{ product.descriptionText}}</p>
        <h3>Product details<i class="fa fa-indent"></i></h3><br>
        <p>- {{product.braceletMaterial}}<br>- {{ product.case }}<br>- {{ product.caseMaterial }}</p>
      </div>
    </div>
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
$color_1: #000000;
$color_2: #C28C02;
$color_3: #ffffff;
$border-color_1: #000000;
$background-color_1: #e0e0e0;
$background-color_2: #084E25;
$background-color_3: #000000;

.small-container {
  max-width: 1000px;
  margin: auto;
  padding-left: 25px;
  padding-right: 20px;
}

.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  background: $background-color_1;
}

.single-product {
  margin-top: 80px;
  .col-2 {
    img {
      padding: 0;
    }
    padding: 20px;
  }
  h4 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
  }
  input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid $border-color_1;
  }
  .fa {
    color: $color_1;
    margin-left: 10px;
  }
}

.col-2 {
  img {
    max-width: 100%;
    padding: 50px 0;
  }
  flex-basis: 50%;
  min-width: 300px;
  h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
  }
  p {
    font-size: 12px;
  }
}

input {
  &:focus {
    outline: none;
  }
}

.brand {
  width: 100px;
}

.btn {
  text-decoration: none;
  display: inline-block;
  background: $background-color_2;
  color: $color_2;
  padding: 8px 30px;
  margin: 30px 0;
  border-radius: 30px;
  transition: background 0.5s;
  &:hover {
    background: $background-color_3;
    color: $color_3;
  }
}

.detail {
  font-size: 12px;
  color: $color_1;
  margin: 0 70px 15px 0;
}
</style>