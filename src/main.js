import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages components
import Index from './Index.vue';
import Products from './Products.vue';

// Компоненты
import BsCpHeader from "./bs-cp-header.vue";
import BsCpCart from "./bs-cp-cart.vue";
import BsCpSearch from "./bs-cp-search.vue";
import BsCpNav from "./bs-cp-nav.vue";
import BsCpBanner from "./components/bs-cp-banner.vue";
import BsCpOffers from "./components/bs-cp-offers.vue";
import BsCpFetured from "./components/bs-cp-fetured.vue";
import BsCpSale from "./components/bs-cp-sale.vue";
import BsCpSubscribe from "./bs-footer-subscribe.vue";
import BsCpFooter from "./bs-cp-footer.vue";
// Компоненты Продукты
import BsCpNavigation from "./components/products/bs-cp-navigation.vue";
import BsCpCategorySidebar from "./components/products/bs-cp-category-sidebar.vue";
import BsCpFilers from "./components/products/bs-cp-filters.vue";
import BsCpSort from "./components/products/bs-cp-sort.vue";
import BsCpListProduct from "./components/products/bs-cp-list-product.vue";
import BsCpProductLead from "./components/products/bs-cp-product-lead.vue";
import BsCpProductsFooter from "./components/products/bs-cp-product-list-footer.vue";

// Компоненты
Vue.component('bs-cp-header', BsCpHeader);
Vue.component('bs-cp-cart', BsCpCart);
Vue.component('bs-cp-search', BsCpSearch);
Vue.component('bs-cp-nav', BsCpNav);
Vue.component('bs-cp-banner', BsCpBanner);
Vue.component('bs-cp-offers', BsCpOffers);
Vue.component('bs-cp-fetured', BsCpFetured);
Vue.component('bs-cp-sale', BsCpSale);
Vue.component('bs-footer-subscribe', BsCpSubscribe);
Vue.component('bs-cp-footer', BsCpFooter);

// Компоненты Продукты
Vue.component('bs-cp-navigation', BsCpNavigation);
Vue.component('bs-cp-category-sidebar', BsCpCategorySidebar);
Vue.component('bs-cp-filters', BsCpFilers);
Vue.component('bs-cp-sort', BsCpSort);
Vue.component('bs-cp-list-product', BsCpListProduct);
Vue.component('bs-cp-product-lead', BsCpProductLead);
Vue.component('bs-cp-product-list-footer', BsCpProductsFooter);

// Pages components
Vue.use(VueRouter);
const routes = [
  {path: '/', component: Index},
  {path: '/products/:category', component: Products},
];
const router = new VueRouter({
  routes
});
const app = new Vue({
  router
}).$mount('#app');

