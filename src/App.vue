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
  import Home from '../src/components/Home.vue'
  import Destination from './components/Destinations.vue'
  import Country from './components/des/Country.vue'
  import City from './components/des/City.vue'
  import CommunityList from './components/community/CommunityList.vue'
  export default {
    components: {Home, Destination, Country, City, CommunityList},
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
</style>
