<template>
  <div class="store-search">
    <img src="/static/images/store_temp/返回-2.png"/>
    <div class="search">
      <img class="search-icon" src="/static/images/store_temp/搜索.png"/>
      <input type="text" placeholder="搜索目的地、名称"/>
    </div>

  </div>
</template>

<script>
    export default {}
</script>

<style lang="less">
  .store-search{
    height: 40px;
    background-color: #11BF79;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    > img{
      display: block;
      height: 30px;
      width: 30px;
      margin-left: 10px;
    }

    > .search{
      display: flex;
      width: 80%;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-radius: 15px;
      background-color: rgba(0,0,0,0.2);
      padding: 0 10px;

      > .search-icon{
        height: 18px;
        width: 18px;
      }

      > input{
        height: 25px;
        border: none;
        width: 100%;
        background-color: transparent;
        margin-left: 5px;
        color: white;
        font-weight: 100;
      }
    }
  }
</style>
