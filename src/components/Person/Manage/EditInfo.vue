<template>
  <div id="edit-info">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">编辑个人信息</div>
    </nav-header>
    <form class="info-table">
      <div class="info-img" :style="`background-image: url('${img}')`" title="点我更换头像">
        <input style="width: 100%;height: 100%;opacity: 0" @change="addFile" type="file"
               accept="image/jpeg, image/png, image/gif"/>
      </div>
      <div class="input-lists">
        <input type="text" v-model="nickname" placeholder="修改用户名"/>
        <input type="text" v-model="address" placeholder="修改住址"/>
        <input type="text" v-model="phone" placeholder="修改手机号"/>
        <input type="text" v-model="intro" placeholder="修改个性签名"/>
      </div>
      <div class="form-submit">
        <button type="button" @click="updateUserInfo" class="submit-btn">保存修改</button>
      </div>
    </form>
  </div>
</template>
<script>
  import NavHeader from '../Comment/NavHeader.vue'

  export default {
    data () {
      return {
        imageType: /image.*/,

        nickname: '',
        address: '',
        phone: '',
        intro: '',
        avatar: null
      }
    },
    props: {},
    components: {
      NavHeader
    },
    methods: {
      addFile: function (e) {
        this.avatar = e.srcElement.files[0]
        if (this.avatar.type.match(this.imageType)) {
          let reader = new FileReader()
          reader.onload = (function (aDiv) {
            return function (e) {
              aDiv.css('background', 'url(' + e.target.result + ') no-repeat center')
              aDiv.css('background-size', 'cover')
            }
          })(window.$('#photo-img'))
          reader.readAsDataURL(this.avatar)
        }
      },
      async updateUserInfo () {
        try {
          const {nickname, address, phone, intro, avatar} = this
          let info = {}
          if (nickname) info.nickname = nickname
          if (address) info.address = address
          if (phone) info.phone = phone
          if (intro) info.intro = intro
          if (avatar) info.avatar = avatar
          await this.updateInfo(info)
          window.alert('保存成功！')
        } catch (error) {
          window.alert(`保存修改失败：${error.toLocaleString()}`)
        }
      }
    },
    computed: {
      img () {
        return this.userInfo.avatar ? this.baseUrl + this.userInfo.avatar.path : '/static/img/person/img/person.jpeg'
      }
    }
  }
</script>
<style lang="less">
  @back-color: #11bf79;
  @nav-color: #f5f5f5;
  body {
    margin: 0;
    padding: 0;
  }

  #edit-info {
    background-color: white;
    width: 100%;
    .back {
      width: 100%;
      height: 100%;
      background-size: 40% 40%;
      background-image: url("/static/img/person/svg/back.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
    .header-style {
      background-color: @back-color;
      z-index: 1;
    }
    > .info-table {
      width: 100%;
      margin-top: 60px;
      .info-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 50px auto;
        background: url(/static/img/person/img/person.jpeg) no-repeat;
        background-size: cover;
        box-shadow: 0 0 5px #eee;
        opacity: 1;
      }
      > .input-lists {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        > input {
          width: 100%;
          padding: 20px 0 20px 10px;
          display: inline-block;
          border: none;
          background-color: white;
          color: @back-color;
          border-bottom: 1px solid @back-color;
        }
        > input::placeholder {
          color: @back-color;
        }
      }
      > .form-submit {
        margin-top: 60px;
        padding-bottom: 100px;
        width: 100%;
        text-align: center;
        > button {
          background-color: white;
          padding: 10px 50px;
          width: 50%;
          margin: 0 auto;
          text-align: center;
          color: @back-color;
          border: 1px solid @back-color;
          border-radius: 3px;
        }
      }
    }
  }
</style>
