<template>
  <div class="store-selected-discount-container">
    <div class="discount-top">
      <div>精选折扣</div>
    </div>
    <div class="discount-content">
      <div class="content-item">
        <img :src="discountProduct[0].imageSrc"/>
        <div class="content-des">
          <p class="des-title">{{discountProduct[0].discountInfo}}</p>
          <p class="des-subtitle">{{discountProduct[0].discountSubtitle}}</p>
        </div>
      </div>
      <div class="content-item">
        <img :src="discountProduct[1].imageSrc"/>
        <div class="content-des">
          <p class="des-title">{{discountProduct[1].discountInfo}}</p>
          <p class="des-subtitle">{{discountProduct[1].discountSubtitle}}</p>
        </div>
      </div>
    </div>
    <div class="discount-bottom">
      <div>更多精选折扣&gt;</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        discountProduct: [
          {
            discountInfo: '非廉航直飞日本，看海购物刷签证一次搞定',
            discountSubtitle: '立省1000，最高可带56KG行李',
            imageSrc: '/static/images/store_temp/malaiqu.jpg'
          },
          {
            discountInfo: '非廉航直飞日本，看海购物刷签证一次搞定',
            discountSubtitle: '立省1000，最高可带56KG行李',
            imageSrc: '/static/images/store_temp/malaiqu.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="less">

  @height: 350px;
  div{
    box-sizing: border-box;
  }

  p{
    margin: 0;
  }

  .store-selected-discount-container {
    background-color: white;
    margin-top: 8px;

    > .discount-top {
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      > div {
        height: 30px;
        font-size: 20px;
        color: #333333;
      }
    }

    > .discount-content {
      height: @height - 60px - 40px;

      > .content-item {
        height: (@height - 60px - 40px)/2;
        border-top: solid 1px rgb(220, 220, 220);
        padding: 10px 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;


        > img{
          flex: 1;
          height: 100%;
        }

        > .content-des{
          flex: 2;
          padding: 0 0 0 10px;

          > .des-title{
            color: #555555;
            font-size: 16px;
          }

          > .des-subtitle{
            color: #777777;
            font-size: 13px;
            margin-top: 10px;
          }
        }
      }
    }

    > .discount-bottom {
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      > div {
        height: 20px;
        font-size: 16px;
        color: #11BF79;
      }
    }
  }
</style>
