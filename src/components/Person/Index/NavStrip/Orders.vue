<template>
  <div id="orders">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的订单</div>
    </nav-header>
    <tab :tabs="collectionList">
      <div v-for="(item,index) in collectionList" :slot="`nav-`+index"
           style="width: 100%;">
        <div v-if="index===0">
          <all-payments></all-payments>
        </div>
        <div v-if="index===1">
          <pending-payments></pending-payments>
        </div>
        <div v-if="index===2">
          <pending-evaluation></pending-evaluation>
        </div>
        <div v-if="index===3">
          <sale-service></sale-service>
        </div>
      </div>
    </tab>
  </div>
</template>
<script>
  import NavHeader from '../../Comment/NavHeader.vue'
  import Tab from '../../Comment/Tab.vue'
  import AllPayments from './Orders/AllPayments.vue'
  import PendingPayments from './Orders/PendingPayments .vue'
  import PendingEvaluation from './Orders/PendingEvaluation.vue'
  import SaleService from './Orders/SaleService .vue'

  export default {
    data () {
      return {
        collectionList: [
          {title: '全部', info: 'i1'},
          {title: '待付款', info: 'i3'},
          {title: '待评价', info: 'i2'},
          {title: '退款/售后', info: 'i5'}
        ]
      }
    },
    props: {},
    components: {
      NavHeader,
      Tab,
      AllPayments,
      PendingPayments,
      PendingEvaluation,
      SaleService
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

  #orders {
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
