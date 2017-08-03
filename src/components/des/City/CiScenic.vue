<template>
  <div class="ci-scenic">
    <des-list :scenics="scenics"></des-list>
  </div>
</template>
<script>
  import DesList from '../Deslist.vue'
  export default {
    components: {DesList},
    data () {
      return {
        scenics: [
          {img: '/static/images/des/des-list/content7.jpg', name: '巴厘岛', likeCount: 201, wentCount: 45, info: '沉淀心灵的仙境'},
          {img: '/static/images/des/des-list/content8.jpg', name: '马尔代夫', likeCount: 252, wentCount: 98, info: '迷人海岛，度假天堂'},
          {img: '/static/images/des/des-list/content13.jpg', name: '杭州', likeCount: 352, wentCount: 152, info: '是文艺小年轻的首选地'},
          {img: '/static/images/des/des-list/content18.jpg', name: '塞班', likeCount: 152, wentCount: 18, info: ' 美国纪念公园'},
          {img: '/static/images/des/des-list/content20.jpg', name: '洛杉矶 ', likeCount: 273, wentCount: 42, info: '好莱坞环球影城, 洛杉矶迪士尼'},
          {img: '/static/images/des/des-list/content10.jpg', name: '巴黎', likeCount: 102, wentCount: 42, info: '休闲购物两不误'},
          {img: '/static/images/des/des-list/content11.jpg', name: '东京', likeCount: 52, wentCount: 145, info: '夜景不可错过'},
          {img: '/static/images/des/des-list/content13.jpg', name: '南京路步行街', likeCount: 15, wentCount: 245, info: '在这里更多内容'},
          {img: '/static/images/des/des-list/content14.jpg', name: '东方明珠', likeCount: 152, wentCount: 220, info: '上海的标志性建筑'},
          {img: '/static/images/des/des-list/content17.jpg', name: '纽约', likeCount: 102, wentCount: 104, info: '上海的标志性建筑芬兰的主要港市纽约是一座世界级城市'},
          {img: '/static/images/des/des-list/content16.jpg', name: '旧金山', likeCount: 52, wentCount: 271, info: '融合了现代与古典的精致街道'},
          {img: '/static/images/des/des-list/content15.jpg', name: '拉斯维加斯', likeCount: 82, wentCount: 45, info: '以赌博业为中心'},
          {img: '/static/images/des/des-list/content16.jpg', name: '南京', likeCount: 95, wentCount: 251, info: '在这里更多内容'},
          {img: '/static/images/des/des-list/content11.jpg', name: '颐和园', likeCount: 219, wentCount: 302, info: '被誉为“皇家园林博物馆”'},
          {img: '/static/images/des/des-list/content14.jpg', name: '北海公园', likeCount: 152, wentCount: 85, info: '白塔巍峨，碧波荡漾'},
          {img: '/static/images/des/des-list/content11.jpg', name: '西雅图', likeCount: 52, wentCount: 36, info: '官方别名为翡翠之城'},
          {img: '/static/images/des/des-list/content14.jpg', name: '华盛顿', likeCount: 82, wentCount: 127, info: '是美国的政治中心'}
        ]
      }
    }
  }
</script>
<style>
</style>
