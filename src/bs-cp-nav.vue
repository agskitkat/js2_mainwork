<template>
  <nav>
    <ul class="menu">
      <li class="menu_list">
        <router-link to="/" class="menu__link">Home</router-link>
      </li>
      <li class="menu_list">
        <router-link to="/products/man/" class="menu__link">Man</router-link>
        <div class="dropdown">
          <nav class="dropdown__container">
            <div class="dropdown__col">
              <h3>Women</h3>
              <ul>
                <li><a href="product.html">Dresses</a></li>
                <li><a href="product.html">Tops</a></li>
                <li><a href="product.html">Sweaters/Knits</a></li>
                <li><a href="product.html">Jackets/Coats</a></li>
                <li><a href="product.html">Blazers</a></li>
                <li><a href="product.html">Denim</a></li>
                <li><a href="product.html">Leggings/Pants</a></li>
                <li><a href="product.html">Skirts/Shorts</a></li>
                <li><a href="product.html">Accessories</a></li>
              </ul>
              <h3>Men</h3>
              <ul>
                <li><a href="product.html">Tees/Tank tops</a></li>
                <li><a href="product.html">Shirts/Polos</a></li>
                <li><a href="product.html">Sweaters</a></li>
                <li><a href="product.html">Sweatshirts/Hoodies</a></li>
                <li><a href="product.html">Blazers</a></li>
                <li><a href="product.html">Jackets/vests</a></li>
              </ul>
            </div>
            <div class="dropdown__col">
              <h3>Men</h3>
              <ul>
                <li><a href="product.html">Tees/Tank tops</a></li>
                <li><a href="product.html">Shirts/Polos</a></li>
                <li><a href="product.html">Sweaters</a></li>
                <li><a href="product.html">Sweatshirts/Hoodies</a></li>
                <li><a href="product.html">Blazers</a></li>
                <li><a href="product.html">Jackets/vests</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </li>
      <li class="menu_list"><router-link to="/products/women/" class="menu__link">Women</router-link></li>
      <li class="menu_list"><router-link to="/products/kids/" class="menu__link">Kids</router-link></li>
      <li class="menu_list"><router-link to="/products/accoseriese/" class="menu__link">Accoseriese</router-link></li>
      <li class="menu_list"><router-link to="/products/featured/" class="menu__link">Featured</router-link></li>
      <li class="menu_list"><router-link to="/products/hot-deals/" class="menu__link">Hot Deals</router-link></li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "bs-cp-nav"
    }
</script>

<style lang="scss" scoped>
  @import "scss/styles/menu.scss";
</style>
