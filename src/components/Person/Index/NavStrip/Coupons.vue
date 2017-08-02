<template>
  <div id="coupons">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的优惠券</div>
    </nav-header>
    <tab :tabs="collectionList">
      <div v-for="(item,index) in collectionList" :slot="`nav-`+index"
           style="width: 100%;">
        <div v-if="index===0">
          <used></used>
        </div>
        <div v-if="index===1">
          <unused></unused>
        </div>
      </div>
    </tab>
  </div>
</template>
<script>
  import NavHeader from '../../Comment/NavHeader.vue'
  import Tab from '../../Comment/Tab.vue'
  import Used from './Coupons/Used.vue'
  import Unused from './Coupons/Unused.vue'

  export default {
    data () {
      return {
        collectionList: [
          {title: '已使用', info: 'i1'},
          {title: '未使用', info: 'i3'}
        ]
      }
    },
    props: {},
    components: {
      NavHeader,
      Tab,
      Used,
      Unused
    },
    methods: {}
  }
</script>
<style lang="less">
  @back-color: #11bf79;
  @nav-color: #f5f5f5;
  body {
    margin: 0;
    padding: 0;
  }
  #coupons {
    width: 100%;
    .header-style {
      background-color: @back-color;
      z-index: 1;
      .back {
        width: 100%;
        height: 100%;
        background-size: 40% 40%;
        background-image: url("/static/img/person/svg/back.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .tab > .tab-header {
      background-color: white !important;
    }
    .tab > .tab-nav {
      background-color: @nav-color !important;
    }
  }
</style>
