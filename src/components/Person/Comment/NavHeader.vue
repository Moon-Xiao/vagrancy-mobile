<template>
  <div style="height: 0; margin-top: 60px; width: 100%">
    <div class="nav-header">
      <div class="header-left" @click="$router.back()">
        <slot name="left"></slot>
      </div>
      <div class="header-middle">
        <slot name="middle"></slot>
      </div>
      <div class="header-right">
        <slot name="right"></slot>
      </div>
      <div style="clear: both"></div>
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
  @height: 60px;
  .nav-header {
    width: 100%;
    height: @height;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
    background: inherit;
    > .header-left {
      height: 100%;
      line-height: @height;
      text-align: center;
      width: @height;
      display: inline-block;
      vertical-align: top;
    }
    > .header-middle {
      font-size: 18px;
      font-weight: 500;
      height: 100%;
      display: inline-block;
      line-height: @height;
      vertical-align: top;
    }
    > .header-right {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      line-height: @height;
      color: white;
      /*background-color: #6495ed;*/
    }
  }
</style>
