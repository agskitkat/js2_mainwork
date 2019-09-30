<template>
  <div class="product__filters">
    <div class="product__filter">
      <h4 class="filter__header">Trending now</h4>
      <div class="product__filter-trands">
        <a href="#do-filter">Bohemian</a>
        <span class="filter-trands__separator">|</span>
        <a href="#do-filter">Floral</a>
        <span class="filter-trands__separator">|</span>
        <a href="#do-filter">Lace</a>
      </div>
      <div class="product__filter-trands">
        <a href="#do-filter">Floral</a>
        <span class="filter-trands__separator">|</span>
        <a href="#do-filter">Lace</a>
        <span class="filter-trands__separator">|</span>
        <a href="#do-filter">Bohemian</a>
      </div>
    </div>
    <div class="product__filter">
      <h4 class="filter__header">Size </h4>
      <div class="product__filter-size">

        <label class="container_checkbox">xxs
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>

        <label class="container_checkbox">xs
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>

        <label class="container_checkbox">s
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>

        <label class="container_checkbox">m
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>

        <label class="container_checkbox">l
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>

        <label class="container_checkbox">xl
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>

        <label class="container_checkbox">xxl
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>

      </div>
    </div>
    <div class="product__filter">
      <h4 class="filter__header">pRICE</h4>
      <div class="product__filter-price">
        <div class="product__price-range">
          <div class="price-range__start" style="left:10%;"></div>
          <div class="price-range__progress" style="left:10%;right:50%;"></div>
          <div class="price-range__stop" style="right:50%;"></div>
        </div>
        <div class="product__price-values">
          <span class="price-values__min"> $52</span>
          <span class="price-values__max"> $400 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bs-cp-filters"
    }
</script>

<style lang="scss">
  @import "../../scss/colors";
  @import "../../scss/styles/style_checkbox";
  @import "../../scss/styles/product__filters";
</style>
