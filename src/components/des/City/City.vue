<template>
  <div class="city">
    <des-top :name="city.name"></des-top>
    <div class="ci-tabs">
      <div v-for="(tab,index) in tabs" @click="nowTab=index" v-bind:class="['tab',{'active':nowTab===index}]">
        {{tab}}
      </div>
    </div>
    <ci-index v-if="nowTab===0" :city="city"></ci-index>
    <ci-store v-if="nowTab===1" :cityName="city.name"></ci-store>
    <ci-hotel v-if="nowTab===2"></ci-hotel>
    <ci-scenic v-if="nowTab===3"></ci-scenic>
    <des-bottom isWant="true"></des-bottom>
  </div>
</template>
<script>
  import DesTop from '../DesTop.vue'
  import DesBottom from '../DesBottom.vue'
  import CiIndex from './CiIndex.vue'
  import CiStore from './CiStore.vue'
  import CiHotel from './CiHotel.vue'
  import CiScenic from './CiScenic.vue'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {
      DesBottom, DesTop, CiIndex, CiStore, CiHotel, CiScenic, swiper, swiperSlide
    },
    data () {
      return {
        nowTab: 0,
        tabs: ['攻略', '商城', '酒店', '收藏'],
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
  .ci-tabs{
    display: flex;
    justify-content: space-around;
    background-color: #11BF79;
    color: white;
    padding: 0 20px;
    text-align: center;
  }
  .ci-tabs .tab{
    padding: 10px 0;
  }
  .ci-tabs .active {
    border-bottom: 2px white solid;
  }
</style>
