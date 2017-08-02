<template>
  <div class="product-detail-container">
    <div class="product-des">
      <div class="product-top">
        <img src="/static/images/store_temp/返回-2.png"/>
        <div>商品详情</div>
      </div>
      <div class="product-image">
        <img :src="product.imgSrc"/>
        <div class="product-id">产品编号{{product.id}}</div>
      </div>
      <div class="product-title">{{product.title}}</div>
      <div class="product-price-sold-div">
        <div class="price-div">
          <span class="price">{{product.price}}</span>
          <span class="unit">元起</span>
        </div>
        <div class="sold-number">
          已售{{product.soldNum}}份
        </div>
      </div>
    </div>
    <div class="product-detail-div">
      <div class="product-detail-nav">
        <a href="#advise" class="product-detail-nav-item">产品介绍</a>
        <a href="#buy-it" class="product-detail-nav-item">购买须知</a>
        <a href="#guess-hhh" class="product-detail-nav-item">猜你喜欢</a>
      </div>
      <div class="product-intro">
        <div id="advise" class="intro-title">推荐行程</div>
        <div v-for="item in product.detailpic" class="intro-img">
          <img :src="item.imageSrc"/>
        </div>
      </div>
      <div class="notification">
        <div id="buy-it" class="intro-title">购买须知</div>
        <img src="/static/images/store_temp/屏幕快照 2017-08-02 上午5.25.38.png"/>
      </div>
      <div id="guess-hhh" class="intro-title">猜你喜欢</div>
      <div class="guess-preference">
        <div class="guess-second-content">
          <div v-for="item in guessSecondItems" class="second-line-item">
            <img src="/static/images/store_temp/jiangang.jpg"/>
            <p class="sight-title">{{item.title}}</p>
            <div class="sight-price">
              <span class="sprice">{{item.price}}</span>
              <span class="sunit">元起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-div">
      <div class="fixed-item">
        <img src="/static/images/store_temp/客服.png"/>
        客服
      </div>
      <div class="fixed-item">
        <img src="/static/images/store_temp/心.png"/>
        收藏
      </div>
      <div @click="seen=true" class="book-order">
        立即预定
      </div>
    </div>
    <div @click="seen=false" v-if="seen" class="mask"></div>
    <div v-if="seen" class="type-choose">
      <div class="pro-des-title">{{product.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        seen: false,
        product: {
          imgSrc: '/static/images/store_temp/aomen.jpg',
          title: '北京直飞西宁5天往返含税单机票（含航空意外保险）北京直飞西宁5天往返含税单机票（含航空意外保险）',
          price: '1860',
          soldNum: '34',
          id: '78243',
          detailpic: [
            {
              imageSrc: '/static/images/store_temp/IMG_5692.JPG'
            },
            {
              imageSrc: '/static/images/store_temp/IMG_5693.JPG'
            },
            {
              imageSrc: '/static/images/store_temp/IMG_5694.JPG'
            },
            {
              imageSrc: '/static/images/store_temp/IMG_5695.JPG'
            }
          ]
        },
        guessSecondItems: [
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '13280'
          },
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imgSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  .product-detail-container {
    width: 100%;
    p {
      margin: 0;
    }
    a {
      text-decoration: none;
    }

    .intro-title {
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 21px;
      font-weight: bold;
      color: #333333;
      background-color: white;
    }

    > .product-des {
      margin-bottom: 20px;

      > .product-top {
        height: 40px;
        background-color: #11BF79;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        > img {
          height: 30px;
          width: 30px;
          margin-left: 10px;
        }

        > div {
          color: white;
          font-weight: 100;
          font-size: 20px;
          width: 80%;
          text-align: center;
        }
      }

      > .product-image {
        width: 100%;
        height: 270px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        > .product-id {
          position: absolute;
          bottom: 10px;
          left: 20px;
          font-size: 14px;
          color: white;
          font-weight: 100;
        }
      }

      > .product-title {
        color: #444444;
        font-size: 20px;
        background-color: white;
        padding: 10px 15px;
      }

      > .product-price-sold-div {
        width: 100%;
        padding: 0 10px 5px 15px;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
        color: rgb(180, 180, 180);
        font-size: 14px;

        > .price-div {
          margin-right: 55%;
          > .price {
            color: rgb(253, 117, 107);
            font-size: 24px;
          }

        }
      }

    }

    > .product-detail-div {
      background-color: #F5F5F5;
      margin-top: -5px;
      margin-bottom: 70px;

      > .product-detail-nav {
        border-top: 1px solid rgb(60, 206, 127);
        border-bottom: 1px solid rgb(230, 230, 230);
        height: 50px;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        > .product-detail-nav-item {
          color: #555555;
          font-size: 18px;
        }
      }

      > .product-intro {
        > .intro-title {
          width: 100%;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 21px;
          font-weight: bold;
          color: #333333;
          background-color: white;
        }

        > .intro-img > img {
          width: 100%;
        }
      }

      > .notification {

        > img {
          width: 100%;
        }
      }

      > .guess-preference {

        width: 100%;
        > .guess-second-content {
          background-color: white;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          flex-wrap: wrap;

          > .second-line-item {
            width: 45%;
            height: 200px;
            margin-bottom: 5px;
            padding: 5px 10px 0 10px;

            > img {
              width: 100%;
            }

            > .sight-title {
              color: #333333;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }

            > .sight-price > .sprice {
              color: rgb(253, 117, 107);
              font-size: 18px;
            }

            > .sight-price > .sunit {
              color: #777777;
              font-size: 13px;
            }
          }

        }
      }
    }

    > .fixed-div {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 70px;
      background-color: rgb(113, 113, 113);
      width: 100%;
      color: white;

      > .fixed-item {
        float: left;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        margin: 0 20px;

        > img {
          width: 25px;
          height: 25px;
          margin-right: 3px;
        }
      }

      > .book-order {
        background-color: rgb(253, 117, 107);
        color: white;
        font-size: 20px;
        float: right;
        height: 100%;
        padding: 13px 25px;
      }

    }

    > .mask {
      width: 100%;
      height: 20%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.4);
    }

    > .type-choose {
      width: 100%;
      height: 80%;
      background-color: white;
      position: fixed;
      bottom: 0;
      left: 0;
      overflow: scroll;

      > .pro-des-title{
        padding: 10px;
        font-size: 18px;
        color: #444444;
      }

    }

  }
</style>
