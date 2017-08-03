<template>
  <div class="city-index">
    <city-banner :imgs="bannerImgs"></city-banner>
    <city-travels :desName="city.name" :travelsNum="city.travelsNum"></city-travels>
    <city-fun-ion></city-fun-ion>
    <city-map :content="`${city.name}地图`"></city-map>
    <div class="city-top">
    </div>
    <city-tab :cityName="city.name"></city-tab>
    <title-more title="特价机票">
      <city-plane slot="content"></city-plane>
    </title-more>
    <title-more title="团游">
      <city-plane slot="content"></city-plane>
    </title-more>
    <travel-essentials></travel-essentials>
  </div>
</template>
<script>
  import CityBanner from '../../common/Banner.vue'
  import CityTravels from '../DesInfoTravels.vue'
  import CityFunIon from './CityFunIcon.vue'
  import CityMap from '../DesMap.vue'
  import CityTab from './CityTab.vue'
  import CityPlane from '../../StoreApp/scrollerItems.vue'
  import TitleMore from '../TitleMore.vue'
  import TravelEssentials from '../TravelEssentials.vue'

  export default {
    components: {
      CityBanner, CityTravels, CityFunIon, CityMap, CityTab, CityPlane, TitleMore, TravelEssentials
    },
    data () {
      return {
        bannerImgs: [
          '/static/images/content1.jpg',
          '/static/images/content2.jpg',
          '/static/images/content3.jpg',
          '/static/images/content4.jpg'
        ]
      }
    },
    props: {
      city: Object
    }
  }
</script>
<style>
</style>
