<template>
  <div id="search-bar">
    <input type="text" :placeholder="holdText"/>
    <img src="/static/img/person/svg/search.svg">
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      holdText: String
    },
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  #search-bar {
    @back-color:#11bf79;
    position: relative;
    > input {
      padding: 15px 0;
      width: 100%;
      border-radius: 2px;
      border: none;
      border: 1px solid @back-color;
    }
    > input::placeholder {
      padding-left: 10px;
      color: @back-color;
    }
    >img{
      position: absolute;
      right: 2%;
      width: 20px;
      top:0;
      margin-top: 15px;
    }
  }
</style>
