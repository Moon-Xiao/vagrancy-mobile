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
    data () {
      return {
        left: false,
        right: false
      }
    },
    methods: {
      tap (e) {
        console.log(e)
      },
      press (e) {
        console.log(e)
      }
    }
  }
</script>
<style>
  #app {
    background-color: #F5F5F5;
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
