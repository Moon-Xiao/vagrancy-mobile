<template>
  <div class="store-flight-container">
    <store-search></store-search>
    <store-flight-nav></store-flight-nav>
    <store-flight-content></store-flight-content>
  </div>
</template>

<script>
  import StoreSearch from './StoreFlight/StoreSearch.vue'
  import StoreFlightNav from './StoreFlight/StoreFlightNav.vue'
  import StoreFlightContent from './StoreFlight/StoreFlightContent.vue'
  export default {
    components: {
      StoreSearch,
      StoreFlightNav,
      StoreFlightContent
    }
  }
</script>

<style lang="less">
  .store-flight-container{
    background-color: #F5F5F5;
  }
</style>
