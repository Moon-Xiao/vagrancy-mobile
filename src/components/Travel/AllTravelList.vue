<template>
  <div class="travel-list">
    <l-m-top middle="最新精华游记"></l-m-top>
    <div class="tags">
      <div class="tag-content">
        <a v-for="(tag,index) in tags" v-bind:class="{selected:nowTag===index}" @click="nowTag=index">{{tag}}</a>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in travels">
          <template v-if="nowTag===0 || item.label===tags[nowTag]">
            <magic-image class="img" :src="item.img"></magic-image>
            <span class="label-tag">{{item.label}}</span>
            <div class="author">
              <img class="author-img" :src="item.authorImg">
              <p class="author-name">{{item.author}}</p>
            </div>
            <div class="content">
              <p class="title">{{item.title}}</p>
              <span class="info">{{item.info}}</span>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import LMTop from '../common/LMTop.vue'
  import MagicImage from '../common/MagicImage.vue'
  export default {
    components: {LMTop, MagicImage},
    data () {
      return {
        nowTag: 0,
        tags: ['全部', '景点', '美食', '购物', '活动'],
        travels: [
          {
            label: '美食',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '【中国老司机 自驾游全球】',
            info: '夏威夷蜜月游（欧胡岛+大岛自驾）11天',
            img: '/static/images/home/8.jpg'
          },
          {
            label: '购物',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '11天的蜜月之旅',
            info: '可以在丛林里冒险、可以在火山熔岩上徒步，还可以登雪山滑雪',
            img: '/static/images/home/10.jpg'
          },
          {
            label: '美食',
            author: 'cc',
            authorImg: '/static/images/content6.jpg',
            title: '温馨的民宿，感受当地慵懒的生活方式',
            info: '威基基海滩、钻石头山、恐龙湾、珍珠港、古兰尼牧场等，还有特色游玩项目比如亚特兰蒂斯',
            img: '/static/images/home/12.jpg'
          },
          {
            label: '景点',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '遇上了别样的贝加尔',
            info: '不像夏日那样热烈旖旎、也没有深冬的刚毅凛冽，介于二者之间，亦或是冰与火兼而有之。',
            img: '/static/images/home/2.jpg'
          },
          {
            label: '景点',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '玩美计划——夏威夷蜜月游',
            info: '冒纳凯Mauna Kea看了云海日落和漫天繁星，去火山公园看了流动的岩浆',
            img: '/static/images/home/5.jpg'
          },
          {
            label: '景点',
            author: 'cc',
            authorImg: '/static/images/content6.jpg',
            title: '【看樱花，别乱跑】',
            info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
            img: '/static/images/home/6.jpg'
          },
          {
            label: '活动',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '带你去看济州岛的山海俊逸',
            info: '在济州岛快乐的那几日，半晴半雨，我们徜徉柔软的时光里，深呼吸。',
            img: '/static/images/home/2.jpg'
          },
          {
            label: '景点',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '【中国老司机 自驾游全球】',
            info: '夏威夷蜜月游（欧胡岛+大岛自驾）11天',
            img: '/static/images/home/8.jpg'
          },
          {
            label: '美食',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '带你去看济州岛的山海俊逸',
            info: '在济州岛快乐的那几日，半晴半雨，我们徜徉柔软的时光里，深呼吸。',
            img: '/static/images/home/2.jpg'
          },
          {
            label: '购物',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '11天的蜜月之旅',
            info: '可以在丛林里冒险、可以在火山熔岩上徒步，还可以登雪山滑雪',
            img: '/static/images/home/10.jpg'
          },
          {
            label: '活动',
            author: 'cc',
            authorImg: '/static/images/content6.jpg',
            title: '温馨的民宿，感受当地慵懒的生活方式',
            info: '威基基海滩、钻石头山、恐龙湾、珍珠港、古兰尼牧场等，还有特色游玩项目比如亚特兰蒂斯',
            img: '/static/images/home/12.jpg'
          },
          {
            label: '购物',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '11天的蜜月之旅',
            info: '可以在丛林里冒险、可以在火山熔岩上徒步，还可以登雪山滑雪',
            img: '/static/images/home/10.jpg'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .travel-list {
    background-color: rgb(243, 244, 244);
  }

  .travel-list .tags {
    text-align: center;
    overflow: scroll;
    width: 100%;
  }

  .travel-list .tags .tag-content {
    width: 250%;
  }

  .travel-list .tags a {
    float: left;
    width: 50px;
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
  }

  .travel-list .tags li {
    width: 100px;
  }

  .travel-list .tags .selected {
    color: cadetblue;
    box-sizing: border-box;
    border-bottom: 2px cadetblue solid;
  }

  .travel-list li {
    background-color: white;
    position: relative;
    margin-bottom: 12px;
  }

  .travel-list .img {
    width: 100%;
    height: 150px;

  }

  .label-tag {
    position: absolute;
    background-color: cadetblue;
    color: white;
    font-size: 15px;
    padding: 5px;
    top: 10px;
    left: 0;
  }

  .travel-list .content {
    padding: 10px;
  }

  .travel-list .title {
    text-align: center;
    margin: 0 0 5px 0;
    font-weight: bold;
    font-size: 15px;
  }

  .travel-list .info {
    color: gray;
    font-size: 10px;
  }

  .travel-list .author {
    text-align: center;
  }

  .travel-list .author-img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 2px white solid;
    margin: auto;
    margin-top: -30px;
    z-index: 50;
    position: relative;
  }

  .travel-list .author-name {
    margin: 0;
  }

  .travel-list .more {
    background-color: white;
    color: #444;
    text-align: center;
    padding: 20px;
  }
</style>
