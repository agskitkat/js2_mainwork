<template>
  <footer>
    <div class="container footer">
      <div class="footer__info">
        <div class="footer-info__about-brand">
          <router-link to="/" class="footer-info__logo">
            <img src="/src/img/logo.png" alt="">BRAN<span class="logo_d">D</span>
          </router-link>
          <div class="footer-info__text">

            <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>

            <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
          </div>
        </div>
        <div class="footer-info__menus">
          <nav class="footer-info__menu">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="" class="footer-info__link">Home</a></li>
              <li><a href="" class="footer-info__link">Shop</a></li>
              <li><a href="" class="footer-info__link">About</a></li>
              <li><a href="" class="footer-info__link">How It Works</a></li>
              <li><a href="" class="footer-info__link">Contact</a></li>
            </ul>
          </nav>
          <nav class="footer-info__menu">
            <h3>INFORMATION</h3>
            <ul>
              <li><a href="" class="footer-info__link">Tearms & Condition</a></li>
              <li><a href="" class="footer-info__link">Privacy Policy</a></li>
              <li><a href="" class="footer-info__link">How to Buy</a></li>
              <li><a href="" class="footer-info__link">How to Sell</a></li>
              <li><a href="" class="footer-info__link">Promotion</a></li>
            </ul>
          </nav>
          <nav class="footer-info__menu">
            <h3>SHOP CATEGORY</h3>
            <ul>
              <li><a href="" class="footer-info__link">Men</a></li>
              <li><a href="" class="footer-info__link">Women</a></li>
              <li><a href="" class="footer-info__link">Child</a></li>
              <li><a href="" class="footer-info__link">Apparel</a></li>
              <li><a href="" class="footer-info__link">Brows All</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom__copyright">© 2017 Brand All Rights Reserved.</div>
        <div class="footer-bottom__social-list">
          <a href="#" class="footer-bottom__social-link"><span class="fab fa-facebook-f"></span></a>
          <a href="#" class="footer-bottom__social-link"><span class="fab fa-twitter"></span></a>
          <a href="#" class="footer-bottom__social-link"><span class="fab fa-linkedin-in"></span></a>
          <a href="#" class="footer-bottom__social-link"><span class="fab fa-pinterest-p"></span></a>
          <a href="#" class="footer-bottom__social-link"><span class="fab fa-google-plus-g"></span></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "bs-cp-footer"
    }
</script>

<style lang="scss">
  @import "scss/colors";
  @import "scss/styles/footer";
</style>
