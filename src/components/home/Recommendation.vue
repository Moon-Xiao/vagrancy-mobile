<template>
  <div class="recommendation">
    <div class="content">
      <div class="title">
        <p id="content-title">为你推荐</p>
        <p id="city-title">{{recommendCities[0]}}</p>
      </div>
      <div class="tag-icon">
        <div class="food-icon"><img class="icon" src="/static/images/icon/home1.1.svg">景点美食</div>
        <div class="store-icon"><img class="icon" src="/static/images/icon/home1.2.svg">商店</div>
        <div class="travel-icon"><img class="icon" src="/static/images/icon/home1.3.svg">游记</div>
        <div class="travel-icon"><img class="icon" src="/static/images/icon/home1.4.svg">地图</div>
      </div>

    </div>
    <div class="tags">
      <div class="city-tag">
        <img class="icon" src="/static/images/icon/home1.5.svg">
        <span>{{recommendCities[1]}}</span>
      </div>
      <div class="city-tag">
        <img class="icon" src="/static/images/icon/home1.5.svg">
        <span>{{recommendCities[2]}}</span>
      </div>
      <div class="city-tag">
        <img class="icon" src="/static/images/icon/home1.5.svg">
        <span>{{recommendCities[3]}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        recommendCities: ['东京', '佛罗伦萨', '巴厘岛', '墨尔本']
      }
    }
  }
</script>
<style scoped>
  .recommendation {
    text-align: center;
    margin: 0 10px;
  }

  .recommendation .tag-icon .icon {
    margin: auto;
    height: 30px;
  }

  .recommendation .content {
    padding: 10px;
    background-color: cadetblue;
    border-radius: 5px 5px 0 0;
  }

  .recommendation .icon {
    display: flex;
    justify-content: space-around;
  }

  .title #content-title {
    font-size: 12px;
    font-weight: normal;
    padding: 0;
    margin: 0;
  }

  .tag-icon icon {
    background-image: url(/static/images/icon/mao.svg);
  }
.tag-icon div{
  width: 20%;
  display: inline-block;
}
  .title #city-title {
    font-size: 18px;
    margin: 10px 0;
  }

  .recommendation .tags {
    height: 50px;
    border: 1px #ececec solid;
    border-top: none;
    border-radius: 0 0 5px 5px;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .city-tag {
    font-size: 12px;
    width: 90px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ececec;
    border-radius: 12px;
  }
  .city-tag img{
    width: 12px;
    margin-right: 5px;
  }


</style>
