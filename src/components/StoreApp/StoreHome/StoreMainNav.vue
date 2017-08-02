<template>
  <div class="store-main-nav-container">
    <div class="main-nav-line">
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/14888571565144.png"/>
        <p>自由行</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
      </router-link>
    </div>
    <div class="main-nav-line">
      <router-link class="main-nav-item" to="/stores/flight">
        <img src="/static/images/store_temp/14888571565144.png"/>
        <p>自由行</p>
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
      </router-link>
      <router-link class="main-nav-item" to="/stores/flight">
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
