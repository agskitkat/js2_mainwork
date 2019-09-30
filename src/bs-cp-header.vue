<template>
  <header class="header">
    <div class="container header__row">
      <div class="header__block">
        <a href="/" class="header__logo">
          <img src="/src/img/logo.png" alt="">BRAN<span class="logo_d">D</span>
        </a>

        <bs-cp-search></bs-cp-search>

      </div>
      <div class="header__block">
        <bs-cp-cart></bs-cp-cart>

        <button class="header__account-btn">
          My Account <i class="fas fa-sort-down account-btn__arrow"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "bs-cp-header",
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss">
  @import "./scss/colors";
  @import "./scss/styles/header";
</style>
