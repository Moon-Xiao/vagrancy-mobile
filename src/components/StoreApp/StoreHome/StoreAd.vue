<template>
  <div class="store-ad-container">
    <div class="store-ad-first-line">
      <div class="line-item">
        <div class="title-subtitle">
          <a href="https://wenku.baidu.com/view/ccb0ac6c783e0912a2162aa4.html">
            <p class="title">尾货抢购</p>
            <p class="subtitle">真清仓大甩卖</p>
          </a>
        </div>
      </div>
      <div class="line-item">
        <div class="item-line">
          <p class="title">签证狂欢</p>
          <p class="subtitle">限时限量</p>
        </div>
        <div class="item-line">
          <p class="title">超值机票</p>
          <p class="subtitle">零花钱坐飞机</p>
        </div>
      </div>
    </div>
    <div class="store-ad-second-line">
      <div class="line-item">
        <p class="title">闪电机票</p>
        <p class="subtitle">48小时内出票</p>
      </div>
      <div class="line-item">
        <p class="title">私人订制</p>
        <p class="subtitle">来一次省心旅行</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  a {
    text-decoration: none;
  }

  .store-ad-container {
    margin-top: 8px;
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url("/static/images/store_temp/ad.png");
    background-size: 100% 100%;


    .title {
      color: #333333;
      font-size: 17px;
      margin: 10px 0 0 10px;
    }

    .subtitle {
      color: #777777;
      font-size: 14px;
      margin: 0 0 0 10px;
    }

    > .store-ad-first-line {
      flex: 2;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: solid 1px rgb(220, 220, 220);

      > .line-item {
        flex: 1;
        border-right: solid 1px rgb(220, 220, 220);
      }

      > .line-item:last-child {
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > .item-line {
          flex: 1;
        }

        > .item-line:last-child {
          flex: 1;
          border-top: solid 1px rgb(220, 220, 220);
        }

      }
    }

    > .store-ad-second-line {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      > .line-item {
        flex: 1;
        border-right: solid 1px rgb(220, 220, 220);
      }

      > .line-item:last-child {
        border: none;

      }
    }

  }
</style>
