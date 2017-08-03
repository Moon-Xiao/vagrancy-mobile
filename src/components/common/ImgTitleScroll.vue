<template>
  <div class="img-title-slider">
    <div class="content" :style="`width:${sliders.length*200}px `">
      <a v-for="slider in sliders">
        <img :src="slider.img">
        <p>{{slider.title}}</p>
      </a>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      sliders: Array
    }
  }
</script>
<style scoped>
  .img-title-slider {
    width: 100%;
    margin: 10px 0;
    overflow: scroll;
  }

  .img-title-slider .content {
    margin: 0 10px;
    list-style: none;
  }

  .img-title-slider .content a {
    float: left;
    text-decoration: none;
    margin-right: 10px;
  }

  .img-title-slider img {
    width: 150px;
  }

  .img-title-slider p {
    margin: 2px 0;
  }
</style>

