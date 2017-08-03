<template>
  <div class="des-all-list">
    <des-list></des-list>
  </div>
</template>
<script>
  import DesList from './DesList.vue'
  export default {
    components: {DesList},
    data () {
      return {
        scenics: [
          {img: '/static/images/des/des-list/content7.jpg', name: '巴厘岛', info: '沉淀心灵的仙境'},
          {img: '/static/images/des/des-list/content8.jpg', name: '马尔代夫', info: '迷人海岛，度假天堂'},
          {img: '/static/images/des/des-list/content13.jpg', name: '杭州', info: '是文艺小年轻的首选地'},
          {img: '/static/images/des/des-list/content18.jpg', name: '塞班', info: ' 美国纪念公园'},
          {img: '/static/images/des/des-list/content20.jpg', name: '洛杉矶 ', info: '好莱坞环球影城, 洛杉矶迪士尼'},
          {img: '/static/images/des/des-list/content10.jpg', name: '巴黎', info: '休闲购物两不误'},
          {img: '/static/images/des/des-list/content11.jpg', name: '东京', info: '夜景不可错过'},
          {img: '/static/images/des/des-list/content13.jpg', name: '南京路步行街', info: '在这里更多内容'},
          {img: '/static/images/des/des-list/content14.jpg', name: '东方明珠', info: '上海的标志性建筑'},
          {img: '/static/images/des/des-list/content17.jpg', name: '纽约', info: '上海的标志性建筑芬兰的主要港市纽约是一座世界级城市'},
          {img: '/static/images/des/des-list/content16.jpg', name: '旧金山', info: '融合了现代与古典的精致街道'},
          {img: '/static/images/des/des-list/content15.jpg', name: '拉斯维加斯', info: '以赌博业为中心'},
          {img: '/static/images/des/des-list/content16.jpg', name: '南京', info: '在这里更多内容'},
          {img: '/static/images/des/des-list/content11.jpg', name: '颐和园', info: '被誉为“皇家园林博物馆”'},
          {img: '/static/images/des/des-list/content14.jpg', name: '北海公园', info: '白塔巍峨，碧波荡漾'},
          {img: '/static/images/des/des-list/content11.jpg', name: '西雅图', info: '官方别名为翡翠之城'},
          {img: '/static/images/des/des-list/content14.jpg', name: '华盛顿', info: '是美国的政治中心'}
        ]
      }
    }
  }
</script>
<style>
</style>
