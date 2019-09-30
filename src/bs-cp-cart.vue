<template>
  <div class="header__cart-block">
    <a href="shopping-cart.html">
      <img class="header__cart-icon" src="/src/img/cart.svg" alt="">
    </a>
    <div class="header__cart cart">
      <div class="cart__dropdown">
        <div class="cart__item item">
          <img src="" alt="" class="item__img">
          <div class="item__info"></div>
          <div class="item__close"></div>
        </div>
        <div class="cart__total">
          <span class="cart__label">TOTAL</span>
          <span class="cart__sum">$500.00</span>
        </div>
        <div class="cart__action_checkout">Checkout</div>
        <div class="cart__action_go2cart">Go to cart</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bs-cp-cart"
    }
</script>

<style  lang="scss">
  @import "./scss/colors";
</style>
