<template>
  <div id="nav-panel">
    <div style="margin: 10px auto">
      <router-link to="/person/feet">
        <img src="/static/img/person/img/earth.jpg" width="100%"/>
        <div class="other-feet">
          <span class="icon" style="background-image:url(/static/img/person/svg/other-feet.svg)"></span>
          <div class="info">
            <div style="text-align:left;height:30px;color: #1296db;">Ta的足迹</div>
            <div style="text-align:left;height: 30px;">
              <span style="color: #000;margin-right: 12px;">{{feetCountry}}</span><span style="color: #999;">国家</span>
              <span style="color: #000;margin:0 12px 0 25px;">{{feetCity}}</span><span style="color: #999;">城市</span>
            </div>
          </div>
        </div>
      </router-link>
      <div class="other-feet">
        <span class="icon" style="background-image:url(/static/img/person/svg/other-des.svg)"></span>
        <div class="info">
          <div style="text-align:left;height:30px;color: #d4237a;">Ta收藏的目的地</div>
          <div style="text-align:left;height: 30px;">
            <span style="color: #000;margin-right: 12px;">{{saveCountry}}</span><span style="color: #999;">国家</span>
            <span style="color: #000;margin:0 12px 0 25px;">{{saveCity}}</span><span style="color: #999;">城市</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-answer">
      <nav-strip v-for="i in answers" :info="i.info" :icon="i.icon" :link="i.icon_link"></nav-strip>
    </div>
  </div>
</template>
<script>
  import NavStrip from './NavStrip.vue'

  export default {
    data () {
      return {
        feetCountry: 11,
        feetCity: 26,
        saveCountry: 20,
        saveCity: 30,
        answers: [
          {icon: '/static/img/person/svg/answer1.svg', info: 'Ta的帖子', icon_link: '/no-page'},
          {icon: '/static/img/person/svg/answer2.svg', info: 'Ta的问答', icon_link: '/no-page'},
          {icon: '/static/img/person/svg/answer3.svg', info: 'Ta的结伴', icon_link: '/no-page'}
        ]
      }
    },
    props: {},
    components: {NavStrip},
    methods: {}
  }
</script>
<style lang="less">
  @height: 80px;
  #nav-panel {
    width: 100%;
    .other-feet {
      height: @height;
      background-color: white;
      > .icon {
        display: inline-block;
        height: @height;
        text-align: center;
        width: @height;
        vertical-align: top;
        background-size: 50% 50%;
        background-position: center;
        background-repeat: no-repeat;
      }
      > .info {
        color: #717171;
        height: @height;
        display: inline-block;
        text-align: left;
        vertical-align: middle;
        padding-top: 15px;
      }
    }
  }
</style>
