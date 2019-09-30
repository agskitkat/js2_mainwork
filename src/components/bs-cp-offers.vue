<template>
  <section class="container">
    <div class="offers">

      <div class="offers__col">
        <a href="product.html" class="offers__cell offers__cell_big" style="background-image: url('img/offer/offer_formen.png')">
          <div class="offers__text">
            <h4>HOT DEAL</h4>
            <h3>FOR MEN</h3>
          </div>
        </a>
        <a href="product.html" class="offers__cell offers__cell_small" style="background-image: url('img/offer/accesories.png')">
          <div class="offers__text">
            <h4>LUXIROUS & trendy</h4>
            <h3>ACCESORIES</h3>
          </div>
        </a>
      </div>

      <div class="offers__col">
        <a href="product.html" class="offers__cell offers__cell_small" style="background-image: url('img/offer/women.png')">
          <div class="offers__text">
            <h4>30% offer</h4>
            <h3>women</h3>
          </div>
        </a>
        <a href="product.html" class="offers__cell offers__cell_big" style="background-image: url('img/offer/forkids.png')">
          <div class="offers__text">
            <h4>new arrivals</h4>
            <h3>FOR kids</h3>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "bs-cp-offers"
    }
</script>

<style lang="scss">
  @import "../scss/colors";
  @import "../scss/styles/offers";
</style>
