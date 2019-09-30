<template>
  <div>
    <bs-cp-header></bs-cp-header>
    <bs-cp-nav></bs-cp-nav>

    <bs-cp-navigation></bs-cp-navigation>

    <div class="container product__layout">
        <bs-cp-category-sidebar></bs-cp-category-sidebar>
        <div class="product__content-layout">
          <bs-cp-filters></bs-cp-filters>
          <bs-cp-sort></bs-cp-sort>
          <bs-cp-list-product></bs-cp-list-product>
        </div>
    </div>

    <bs-cp-product-lead></bs-cp-product-lead>

    <bs-footer-subscribe></bs-footer-subscribe>
    <bs-cp-footer></bs-cp-footer>
  </div>
</template>

<script>
    export default {
        name: "Products",
        mounted() {
            console.log(this.$route.params);
        }
    }
</script>

<style lang="scss">
  @import "scss/styles/product__layout";
</style>
