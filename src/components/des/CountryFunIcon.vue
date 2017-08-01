<template>
  <div class="function-icon">
    <div class="page1 slide">
      <ul>
        <li v-for="(f,index) in functions" v-if="index<8">
          <a>
            <img :src="`/static/images/des/icon/country${index+1}.png`"/>
            <span>{{f}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets">
      <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
      <span class="swiper-pagination-bullet"></span></div>
    <div></div>
    <div class="page2 slide">
      <ul>
        <li v-for="(f,index) in functions" v-if="index>=8">
          <a>
            <img :src="`/static/images/des/icon/country${index+1}.png`"/>
            <span>{{f}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        functions: ['国家指南', '签证', '游记攻略', '行程路线', '自由行', '特价机票', 'WIFI电话卡', '自驾租车', '问答', '社区']
      }
    }
  }
</script>
<style>
  .function-icon {
    background-color: white;
    margin-top: 10px;
    border-top: 1px lightgrey solid;
    padding: 15px;
    position: relative;
    overflow: hidden;
    position: relative;
    display: flex;
    height: 100%;
  }

  .function-icon .slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .function-icon ul {
    width: 100%;
  }
  .function-icon ul li {
    display: inline-table;
    width: 25%;
    text-align: center;
    margin-bottom: 10px;
  }

  .function-icon ul li a {
    display: block;
    width: 100%;
  }

  .function-icon img {
    width: 50%;
    vertical-align: middle;
  }

  .function-icon ul li a span {
    display: block;
    height: 40px;
    line-height: 40px;
    width: 100%;
    /*color: #646464;*/
  }
</style>
