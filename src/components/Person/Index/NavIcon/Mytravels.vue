<template>
  <div id="my-travels">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的游记</div>
    </nav-header>
    <div class="travels-nav">
      <img src="/static/img/person/img/travels-ad.jpg" style="width: 100%;margin-top: 20px">
      <div class="add-img">
        <router-link to="#">
          <img src="/static/img/person/svg/collectionAdd.svg" style="width: 70px;">
        </router-link>
      </div>
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
  @nav-color: #f5f5f5;
  @back-color: #11bf79;
  body {
    margin: 0;
    padding: 0;
  }

  #my-travels {
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
    > .travels-nav {
      position: relative;
      min-height: 600px;
      > .add-img {
        position: absolute;
        bottom: 3%;
        right: 5%;
      }
    }
  }
</style>
