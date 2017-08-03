<template>
  <div class="ci-hotel">
    <img src="/static/images/des/city/hotel-temp.png">
    <title-more title="酒店推荐">
      <city-plane slot="content"></city-plane>
    </title-more>
  </div>
</template>
<script>
  import CityPlane from '../../StoreApp/scrollerItems.vue'
  import TitleMore from '../TitleMore.vue'
  export default {
    components: {CityPlane, TitleMore}
  }
</script>
<style scoped>
  .ci-hotel img{
    width: 100%;
  }
</style>
