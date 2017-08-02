<template>
  <div class="country">
    <country-banner :imgs="bannerImgs"></country-banner>
    <des-travels :desName="country.name" :travelsNum="country.travelsNum"></des-travels>
    <fun-icon></fun-icon>
    <div class="country-cities">
      <div class="title-bar">
        <span class="title">{{country.name}}城市</span>
        <img src="/static/images/des/des-icon2.png" class="des-arrow-icon">
        <span class="more" style="float: right">查看全部</span>
      </div>
      <div class="city-list">
        <a v-for="city in country.cities">
          <img :src="city.img"/>
          <div class="city-name"> {{city.name}}<br/>{{city.ename}} </div>
        </a>
      </div>
    </div>
    <city-tab :cityName="country.name"></city-tab>
    <title-more title="特价机票">
      <city-plane slot="content"></city-plane>
    </title-more>
    <title-more title="团游">
      <city-plane slot="content"></city-plane>
    </title-more>
    <country-bottom isWant="true"></country-bottom>
  </div>
</template>
<script>
  import CountryBanner from '../../common/Banner.vue'
  import DesTravels from '../DesInfoTravels.vue'
  import FunIcon from './CountryFunIcon.vue'
  import CountryBottom from '../DesBottom.vue'
  import TitleMore from '../TitleMore.vue'
  import CityPlane from '../../StoreApp/scrollerItems.vue'
  export default {
    components: {CountryBanner, DesTravels, FunIcon, CountryBottom, TitleMore, CityPlane},
    data () {
      return {
        bannerImgs: [
          '/static/images/content1.jpg',
          '/static/images/content2.jpg',
          '/static/images/content3.jpg',
          '/static/images/content4.jpg'
        ],
        country: {
          name: '中国',
          ename: 'China',
          goCount: 661,
          travelsNum: 6,
          cities: [
            {
              name: '北京',
              ename: 'HongKong',
              img: '/static/images/content1.jpg'
            },
            {
              name: '澳门',
              ename: 'HongKong',
              img: '/static/images/content2.jpg'
            },
            {
              name: '沈阳',
              ename: 'HongKong',
              img: '/static/images/content3.jpg'
            },
            {
              name: '香港',
              ename: 'HongKong',
              img: '/static/images/content4.jpg'
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
  .country {
    background-color: #ececec;
  }

  .country .country-cities {
    background: white;
    margin-top: 15px;
  }

  .country .country-cities .city-list {
    padding: 0 6px 10px;
    height: 240px;
  }

  .country .country-cities .title-bar {
    height: 42px;
    line-height: 42px;
    border-bottom: 1px lightgrey solid;
    font-size: 16px;
    padding: 0 20px;
    color: #646464;
  }

  .country .country-cities a {
    position: relative;
    display: block;
    width: 50%;
    overflow: hidden;
    float: left;
    text-align: center;
    margin-top: 12px;
    font-size: 14px;
    padding: 0 6px;
    box-sizing: border-box;
  }

  .country .city-name {
    position: absolute;
    font-size: 13px;
    top: 0;
    left: 0;
    width: 100%;
    vertical-align: middle;
    text-align: center;
    vertical-align: middle;
  }

  .country .country-cities a img {
    display: block;
    width: 100%;
    height: 100px;
  }
</style>
