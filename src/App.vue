<template>
  <div id="app">
    <!--<home></home>-->
    <!--<destination></destination>-->
    <!--<country></country>-->
    <!--<city></city>-->
    <!--<community-list></community-list>-->
    <router-view></router-view>
  </div>

</template>
<script>
  export default {
    name: 'app',
    created () {
      this.$store.dispatch('init')
    }
  }
</script>
<style>
  #app {
    background-color: #F5F5F5;
    font-family: 苹方,\\82F9\65B9,PingFang,Helvetica,Arial,sans-serif!important;
  }
  #app li {
    list-style: none;
  }

  #app ul {
    padding: 0;
    margin: 0;
  }

  :focus{
    outline: none
  }
  #app a{
    text-decoration: none;
  }
</style>
