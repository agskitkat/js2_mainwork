<template>
  <div class="navigation">
    <div class="container">
      <h1 class="navigation__header">New Arrivals</h1>
      <nav class="navigation__breadcrumbs">
        <ul>
          <li> <router-link to="/">Home</router-link></li>
          <li><router-link to="/products/man">Men</router-link></li>
          <li><router-link to="/products/new-arrivals">New Arrivals</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bs-cp-navigation"
    }
</script>

<style lang="scss">
  @import "../../scss/colors";
  @import "../../scss/styles/product_navigation";
</style>
