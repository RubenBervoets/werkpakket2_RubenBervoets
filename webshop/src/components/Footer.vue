<template>
  <footer class="footer">
    <div class="footer-left">
      <img class="footer-logo" src="assets/RolexLogoWit.png" alt="Logo Rolex">
      <p class="footer-links">
        <a href="#">Home</a>
        |
        <a href="#">Producten</a>
        |
        <a href="#">Login</a>
      </p>
      <p class="footer-copyright">Copyright © 2022 <strong>Rolex</strong> All rights reserved</p>
    </div>
    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Hasselt</span>
          Belgium</p>
      </div>
      <div>
        <i class="fa fa-phone"></i>
        <p>+32 412 34 56 78</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p>Help@rolex.com</p>
      </div>
    </div>
    <div class="footer-right">
      <p class="footer-about">
        <span>Over Rolex</span>
        Rolex is tegenwoordig te zien bij de meest prestigieuze sportevenementen, van golf, zeilen en tennis tot
        auto- en paardensport. Rolex draagt op een unieke en duurzame wijze bij aan cultuur, wetenschap en
        ontdekking over de hele wereld.</p>
      <div class="footer-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss">
$color_1: #ffffff;
$color_2: inherit;
$color_3: #8f9296;
$color_4: #92999f;
$color_5: #C28C02;
$background-color_1: #084E25;
$background-color_2: #33383b;
$background-color_3: #C28C02;

footer {
  bottom: 0;
}

.footer {
  background: $background-color_1;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 50px 50px 60px 50px;
  margin-top: 80px;
}

.footer-left {
  display: inline-block;
  vertical-align: top;
  width: 30%;
}

.footer-center {
  display: inline-block;
  vertical-align: top;
  width: 35%;
i {
  background: $background-color_2;
  color: $color_1;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}
i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}
p {
  display: inline-block;
  color: $color_1;
  vertical-align: middle;
  margin: 0;
span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
}
}

.footer-right {
  display: inline-block;
  vertical-align: top;
  width: 30%;
}

.footer-logo {
  width: 100px;
}

.footer-links {
  color: $color_1;
  margin: 20px 0 12px;
a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: $color_2;
&:hover {
   color: $color_5;
 }
}
}

.footer-copyright {
  color: $color_3;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

.footer-about {
  line-height: 20px;
  color: $color_4;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
span {
  display: block;
  color: $color_1;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
}

.footer-icons {
  margin-top: 25px;
a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: $background-color_2;
  border-radius: 2px;
  font-size: 20px;
  color: $color_1;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
&:hover {
   background: $background-color_3;
 }
}
}

@media (max-width: 880px) {
  .footer-left {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer-center {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  i {
    margin-left: 0;
  }
}
.footer-right {
  display: block;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
}
}
</style>