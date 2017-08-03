<template>
  <div class="main-container">
    <router-view></router-view>
    <div class="container-bottom">
      <router-link :class="{active: /app\/home/.test($route.path)}" to="/app/home">
        <svg-image src="/static/images/icon/container home.svg"></svg-image>
        <p>首页</p>
      </router-link>
      <router-link :class="{active: /app\/destination/.test($route.path)}" to="/app/destination">
        <svg-image src="/static/images/icon/container2.0 (2).svg"></svg-image>
        <p>目的地</p>
      </router-link>
      <router-link :class="{active: /store/.test($route.path)}" to="store">
        <svg-image src="/static/images/icon/container store.svg"></svg-image>
        <p>商城</p>
      </router-link>

      <router-link :class="{active: /community/.test($route.path)}" to="community">
        <svg-image src="/static/images/icon/container4.svg"></svg-image>
        <p>社区</p>
      </router-link>

      <router-link :class="{active: /person/.test($route.path)}" to="person">
        <svg-image src="/static/images/icon/container4.2.svg"></svg-image>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
  import SvgImage from './common/SvgImage.vue'

  export default {
    components: {SvgImage}
  }
</script>
<style>
  .main-container {
    position: relative;
    padding-bottom: 55px;
  }

  .main-container a {
    color: dimgray;
    text-decoration: none;
    vertical-align: middle;
  }

  .main-container .container-bottom {
    position: fixed;
    bottom: 0;
    padding-top: 5px;
    box-sizing: border-box;
    height: 55px;
    width: 100%;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-around;
    text-align: center;
    z-index: 1000;
  }

  .main-container .container-bottom a {
    height: 55px;
    width: 20%;
  }

  .main-container .container-bottom svg {
    width: 28px;
    height: 28px;
  }

  .main-container .container-bottom p {
    margin: 0 0 5px 0;
    font-size: 10px;
  }

  .main-container .container-bottom .active {
    background-color: #11bf79;
    fill: white;
    color: white;
  }
</style>
