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

    </div>
  </div>
</template>
<script>
  import Top from '../common/Top.vue'
  export default {
    components: {Top},
    data () {
      return {
        clicked: true
      }
    },
    props: {
      name: String
    }
  }
</script>
<style scoped>
  .back-img {
    background-image: url("/static/images/des/icon/back.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    height: 20px;
    width: 20px;
    margin-top: 30%;
    margin-left: 10px;
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
    background-image: url("/static/images/des/icon/more.svg");
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
</style>
