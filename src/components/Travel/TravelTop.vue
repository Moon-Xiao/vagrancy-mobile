<template>
  <div class="travel-top">
    <top>
      <div slot="left" class="left">
        <router-link to="">
          <div class="back-img"></div>
        </router-link>
      </div>
      <div slot="right" class="right">
        <div class="like-img" @click="liked=!liked">
          <img v-if="!liked" src="/static/images/icon/like-w.svg"/>
          <img v-if="liked" src="/static/images/icon/liked.svg"/>
        </div>
        <div class="more-img" @click="clicked=!clicked"></div>
      </div>
    </top>
    <div class="bottom" v-if="clicked">
    </div>
  </div>
</template>
<script>
  import Top from '../common/Top.vue'
  export default {
    components: {Top},
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

  .right {
    margin-right: 5px;
    margin-top: 3px;
  }
  .right img{
    width: 25px;
    height: 25px;
    margin-top: 5px;
    display: inline-block;
  }
</style>
