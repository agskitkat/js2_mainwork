<template>
  <div class="product__sorts">
    <div class="product__sort">
      <div class="sort__label">Sort By</div>
      <select>
        <option>Name</option>
        <option>Price</option>
      </select>
    </div>

    <div class="product__sort">
      <div class="sort__label">Show</div>
      <select>
        <option>64</option>
        <option>32</option>
        <option>09</option>
      </select>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bs-cp-fetured"
    }
</script>

<style lang="scss">
  @import "../../scss/colors";
  @import "../../scss/styles/product__sorts";
</style>
