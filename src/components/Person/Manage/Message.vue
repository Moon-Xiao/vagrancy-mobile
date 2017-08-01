<template>
  <div id="travels">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">消息</div>
    </nav-header>
    <div style="padding-top: 20px">
      <img src="/static/img/person/img/message-ad.jpg" style="width: 100%">
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
    components: {
      NavHeader
    },
    methods: {}
  }
</script>
<style lang="less">
  @nav-color: #f5f5f5;
  @back-color: #11bf79;
  body {
    margin: 0;
    padding: 0;
  }

  #travels {
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
  }
</style>
