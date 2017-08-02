<template>
  <div class="function-icon">
    <div class="page1 slide">
      <ul>
        <li v-for="(f,index) in functions" v-if="index<8">
          <a>
            <img :src="`/static/images/des/icon/city${index+1}.png`"/>
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
            <img :src="`/static/images/des/icon/city${index+1}.png`"/>
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
        functions: ['景点玩乐', '美食', '城市指南', '特惠酒店', '游记攻略', '交通', '当地玩乐', '特价机票',
          '门票票价', 'WIFI电话卡', '签证', '结伴出行', '行程路线', '问答']
      }
    }
  }
</script>
<style>
  .function-icon {
    background-color: white;
    margin-top: 10px;
    border-top: 1px lightgrey solid;
    position: relative;
    overflow: hidden;
    position: relative;
    display: flex;
    height: 100%;
  }

  .function-icon .slide {
    margin: 3%;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 94%;
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
