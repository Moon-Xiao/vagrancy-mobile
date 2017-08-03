<template>
  <div class="des-map">
      <span class="content-info">{{content}}</span>

  </div>
</template>
<script>
  export default {
    props: {
      content: String
    }
  }
</script>
<style scoped>
  .des-map{
    background: url("/static/images/des/map.png");
    height: 95px;
    color: #11BF79;
    text-align: center;
  }
  .des-map .content-info {
    display: inline-block;
    vertical-align: middle;
    margin-top: 33px;
    background-color: white;
    padding: 3px 15px;
    border-radius: 15px;
    border:1.3px #11BF79 solid;
  }
</style>
