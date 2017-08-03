<template>
  <div class="travel-top">
    <top>
      <div slot="left" class="left">
        <router-link to="">
          <div class="back-img"></div>
        </router-link>
      </div>
      <div slot="right" class="icons">
        <div class="like-img" @click="liked=!liked">
          <svg-image v-if="!liked" src="/static/images/icon/like-w.svg"></svg-image>
          <svg-image v-if="liked" src="/static/images/icon/liked.svg"></svg-image>
        </div>
        <svg-image src="/static/images/icon/more.svg" class="more-img" @click="clicked=!clicked"></svg-image>
      </div>
    </top>
    <div class="bottom" v-if="clicked">
    </div>
  </div>
</template>
<script>
  import Top from '../common/Top.vue'
  import SvgImage from '../common/SvgImage.vue'
  export default {
    components: {Top, SvgImage},
    data () {
      return {
        liked: true,
        clicked: true
      }
    }
  }
</script>
<style scoped>
  .back-img {
    background-image: url("/static/images/icon/back.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    height: 20px;
    width: 20px;
    margin-top: 30%;
    margin-left: 10px;
  }
  .more-img {
    background-image: url("/static/images/icon/more.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    height: 20px;
    width: 20px;
    margin-top: 30%;
    margin-left: 10px;
  }

  .icons {
    display: flex;
  }

  .icons > div{
    width: 25px;
    height: 25px;
    margin-top: 5px;
    display: inline-block;
  }
</style>
