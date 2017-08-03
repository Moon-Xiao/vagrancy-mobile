<template>
  <div id="list-schedule">
    <div class="back-img" :style="'background-image:url('+info.img+')'">
      <div class="img-info">
        <div class="info-left">
          <span style="font-size: 32px;color: white;padding-right: 5px;">{{info.untilDays}}</span>天
        </div>
        <div class="info-right">
          <div class="right-top" style="font-size: 8px;">{{info.startTime}}出发</div>
          <div class="right-bottom" style="padding-top: 3px;font-size: 14px;font-weight:600;">
            <span>{{info.startPlace}}</span>
            <span style="padding: 0 8px;">&longrightarrow;</span>
            <span class="des-style">{{info.desPlace}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      info: Object
    },
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  #list-schedule {
    width: 100%;
    padding-top: 8px;
    > .back-img {
      cursor: pointer;
      position: relative;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      height: 200px;
      box-shadow: 0 0 3px #eee;
      > .img-info {
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        > .info-left {
          height: 32px;
          width: 80px;
          border-right: 1px solid rgba(255, 255, 255, 0.61);
          margin: 9px 0;
          text-align: center;
          color: rgb(255, 255, 255);
          line-height: 32px;
          font-size: 12px;
          font-weight: 100;
        }
        > .info-right {
          color: rgba(255, 255, 255, 0.8);
          padding-left: 20px;
          padding-top: 8px;
          font-weight: 100;
          .des-style {
            background-color: rgba(255, 255, 255, 0.8);
            color: rgba(0, 0, 0, 0.8);
            padding: 0 8px;
            border-radius: 5px;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
