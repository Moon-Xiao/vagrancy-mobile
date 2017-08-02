<template>
  <div class="store-journal-container">
    <div class="mask">
    </div>
    <div class="journal-banner-div" :style="'background-image:url(' + journal.imageSrc + ')'">
      <div class="common-center">
        <div class="journal-title">{{journal.title}}</div>
        <div class="check-more">点击查看更多</div>
      </div>
    </div>
    <div class="journal-brief-introduction">
      <p>{{journal.briefIntro}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        journal: {
          imageSrc: '/static/images/store_temp/ad1.jpg',
          title: '国境以西 佛教圣地',
          briefIntro: '不丹，在宗卡语中意思为"主域"，意为雷、龙之地。并多次被誉为：全世界最快乐的国度之一，而佛教的影响更是给予了不丹人民外界与内心的平和，后面应该被隐藏了，我猜的，啊哈哈哈哈'
        }
      }
    }
  }
</script>

<style lang="less">
  .store-journal-container {
    width: 100%;
    background-color: white;
    position: relative;

    > .mask {
      width: 100%;
      height: 150px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      background-color: rgba(0, 0, 0, 0.4);
    }

    > .journal-banner-div {
      background-size: cover;
      height: 150px;
      padding-top: 50px;

      > .common-center {
        display: flex;
        flex-direction: column;
        justify-content: center;

        > .journal-title {
          z-index: 10;
          text-align: center;
          width: 100%;
          font-size: 26px;
          color: white;
        }

        > .check-more {
          z-index: 10;
          border-radius: 12px;
          height: 25px;
          background-color: rgba(255, 255, 255, 0.4);
          width: 100px;
          border: solid white 1px;
          color: white;
          font-weight: 100;
          font-size: 15px;
          padding: 1px 3px;
          margin-left: 36%;
        }

      }

    }
    > .journal-brief-introduction {
      padding: 5px 15px;
      box-sizing: border-box;
      height: 100px;

      > p {
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-height: 30px;
      }
    }

  }
</style>
