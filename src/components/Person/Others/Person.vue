<template>
  <div id="other">
    <nav-header class="person-header">
      <div slot="left" class="back"></div>
      <template slot="right">
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
    <logined-panel :isSignShow="false"></logined-panel>
    <nav-panel></nav-panel>
  </div>
</template>

<script>
  import navHeader from '../Comment/NavHeader.vue'
  import TopPanel from '../Index/TopPanel.vue'
  import LoginedPanel from '../Index/LoginedPanel.vue'
  import NavPanel from './NavPanel.vue'

  export default {
    data () {
      return {}
    },
    components: {
      navHeader,
      TopPanel,
      LoginedPanel,
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

  #other {
    a {
      text-decoration: none;
    }
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
  }
</style>
