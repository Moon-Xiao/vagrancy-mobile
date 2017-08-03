<template>
  <div class="pay-order-container">
    <div class="pay-order-top">
      <img src="/static/images/store_temp/返回-2.png"/>
      <div>填写信息</div>
    </div>
    <div class="product-info">
      <div class="first-line">
        <div class="first-line-img"><img :src="product.imageSrc"/></div>
        <div class="first-line-title"><p>{{product.title}}</p></div>
      </div>
      <div class="second-line">
        <div class="type">
          <p>产品类型</p>
          <p>出行日期</p>
          <p>购买数量</p>
        </div>
        <div class="detail">
          <p>{{product.days}}天往返+{{product.airline}}</p>
          <p>{{product.departureDates}}</p>
          <p>数量x{{product.num}}</p>
        </div>
      </div>
    </div>
    <div class="contact-info">
      <div class="contact-title">联系人信息</div>
      <div class="contact-line">
        <span class="label">姓名</span>
        <input type="text" placeholder="请填写真实姓名" v-model="info.name"/>
      </div>
      <div class="contact-line">
        <span class="label">手机</span>
        <input type="text" placeholder="用于接受短信" v-model="info.phone"/>
      </div>
      <div class="contact-line">
        <span class="label">邮箱</span>
        <input type="text" placeholder="用于境外24小时服务" v-model="info.email"/>
      </div>
    </div>
    <div class="note-div">
      <span class="label">备注留言</span>
      <input type="text" placeholder="如有其它需求，请在此给商家留言" v-model="info.message"/>
    </div>
    <div class="fixed-div">
      <div class="fixed-item">
        ￥{{product.price}}.00
      </div>
      <div @click="$router.back()" class="pay-order">
        提交订单
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        product: {
          imageSrc: '/static/images/store_temp/malaiqu.jpg',
          title: '北京直飞厦门4天往返含税机票（含1晚酒店，赠接机）',
          days: '5',
          airline: '中国北方航空公司',
          departureDates: '2017/8/9',
          num: '2',
          price: '1599'
        },
        info: {
          name: '',
          phone: '',
          email: '',
          message: ''
        }
      }
    }
  }
</script>

<style lang="less">
  .pay-order-container {
    background-color: #F5F5F5;

    p {
      margin: 0;
    }
    a {
      text-decoration: none;
    }

    > .pay-order-top {
      height: 40px;
      background-color: #11BF79;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      > img {
        height: 30px;
        width: 30px;
        margin-left: 10px;
      }

      > div {
        color: white;
        font-weight: 100;
        font-size: 19px;
        width: 80%;
        text-align: center;
      }

    }

    > .product-info {
      width: 100%;
      background-color: white;
      margin-bottom: 10px;

      > .first-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 10px 8px 10px;

        > .first-line-img {
          flex: 1;

          > img {
            width: 100%;
          }
        }

        > .first-line-title {
          flex: 4;

          > p {
            padding-left: 10px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }

      }

      > .second-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        color: rgb(120, 120, 120);
        padding: 0px 10px 10px 10px;

        > .type {
          flex: 1;
          line-height: 23px;
        }

        > .detail {
          flex: 4;
          line-height: 23px;
        }
      }
    }

    > .contact-info {
      background-color: white;
      margin-bottom: 10px;

      > .contact-title {
        color: #777777;
        font-size: 15px;
        padding: 10px;
        border-bottom: solid 1px rgb(240, 240, 240);
      }

      > .contact-line {
        padding: 15px;
        color: #333333;
        font-size: 15px;
        border-bottom: solid 1px rgb(240, 240, 240);

        > span {
          display: inline-block;
          width: 25%;
        }

        > input {
          width: 60%;
          font-size: 14px;
          border: none;
          ::-webkit-input-placeholder { /* WebKit browsers */
            color: rgb(250, 250, 250);
          }
          :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: rgb(250, 250, 250);
            opacity: 1;
          }
          ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: rgb(250, 250, 250);
            opacity: 1;
          }
          :-ms-input-placeholder { /* Internet Explorer 10+ */
            color: rgb(250, 250, 250);
          }
        }

      }

      > .contact-line {
        border: none;
      }

    }

    > .note-div {
      background-color: white;
      padding: 15px;
      color: #333333;
      font-size: 15px;

      > span {
        display: inline-block;
        width: 25%;
      }

      > input {
        width: 60%;
        font-size: 14px;
        border: none;
        ::-webkit-input-placeholder { /* WebKit browsers */
          color: rgb(250, 250, 250);
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color: rgb(250, 250, 250);
          opacity: 1;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: rgb(250, 250, 250);
          opacity: 1;
        }
        :-ms-input-placeholder { /* Internet Explorer 10+ */
          color: rgb(250, 250, 250);
        }
      }
    }

    > .fixed-div {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 55px;
      background-color: rgb(113, 113, 113);
      width: 100%;
      color: white;

      > .fixed-item {
        float: left;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        margin: 0 20px;
        font-size: 24px;
      }

      > .pay-order {
        background-color: rgb(253, 117, 107);
        color: white;
        font-size: 20px;
        float: right;
        height: 100%;
        padding: 13px 25px;
      }

    }
  }
</style>
