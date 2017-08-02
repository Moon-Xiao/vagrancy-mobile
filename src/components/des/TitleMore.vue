<template>
  <div class="title-more">
    <div class="title">{{title}}</div>
    <slot name="content" class="content"></slot>
    <router-link to="" class="more"><div>查看更多 > </div></router-link>
  </div>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style scoped>
  .title-more{
    background-color: white;
    margin-top: 10px;
    border-top: 1px #ececec solid;
    padding-bottom: 10px;
  }
  .title{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    color: #444444;
  }
  .more {
    text-align: center;
    color: #11bf79;
    text-decoration: none;
    margin: 3px ;
  }
</style>
