<template>
  <swiper class="function-icon" :options="swiperOption">
    <swiper-slide v-for="i in parseInt(functions.length/8 + 1)">
      <div class="slide">
        <ul>
          <li v-for="(f,index) in functions.slice((i-1)*8, i*8)">
            <a>
              <img :src="`/static/images/des/icon/country${(i-1) * 8 + (index+1)}.png`"/>
              <span>{{f}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper-slide>
  </swiper>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        functions: ['国家指南', '签证', '游记攻略', '行程路线', '自由行', '特价机票', 'WIFI电话卡', '自驾租车', '问答', '社区']
      }
    },
    computed: {
      swiperOption () {
        return {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }

    }
  }

</script>
<style>
  .function-icon {
    background-color: white;
    margin-top: 10px;
    border-top: 1px lightgrey solid;
    padding: 15px 0;
    position: relative;
    overflow: hidden;
    display: flex;
    height: 100%;
  }

  .function-icon .slide {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .function-icon ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .function-icon ul li {
    width: 25%;
    text-align: center;
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
