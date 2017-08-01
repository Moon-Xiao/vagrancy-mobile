<template>
  <div class="swiper-pagination swiper-pagination-bullets">
    <span v-for="i in pageAmount"
          v-bind:class="['swiper-pagination-bullet', {'swiper-pagination-bullet-active': i===nowPage}]"></span>
  </div>
</template>
<script>
  export default {
    props: {
      pageAmount: Number,
      nowPage: Number
    }
  }
</script>
<style>
  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: .3s;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10;
  }
  .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }
  .index-film .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
    color: #fff;
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
</style>
