<template>
  <div class="store-main-nav-container">
    <div class="main-nav-line">
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.0.png"/>
        <p>自由行</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.1.png"/>
        <p>特价机票</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.2.png"/>
        <p>酒店</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.3.png"/>
        <p>签证</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.4.png"/>
        <p>邮轮</p>
      </router-link>
    </div>
    <div class="main-nav-line">
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.5.png"/>
        <p>WIFI电话卡</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.6.png"/>
        <p>深度旅行</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.7.png"/>
        <p>接送机包车</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.8.png"/>
        <p>自驾租车</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/store1.9.png"/>
        <p>全部</p>
      </router-link>
    </div>


  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">

  @height: 200px;

  .store-main-nav-container {
    width: 100%;
    height: @height;
    background-color: white;
    background-size: 100% 100%;

    > .main-nav-line {
      height: @height/2;
      padding: 0 8px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .main-nav-item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img{
          width: 50px;
          height: 50px;
        }
      }
    }
  }
</style>
