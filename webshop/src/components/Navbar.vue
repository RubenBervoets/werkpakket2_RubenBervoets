<template>
  <nav id="nav">
    <div class="logo">
      <a href=""><img src="assets/RolexLogoWit.png" alt="Logo Rolex"></a>
    </div>
    <div class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/productpagina">Producten</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/winkelmandje">Winkelmandje</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>

<style lang="scss">
$color_1: #ffffff;
$color_2: #C28C02;
$background-color_1: #084E25;

.navbar {
  margin: 0 auto;
  width: 1170px;
  ul {
    margin: 0;
    padding: 25px 0;
    list-style: none;
    text-align: right;
    li {
      float: none;
      display: inline-block;
      &:nth-child(1) {
        float: left;
      }
      &:nth-child(2) {
        float: left;
      }
      a {
        color: $color_1;
        font-size: 20px;
        text-decoration: none;
        display: block;
        padding: 10px 20px;
        &:hover {
          color: $color_2;
        }
      }
    }
  }
}

#nav {
  width: 100%;
  position: relative;
  background: $background-color_1;
}

.logo {
  width: 100px;
  height: 100px;
  padding-top: 15px;
  position: absolute;
  left: 50%;
  top: 0;
  content: "";
  margin-left: -50px;
  text-align: center;
}
</style>