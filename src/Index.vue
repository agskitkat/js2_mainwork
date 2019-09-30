<template>
  <div>
    <bs-cp-header></bs-cp-header>
    <bs-cp-nav></bs-cp-nav>

    <bs-cp-banner></bs-cp-banner>
    <bs-cp-fetured></bs-cp-fetured>
    <bs-cp-sale></bs-cp-sale>

    <bs-footer-subscribe></bs-footer-subscribe>
    <bs-cp-footer></bs-cp-footer>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            routhParam () {
                return this.$route.params
            }
        },
        mounted() {
            console.log(this.routhParam());
        }
    }
</script>

<style lang="scss">
  @import "scss/colors";
  @import "./scss/style.scss";
  @import "./scss/styles/dropdown";
  @import "./scss/lib/fontawesome";
</style>
