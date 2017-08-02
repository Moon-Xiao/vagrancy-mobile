<template>
  <div class="store-container">
    <store-roller></store-roller>
    <store-main-nav></store-main-nav>
    <store-local-fun></store-local-fun>
    <store-ad></store-ad>
    <store-selected-discount></store-selected-discount>
    <div class="hot-sight-top">
      <div class="top-title">热门专题</div>
    </div>
    <store-hot-sight></store-hot-sight>
    <store-journal></store-journal>
    <store-hot-sight></store-hot-sight>
    <store-hot-sight></store-hot-sight>
    <store-guess></store-guess>
  </div>
</template>

<script>
  import StoreRoller from './StoreHome/StoreRoller.vue'
  import StoreMainNav from './StoreHome/StoreMainNav.vue'
  import StoreLocalFun from './StoreHome/StoreLocalFun.vue'
  import StoreAd from './StoreHome/StoreAd.vue'
  import StoreSelectedDiscount from './StoreHome/StoreSelectedDiscount.vue'
  import StoreHotSight from './StoreHome/StoreHotSight.vue'
  import StoreJournal from './StoreHome/StoreJournal.vue'
  import StoreGuess from './StoreHome/StoreGuess.vue'

  export default {
    components: {
      StoreRoller,
      StoreMainNav,
      StoreLocalFun,
      StoreAd,
      StoreSelectedDiscount,
      StoreHotSight,
      StoreJournal,
      StoreGuess
    }
  }
</script>

<style>
  .store-container {
    background-color: #F5F5F5;
    overflow: hidden;
    margin-bottom: 60px;
  }

  .hot-sight-top {
    margin-top: 8px;
    height: 60px;
    background-color: rgb(250, 250, 250);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #333333;
  }
</style>
