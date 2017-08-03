<template>
  <div class="city-tab-div">
    <div class="title">特色{{cityName}}</div>
    <div class="city-tab">
      <swi-tab :tabs="tabs">
        <div class="c-tab" slot="nav-0">
          <div v-for="sc in sceneryScenics" class="scenic-tab">
            <router-link to="/scenic">
              <div class="scenic">
                <div class="img" :style="`background-image: url('${sc.img}')`"></div>
                <div class="name">{{sc.name}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="c-tab" slot="nav-1">
          <div v-for="sc in foodScenics" class="scenic-tab">
            <router-link to="/scenic">
              <div class="scenic">
                <div class="img" :style="`background-image: url('${sc.img}')`"></div>
                <div class="name">{{sc.name}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="c-tab" slot="nav-2">
          <div v-for="sc in shopScenics" class="scenic-tab">
            <router-link to="/scenic">
              <div class="scenic">
                <div class="img" :style="`background-image: url('${sc.img}')`"></div>
                <div class="name">{{sc.name}}</div>
              </div>
            </router-link>
          </div>
        </div>
      </swi-tab>
    </div>
  </div>

</template>
<script>
  import SwiTab from '../../Person/Comment/Tab.vue'
  export default {
    components: {SwiTab},
    data () {
      return {
        tabs: [{title: '景色'}, {title: '美食'}, {title: '购物'}],
        sceneryScenics: [
          //  type: 'scenery',
          {
            name: '皇帝岛',
            img: '/static/images/content1.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content1.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content1.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content1.jpg'
          }
        ],
        foodScenics: [
          //  type: 'food',
          {
            name: '皇帝岛',
            img: '/static/images/content2.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content2.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content2.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content2.jpg'
          }
        ],
        shopScenics: [
          //  type: 'shop',
          {
            name: '皇帝岛',
            img: '/static/images/content3.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content3.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content3.jpg'
          },
          {
            name: '皇帝岛',
            img: '/static/images/content3.jpg'
          }
        ]
      }
    },
    props: {
      cityName: String
    }
  }
</script>
<style scoped>
  .city-tab-div {
    background-color: white;
  }

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    color: #444444;
  }

  .c-tab {
    background-color: gray;
    width: 100%;
    background-color: white;
    padding: 15px 6px;
  }

  .scenic-tab {
    width: 50%;
    display: inline-block;
    margin-bottom: 15px;
  }

  .scenic-tab .scenic {
    margin: 0 7px;
  }

  .scenic-tab .img {
    height: 100px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }
  .scenic-tab .scenic .name{
    color: #444;
  }
</style>
