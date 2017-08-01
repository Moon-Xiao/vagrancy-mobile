<template>
  <div id="create-schedule">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的行程</div>
    </nav-header>
    <form class="schedule-form">
      <div class="form-nav">
        <div class="schedule-time">
          <input style="border: none;border: 1px solid #7dd67f;width: 40%" type="date"/>
          <img src="/static/img/person/svg/line.svg" style="width: 20px;"/>
          <input style="border: none;border: 1px solid #7dd67f;width: 40%" type="date"/>
        </div>
        <div class="search-style">
          <search-bar holdText="始发地"></search-bar>
        </div>
        <div class="search-style">
          <search-bar holdText="目的地"></search-bar>
        </div>
        <div class="add-photo">

        </div>
      </div>
      <button type="submit" class="submit-btn">保存行程</button>
    </form>
  </div>
</template>
<script>
  import NavHeader from '../Comment/NavHeader.vue'
  import SearchBar from '../Comment/SearchBar.vue'

  export default {
    data () {
      return {}
    },
    props: {},
    components: {
      NavHeader,
      SearchBar
    },
    methods: {}
  }
</script>
<style lang="less">
  @back-color:#11bf79;
  body {
    margin: 0;
    padding: 0;
  }

  #create-schedule {
    width: 100%;
    .header-style {
      background-color: @back-color;
      z-index: 1;
      .back {
        width: 100%;
        height: 100%;
        background-size: 40% 40%;
        background-image: url("/static/img/person/svg/back.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    > .schedule-form {
      border: 1px solid black;
      width: 100%;
      > .form-nav {
        width: 90%;
        margin: 0 auto;
        > .schedule-time {

        }
        > .search-style {
          width: 100%;
          margin: 30px 0;
        }
      }
      > .submit-btn {
        padding: 10px;
        width: 90%;
        text-align: center;
        background-color: @back-color;
        color: white;
        border-radius: 2px;
        margin-left: 5%;
      }
    }
  }
</style>
