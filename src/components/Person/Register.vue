<template>
  <div id="register">
    <nav-header style="background-color: #11bf79;">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">手机号注册</div>
    </nav-header>
    <div class="input-lists">
      <div class="input-phone">
        <span style="display: inline-block;color: white;">+86<span
          style="color: white">&blacktriangledown;</span></span>
        <input type="text" placeholder="输入手机"/>
      </div>
      <div class="input-pass">
        <input type="password" placeholder="输入密码"/>
        <button type="button" class="send-btn">获取验证码</button>
      </div>
    </div>
    <div class="form-submit">
      <router-link to="login">
        <button type="submit">下一步</button>
      </router-link>
    </div>
  </div>
</template>
<script>
  import navHeader from './Comment/NavHeader.vue'

  export default {
    data () {
      return {}
    },
    props: {},
    components: {
      navHeader
    },
    methods: {}
  }
</script>
<style lang="less">
  @back-color:#11bf79;
  #register {
    background-color: @back-color;
    min-height: 620px;
    .back {
      width: 100%;
      height: 100%;
      background-size: 40% 40%;
      background-image: url("/static/img/person/svg/back.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
    > .input-lists {
      padding-top: 120px;
      width: 100%;
      > .input-phone {
        width: 90%;
        margin: 0 auto;
        border-bottom: 1px solid #fff;
        > input {
          display: inline-block;
          width: 80%;
          padding: 15px 5px;
          border: none;
          color: white;
          background-color: @back-color;
        }
        > input::placeholder {
          color: white;
        }
      }
      > .input-pass {
        margin: 10px auto 0 auto;
        width: 90%;
        height: 46px;
        > input {
          display: inline-block;
          padding: 15px 5px;
          border: none;
          color: white;
          border-bottom: 1px solid #fff;
          background-color: @back-color;
          width: 60%;
        }
        > input::placeholder {
          color: white;
        }
        > .send-btn {
          width: 35%;
          padding: 8px 20px;
          border-radius: 3px;
          border: 1px solid white;
          color: white;
          text-align: center;
          background-color: @back-color;
        }
      }
    }
    > .form-submit {
      width: 100%;
      text-align: center;
      margin-top: 120px;
       button {
        padding: 10px 0;
        width: 50%;
        text-align: center;
        background-color: white;
        color: @back-color;
         border: none;
        border-radius: 3px;
      }
    }
  }
</style>
