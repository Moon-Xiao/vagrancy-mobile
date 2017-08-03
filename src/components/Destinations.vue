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
      <div class="hot-country" v-if="countries[nowTag].length>1">
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
        tags: ['热门城市', '人气海岛', '中国', '日韩朝', '东南亚', '亚洲其他', '欧洲', '北美洲', '大洋洲', '北美洲', '非洲', '南极洲'],
        cities: [
          [
            {img: '/static/images/des/des-list/content1.jpg', name: '北京', ename: 'Beijing'},
            {img: '/static/images/des/des-list/content2.jpg', name: '曼谷', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content3.jpg', name: '杭州', ename: 'Hangzhou'},
            {img: '/static/images/des/des-list/content4.jpg', name: '澳门', ename: 'Macao'},
            {img: '/static/images/des/des-list/content5.jpg', name: '南京', ename: 'Nanjing'},
            {img: '/static/images/des/des-list/content6.jpg', name: '东京', ename: 'Tokyo'},
            {img: '/static/images/des/des-list/content7.jpg', name: '沈阳', ename: 'Shengyang'}
          ],
          [
            {img: '/static/images/des/des-list/content15.jpg', name: '巴厘岛', ename: 'Bali'},
            {img: '/static/images/des/des-list/content16.jpg', name: '马尔代夫', ename: 'Maldives'},
            {img: '/static/images/des/des-list/content17.jpg', name: '杭州', ename: 'Hangzhou'},
            {img: '/static/images/des/des-list/content18.jpg', name: '上海', ename: 'ShangHai'},
            {img: '/static/images/des/des-list/content19.jpg', name: '巴黎', ename: 'Paris'},
            {img: '/static/images/des/des-list/content20.jpg', name: '东京', ename: 'Tokyo'}
          ],
          [
            {img: '/static/images/des/des-list/content11.jpg', name: '巴厘岛', ename: 'Bali'},
            {img: '/static/images/des/des-list/content21.jpg', name: '马尔代夫', ename: 'Maldives'},
            {img: '/static/images/des/des-list/content13.jpg', name: '杭州', ename: 'Hangzhou'},
            {img: '/static/images/des/des-list/content14.jpg', name: '上海', ename: 'ShangHai'},
            {img: '/static/images/des/des-list/content15.jpg', name: '巴黎', ename: 'Paris'},
            {img: '/static/images/des/des-list/content11.jpg', name: '东京', ename: 'Tokyo'}
          ],
          [
            {img: '/static/images/des/des-list/content13.jpg', name: '东京', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content15.jpg', name: '首尔', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content4.jpg', name: '大阪', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content1.jpg', name: '釜山', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content10.jpg', name: '横滨', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content9.jpg', name: '仁川', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content14.jpg', name: '名古屋', ename: 'Bangkok'}
          ],
          [
            {img: '/static/images/des/des-list/content11.jpg', name: '万象', ename: 'Bali'},
            {img: '/static/images/des/des-list/content21.jpg', name: '曼谷', ename: 'Maldives'},
            {img: '/static/images/des/des-list/content13.jpg', name: '吉隆坡', ename: 'Hangzhou'},
            {img: '/static/images/des/des-list/content14.jpg', name: '新加坡', ename: 'ShangHai'},
            {img: '/static/images/des/des-list/content15.jpg', name: '雅加达', ename: 'Paris'},
            {img: '/static/images/des/des-list/content11.jpg', name: '斯里巴加湾市', ename: 'Tokyo'}
          ]
        ],
        countries: [
          [
            {img: '/static/images/des/des-list/content6.jpg', name: '中国', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content5.jpg', name: '马来西亚', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content4.jpg', name: '日本', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content11.jpg', name: '越南', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content10.jpg', name: '马尔代夫', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content9.jpg', name: '韩国', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content14.jpg', name: '泰国', ename: 'Bangkok'}
          ],
          [
            {img: '/static/images/des/des-list/content20.jpg', name: '中国', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content21.jpg', name: '泰国', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content14.jpg', name: '马来西亚', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content15.jpg', name: '马尔代夫', ename: 'Bangkok'}
          ],
          [],
          [
            {img: '/static/images/des/des-list/content2.jpg', name: '日本', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content19.jpg', name: '韩国', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content4.jpg', name: '朝鲜', ename: 'Bangkok'}
          ],
          [
            {img: '/static/images/des/des-list/content20.jpg', name: '越南', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content8.jpg', name: '泰国', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content14.jpg', name: '印度尼西亚', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content21.jpg', name: '柬埔寨', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content9.jpg', name: '新加坡', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content11.jpg', name: '马来西亚', ename: 'Bangkok'},
            {img: '/static/images/des/des-list/content14.jpg', name: '缅甸', ename: 'Bangkok'}
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
    width: 100%;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
