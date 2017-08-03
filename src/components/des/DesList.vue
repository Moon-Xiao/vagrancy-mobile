<template>
  <div class="des-list">
    <ul>
      <li v-for="scenic in scenics">
        <router-link to="/scenic">
          <div class="scenic">
            <div class="img scenic-img"><img :src="scenic.img"/></div>
            <div class="content">
              <div class="name">{{scenic.name}}</div>
              <div class="info">{{scenic.info}}</div>
              <div class="count">
                <img src="/static/images/icon/heart.svg"/> <span class="like-count">{{scenic.likeCount}}人想去</span>
                <img src="/static/images/icon/heart.svg"/> <span class="went-count">{{scenic.wentCount}}人去过</span>
              </div>

            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      scenics: Array
    }
  }
</script>
<style scoped>
  .des-list {
    background-color: white;
    padding: 0 20px;
  }
  .des-list li{
    border-bottom: 1px #ececec solid;
  }

  .scenic{
    display: flex;
  }
  .scenic .content {
    margin: 10px;
    color: #444;
    display: flex;
    flex-direction: column;
  }
  .scenic .content .name {
    font-size: 20px;
  }
  .scenic-img{
    margin: 10px 0;
  }
  .scenic-img img{
    width: 130px;
    height: 90px;
  }

  .content .info{
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .count {
    font-size: 13px;
    line-height: 15px;
    color: gray;
    display: flex;
    margin-top: 20px;
  }

  .count img{
    height: 15px;
    width: 15px;
    display: inline-block;
  }

</style>
