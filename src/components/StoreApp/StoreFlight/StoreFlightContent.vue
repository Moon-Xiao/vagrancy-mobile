<template>
  <div class="store-flight-content-container">
    <div class="content-top-nav">
      <div class="content-nav-items">
        <div @click="selected=index" v-for="(item,index) in navItems" v-bind:class="['content-nav-item',{active:index===selected}]">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="store-content">
      <router-link to="/stores/product" v-for="item in contentItems" class="store-content-item">
        <div class="image-div">
          <img :src="item.imageSrc"/>
        </div>
        <div class="content-description">
          <p class="des-title">{{item.title}}</p>
          <div class="destination">
            <img src="/static/images/store_temp/位置.png"/>
            {{item.destination}}
          </div>
          <div class="sold-number">已售{{item.soldNum}}件</div>
          <div class="price-div">
            <div class="price">{{item.price}}</div>
            <div class="unit">元起</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 0,
        navItems: [
          {name: '全部'}, {name: '北京/天津'}, {name: '上海/杭州'}, {name: '国内其他'}, {name: '广州/深圳'}, {name: '成都/重庆'}, {name: '海外'}
        ],
        contentItems: [
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '北京直飞厦门4天往返含税机票（含1晚酒店，赠接机）',
            destination: '北京',
            soldNum: '25',
            price: '1850'
          },
          {
            imageSrc: '/static/images/store_temp/jiangang.jpg',
            title: '北京直飞厦门4天往返含税机票（含1晚酒店，赠接机）',
            destination: '北京',
            soldNum: '25',
            price: '1850'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  .store-flight-content-container {
    background-color: #F5F5F5;
    overflow: hidden;

    a{
      text-decoration: none;
    }

    .active{
      background-color: #11BF79!important;
      color: white;
    }

    > .content-top-nav {
      height: 39px;
      color: #555555;
      overflow: scroll;
      border-bottom: solid 1px rgb(200, 200, 200);
      font-weight: 200;

      > .content-nav-items {
        width: 170%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 7px 15px;
        margin-right: 10px;
        font-size: 14px;

        > .content-nav-item {
          padding: 2px 8px;
          border-radius: 15px;
          margin-right: 14px;
          background-color: white;
        }

      }
    }

    > .store-content {
      background-color: rgb(250, 250, 250);
      width: 100%;

      > .store-content-item {
        height: 100px;
        padding: 10px 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: solid 1px rgb(220, 220, 220);

        > .image-div {
          flex: 1;

          > img {
            width: 100%;
            height: 100%;
          }
        }

        > .content-description {
          flex: 2;
          padding-left: 10px;
          position: relative;

          > .des-title {
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 14px;
            color: #444444;
          }

          > .destination{
            color: #777777;
            font-size: 13px;
            padding: 4px 0;

            img{
              width: 15px;
              height: 15px;
              display: inline-block;
            }
          }

          > .sold-number {
            position: absolute;
            bottom: 0;
            left: 10px;
            font-size: 13px;
            color: #777777;
          }

          > .price-div {
            position: absolute;
            bottom: 0;
            right: 0;
            font-size: 13px;
            color: #777777;

            > div {
              display: inline-block;
            }

            > .price {
              color: rgb(253, 117, 107);
              font-size: 18px;
              font-weight: 100;
            }
          }
        }
      }
    }
  }
</style>
