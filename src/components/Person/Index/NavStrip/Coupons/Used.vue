<template>
  <div id="used">
    <img src="/static/img/person/img/coupon-ad.png" style="width: 100%;">
    <div class="nav-bottom">
      <router-link to="/person/schedules/create-schedule" style="text-decoration: none">
        <img style="width: 20px;vertical-align: middle;" src="/static/img/person/svg/add.svg"><span
        style="color: white">添加优惠券</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {},
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  @back-color:#11bf79;
  #used {
    min-height: 550px;
    background-color: rgb(238,238,238);
    > .nav-bottom {
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: white;
      background-color: @back-color;
      text-align: center;
      position: fixed;
      bottom: 0;
      font-size: 18px;
    }
  }
</style>
