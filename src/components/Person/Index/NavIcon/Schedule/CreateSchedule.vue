<template>
  <div id="create-schedule">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">我的行程</div>
    </nav-header>
    <form class="schedule-form">
      <div class="form-nav">
        <div class="schedule-time">
          <div id="start_time" class="time-back">
            <div class="time-wrapper">
              <input :value="startTime" class="time-text" type="text" readonly placeholder="预计出发时间"><span
              class="time-btn">+</span>
            </div>
            <input v-model="startTime" style="width: 100%;opacity: 0" type="date"/>
          </div>
          <div style="flex: 1;text-align: center">
            <img src="/static/img/person/svg/line.svg" style="width: 20px;"/>
          </div>
          <div class="time-back">
            <div class="time-wrapper">
              <input :value="endTime" class="time-text" type="text" readonly placeholder="预计返回时间"><span
              class="time-btn">+</span>
            </div>
            <input v-model="endTime" style="width: 100%;opacity: 0" type="date"/>
          </div>
        </div>
        <div class="search-style">
          <search-bar holdText="始发地"></search-bar>
        </div>
        <div class="search-style">
          <search-bar holdText="目的地"></search-bar>
        </div>
        <div ref="img" class="info-img" id="photo-img">
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
      return {
        startTime: '',
        endTime: '',
        startPlace: '',
        endPlace: '',
        img: '',
        imageType: /image.*/
      }
    },
    computed: {
      getTime: function () {
        let date = new Date()
        return date.getYear() + '-' + date.getMonth() + '-' + date.getDay()
      }
    },
    props: {},
    components: {
      NavHeader,
      SearchBar
    },
    methods: {
      addFile (e) {
        this.img = e.srcElement.files[0]
        if (this.img.type.match(this.imageType)) {
          console.log('1', this)
          let reader = new FileReader()
          reader.onload = e => {
            this.$refs.img.style.backgroundImage = 'url(\'' + e.target.result + '\')'
            this.$refs.img.style.backgroundSize = 'cover'
          }
          console.log('2', this)
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
    background-color: white;
    min-height: 600px;
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
        padding-top: 40px;
        width: 90%;
        margin: 0 auto;
        > .schedule-time {
          width: 100%;
          display: flex;
          > .time-back {
            flex: 4;
            position: relative;
            > .time-wrapper {
              width: 100%;
              display: flex;
              position: absolute;
              > .time-text {
                width: 100%;
                border: 1px solid @back-color;
              }
              > .time-text::placeholder {
                color: @back-color;
                padding-left: 5px;
              }
              > .time-btn {
                text-align: center;
                width: 24px;
                color: @back-color;
                border: 1px solid @back-color;
                border-left: none;
              }
            }
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
        position: fixed;
        padding: 10px;
        width: 90%;
        bottom: 40px;
        text-align: center;
        background-color: @back-color;
        color: white;
        border: none;
        border-radius: 3px;
        margin-left: 5%;
      }
    }
  }
</style>
