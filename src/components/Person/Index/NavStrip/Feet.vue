<template>
  <div id="feet">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">{{navTitle}}</div>
    </nav-header>
    <div class="feet-nav">
      <div class="feet-item" v-for="(place, index) in placeList">
        <div class="item-header">
          <span class="item-title">{{place.title}}</span>
          <span class="item-btn" @click="feetItemToggle(index)">
            展开 &or;
          </span>
        </div>
        <div class="item-body" style="display: none">
          <div class="card-list">
            <div class="feet-card" v-for="item in place.imgList">
              <div class="card-content">
                <div class="card-img" :style="'background-image:url('+item.img+')'">
                  <span>{{item.name}}</span>
                  <span>{{item.subName}}</span>
                </div>
                <div class="card-info">
                  <span>{{item.info}}个去过的目的地</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../../Comment/NavHeader.vue'

  export default {
    data () {
      return {
        navTitle: '我的足迹',
        isShow: [],
        placeList: [
          {
            title: '中国',
            imgList: [
              {name: '台北', subName: 'Taipei', img: '/static/images/content1.jpg', info: '1'},
              {name: '垦丁', subName: 'Kenting', img: '/static/images/content2.jpg', info: '5'},
              {name: '北京', subName: 'Beijing', img: '/static/images/content3.jpg', info: '1'},
              {name: '上海', subName: 'Shanghai', img: '/static/images/content4.jpg', info: '8'},
              {name: '南京', subName: 'Nanjing', img: '/static/images/content5.jpg', info: '1'},
              {name: '武汉', subName: 'Wuhan', img: '/static/images/content6.jpg', info: '2'}
            ]
          },
          {
            title: '美国',
            imgList: [
              {name: '纽约', subName: 'New York', img: '/static/images/content5.jpg', info: '2'},
              {name: '波士顿', subName: 'b', img: '/static/images/content6.jpg', info: '1'},
              {name: '测试', subName: 'test', img: '/static/images/content7.jpg', info: '1'},
              {name: '测试', subName: 'test', img: '/static/images/content8.jpg', info: '1'},
              {name: '测试', subName: 'test', img: '/static/images/content9.jpg', info: '1'}
            ]
          },
          {
            title: '韩国',
            imgList: [
              {name: '测试', subName: 'test', img: '/static/images/content10.jpg', info: '4'},
              {name: '测试', subName: 'test', img: '/static/images/content11.jpg', info: '5'},
              {name: '测试', subName: 'test', img: '/static/images/content12.jpg', info: '2'},
              {name: '测试', subName: 'test', img: '/static/images/content13.jpg', info: '2'},
              {name: '测试', subName: 'test', img: '/static/images/content14.jpg', info: '2'},
              {name: '测试', subName: 'test', img: '/static/images/content15.jpg', info: '2'}
            ]
          }
        ]
      }
    },
    mounted: function () {
      this.showFirst()
      // Ta的足迹
    },
    props: {},
    components: {NavHeader},
    methods: {
      showFirst: function () {
        document.getElementsByClassName('item-body')[0].style.display = 'block'
        document.getElementsByClassName('item-btn')[0].innerHTML = '收起 &and;'
      },
      feetItemToggle: function (index) {
        this.isShow[index] = !this.isShow[index]
        if (this.isShow[index]) {
          document.getElementsByClassName('item-body')[index].style.display = 'block'
          document.getElementsByClassName('item-btn')[index].innerHTML = '收起 &and;'
        } else {
          document.getElementsByClassName('item-body')[index].style.display = 'none'
          document.getElementsByClassName('item-btn')[index].innerHTML = '展开 &or;'
        }
      }
    }
  }
</script>
<style lang="less">
  @back-color: #11bf79;
  #feet {
    width: 100%;
    background-color: white;
    .back {
      width: 100%;
      height: 100%;
      background-size: 40% 40%;
      background-image: url("/static/img/person/svg/back.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
    .header-style {
      background-color: @back-color;
      z-index: 1;
    }
    .feet-nav {
      background-color: white;
      .feet-item {
        clear: both;
        padding: 0 10px;
        .item-header {
          border-top: 1px solid #eeeeee;
          padding: 13px 0;
          position: relative;
          .item-btn {
            cursor: pointer;
            color: @back-color;
            position: absolute;
            right: 10px;
          }
        }
        .item-body {
          .card-list {
            position: relative;
            .feet-card {
              float: left;
              width: 50%;
              .card-content {
                margin: 12px;
                border-radius: 3px;
                box-shadow: 0 0 2px 2px #eeeeee;
                .card-img {
                  position: relative;
                  color: white;
                  background-repeat: no-repeat;
                  background-size: cover;
                  height: 100px;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  span {
                    z-index: 1;
                  }
                }
                .card-img:after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.4);
                }
                .card-info {
                  color: #868686;
                  font-family: 'Microsoft YaHei UI';
                  font-weight: 100;
                  font-size: 12px;
                  text-align: center;
                  height: 30px;
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
