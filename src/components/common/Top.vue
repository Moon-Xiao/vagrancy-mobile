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
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .top-margin {
    margin-bottom: 40px;
  }

  .left {
    /*align-self: flex-start;*/
  }

  .middle {
    /*align-self: center;*/
  }

  .right {
    /*align-self: flex-end;*/
  }
</style>
