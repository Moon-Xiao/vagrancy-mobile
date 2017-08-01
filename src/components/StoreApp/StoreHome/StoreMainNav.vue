<template>
  <div class="store-main-nav-container">
    <div v-for="line in 2" class="main-nav-line">
      <div v-for="item in 5" class="main-nav-item">
      </div>
    </div>

  </div>
</template>

<script>
    export default {}
</script>

<style lang="less">

  @height: 200px;

  .store-main-nav-container{
    width: 100%;
    height: @height;
    background-image: url("/static/images/store_temp/store0.png");
    background-size: 100% 100%;

    > .main-nav-line{
      height: @height/2;
      padding: 0 8px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      > .main-nav-item{
        flex: 1;
        text-align: center;
        font-size: 14px;
      }
    }
  }
</style>
