<template>
  <div class="2-top">
    <top>
      <div slot="left" class="left">
        <router-link to="">
          <div class="back-img"></div>
        </router-link>
      </div>
      <div slot="middle" class="name">{{middle}}</div>
    </top>
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
      middle: String
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

  .left {
    height: 100%;
  }

  .name {
    line-height: 40px;
    text-align: center;
    font-size: 17px;
    margin: 0 auto;
  }

</style>
