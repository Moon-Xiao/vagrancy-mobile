<template>
  <swiper class="function-icon" :options="swiperOption">
    <swiper-slide v-for="i in parseInt(functions.length/8 + 1)">
        <ul>
          <li v-for="(f,index) in functions.slice((i-1)*8, i*8)">
            <a>
              <img :src="`/static/images/des/icon/city${(i-1) * 8 + (index+1)}.png`"/>
              <span>{{f}}</span>
            </a>
          </li>
        </ul>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
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
        functions: ['景点玩乐', '美食', '城市指南', '特惠酒店', '游记攻略', '交通', '当地玩乐', '特价机票',
          '门票票价', 'WIFI电话卡', '签证', '结伴出行', '行程路线', '问答']
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
