<template>
  <div id="create-schedule">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的行程</div>
    </nav-header>
    <form class="schedule-form">
      <div class="form-nav">
        <div class="schedule-time">
          <div class="time-back">
            <input style="width: 100%;opacity: 0" type="date"/>
          </div>
          <div style="flex: 1;text-align: center">
            <img src="/static/img/person/svg/line.svg" style="width: 20px;"/>
          </div>
          <div class="time-back">
            <input style="width: 100%;opacity: 0" type="date"/>
          </div>
        </div>
        <div class="search-style">
          <search-bar holdText="始发地"></search-bar>
        </div>
        <div class="search-style">
          <search-bar holdText="目的地"></search-bar>
        </div>
        <div class="info-img">
          <input style="width: 100%;height: 100%;opacity: 0" @change="addFile" type="file"
                 accept="image/jpeg, image/png, image/gif"/>
        </div>
      </div>
      <button type="submit" class="submit-btn">保存行程</button>
    </form>
  </div>
</template>
<script>
  import NavHeader from '../../../Comment/NavHeader.vue'
  import SearchBar from '../../../Comment/SearchBar.vue'

  export default {
    data () {
      return {}
    },
    props: {},
    components: {
      NavHeader,
      SearchBar
    },
    methods: {
      addFile: function (e) {
        this.img = e.srcElement.files[0]
        if (this.img.type.match(this.imageType)) {
          let reader = new FileReader()
          reader.onload = (function (aDiv) {
            return function (e) {
              aDiv.css('background', 'url(' + e.target.result + ') no-repeat center')
              aDiv.css('background-size', 'cover')
            }
          })(window.$('#photo-img'))
          reader.readAsDataURL(this.img)
        }
      }
    }
  }
</script>
<style lang="less">
  @back-color: #11bf79;
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
      width: 100%;
      background-color: white;
      > .form-nav {
        width: 90%;
        margin: 0 auto;
        > .schedule-time {
          width: 100%;
          display: flex;
          > .time-back {
            flex: 4;
            border: 1px solid black;
          }
        }
        > .search-style {
          width: 100%;
          margin: 30px 0;
        }
        > .info-img {
          width: 100px;
          height: 100px;
          margin: 40px 0 40px 0;
          background-size: 30% 30%;
          border: 1px solid @back-color;
          background-color: white;
          background-image: url("/static/img/person/svg/add-photo.svg");
          background-repeat: no-repeat;
          background-position: center;
          box-shadow: 0 0 5px #eee;
          opacity: 1;
        }
      }
      > .submit-btn {
        padding: 10px;
        width: 90%;
        text-align: center;
        background-color: @back-color;
        color: white;
        border-radius: 3px;
        margin-left: 5%;
      }
    }
  }
</style>
