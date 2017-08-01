<template>
  <div class="home-list">
    <div class="tags">
      <div class="tag-content">
        <a v-for="(tag,index) in tags" v-bind:class="{selected:nowTag===index}" @click="nowTag=index">{{tag}}</a>
      </div>
    </div>
    <ul>
      <li v-for="item in contents">
        <img :src="item.img"/>
        <span class="type-tag">{{item.type}}</span>
        <div v-if="item.type==='游记'" class="author">
          <img class="author-img" :src="item.authorImg">
          <p class="author-name">{{item.author}}</p>
        </div>
        <div class="content">

          <p class="title">{{item.title}}</p>
          <span v-if="item.info" class="info">{{item.info}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nowTag: 0,
        tags: ['全部', '航旅', '签证', '性价比', '亲子', '小众', '商城', '游记'],
        contents: [
          {
            type: '发现',
            title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
            info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
            img: '/static/images/content1.jpg'
          },
          {
            type: '游记',
            author: 'cc',
            authorImg: '/static/images/content5.jpg',
            title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
            info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
            img: '/static/images/content2.jpg'
          },
          {
            type: '广告',
            img: '/static/images/content5.jpg'
          },
          {
            type: '商城',
            img: '/static/images/content5.jpg',
            title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
          },
          {
            type: '游记',
            author: 'cc',
            authorImg: '',
            title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
            info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
            img: '/static/images/content2.jpg'
          }
        ]
      }
    }
  }
</script>
<style>
  .home-list {
    background-color: rgb(243, 244, 244);
  }

  .home-list .tags {
    text-align: center;
    overflow: scroll;
    width: 100%;
  }

  .home-list .tags .tag-content {
    width: 250%;
  }

  .home-list .tags a {
    float: left;
    width: 50px;
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
  }

  .home-list .tags li {
    width: 100px;
  }

  .home-list .tags .selected {
    color: cadetblue;
    box-sizing: border-box;
    border-bottom: 2px cadetblue solid;
  }

  .home-list li {
    background-color: white;
    position: relative;
    margin-bottom: 12px;
  }

  .home-list img {
    width: 100%;
    height: 150px;

  }

  .type-tag {
    position: absolute;
    background-color: cadetblue;
    color: white;
    font-size: 15px;
    padding: 5px;
    top: 10px;
    left: 0;
  }

  .home-list .content {
    padding: 10px;
  }

  .home-list .title {
    text-align: center;
    margin: 0 0 5px 0;
    font-weight: bold;
    font-size: 15px;
  }

  .home-list .info {
    color: gray;
    font-size: 10px;
  }

  .home-list .author {
    text-align: center;
  }

  .home-list .author-img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 2px white solid;
    margin: auto;
    margin-top: -30px;
  }

  .home-list .author-name {
    margin: 0;
  }
</style>
