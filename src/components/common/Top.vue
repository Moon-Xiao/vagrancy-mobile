<template>
  <div class="top-margin">
    <div class="Top">
      <div class="left" @click="$router.back()">
        <slot name="left">
        </slot>
      </div>
      <div class="middle">
        <slot name="middle">
        </slot>
      </div>
      <div class="right">
        <slot name="right">
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
  .Top {
    width: 100%;
    height: 40px;
    background-color: #11bf79;
    position: fixed;
    top: 0;
    z-index: 999;
    color: white;
  }

  .top-margin {
    margin-bottom: 40px;
  }

  .left {
    position: absolute;
    left: 0;
    vertical-align: middle;
  }

  .middle {
    height: 100%;
  }

  .right {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
