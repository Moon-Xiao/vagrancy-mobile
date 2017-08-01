<template>
  <div id="sign">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">签到领取里程碑</div>
    </nav-header>
    <div class="nav">
      <div class="nav-top">

      </div>
      <img src="/static/img/person/img/sign-ad.png" style="width: 100%">
      <img src="/static/img/person/img/sign-exchange.png" style="width: 100%">
      <img src="/static/img/person/img/sign-ad-show.png" style="width: 100%">
      <div class="nav-bottom">
        <p>本活动最终解释权归本公司所有</p>
        <p>如我们怀疑您非法获得里程，</p>
        <p>我们有权将里程收回并取消您的获得资格。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../Comment/NavHeader.vue'

  export default {
    data () {
      return {}
    },
    props: {},
    components: {NavHeader},
    methods: {}
  }
</script>
<style lang="less">
  @back-color: #11bf79;
  @nav-color: rgb(14, 66, 92);
  @btn-color: rgb(253, 212, 61);
  body {
    margin: 0;
    padding: 0;
  }

  #sign {
    width: 100%;
    background-color: @nav-color;
    > .header-style {
      background-color: @back-color;
      z-index: 1;
      .back {
        width: 100%;
        height: 100%;
        background-size: 40% 40%;
        background-image: url("/static/img/person/svg/back.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    > .nav {

      > .nav-bottom {
        padding: 20px 30px;
        p {
          margin: 5px;
          color: white;
          text-align: center;
        }
      }
    }
  }
</style>
