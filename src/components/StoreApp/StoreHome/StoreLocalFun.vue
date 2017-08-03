<template>
  <div class="store-local-fun-container">
    <div class="local-fun-top">
      <div id="local">当地玩乐</div>
      <div id="more">更多&gt;</div>
    </div>
    <div class="local-fun-content">
      <div class="content-line">
        <div class="content-line-item">
          <img src=""/>
          <span class="item-title">日游小团</span>
        </div>
        <div class="content-line-item">
          <span class="item-title">深度体验</span>
        </div>
        <div class="content-line-item">
          <span class="item-title">交通票券</span>
        </div>
      </div>
      <div class="content-line">
        <div class="content-line-item">
          <span class="item-title">门票票券</span>
        </div>
        <div class="content-line-item">
          <span class="item-title">餐饮美食</span>
        </div>
        <div class="content-line-item">
          <span class="item-title">境外保险</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  @height: 140px;

  .store-local-fun-container {
    margin-top: 8px;
    background-color: white;

    > .local-fun-top {
      height: 55px;
      background-color: white;
      padding-top: 15px;

      > #local{
        width: 240px;
        text-align: center;
        float: left;
        font-size: 20px;
        padding-left: 80px;
        color: #555555;
      }

      > #more{
        float: right;
        color: #11BF79;
        padding-right: 10px;
      }
    }

    > .local-fun-content {
      height: @height - 54px;
      background-size: 100% 100%;

      > .content-line {
        height: (@height - 55px)/2;
        border-top: 1px solid rgb(200, 200, 200);
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        > .content-line-item {
          flex: 1;
          border-right: solid 1px rgb(200, 200, 200);
          padding: 11px 0 0 37px;
          color: #555555;
          font-size: 15px;
        }

        > .content-line-item:last-child {
          border: none;
        }
      }
    }
  }
</style>
