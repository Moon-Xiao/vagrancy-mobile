<template>
  <div class="des-list">
    <div class="tag-list">
      <ul>
        <li v-for="(tag,index) in tags" v-bind:class="{selected:nowTag===index}" @click="nowTag=index">{{tag}}</li>
      </ul>
    </div>
    <div class="des-tag" style="background-color: white">
      <div class="hot-city">
        <div class="title">热门城市</div>
        <router-link to="/city" v-for="city in cities[nowTag]">
          <img :src="city.img"/>
          <div class="city-name"> {{city.name}}<br/>{{city.ename}} </div>
        </router-link>
      </div>
      <div class="hot-country">
        <div class="title">热门国家</div>
        <router-link to="/country" v-for="country in countries[nowTag]">
          <img :src="country.img"/>
          <div class="country-name">{{country.name}}<br/>{{country.ename}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nowTag: 0,
        tags: ['热门城市', '人气海岛', '中国', '日韩朝', '东南亚', '洲其他', '欧洲', '北美洲', '大洋洲', '北美洲', '非洲', '南极洲'],
        cities: [
          [

            {img: '/static/images/content12.jpg', name: '北京', ename: 'Beijing'},
            {img: '/static/images/content1.jpg', name: '曼谷', ename: 'Bangkok'},
            {img: '/static/images/content2.jpg', name: '杭州', ename: 'Hangzhou'},
            {img: '/static/images/content4.jpg', name: '澳门', ename: 'Macao'},
            {img: '/static/images/content5.jpg', name: '南京', ename: 'Nanjing'},
            {img: '/static/images/content1.jpg', name: '东京', ename: 'Tokyo'},
            {img: '/static/images/content2.jpg', name: '沈阳', ename: 'Shengyang'}
          ],
          [
            {img: '/static/images/content11.jpg', name: '巴厘岛', ename: 'Bali'},
            {img: '/static/images/content21.jpg', name: '马尔代夫', ename: 'Maldives'},
            {img: '/static/images/content13.jpg', name: '杭州', ename: 'Hangzhou'},
            {img: '/static/images/content14.jpg', name: '上海', ename: 'ShangHai'},
            {img: '/static/images/content15.jpg', name: '巴黎', ename: 'Paris'},
            {img: '/static/images/content11.jpg', name: '东京', ename: 'Tokyo'}
          ]
        ],
        countries: [
          [
            {img: '/static/images/content2.jpg', name: '中国', ename: 'Bangkok'},
            {img: '/static/images/content1.jpg', name: '泰国', ename: 'Bangkok'},
            {img: '/static/images/content2.jpg', name: '马来西亚', ename: 'Bangkok'},
            {img: '/static/images/content3.jpg', name: '日本', ename: 'Bangkok'},
            {img: '/static/images/content4.jpg', name: '越南', ename: 'Bangkok'},
            {img: '/static/images/content5.jpg', name: '马尔代夫', ename: 'Bangkok'},
            {img: '/static/images/content1.jpg', name: '韩国', ename: 'Bangkok'}
          ]

        ]
      }
    }
  }
</script>
<style>

  .des-list {
    display: flex;
  }

  .tag-list {
    color: dimgray;
    min-width: 100px;
    background-color: #F5F5F5;
    overflow: scroll;
  }

  .des-tag {
    padding: 0 0 5% 4%;
  }

  .des-tag .title {
    margin: 15px 0;
  }

  .des-tag .hot-city a {
    display: inline-table;
    width: 45%;
    height: 0;
    padding-top: 30%;
    margin: 0 5% 3% 0;
    position: relative;
  }

  .des-tag .hot-country a {
    display: inline-table;
    width: 45%;
    margin: 0 5% 3% 0;
    position: relative;
  }

  .hot-country img {
    width: 45%;
  }

  .hot-city a img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    vertical-align: top;
  }

  .hot-city a .city-name {
    position: absolute;
    font-size: 13px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
  }

  .hot-country .country-name {
    float: right;
    width: 50%;
    font-size: 12px;
  }

  .tag-list li {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px gainsboro solid;
  }

  .tag-list li.selected {
    color: cadetblue;
    background-color: white;
  }


</style>
