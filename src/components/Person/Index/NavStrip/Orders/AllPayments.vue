<template>
  <div id="all-payments">
    <img src="/static/img/person/img/orders-ad.png" style="width: 100%;">
    <router-link to="" style="display: block;text-align: center;">
      <button class="look-btn">去逛逛</button>
    </router-link>
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
  @back-color: #11bf79;
  @nav-color: #f5f5f5;
  #all-payments {
    min-height: 560px;
    .look-btn {
      padding: 10px 50px;
      margin: 10px auto;
      text-align: center;
      background-color: @nav-color;
      color: @back-color;
      border: none;
      border: 1px solid @back-color;
      border-radius: 3px;
    }
  }
</style>
