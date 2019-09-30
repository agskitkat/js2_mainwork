<template>
  <div class="fetured__footer">
    <div class="fetured__pagination">
      <nav>
        <ul>
          <li class="pagination__page_disabled"><a href=""><i class="fas fa-chevron-left"></i></a></li>
          <li class="pagination__page_current"><a href="#1">1</a></li>
          <li><a href="#2">2</a></li>
          <li><a href="#3">3</a></li>
          <li><a href="#4">4</a></li>
          <li><a href="#5">5</a></li>
          <li><a href="#6">6</a></li>
          <li class="pagination__page_last"><a href="#20">20</a></li>
          <li><a href=""><i class="fas fa-chevron-right"></i></a></li>
        </ul>
      </nav>
    </div>
    <div class="fetured__view-all">
      <a class="fetured__view-all-btn" href="product.html">View All</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bs-cp-product-list-footer"
    }
</script>

<style scoped>

</style>
