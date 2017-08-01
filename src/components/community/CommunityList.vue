<template>
  <div class="com-list">
    <div class="tag-list">
      <ul>
        <li v-for="(tag,index) in tags" v-bind:class="{selected:nowTag===index}" @click="nowTag=index">{{tag}}</li>
      </ul>
    </div>
    <div class="community-tag">
      <ul>
        <li v-for="community in communities">
          <a >
            <img :src="community.img"/>
            <div class="comm-name"> {{community.name}}<div class="info"> {{community.info}}</div> </div>
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
        nowTag: 0,
        tags: ['推荐', '兴趣', '亚洲', '欧洲', '美洲', '大洋洲', '非洲', '活动', '后院'],
        communities: [
          {img: '/static/images/content1.jpg', name: '曼谷', info: '在这里更多内容'},
          {img: '/static/images/content2.jpg', name: '杭州', info: '在这里更多内容'},
          {img: '/static/images/content3.jpg', name: '杭州', info: '在这里更多内容'},
          {img: '/static/images/content4.jpg', name: '澳门', info: '在这里更多内容'},
          {img: '/static/images/content5.jpg', name: '南京', info: '在这里更多内容'},
          {img: '/static/images/content1.jpg', name: '东京', info: '在这里更多内容'},
          {img: '/static/images/content2.jpg', name: '杭州', info: '在这里更多内容'}
        ]
      }
    }
  }
</script>
<style>

  .com-list {
    display: flex;
    background-color: white;
  }

  .tag-list {
    color: dimgray;
    min-width: 90px;
    background-color: #ececec;
    overflow: scroll;
  }

  .community-tag {
    margin: 0 0 5% 4%;
  }
  .community-tag li {
    margin-left: 10px;
    padding: 10px 0;
    border-bottom: 1px #ececec solid;
    width: 100%;
  }

  .community-tag a img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    vertical-align: top;
  }

  .community-tag .comm-name {
    display: inline-block;
    margin-left: 10px;
    height: 100%;
    text-align: left;
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

  .community-tag .info{
    color: gray;
    margin-top: 5px;
    font-size: 14px;
  }

</style>
