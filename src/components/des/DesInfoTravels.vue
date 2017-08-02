<template>
  <div class="des-travels">
    <img src="/static/images/des/des-icon1.png" class="des-name-icon">
    <span class="des-name">{{desName}}</span>
    <img src="/static/images/des/des-icon2.png" class="des-arrow-icon">
    <span class="des-count">共{{travelsNum}}本 </span>
  </div>
</template>
<script>
  export default {
    props: {
      desName: String,
      travelsNum: Number
    }
  }
</script>
<style>
  .des-travels {
    background-color: white;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    border-bottom: 1px lightgray solid;
  }

  .des-name-icon {
    height: 30px;
    vertical-align: middle;
  }

  .des-name {
    vertical-align: middle;
    line-height: 50px;
  }

  .des-count {
    line-height: 50px;
    float: right;
  }

  .des-arrow-icon {
    vertical-align: middle;
    width: 15px;
    float: right;
  }
</style>
