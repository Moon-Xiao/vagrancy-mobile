<template>
  <div class="store-hot-sight-container">
    <div class="hot-sight-banner">
      <img src="/static/images/store_temp/banner1.png"/>
    </div>
    <div class="store-scroller">
      <div class="hot-sight-content">
        <div v-for="item in hotSights" class="sight-content-item">
          <img :src="item.imageSrc"/>
          <p class="sight-title">{{item.title}}</p>
          <div class="sight-price">
            <span class="sprice">{{item.price}}</span>
            <span class="sunit">元起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hotSights: [
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          },
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '【暑期】上海往返马尔代夫Kandima坎迪',
            price: '12280'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  .store-hot-sight-container {
    background-color: white;
    padding-bottom: 20px;

    > .hot-sight-banner > img {
      width: 100%;
    }

    > .store-scroller{
      overflow: scroll;

      > .hot-sight-content {
        height: 180px;
        padding: 6px 10px 10px 10px;
        width: 280%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        > .sight-content-item {
          height: 100%;
          flex: 1;
          margin-right: 10px;

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
