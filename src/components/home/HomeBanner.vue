<template>
  <banner :imgs="banners"></banner>
</template>
<script>
  import Banner from '../common/Banner.vue'

  export default {
    components: {
      Banner
    },
    data () {
      return {
        banners: [
          '/static/images/home/1.jpg',
          '/static/images/home/2.jpg',
          '/static/images/home/3.jpg',
          '/static/images/home/4.jpg'
        ]
      }
    }
  }
</script>
<style>
  .home-banner {
    width: 100%;
    height: 200px;
  }

  .home-banner .image {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
  }

  .home-banner .swiper-pagination-bullet-active {
    background: rgba(255,255,255,0.5);
  }
</style>
