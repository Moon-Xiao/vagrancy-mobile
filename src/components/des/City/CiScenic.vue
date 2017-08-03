<template>
  <div class="ci-scenic">
    <des-all-list></des-all-list>
  </div>
</template>
<script>
  import DesAllList from '../DesAlllist.vue'
  export default {
    components: {DesAllList},
    data () {
      return {
        scenics: [
          {
            name: '',
            img: '',
            info: ''
          }
        ]
      }
    }
  }
</script>
<style>
</style>
