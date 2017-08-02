<template>
  <div class="scenic-detail">
    <des-top :name="scenic.name"></des-top>
    <div class="details">

      <div class="address">
        <em>地址：</em>{{scenic.country}}{{scenic.city}}
      </div>

      <div class="ticket">
        <em>门票：</em>{{scenic.ticket}}
      </div>

      <div class="OpeningHours">
        <em>开放时间：</em>{{scenic.OpeningHours}}
      </div>
      <div class="transportation">
        <em>交通方式：</em>{{scenic.transportation}}
      </div>
      <div class="tip">
        <em>交通方式：</em>{{scenic.tip}}
      </div>
    </div>
  </div>
</template>
<script>
  import DesTop from '../DesTop.vue'
  export default {
    components: {DesTop},
    data () {
      return {
        scenic: {
          name: '北京故宫博物馆',
          ename: 'GuGong',
          img: '/static/images/content1.jpg',
          city: '北京',
          country: '中国',
          wantGoCount: 521,
          rank: 3,
          labels: ['景点', '美食'],
          info: '北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中',
          ticket: '旺季60元，淡季40元',
          transportation: '乘坐1路、2路、52路、59路、82路、99路、120路、126路、观光1线在天安门东站下车然后步行约900米到达午门。或，乘坐1路、5路、52路、99路、观光1线、夜1路、专2路公共汽车在“天安门西”下车，然后步行约1000米从午门进入。',
          OpeningHours: '8:30-17:00',
          tip: '故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。'
        }
      }
    }
  }
</script>
<style>

</style>
