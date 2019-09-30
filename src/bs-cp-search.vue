<template>
  <form action="" class="search">
    <div class="search__browse">
      Browse<img class="search__arrow" src="/src/img/arrow.png" alt="">
      <div class="dropdown">
        <nav>
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
        </nav>
      </div>
    </div>
    <div class="search__input-holder">
      <input type="text" class="search__input" placeholder="Search for Item...">
    </div>
    <div class="search__button-holder">
      <button class="btn search__button">
        <img class="btn-img" src="/src/img/search.png">
      </button>
    </div>
  </form>
</template>

<script>
    export default {
        name: "bs-cp-search",
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>
