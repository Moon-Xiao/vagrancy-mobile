<template>
  <div class="scenic-index">
    <des-top :name="scenic.name"></des-top>
    <div class="scenic-banner">
      <img :src="scenic.img">
      <div class="name">
        <div class="cname">{{scenic.name}}</div>
        <div class="ename">{{scenic.ename}}</div>
      </div>
    </div>
    <div class="ab">
      <div class="rank">
        在北京市景点中排名第{{scenic.rank}}
      </div>
      <div class="labels">
        <span class="label" v-for="label in scenic.labels">{{label}}</span></div>
    </div>
    <div class="look-info">
      <p class="info" v-bind:class="['info',{'all':lookAll}]">{{scenic.info}}</p>
      <div class="look-all" @click="lookAll=!lookAll">
        查看全部 <span v-if="lookAll">∧</span><span v-else>∨</span>
      </div>
    </div>
    <des-map content="查看地图"></des-map>
    <div class="details">
      <div class="details-info">
        <div class="address">
          <img class="icon" src="/static/images/des/icon/adress.svg"/>
          <em>地址：</em>{{scenic.country}} -> {{scenic.city}}
        </div>
        <div class="ticket">
          <img class="icon" src="/static/images/des/icon/ticket.svg"/>
          <em>门票：</em>{{scenic.ticket}}
        </div>
        <div class="OpeningHours">
          <img class="icon" src="/static/images/des/icon/open-door.svg"/>
          <em>开放时间：</em>{{scenic.OpeningHours}}
        </div>
        <div class="transportation">
          <img class="icon" src="/static/images/des/icon/bus.svg"/>
          <em>交通方式：</em>{{scenic.transportation}}
        </div>
        <div class="tip">
          <img class="icon" src="/static/images/des/icon/tip.svg"/>
          <em>提醒：</em>{{scenic.tip}}
        </div>
      </div>
      <router-link to="/detail">
        <div class="look-all">查看完整信息</div>
      </router-link>
    </div>
    <title-more title="附近酒店">
      <city-hotel slot="content"></city-hotel>
    </title-more>
    <title-more title="更多景点">
      <title-title-scroll slot="content" :sliders="others" ></title-title-scroll>
    </title-more>
  </div>
</template>
<script>
  import DesMap from '../DesMap.vue'
  import DesTop from '../DesTop.vue'
  import CityHotel from '../../StoreApp/scrollerItems.vue'
  import TitleMore from '../TitleMore.vue'
  import titleTitleScroll from '../../common/ImgTitleScroll.vue'
  export default {
    components: {DesMap, DesTop, CityHotel, TitleMore, titleTitleScroll},
    data () {
      return {
        lookAll: false,
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
        },
        others: [
          {
            title: '北京',
            img: '/static/images/des/content1.jpg'
          },
          {
            title: '广州',
            img: '/static/images/des/content1.jpg'
          },
          {
            title: '深圳',
            img: '/static/images/des/content1.jpg'
          },
          {
            title: '大连',
            img: '/static/images/des/content1.jpg'
          },
          {
            title: '南京',
            img: '/static/images/des/content1.jpg'
          },
          {
            title: '本溪',
            img: '/static/images/des/content1.jpg'
          },
          {
            title: '辽中',
            img: '/static/images/des/content1.jpg'
          },
          {
            title: '葫芦岛',
            img: '/static/images/des/content1.jpg'
          }
        ]
      }
    }
  }
</script>
<style>
  .scenic-index {
    font-size: 13px;
    line-height: 1.5;
  }

</style>
<style scoped>

  .scenic-banner {
    width: 100%;
    position: relative;
    height: 180px;
    overflow: hidden;
    color: #444;
    background-color: #F5F5F5;
  }

  .scenic-banner img {
    width: 100%;
    height: 180px;
  }

  .name {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }

  .name .cname {
    font-size: 20px;
  }

  .name .ename {
    font-size: 16px;
  }

  .ab {
    background-color: white;
    padding: 10px;
    font-size: 13px;
  }

  .ab .labels {
    width: 100%;
    margin-top: 10px;
    color: gray;
    font-size: 12px;
  }

  .ab .label {
    background-color: #F5F5F5;
    display: inline-block;
    height: 25px;
    padding: 0 10px;
    border-radius: 25px;
    line-height: 25px;
    margin-right: 10px;
  }

  .look-info {
    margin: 15px 0;
    background-color: white;
  }

  .info {
    padding: 15px 15px 0 15px;
    color: #444;
    overflow: scroll;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .info.all {
    height: auto;
    -webkit-line-clamp: 66;
  }

  .look-all {
    border: 1px #ececec solid;
    text-align: center;
    color: gray;
    padding: 10px;
    margin-top: 15px;
  }

  .details {
    background-color: white;

  }
  .details .details-info{
    padding: 20px 15px 5px 15px;
  }

  .details em {
    font-weight: bold;
    font-style: normal;
  }

  .details-info>div {
    margin-bottom: 15px;
  }

  .details .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    vertical-align: middle;
  }
</style>
