<template>
  <div id="person">
    <nav-header class="person-header">
      <div slot="left" class="back"></div>
      <template slot="right">
        <!--<embed src="/static/img/person/svg/tip.svg" height="20px" width="20px" style="margin-right: 15px"></embed>-->
        <!--<embed src="/static/img/person/svg/setting.svg" height="20px" width="20px" style="margin-right: 15px"></embed>-->
        <router-link to="/person/message">
          <span class="my-icon"
                style="display: inline-block;background-image: url('/static/img/person/svg/tip.svg')"></span>
        </router-link>
        <router-link to="/person/setting">
          <span class="my-icon"
                style="display: inline-block;background-image: url('/static/img/person/svg/setting.svg')"></span>
        </router-link>
      </template>
    </nav-header>
    <template v-if="!logged">
      <top-panel></top-panel>
    </template>
    <template v-else="logged">
      <logined-panel :isSignShow="true"></logined-panel>
    </template>
    <template>
      <div class="icons">
        <nav-icon v-for="i in icons" :info="i.info" :icon="i.icon" :link="logged?i.icon_link:''"></nav-icon>
      </div>
      <div class="nav-discount">
        <nav-strip v-for="i in discounts" :info="i.info" :icon="i.icon" :link="logged?i.icon_link:''"></nav-strip>
      </div>
      <div class="nav-feet">
        <nav-strip v-for="i in feet" :info="i.info" :icon="i.icon" :link="logged?i.icon_link:''"></nav-strip>
      </div>
      <div class="nav-answer">
        <nav-strip v-for="i in answers" :info="i.info" :icon="i.icon" :link="logged?i.icon_link:''"></nav-strip>
      </div>
    </template>
  </div>
</template>

<script>
  import navHeader from './Comment/NavHeader.vue'
  import TopPanel from './Index/TopPanel.vue'
  import LoginedPanel from './Index/LoginedPanel.vue'
  import NavIcon from './Index/NavIcon.vue'
  import NavStrip from './Index/NavStrip.vue'
  import NavPanel from './Others/NavPanel.vue'
  // $router.back()
  export default {
    data () {
      return {
        isLogin: false,
        icons: [
          {icon: '/static/img/person/svg/icon1.svg', info: '我的游记', icon_link: '/person/travels'},
          {icon: '/static/img/person/svg/icon2.svg', info: '我的收藏', icon_link: '/person/collection'},
          {icon: '/static/img/person/svg/icon3.svg', info: '我的行程', icon_link: '/person/schedules'}
        ],
        discounts: [
          {icon: '/static/img/person/svg/discount1.svg', info: '我的订单', icon_link: '/person/orders'},
          {icon: '/static/img/person/svg/discount3.svg', info: '我的优惠券', icon_link: '/person/coupons'}
        ],
        feet: [
          {icon: '/static/img/person/svg/feet1.svg', info: '我的足迹', icon_link: '/person/feet'},
          {icon: '/static/img/person/svg/feet2.svg', info: '等待我点评的目的地', icon_link: '/no-page'}
        ],
        answers: [
          {icon: '/static/img/person/svg/answer1.svg', info: '我的发布的帖子', icon_link: '/no-page'},
          {icon: '/static/img/person/svg/answer2.svg', info: '我的问答', icon_link: '/no-page'},
          {icon: '/static/img/person/svg/answer3.svg', info: '我的结伴', icon_link: '/no-page'}
        ]
      }
    },
    components: {
      navHeader,
      TopPanel,
      LoginedPanel,
      NavIcon,
      NavStrip,
      NavPanel
    },
    methods: {}
  }
</script>

<style lang="less">
  @nav-color: #f5f5f5;
  body {
    padding: 0;
    margin: 0;
  }

  #person {
    > .person-header {
      position: fixed;
      z-index: 1;
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
      .back {
        width: 100%;
        height: 100%;
        background-size: 40% 40%;
        background-image: url("/static/img/person/svg/back.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
      .my-icon {
        width: 50px;
        height: 100%;
        background-size: 40% 40%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    > .icons {
      box-sizing: border-box;
      -moz-box-sizing: border-box; /* Firefox */
      -webkit-box-sizing: border-box; /* Safari */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: white;
      padding: 18px 0;
    }
    > .nav-discount, > .nav-feet {
      margin: 10px 0;
      /*border: 1px solid black;*/
      > nav-strip {
        border-bottom: 1px solid #ced1d5;
      }
      > nav-strip:last-child {
        border-bottom: none;
      }
    }
  }
</style>
