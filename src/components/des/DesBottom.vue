<template>
  <div class="des-bottom">
    <span v-if="isWant" class="want">添加到我想去</span>
    <div v-else class="want">从想去中移除</div>
    <span class="partner">结伴</span>
    <span class="qa">问答</span>
  </div>
</template>
<script>
  export default {
    props: {
      isWant: Boolean
    }
  }
</script>
<style>
  .des-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: white;
  }

  .des-bottom span {
    height: 20px;
    line-height: 20px;
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


</style>
