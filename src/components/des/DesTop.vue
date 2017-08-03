<template>
  <div class="des-top">
    <top>
      <div slot="left" class="left">
        <router-link to="">
          <div class="back-img"></div>
        </router-link>
      </div>
      <div slot="middle" class="name">{{name}}</div>
      <div slot="right" class="right">
        <div class="more-img" @click="clicked=!clicked"></div>
      </div>
    </top>
    <div class="bottom" v-if="clicked">
      <div class="img" style="background-image: url(/static/images/des/icon/setting.png)"></div>
      <div class="close" @click="clicked=false">取 消</div>
    </div>
  </div>
</template>
<script>
  import Top from '../common/Top.vue'
  export default {
    components: {Top},
    data () {
      return {
        clicked: false
      }
    },
    props: {
      name: String
    }
  }
</script>
<style scoped>
  .des-top{
    z-index: 999;
  }
  .back-img {
    background-image: url("/static/images/icon/back.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    height: 20px;
    width: 20px;
  }

  .left {
    height: 100%;
  }

  .name {
    line-height: 40px;
    text-align: center;
    font-size: 17px;
    margin: 0px auto;
  }

  .more-img {
    background-image: url("/static/images/icon/more.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    height: 20px;
    width: 20px;
  }

  .bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-bottom: 43px;
    color: #444;
    border-top: 1px #ececec solid;
  }
  .bottom .img{
    width: 100%;
    height: 185px;
    background-size: 100%;
  }
  .bottom .close {
    padding: 10px;
    background-color: #F5F5F5;
    text-align: center;
  }
</style>
