<template>
  <div class="top-panel" :style="'background-image:url('+backImg+')'">
    <router-link to="/login">
      <div class="person-img" :style="'background-image:url('+img+')'"></div>
      <div class="person-name">{{name}}</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        backImg: '/static/img/person/img/backImg.png',
        img: '/static/img/person/img/person.jpeg',
        name: '登录体验更多'
      }
    },
    components: {},
    methods: {}
  }
</script>

<style lang="less">
  @height: 240px;
  .top-panel {
    background-size: cover;
    background: no-repeat center center;
    height: @height;
    width: 100%;
    a {
      text-decoration: none;
      padding-top: 70px;
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .person-img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .person-name {
      margin-top: 8px;
      color: white;
      font-weight: 700;
    }

  }

</style>
