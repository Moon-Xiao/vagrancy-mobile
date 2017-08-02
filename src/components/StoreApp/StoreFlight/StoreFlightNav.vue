<template>
  <div class="store-flight-nav-container">
    <div @click="selected=selected===1?0:1" class="nav-item">全部目的地</div>
    <div @click="selected=selected===2?0:2" class="nav-item">机票</div>
    <div @click="selected=selected===3?0:3" class="nav-item">更多筛选</div>
    <div @click="selected=selected===4?0:4" class="nav-item">智能排序</div>
    <div v-if="selected===1" class="all-destination">
      <div class="all-continent">
        <div @click="selectedContinent=index" v-for="(continent,index) in continents"
             v-bind:class="['continent',{active:index===selectedContinent}]">{{continent.name}}
        </div>
      </div>
      <div class="all-country">
        <div v-for="(country,index) in countries" v-if="index===selectedContinent">
          <div @click="selectedCountry=cindex" v-for="(icountry,cindex) in country"
               v-bind:class="['country',{active:cindex===selectedCountry}]">
            {{icountry.name}}
          </div>
        </div>
      </div>
    </div>
    <div v-if="selected===2" class="flight-div">
      <div class="distinct">
        <div class="distinct-item">全部商品</div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{categories[0].title}}</p></div>
        <div @click="selectedType=index" v-for="(kind,index) in categories[0].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selectedType}]">{{kind.name}}
        </div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{categories[1].title}}</p></div>
        <div @click="selecteOutside=index" v-for="(kind,index) in categories[1].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selecteOutside}]">{{kind.name}}
        </div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{categories[2].title}}</p></div>
        <div @click="selecteLocal=index" v-for="(kind,index) in categories[2].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selecteLocal}]">{{kind.name}}
        </div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{categories[3].title}}</p></div>
        <div @click="selecteDepth=index" v-for="(kind,index) in categories[3].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selecteDepth}]">{{kind.name}}
        </div>
      </div>
    </div>
    <div v-if="selected===3" class="more-choice-div">
      <div class="distinct">
        <div class="distinct-title"><p>{{moreChoices[0].title}}</p></div>
        <div @click="selectedDestination=index" v-for="(kind,index) in moreChoices[0].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selectedDestination}]">{{kind.name}}
        </div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{moreChoices[1].title}}</p></div>
        <div @click="selectedDate=index" v-for="(kind,index) in moreChoices[1].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selectedDate}]">{{kind.name}}</div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{moreChoices[2].title}}</p></div>
        <div @click="selectedClassify=index" v-for="(kind,index) in moreChoices[2].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selectedClassify}]">{{kind.name}}</div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{moreChoices[3].title}}</p></div>
        <div @click="selectedSale=index" v-for="(kind,index) in moreChoices[3].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selectedSale}]">{{kind.name}}</div>
      </div>
      <div class="distinct">
        <div class="distinct-title"><p>{{moreChoices[4].title}}</p></div>
        <div @click="selectedService=index" v-for="(kind,index) in moreChoices[4].kinds"
             v-bind:class="['distinct-item',{activeChoice:index===selectedService}]">{{kind.name}}</div>
      </div>
    </div>
    <div v-if="selected===4" class="digital-sort-div">
      <div @click="selectedSort=1" v-bind:class="['sort-item',{active:selectedSort===1}]">智能排序</div>
      <div @click="selectedSort=2" v-bind:class="['sort-item',{active:selectedSort===2}]">销量从高到低</div>
      <div @click="selectedSort=3" v-bind:class="['sort-item',{active:selectedSort===3}]">价格从低到高</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 0,
        selectedContinent: 0,
        selectedCountry: 0,
        selectedSort: 1,
        selectedType: 0,
        selecteOutside: 0,
        selecteLocal: 0,
        selecteDepth: 0,
        selectedDestination: 0,
        selectedDate: 0,
        selectedClassify: 0,
        selectedSale: 0,
        selectedService: 0,
        continents: [
          {
            name: '全部目的地'
          },
          {
            name: '亚洲'
          },
          {
            name: '北美'
          },
          {
            name: '大洋洲'
          },
          {
            name: '非洲'
          },
          {
            name: '欧洲'
          },
          {
            name: '南美'
          }
        ],
        countries: [
          [{
            name: '泰国'
          }, {
            name: '美国'
          }, {
            name: '越南'
          }, {
            name: '加拿大'
          }, {
            name: '墨西哥'
          }, {
            name: '中国'
          }, {
            name: '留尼旺'
          }, {
            name: '埃及'
          }],
          [{
            name: '亚洲全部'
          }, {
            name: '泰国'
          }, {
            name: '日本'
          }, {
            name: '中国'
          }, {
            name: '印度尼西亚'
          }, {
            name: '越南'
          }, {
            name: '新加坡'
          }, {
            name: '马来西亚'
          }, {
            name: '马尔代夫'
          }, {
            name: '菲律宾'
          }, {
            name: '柬埔寨'
          }, {
            name: '阿联酋'
          }, {
            name: '斯里兰卡'
          }, {
            name: '尼泊尔'
          }, {
            name: '缅甸'
          }, {
            name: '老挝'
          }],
          [{
            name: '北美全部'
          }, {
            name: '美国'
          }, {
            name: '加拿大'
          }, {
            name: '墨西哥'
          }],
          [{
            name: '大洋洲全部'
          }, {
            name: '澳大利亚'
          }, {
            name: '新西兰'
          }, {
            name: '北马里亚纳群岛'
          }, {
            name: '斐济'
          }, {
            name: '帕劳'
          }, {
            name: '关岛'
          }, {
            name: '法属波利尼西亚'
          }],
          [{
            name: '非洲全部'
          }, {
            name: '毛里求斯'
          }, {
            name: '塞舌尔'
          }, {
            name: '留尼汪'
          }, {
            name: '摩洛哥'
          }, {
            name: '埃及'
          }, {
            name: '马达加斯加'
          }],
          [{
            name: '欧洲全部'
          }, {
            name: '意大利'
          }, {
            name: '俄罗斯'
          }, {
            name: '德国'
          }, {
            name: '英国'
          }, {
            name: '西班牙'
          }, {
            name: '法国'
          }, {
            name: '捷克'
          }, {
            name: '希腊'
          }, {
            name: '土耳其'
          }, {
            name: '丹麦'
          }, {
            name: '瑞士'
          }, {
            name: '亚美尼亚'
          }, {
            name: '格鲁吉亚'
          }, {
            name: '阿塞拜疆'
          }, {
            name: '葡萄牙'
          }, {
            name: '比利时'
          }, {
            name: '奥地利'
          }],
          [{
            name: '南美全部'
          }, {
            name: '玻利维亚'
          }, {
            name: '智利'
          }, {
            name: '巴西'
          }, {
            name: '阿根廷'
          }]
        ],
        categories: [
          {
            title: '机酒自由行',
            kinds: [{name: '全部自由行'}, {name: '自由行'}, {name: '机票'}, {name: '邮轮'}, {name: '酒店'}]
          },
          {
            title: '出行必备',
            kinds: [{name: '全部必备'}, {name: '签证'}, {name: 'WIFI/电话卡'}, {name: '接送机/包车'}, {name: '交通票券'}, {name: '保险'}]
          },
          {
            title: '当地玩乐',
            kinds: [{name: '全部玩乐'}, {name: '门票/票券'}, {name: '日游小团'}, {name: '深度体验'}, {name: '当地参团'}, {name: '餐饮美食'}, {name: '购物'}, {name: '设备租赁'}, {name: '周末度假'}]
          },
          {
            title: '深度旅行',
            kinds: [{name: '全部线路'}, {name: 'citywalk'}, {name: '特色线路'}, {name: '穷游沙龙'}]
          }
        ],
        moreChoices: [
          {
            title: '出发地',
            kinds: [{name: '全部'}, {name: '北京/天津'}, {name: '上海/杭州'}, {name: '国内其他'}, {name: '广州/深圳'}, {name: '成都/重庆'}, {name: '港澳台'}, {name: '海外'}]
          },
          {
            title: '出发时间',
            kinds: [{name: '全部'}, {name: '1个月内'}, {name: '1-3个月'}, {name: '中秋节'}, {name: '国庆节'}, {name: '元旦/春节'}, {name: '清明节'}, {name: '劳动/端午节'}]
          },
          {
            title: '分类',
            kinds: [{name: '全部'}, {name: '机票'}]
          },
          {
            title: '促销活动',
            kinds: [{name: '全部'}, {name: '年终大促'}]
          },
          {
            title: '服务选项',
            kinds: [{name: '全部'}, {name: '48小时出票'}, {name: '直飞航班'}, {name: '可选开口航程'}, {name: '可配全国联运'}, {name: '可延长日期'}]
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  .store-flight-nav-container {
    height: 39px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    border-bottom: 1px solid rgb(200, 200, 200);
    background-color: rgb(250,250,250);

    .active {
      color: #11BF79 !important;
    }

    .activeChoice {
      color: #11BF79 !important;
      border: solid 1px #11BF79 !important;
    }

    > .nav-item {
      padding: 10px;
      color: #555555;
      font-size: 15px;
    }

    > .all-destination {
      height: 550px;
      width: 100%;
      position: absolute;
      top: 80px;
      left: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      z-index: 10;

      > .all-continent {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-right: solid 1px rgb(200, 200, 200);

        > .continent {
          font-size: 15px;
          color: #555555;
          height: 25px;
          padding: 12px 0 10px 10px;
          background-color: white;
          border-bottom: solid 1px rgb(200, 200, 200);
        }
      }

      > .all-country {
        flex: 1;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: rgb(240, 240, 240);
        overflow: scroll;

        .country {
          font-size: 15px;
          color: #555555;
          height: 25px;
          padding: 12px 0 10px 10px;
          border-bottom: solid 1px rgb(200, 200, 200);
        }
      }
    }

    > .flight-div, > .more-choice-div {
      width: 100%;
      position: absolute;
      top: 75px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background-color: #F5F5F5;
      z-index: 10;

      > .distinct {
        width: 100%;
        border-bottom: solid 1px rgb(200, 200, 200);
        padding: 10px;

        > .distinct-title {
          color: #555555;
          font-size: 16px;
          font-weight: bold;

          > p {
            margin: 5px;
          }
        }

        > .distinct-item {
          border-radius: 5px;
          border: solid 1px rgb(200, 200, 200);
          margin-right: 10px;
          display: inline-block;
          padding: 5px 20px;
          font-size: 14px;
          margin-top: 10px;
          background-color: white;
          color: #777777;
        }
      }
    }

    > .digital-sort-div {
      width: 100%;
      position: absolute;
      top: 75px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 10;
      background-color: white;

      > .sort-item {
        width: 100%;
        height: 23px;
        text-align: center;
        border-bottom: solid 1px rgb(200, 200, 200);
        padding: 10px;
        font-size: 15px;
      }
    }

  }
</style>
