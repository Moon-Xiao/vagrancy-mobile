<template>
  <swiper class="banners" :class="{resizing}" :style="{height: height + 'px'}" ref="banner" :options="swiperOption">
    <swiper-slide v-for="img in imgs">
      <a>
        <div class="banner" :style="`background-image: url('${img}')`"></div>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        height: 200,
        startDrag: false,
        resizing: false
      }
    },
    computed: {
      swiperOption () {
        return {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: true
        }
      }
    },
    props: {
      imgs: Array,
      required: true
    },
    mounted () {
      window.addEventListener('touchmove', e => {
        if (!this.startDrag && document.body.scrollTop <= 0) {
          this.startDrag = e.touches[0].clientY
        } else if (this.startDrag) {
          this.height = 200 + (e.touches[0].clientY - this.startDrag) / 3
          e.preventDefault()
        }
        if (this.height < 200) {
          this.height = 200
          this.startDrag = false
        }
      }, {passive: false})
      window.addEventListener('touchend', () => {
        if (this.startDrag) {
          this.resizing = true
          this.height = 200
          this.startDrag = false
          setTimeout(() => {
            this.resizing = false
          }, 200)
        }
      }, false)
    }
  }
</script>
<style scoped>
  .banner {
    background-position: center;
    background-size: cover;
    height: 100%;
  }

  .banners.resizing {
    transition: height 200ms;
    height: 200px;
  }

</style>
<style>
  .banners .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 0.5);
  }

</style>
