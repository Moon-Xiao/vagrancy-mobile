<template>
  <div class="home-slider">
    <img-title-scroll :sliders="slidertitle"></img-title-scroll>
  </div>
</template>
<script>
  import ImgTitleScroll from '../common/ImgTitleScroll.vue'
  export default {
    components: {ImgTitleScroll},
    data () {
      return {
        slidertitle: [
          {
            img: '/static/images/slider1 300_200.jpg',
            title: '鹅銮鼻公园'
          },
          {
            img: '/static/images/slider2 300_200.jpg',
            title: '垦丁大街'
          },
          {
            img: '/static/images/slider3 300_200.jpg',
            title: '七星潭'
          },
          {
            img: '/static/images/slider4 300_200.jpg',
            title: '高雄捷运美丽岛站'
          }
        ]
      }
    }
  }
</script>
<style>
  .home-slider {
    width: 100%;
    margin: 10px 0;
    overflow: scroll;
  }

  .home-slider .title {
    width: 250%;
    margin: 0 10px;
    list-style: none;
  }

  .home-slider .title a {
    float: left;
    text-decoration: none;
    margin-right: 10px;
  }

  .home-slider img {
    height: 100px;
  }

  .home-slider p {
    margin: 2px 0;
  }
</style>
