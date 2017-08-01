<template>
  <div class="store-guess-container">
    <div class="guess-top">
      <div>猜你喜欢</div>
    </div>
    <div class="guess-first-content">
      <div v-for="(line,lineIndex) in 3" class="first-line">
        <div v-for="(item,itemIndex) in 2" class="first-line-item">
          <div class="mask"></div>
          <div class="item-content">
            <div class="common-center">
              <p class="content-title">北京/天津出发特价机票</p>
              <p class="content-price">999元起</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="guess-second-content">
      <div v-for="line in 4" class="second-line">
        <div v-for="item in 2" class="second-line-item">
          <img src="/static/images/store_temp/jiangang.jpg"/>
          <p class="sight-title">【暑期】上海往返马尔代夫Kandima坎迪</p>
          <div class="sight-price">
            <span class="sprice">12280</span>
            <span class="sunit">元起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    date () {
      return {
        guessFirstItems: [
          {
            title: '北京/天津出发特价机票',
            price: '999'
          },
          {
            title: '北京/天津出发特价机票',
            price: '998'
          },
          {
            title: '北京/天津出发特价机票',
            price: '997'
          },
          {
            title: '北京/天津出发特价机票',
            price: '996'
          },
          {
            title: '北京/天津出发特价机票',
            price: '995'
          },
          {
            title: '北京/天津出发特价机票',
            price: '994'
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  .store-guess-container {
    width: 100%;
    background-color: white;
    margin-top: 8px;

    > .guess-top {
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #333333;
    }

    > .guess-first-content {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      > .first-line {
        flex: 1;
        height: 120px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        > .first-line-item {
          flex: 1;
          margin: 5px 10px;
          position: relative;

          > .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
          }

          > .item-content {
            width: 100%;
            height: 100%;
            background-image: url("/static/images/store_temp/ad1.jpg");
            background-size: 100% 100%;

            > .common-center {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              z-index: 10;

              > .content-title {
                width: 80%;
                padding: 0 10%;
                z-index: 10;
                color: white;
                text-align: center;
                padding-top: 20px;
              }

              > .content-price {
                width: 60%;
                padding: 0 20%;
                z-index: 10;
                font-size: 14px;
                color: white;
                text-align: center;
              }
            }
          }
        }
      }
    }

    > .guess-second-content {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      > .second-line {
        flex: 1;
        height: 200px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        > .second-line-item{
          flex: 1;
          padding: 5px 10px 0 10px;

          > img{
            width: 100%;
          }

          > .sight-title{
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }

          > .sight-price > .sprice{
            color: rgb(253,117,107);
            font-size: 18px;
          }

          > .sight-price > .sunit{
            color: #777777;
            font-size: 13px;
          }

        }
      }

    }
  }
</style>

