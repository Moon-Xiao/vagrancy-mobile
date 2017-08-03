<template>
  <div style="margin-top: 50px">
    <div class="des-bottom">
      <span v-if="isWant===false" class="want" @click="isWant=true">
        <svg-image src="/static/images/icon/like.svg" class="icon"></svg-image>添加到我想去
      </span>
      <span v-else class="want" @click="isWant=false">
        <svg-image src="/static/images/icon/like.svg" class="icon active"></svg-image>从想去中移除
      </span>
      <span class="partner">
        <img src="/static/images/des/icon/friends.svg" class="icon"/>结伴</span>
      <span class="qa">
        <img src="/static/images/des/icon/QA.svg" class="icon"/>问答</span>
    </div>
  </div>
</template>
<script>
  import SvgImage from '../common/SvgImage.vue'

  export default {
    components: {SvgImage},
    props: {
      isWant: Boolean
    }
  }
</script>
<style scoped>
  .des-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: white;
  }

  .des-bottom span {
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #444;
    margin: 10px 0;
    text-align: center;
  }

  .des-bottom .want {
    flex: 4;
    border-right: 1px lightgrey solid;
  }

  .des-bottom .partner {
    flex: 3;
    border-right: 1px lightgrey solid;
  }

  .des-bottom .qa {
    flex: 3;
  }

  .des-bottom .icon {
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block;
    width: 16px;
    height: 16px;
  }

  .des-bottom .icon.active {
    fill: #ee6455;
  }


</style>
