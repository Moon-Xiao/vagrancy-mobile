<template>
  <div class="home-slider">
    <div class="content">
      <a v-for="slider in sliderContent">
        <img :src="slider.img">
        <p>{{slider.content}}</p>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        sliderContent: [
          {
            img: '/static/images/slider1 300_200.jpg',
            content: '鹅銮鼻公园'
          },
          {
            img: '/static/images/slider2 300_200.jpg',
            content: '垦丁大街'
          },
          {
            img: '/static/images/slider3 300_200.jpg',
            content: '七星潭'
          },
          {
            img: '/static/images/slider4 300_200.jpg',
            content: '高雄捷运美丽岛站'
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

  .home-slider .content {
    width: 250%;
    margin: 0 10px;
    list-style: none;
  }

  .home-slider .content a {
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
