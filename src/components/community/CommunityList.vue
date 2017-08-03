<template>
  <div class="com-list">
    <div class="tag-list">
      <ul>
        <li v-for="(tag,index) in tags" v-bind:class="{selected:nowTag===index}" @click="nowTag=index">{{tag}}</li>
      </ul>
    </div>
    <div class="community-tag">
      <ul>
        <li v-for="community in communities[nowTag]">
          <a>
            <img :src="community.img"/>
            <div class="comm-name"> {{community.name}}
              <p class="info"> {{community.info}}</p>
            </div>
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
          [
            {img: '/static/images/des/des-list/content1.jpg', name: '曼谷', info: '如梦似幻的人间仙境'},
            {img: '/static/images/des/des-list/content2.jpg', name: '杭州', info: '在这里更多内容'},
            {img: '/static/images/des/des-list/content3.jpg', name: '厦门', info: '音乐之岛，老别墅，特色小店'},
            {img: '/static/images/des/des-list/content4.jpg', name: '澳门', info: '在这里更多内容'},
            {img: '/static/images/des/des-list/content5.jpg', name: '南京', info: '散慢得似乎静止的时光'},
            {img: '/static/images/des/des-list/content2.jpg', name: '杭州', info: '小资们最爱的迷失地之一'}
          ],
          [
            {img: '/static/images/des/des-list/content7.jpg', name: '巴厘岛', info: '沉淀心灵的仙境'},
            {img: '/static/images/des/des-list/content8.jpg', name: '马尔代夫', info: '迷人海岛，度假天堂'},
            {img: '/static/images/des/des-list/content13.jpg', name: '杭州', info: '是文艺小年轻的首选地'},
            {img: '/static/images/des/des-list/content9.jpg', name: '陆家嘴', info: '国内外首屈一指的金融商圈'},
            {img: '/static/images/des/des-list/content10.jpg', name: '巴黎', info: '休闲购物两不误'},
            {img: '/static/images/des/des-list/content11.jpg', name: '东京', info: '夜景不可错过'},
            {img: '/static/images/des/des-list/content12.jpg', name: '杭州', info: '名品汇聚的购物街区'}
          ],
          [
            {img: '/static/images/des/des-list/content13.jpg', name: '南京路步行街', info: '在这里更多内容'},
            {img: '/static/images/des/des-list/content2.jpg', name: '杭州', info: '在这里更多内容'},
            {img: '/static/images/des/des-list/content14.jpg', name: '东方明珠', info: '上海的标志性建筑'},
            {img: '/static/images/des/des-list/content15.jpg', name: '田子坊', info: '文艺小年轻的首选地'},
            {img: '/static/images/des/des-list/content16.jpg', name: '南京', info: '在这里更多内容'},
            {img: '/static/images/des/des-list/content11.jpg', name: '颐和园', info: '被誉为“皇家园林博物馆”'},
            {img: '/static/images/des/des-list/content14.jpg', name: '北海公园', info: '白塔巍峨，碧波荡漾'}
          ],
          [
            {img: '/static/images/des/des-list/content21.jpg', name: '赫尔辛基', info: '古典美与现代文明融为一体'},
            {img: '/static/images/des/des-list/content20.jpg', name: '罗瓦涅米 ', info: '全世界面积最大的城市之一'},
            {img: '/static/images/des/des-list/content4.jpg', name: '图尔库 Turku', info: '上海的标志性建筑芬兰的主要港市'},
            {img: '/static/images/des/des-list/content16.jpg', name: '伊纳里', info: '始建于1876'},
            {img: '/static/images/des/des-list/content1.jpg', name: '萨利色尔卡', info: '是地球上最北的旅游胜地'},
            {img: '/static/images/des/des-list/content14.jpg', name: '坦佩雷市', info: '北欧最大的内陆城市'}
          ],
          [
            {img: '/static/images/des/des-list/content18.jpg', name: '塞班', info: ' 美国纪念公园'},
            {img: '/static/images/des/des-list/content20.jpg', name: '洛杉矶 ', info: '好莱坞环球影城, 洛杉矶迪士尼'},
            {img: '/static/images/des/des-list/content17.jpg', name: '纽约', info: '上海的标志性建筑芬兰的主要港市纽约是一座世界级城市'},
            {img: '/static/images/des/des-list/content16.jpg', name: '旧金山', info: '融合了现代与古典的精致街道'},
            {img: '/static/images/des/des-list/content15.jpg', name: '拉斯维加斯', info: '以赌博业为中心'},
            {img: '/static/images/des/des-list/content11.jpg', name: '西雅图', info: '官方别名为翡翠之城'},
            {img: '/static/images/des/des-list/content14.jpg', name: '华盛顿', info: '是美国的政治中心'}
          ],
          [
            {img: '/static/images/des/des-list/content17.jpg', name: '纽约', info: '上海的标志性建筑芬兰的主要港市纽约是一座世界级城市'},
            {img: '/static/images/des/des-list/content16.jpg', name: '旧金山', info: '融合了现代与古典的精致街道'},
            {img: '/static/images/des/des-list/content11.jpg', name: '西雅图', info: '官方别名为翡翠之城'},
            {img: '/static/images/des/des-list/content14.jpg', name: '华盛顿', info: '是美国的政治中心'}
          ]
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
    width: 100%;
  }

  .community-tag li {
    margin-left: 10px;
    padding: 10px 0;
    border-bottom: 1px #ececec solid;
    width: 90%;
    box-sizing: border-box;
  }

  .community-tag li a {
    display: flex;
    padding-right: 25px;

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
    padding: 0 10px;
    height: 100%;
    text-align: left;
  }

  .tag-list li {
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-bottom: 1px gainsboro solid;
  }


  .tag-list li.selected {
    color: cadetblue;
    background-color: white;
  }

  .community-tag .info {
    width: 100%;
    box-sizing: border-box;
    color: gray;
    margin: 5px 0;
    font-size: 14px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-wrap: normal;
    overflow: hidden;
  }

</style>
