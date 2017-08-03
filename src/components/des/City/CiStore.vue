<template>
  <div class="ci-shore">
    <div class="title">{{cityName}}当地商城</div>
    <store-main-nav></store-main-nav>
    <store-local-fun></store-local-fun>
    <store-flight-nav></store-flight-nav>
    <store-flight-content></store-flight-content>
  </div>
</template>
<script>
  import StoreMainNav from '../../StoreApp/StoreHome/StoreMainNav.vue'
  import StoreLocalFun from '../../StoreApp/StoreHome/StoreLocalFun.vue'
  import StoreFlightNav from '../../StoreApp/StoreFlight/StoreFlightNav.vue'
  import StoreFlightContent from '../../StoreApp/StoreFlight/StoreFlightContent.vue'
  export default {
    components: {StoreMainNav, StoreLocalFun, StoreFlightNav, StoreFlightContent},
    props: {
      cityName: Object
    }
  }
</script>
<style>
  .ci-shore {
    color: #444;
  }
  .ci-shore .title{
    text-align: center;
    padding:20px;
    font-size: 20px;
    font-weight: bold;
  }

  .ci-shore div {
    background-color: white !important;
  }

  .ci-shore a {
    color: #444;
  }

  .store-main-nav-container {
    height: 100px!important;
    overflow: hidden;
  }

  .store-flight-nav-container {
    margin-top: 15px;
  }
</style>
