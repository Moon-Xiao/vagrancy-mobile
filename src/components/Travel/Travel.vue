<template>
  <div class="travel">
    <travel-top></travel-top>
    <div class="travel-banner">
      <img :src="travel.bannerImg">
      <div class="title">
        <span :v-if="travel.top" class="top">置顶</span>
        {{travel.title}}</div>
    </div>
    <div class="travel-author">
      <div class="img author-img" :style="`background: url(${travel.authorImg}) no-repeat center`"></div>
      <div class="author-info">
        <div class="author-name">{{travel.author}}</div>
        <div class="pubtime">发布于2017-01-20 17:31</div>
      </div>
    </div>
    <router-link  to="/travel/list" class="travel-more">
      <span class="content">目的地的所有帖子</span>
      <i class="icon">> </i></router-link>
    <div class="travel-content">{{travel.content}}</div>
    <go-top></go-top>
  </div>
</template>
<script>
  import TravelTop from './TravelTop.vue'
  import GoTop from './GoTop.vue'
  export default {
    components: {TravelTop, GoTop},
    data () {
      return {
        travel: {
          bannerImg: '/static/images/travel/content6.jpg',
          top: true,
          title: '行走在北极圈的冰天雪地',
          author: '行走2017',
          authorImg: '/static/images/travel/content6.jpg',
          content: ''
        }
      }
    }
  }
</script>
<style scoped>
  .travel-banner {
    width: 100%;
    position: relative;
    height: 180px;
    overflow: hidden;
    color: #444;
    background-color: #F5F5F5;
  }

  .travel-banner img {
    width: 100%;
    height: 180px;
  }
  .travel-banner .title {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    padding: 15px;
    color: white;
    font-weight: bold;
    font-size: 22px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .travel-banner .top{
    background: #ff7466;
    font-size: 18px;
    font-weight: 400;
    padding: 3px 5px;
  }
   .travel-author{
    font-size: 12px;
    background: #fff;
    padding: 12px 20px;
    border-bottom: 1px solid #ededed;
    color: #bfbfbf;
  }
   .travel-author .author-img{
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
  }
  .travel-author .author-info{
    display: inline-block;
    line-height: 20px;
    vertical-align: middle;
    margin-left: 10px;
  }
  .travel-author .author-info .author-name {
    color: black;
    font-size: 16px;
  }
  .travel-more{
    display: block;
    color: #0cbf79;
    font-size: 14px;
    line-height: 44px;
    height: 44px;
    border-bottom: 1px solid #d9d9d9;
    position: relative;
    background: #fff;
    padding:0 20px;
  }
  .travel-more .icon {
    float: right;
    font-size: 10px;
    vertical-align: -2px;
    margin-right: 20px;
  }
</style>
