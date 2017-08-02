<template>
  <div id="coupon">
    <img src="/static/img/person/img/defaultCollection.png" style="width: 100%;">

    <div class="add-img">
      <router-link to="#">
        <img src="/static/img/person/svg/collectionAdd.svg" style="width: 70px;">
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
  #coupon {
    width: 100%;
    min-height: 550px;
    position: relative;
    > .add-img {
      position: absolute;
      bottom: 0;
      right: 5%;
    }
  }
</style>
