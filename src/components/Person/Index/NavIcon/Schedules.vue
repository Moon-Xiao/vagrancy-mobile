<template>
  <div id="schedules">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的行程</div>
    </nav-header>


    <div class="nav-bottom">
      <router-link to="/person/schedules/create-schedule" style="text-decoration: none">
        <img style="width: 20px;vertical-align: middle;" src="/static/img/person/svg/add.svg"><span style="color: white">创建行程</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../../Comment/NavHeader.vue'

  export default {
    data () {
      return {}
    },
    props: {},
    components: {
      NavHeader
    },
    methods: {}
  }
</script>
<style lang="less">
  @nav-color:#f5f5f5;
  @back-color:#11bf79;
  body {
    margin: 0;
    padding: 0;
  }

  #schedules {
    background-color: @nav-color;
    width: 100%;
    .header-style {
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
    > .nav-bottom {
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: white;
      background-color: @back-color;
      text-align: center;
      position: fixed;
      bottom: 0;
      font-size: 18px;
    }
  }
</style>
