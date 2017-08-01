<template>
  <div id="travels">
    <img src="/static/img/person/img/defaultCollection.png" style="width: 100%;">
    <div class="add-img">
      <img src="/static/img/person/svg/collectionAdd.svg" style="width: 70px;">
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {},
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  #travels {
    width: 100%;
    min-height: 600px;
    position: relative;
    >.add-img{
      position: absolute;
      bottom: 0;
      right: 3%;
    }
  }
</style>
