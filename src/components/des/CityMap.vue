<template>
  <div class="city-map">
    <div class="city-name">{{cityName}}地图</div>
  </div>
</template>
<script>
  export default {
    props: {
      cityName: String
    }
  }
</script>
<style>
  .city-map{
    background: url("/static/images/des/map.png");
    height: 95px;
    position: relative;
    color: #11BF79;
  }
  .city-map .city-name {
    background-color: white;
    position: absolute;
    top: 40%;
    left: 35%;
    padding: 3px 15px;
    border-radius: 20px;
    border:1.3px #11BF79 solid;
  }
</style>
