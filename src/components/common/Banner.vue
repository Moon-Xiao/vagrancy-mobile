<template>
  <div class="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in imgs">
        <a href="#">
          <img :src="img"/>
        </a>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets">
      <span class="swiper-pagination-bullet"></span>
      <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
      <span class="swiper-pagination-bullet"></span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    props: {
      imgs: Array
    }
  }
</script>
<style>
  .banner {
    width: 100%;
    position: relative;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;

  }

  .banner .swiper-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    box-sizing: content-box;
  }

  .banner img {
    width: 414px;
    /*width: 100%;*/
    display: block;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: .3s;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10;
    bottom: 10px;
    left: 0;
    width: 100%;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }

  .index-film .swiper-pagination-bullet {
    opacity: .5;
    background: #fff;
    color: #fff;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
    color: #fff;
  }
</style>
