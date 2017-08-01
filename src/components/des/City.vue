<template>
  <div class="city">
    <city-banner :imgs="bannerImgs"></city-banner>
    <city-travels :desName="city.name" :travelsNum="city.travelsNum"></city-travels>
    <city-fun-cion></city-fun-cion>
    <div class="city-map">
      <div class="city-name">{{city.name}}地图</div>
    </div>
    <des-bottom isWant="true"></des-bottom>
  </div>
</template>
<script>
  import CityBanner from '../common/Banner.vue'
  import DesBottom from './DesBottom.vue'
  import CityTravels from './DesTravels.vue'
  import CityFunCion from './CityFunIcon.vue'
  export default {
    components: {CityBanner, DesBottom, CityTravels, CityFunCion},
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
  .city-map{
    background: url("/static/images/des/map.png");
    height: 100px;
    position: relative;
    color: #11BF79;
  }
  .city-map .city-name {
    background-color: white;
    position: absolute;
    top: 40px;
    left: 35%;
    padding: 3px 15px;
    height: 20px;
    border-radius: 20px;
    border:1.3px #11BF79 solid;
  }
</style>
