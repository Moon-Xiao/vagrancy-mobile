<template>
  <div class="strip">
    <router-link :to="link">
      <!--<span class="icon"><div><embed align="center" :src="icon" type="image/svg+xml"/></div></span>-->
      <span class="icon" :style="'background-image:url('+icon+')'"></span>
      <span class="info">{{info}}</span>
      <span class="detail">&gt</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      icon: String,
      info: String,
      link: String
    },
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  @height: 50px;
  .strip {
    height: @height;
    background-color: white;
    a {
      position: relative;
      display: block;
      .detail {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 100%;
        line-height: @height;
        text-align: center;
        color: #ced1d5;
        font-size: 22px;
      }
    }
    .icon {
      display: inline-block;
      height: @height;
      text-align: center;
      width: @height;
      vertical-align: top;
      background-size: 40% 40%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .info {
      color: #717171;
      height: @height;
      display: inline-block;
      line-height: @height;
      text-align: center;
      vertical-align: top;
    }
  }
</style>
