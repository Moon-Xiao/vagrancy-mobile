<template>
  <div class="home-list">
    <div class="tags">
      <div class="tag-content">
        <a v-for="(tag,index) in tags" v-bind:class="{selected:nowTag===index}" @click="nowTag=index">{{tag}}</a>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in contents[nowTag]">
          <magic-image class="img" :src="item.img"></magic-image>
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
      <router-link to="/travel/list">
        <div class="more">
          查看更多 >
        </div>
      </router-link>
    </div>

  </div>
</template>
<script>
  import MagicImage from '../common/MagicImage.vue'
  export default {
    components: {MagicImage},
    data () {
      return {
        nowTag: 0,
        tags: ['全部', '航旅', '签证', '性价比', '亲子', '小众', '商城', '游记'],
        contents: [
          [
            {
              type: '发现',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '【中国老司机 自驾游全球】',
              info: '夏威夷蜜月游（欧胡岛+大岛自驾）11天',
              img: '/static/images/home/8.jpg'
            },
            {
              type: '广告',
              img: '/static/images/home/9.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '11天的蜜月之旅',
              info: '可以在丛林里冒险、可以在火山熔岩上徒步，还可以登雪山滑雪',
              img: '/static/images/home/10.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/11.jpg',
              title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '温馨的民宿，感受当地慵懒的生活方式',
              info: '威基基海滩、钻石头山、恐龙湾、珍珠港、古兰尼牧场等，还有特色游玩项目比如亚特兰蒂斯',
              img: '/static/images/home/12.jpg'
            }
          ],
          [
            {
              type: '发现',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/1.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '遇上了别样的贝加尔',
              info: '不像夏日那样热烈旖旎、也没有深冬的刚毅凛冽，介于二者之间，亦或是冰与火兼而有之。',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '广告',
              img: '/static/images/home/3.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/4.jpg',
              title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '玩美计划——夏威夷蜜月游',
              info: '冒纳凯Mauna Kea看了云海日落和漫天繁星，去火山公园看了流动的岩浆',
              img: '/static/images/home/5.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '【看樱花，别乱跑】',
              info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
              img: '/static/images/home/6.jpg'
            }
          ],
          [
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '【中国老司机 自驾游全球】',
              info: '夏威夷蜜月游（欧胡岛+大岛自驾）11天',
              img: '/static/images/home/8.jpg'
            },
            {
              type: '发现',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '带你去看济州岛的山海俊逸',
              info: '在济州岛快乐的那几日，半晴半雨，我们徜徉柔软的时光里，深呼吸。',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '广告',
              img: '/static/images/home/3.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '11天的蜜月之旅',
              info: '可以在丛林里冒险、可以在火山熔岩上徒步，还可以登雪山滑雪',
              img: '/static/images/home/10.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/11.jpg',
              title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '温馨的民宿，感受当地慵懒的生活方式',
              info: '威基基海滩、钻石头山、恐龙湾、珍珠港、古兰尼牧场等，还有特色游玩项目比如亚特兰蒂斯',
              img: '/static/images/home/12.jpg'
            }
          ],
          [
            {
              type: '广告',
              img: '/static/images/home/3.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/4.jpg',
              title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
            },
            {
              type: '发现',
              title: '火山村民宿',
              info: '火山村民宿地理位置比较好，距离大岛火山公园只有5分钟车程',
              img: '/static/images/home/1.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '带你去看济州岛的山海俊逸',
              info: '在济州岛快乐的那几日，半晴半雨，我们徜徉柔软的时光里，深呼吸。',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '【看樱花，别乱跑】',
              info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
              img: '/static/images/home/6.jpg'
            }
          ],
          [
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/5.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '【看樱花，别乱跑】',
              info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
              img: '/static/images/home/6.jpg'
            },
            {
              type: '发现',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/1.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '广告',
              img: '/static/images/home/3.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/4.jpg',
              title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '带你去看济州岛的山海俊逸',
              info: '在济州岛快乐的那几日，半晴半雨，我们徜徉柔软的时光里，深呼吸。',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '【看樱花，别乱跑】',
              info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
              img: '/static/images/home/6.jpg'
            }
          ],
          [
            {
              type: '发现',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/11.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '西伯利亚的冰与火之歌',
              info: '旅馆的窗子放眼整个村子，据说这里是西伯利亚最环保的几处住宿地。',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '广告',
              img: '/static/images/home/3.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/4.jpg',
              title: '潜入蓝梦的海！villa出去左手边的小海滩'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '你，见过巴厘岛的海吗？',
              info: '时而狂妄汹涌，时而温柔恬静,变幻莫测的蓝，捉摸不透的澈',
              img: '/static/images/home/5.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '这些是我见过的巴厘岛海的样子',
              info: '我将它每一种样子，都印记在心里',
              img: '/static/images/home/6.jpg'
            }
          ],
          [

            {
              type: '广告',
              img: '/static/images/home/13.jpg'
            },

            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '乌布除了镇上餐厅比较集中',
              info: '印尼菜＋西式简餐，很小的家庭厨房，制作出的也是家庭味道',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '带你去看济州岛的山海俊逸',
              info: '在济州岛快乐的那几日，半晴半雨，我们徜徉柔软的时光里，深呼吸。',
              img: '/static/images/home/2.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/4.jpg',
              title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/5.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '【看樱花，别乱跑】',
              info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
              img: '/static/images/home/6.jpg'
            },
            {
              type: '发现',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/1.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '【看樱花，别乱跑】',
              info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
              img: '/static/images/home/6.jpg'
            }
          ],
          [
            {
              type: '发现',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/9.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/12.jpg'
            },
            {
              type: '广告',
              img: '/static/images/home/3.jpg'
            },
            {
              type: '商城',
              img: '/static/images/home/14.jpg',
              title: '最后几天买二送一，3K+玩转免签七色海，暑期价中的清流'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content5.jpg',
              title: '朋友圈那些美照的背后，都有一个男默女泪的真相',
              info: '每一条完美的朋友圈背后，都有一些不为人所知的故事',
              img: '/static/images/home/5.jpg'
            },
            {
              type: '游记',
              author: 'cc',
              authorImg: '/static/images/content6.jpg',
              title: '【看樱花，别乱跑】',
              info: '6入东京，东京其实很有趣（主线完，不定期更新吃喝玩乐）',
              img: '/static/images/home/16.jpg'
            }
          ]
        ]
      }
    }
  }
</script>
<style scoped>
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

  .home-list .img {
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
    z-index: 50;
    position: relative;
  }

  .home-list .author-name {
    margin: 0;
  }

  .home-list .more {
    background-color: white;
    color: #444;
    text-align: center;
    padding: 20px;
  }
</style>
