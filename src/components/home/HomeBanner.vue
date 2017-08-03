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
          '/static/images/slider1 300_200.jpg',
          '/static/images/slider2 300_200.jpg',
          '/static/images/slider3 300_200.jpg',
          '/static/images/slider4 300_200.jpg'
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
