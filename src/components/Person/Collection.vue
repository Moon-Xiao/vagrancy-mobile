<template>
  <div id="collection">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的收藏</div>
    </nav-header>
    <tab :tabs="collectionList">
      <div v-for="(item,index) in collectionList" :slot="`nav-`+index"
           style="width: 100%;">
        <div v-if="index===0">
          <travels></travels>
        </div>
        <div v-if="index===1">
          <goods></goods>
        </div>
        <div v-if="index===2">
          <hotel></hotel>
        </div>
        <div v-if="index===3">
          <destination></destination>
        </div>
        <div v-if="index===4">
          <coupon></coupon>
        </div>
      </div>
    </tab>
  </div>
</template>
<script>
  import NavHeader from './Comment/NavHeader.vue'
  import Tab from './Comment/Tab.vue'
  import Travels from './Collection/Travels.vue'
  import Destination from './Collection/Destination.vue'
  import Goods from './Collection/Goods.vue'
  import Hotel from './Collection/Hotel.vue'
  import Coupon from './Collection/Coupon.vue'

  export default {
    data () {
      return {
        collectionList: [
          {title: '游记', info: 'i1'},
          {title: '商品', info: 'i3'},
          {title: '酒店', info: 'i4'},
          {title: '目的地', info: 'i2'},
          {title: '优惠券', info: 'i5'}
        ]
      }
    },
    props: {},
    components: {
      NavHeader,
      Tab,
      Travels,
      Goods,
      Hotel,
      Destination,
      Coupon
    },
    methods: {}
  }
</script>
<style lang="less">
  @back-color: #11bf79;
  body {
    margin: 0;
    padding: 0;
  }

  #collection {
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
  }
</style>
