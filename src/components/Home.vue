<template>
  <div class="home">
    <home-banner></home-banner>
    <home-search></home-search>
    <recommendation></recommendation>
    <home-slider></home-slider>
    <home-list></home-list>
  </div>
</template>
<script>
  import HomeBanner from './home/HomeBanner.vue'
  import Recommendation from './home/Recommendation.vue'
  import HomeSearch from './home/HomeSearch.vue'
  import HomeSlider from './home/HomeSlider.vue'
  import HomeList from './home/HomeList.vue'
  export default {
    components: {HomeBanner, Recommendation, HomeSearch, HomeSlider, HomeList},
    data () {
      return {}
    }
  }
</script>
<style>
</style>
