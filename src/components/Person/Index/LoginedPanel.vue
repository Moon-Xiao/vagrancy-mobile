<template>
  <div id="logined-panel" :style="'background-image:url('+backImg+')'" style="clear: both">
    <div class="info-nav">
      <div class="info-nav-left">
        <div class="info-top">
          <router-link to="/person/edit-info">
            <div class="info-img" :style="'background-image:url('+img+')'"></div>
            <p class="info-name">{{name}}
              <embed :src="sex" height="16px"></embed>
            </p>
          </router-link>
        </div>
        <div class="info-bottom">
          <span class="bottom-item"><span style="margin-right: 6px">{{fans}}</span><span>粉丝</span></span>
          <span class="bottom-item"><span style="margin-right: 6px">{{attentions}}</span><span>关注</span></span>
        </div>
        <div class="info-signature">
          <p>{{signature}}</p>
        </div>
      </div>
      <div class="info-nav-right">

        <template v-if="isSignShow">
          <router-link to="/person/sign">
            <embed align="middle" src="/static/img/person/svg/sign.svg" width="30px"></embed>
            <span style="font-size: 12px;display: block;text-align: center;color: white">签到</span>
          </router-link>
        </template>

        <template v-if="!isSignShow">
          <div
            style="height: 22px; width: 56px;border:solid 1px #fff;border-radius: 1px;display: flex;justify-content: center;align-items: center">
            <embed src="/static/img/person/svg/attention.svg" height="16px"></embed>
            <span style="font-size: 12px;color: white" @click="concernTip()">关注</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        backImg: '/static/img/person/img/backImg.png',
        fans: 0
      }
    },
    props: {
      isSignShow: Boolean
    },
    components: {},
    methods: {
      concernTip: function () {
        alert('关注成功')
      }
    },
    computed: {
      img () {
        return this.userInfo.avatar ? this.baseUrl + '/' + this.userInfo.avatar.path : '/static/img/person/img/person.jpeg'
      },
      name () {
        return this.userInfo.nickname
      },
      sex () {
        return this.userInfo.sex === '男' ? '/static/img/person/svg/male.svg' : '/static/img/person/svg/female.svg'
      },
      attentions () {
        return this.userInfo.follow ? this.userInfo.follow.length : 0
      },
      signature () {
        return this.userInfo.intro
      }
    }
  }
</script>
<style lang="less">
  @height: 240px;
  #logined-panel {
    background-size: cover;
    background: no-repeat center center;
    height: @height;
    width: 100%;
    .info-nav {
      height: 120px;
      width: 100%;
      padding-top: 65px;
      box-sizing: content-box;
      position: relative;
      > .info-nav-left {
        margin-left: 20px;
        > .info-top {
          a {
            width: 240px;
            display: flex;
            align-items: center;
            .info-img {
              width: 70px;
              height: 70px;
              border-radius: 50%;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .info-name {
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              margin-left: 20px;
            }
          }
        }
        > .info-bottom {
          margin-top: 10px;
          color: white;
          > .bottom-item {
            margin: 0 6px;
          }
        }
        > .info-signature {
          margin-top: 40px;
          color: white;
        }
      }
      > .info-nav-right {
        position: absolute;
        top: 40%;
        right: 5%;
        color: white;
      }
    }
  }
</style>
