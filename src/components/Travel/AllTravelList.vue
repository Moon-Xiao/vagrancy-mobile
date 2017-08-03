<template>
  <div class="travel-list">
    <l-m-top middle="最新精华游记"></l-m-top>
    <div class="time"></div>
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import LMTop from '../common/LMTop.vue'
  export default {
    components: {LMTop},
    data () {
      return {
        travels: [
          {
            title: '',
            bannerImg: '',
            author: '',
            authorImg: ''
          }
        ]
      }
    }
  }
</script>
<style>
</style>
