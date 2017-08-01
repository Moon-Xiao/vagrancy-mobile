<template>
  <div id="nav-panel">
    <div style="margin: 10px auto">
      <router-link to="/person/feet">
        <img src="/static/img/person/img/earth.jpg" width="100%"/>
      </router-link>
      <nav-strip :info="`Ta的足迹`" :icon="`/static/img/person/svg/feet1.svg`" :link="`/person/feet`"></nav-strip>
    </div>
    <div class="nav-answer">
      <nav-strip v-for="i in answers" :info="i.info" :icon="i.icon" :link="i.icon_link"></nav-strip>
    </div>
  </div>
</template>
<script>
  import NavStrip from './NavStrip.vue'
  export default {
    data () {
      return {

        answers: [
          {icon: '/static/img/person/svg/answer1.svg', info: 'Ta的帖子', icon_link: '/no-page'},
          {icon: '/static/img/person/svg/answer2.svg', info: 'Ta的问答', icon_link: '/no-page'},
          {icon: '/static/img/person/svg/answer3.svg', info: 'Ta的结伴', icon_link: '/no-page'}
        ]
      }
    },
    props: {},
    components: {NavStrip},
    methods: {}
  }
</script>
<style lang="less">
  #nav-panel {
    width: 100%;
  }
</style>
