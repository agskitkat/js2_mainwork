<template>
  <section class="sale container">
    <div class="sale__banner" style="background: url('/src/img/banner/women.png')">
      <div class="sale__text">
        <h3>30% <span class="sale__text_pink">OFFER</span></h3>
        <h4>FOR WOMEN</h4>
      </div>
    </div>
    <div class="sale__solutions">

      <article class="sale__solution">
        <div class="solution__header">
          <div class="solution__image">
            <img src="/src/img/delivery.svg" alt="" class="solution__img">
          </div>
          <h3 class="solution__header">Free Delivery</h3>
        </div>
        <p class="solution__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>

      <article class="sale__solution">
        <div class="solution__header">
          <div class="solution__image">
            <img src="/src/img/sale.svg" alt="" class="solution__img">
          </div>
          <h3 class="solution__header">Sales & discounts</h3>
        </div>
        <p class="solution__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>

      <article class="sale__solution">
        <div class="solution__header">
          <div class="solution__image">
            <img src="/src/img/crown.svg" alt="" class="solution__img">
          </div>
          <h3 class="solution__header">Quality assurance</h3>
        </div>
        <p class="solution__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>

    </div>
  </section>
</template>

<script>
    export default {
        name: "bs-cp-sale"
    }
</script>

<style lang="scss">
  @import "../scss/colors";
  @import "../scss/styles/sale";
</style>
