<template>
  <div class="detail-gotop show"></div>
</template>
<script>
</script>
<style>
  .detail-gotop{
    position: fixed;
    opacity: 0;
    visibility: hidden;
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: url(/static/images/icon/gotop.png) center no-repeat;
    background-size: 50px auto;
    -webkit-transition: opacity 0.5s linear;
    transition: opacity 0.5s linear;
  }
  .detail-gotop.show{
    opacity: 1;
    visibility: visible;
  }

</style>
