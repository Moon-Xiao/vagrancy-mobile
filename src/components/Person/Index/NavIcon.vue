<template>
  <div class="navIcon">
    <router-link :to="link">
      <div :style="'background-image:url('+icon+')'"></div>
      <p>{{info}}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      icon: String,
      info: String,
      link: String
    },
    components: {},
    methods: {}
  }
</script>

<style lang="less">
  @height: 40px;
  @back-color: #11bf79;
  .navIcon {
    text-align: center;
    flex: 1;
    div {
      height: @height;
      color: white;
      text-align: center;
      line-height: @height;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 80% 80%;
    }
    p {
      margin: 10px 0 0 0;
      padding: 0;
      color: @back-color;
    }
  }
</style>
