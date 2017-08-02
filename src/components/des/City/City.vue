<template>
  <div class="city">
    <city-banner :imgs="bannerImgs"></city-banner>
    <city-travels :desName="city.name" :travelsNum="city.travelsNum"></city-travels>
    <city-fun-ion></city-fun-ion>
    <city-map :cityName="`${city.name}地图`"></city-map>
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
    <des-bottom isWant="true"></des-bottom>
  </div>
</template>
<script>
  import CityBanner from '../../common/Banner.vue'
  import DesBottom from '../DesBottom.vue'
  import CityTravels from '../DesInfoTravels.vue'
  import CityFunIon from './CityFunIcon.vue'
  import CityMap from '../DesMap.vue'
  import CityTab from './CityTab.vue'
  import CityPlane from '../../StoreApp/scrollerItems.vue'
  import TitleMore from '../TitleMore.vue'
  import TravelEssentials from '../TravelEssentials.vue'

  export default {
    components: {
      CityBanner, DesBottom, CityTravels, CityFunIon, CityMap, CityTab, CityPlane, TitleMore, TravelEssentials
    },
    data () {
      return {
        bannerImgs: [
          '/static/images/content1.jpg',
          '/static/images/content2.jpg',
          '/static/images/content3.jpg',
          '/static/images/content4.jpg'
        ],
        city: {
          name: '沈阳',
          ename: 'Shenyang',
          goCount: 362,
          travelsNum: 3,
          scenics: [
            {
              name: '沈阳故宫',
              img: '/static/images/content1.jpg',
              price: 50
            },
            {
              name: '张氏帅府',
              img: '/static/images/content2.jpg',
              price: 30
            },
            {
              name: '沈阳植物园',
              img: '/static/images/content3.jpg',
              price: 30
            },
            {
              name: '九一八历史博物馆',
              img: '/static/images/content4.jpg',
              price: 10
            },
            {
              name: '沈阳怪坡',
              img: '/static/images/content2.jpg',
              price: 50
            },
            {
              name: '绿岛旅游度假区 ',
              img: '/static/images/content3.jpg',
              price: 150
            }
          ],
          planes: [
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            },
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            },
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            },
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            }
          ],
          visas: [
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            },
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            },
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            },
            {
              info: '北京直飞香港4-6天往返含税机票',
              img: '',
              price: 1198
            }
          ]
        }
      }
    }
  }
</script>
<style>
</style>
