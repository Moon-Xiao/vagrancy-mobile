<template>
  <div class="des-map">
    <div class="content">{{content}}</div>
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
    position: relative;
    color: #11BF79;
  }
  .des-map .content {
    background-color: white;
    position: absolute;
    top: 40%;
    left: 35%;
    padding: 3px 15px;
    border-radius: 20px;
    border:1.3px #11BF79 solid;
  }
</style>
