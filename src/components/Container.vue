<template>
  <div class="main-container">
    <router-view></router-view>
    <div class="container-bottom">
      <router-link to="/app/home">
        <img src="/static/images/icon/container home.svg">
        <p>首页</p>
      </router-link>
      <router-link to="/app/destination">
        <img src="/static/images/icon/container2.0 (2).svg">
        <p>目的地</p>
      </router-link>
      <router-link to="store">
        <img src="/static/images/icon/container store.svg">
        <p>商城</p>
      </router-link>

      <router-link to="community">
        <img src="/static/images/icon/container4.svg">
        <p>社区</p>
      </router-link>

      <router-link to="person">
        <img src="/static/images/icon/container4.2.svg">
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
</script>
<style>
  .main-container {
    position: relative;
  }
  .main-container a {
    color: dimgray;
    text-decoration: none;
    vertical-align: middle;
  }
  .main-container .container-bottom {
    position: fixed;
    bottom: 0;
    padding-top:5px;
    box-sizing: border-box;
    height: 55px;
    width: 100%;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-around;
    text-align: center;

  }
  .main-container .container-bottom a {
    height: 55px;
  }
  .main-container .container-bottom img {
    /*width: 28px;*/
    height: 28px;
  }
  .main-container .container-bottom p{
    margin: 0 0 5px 0;
    font-size: 10px;
  }
</style>
