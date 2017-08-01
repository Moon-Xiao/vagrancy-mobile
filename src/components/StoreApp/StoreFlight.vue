<template>
  <div class="store-flight-container">
    <store-flight-nav></store-flight-nav>
  </div>
</template>

<script>
  import StoreFlightNav from './StoreFlight/StoreFlightNav.vue'
  export default {
    components: {
      StoreFlightNav
    }
  }
</script>

<style lang="less">
  .store-flight-container{
    background-color: #F5F5F5;
  }
</style>
