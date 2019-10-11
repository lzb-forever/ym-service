<template>
  <div>
    <div v-if="show" class="loading">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 数据分析中...
      </div>
    </div>
    <div v-if="!show" class="showlooding">
      <div class="container-flex" tabindex="0" hidefocus="true">
        <div class="box-center margin-bottom-1">
          <div class="center-center">
            <div class="left-bottom">
              <div class="title-box">
                <h6>竞争分析</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="box-center" style="margin: 0 auto">
          <div class="data-box1 box1-back">
            <i class="topL"></i>
            <i class="topR"></i>
            <i class="bottomL"></i>
            <i class="bottomR"></i>
            <div class="data-title">
              <b class="data-title-left">[</b>
              <span>门店指数分析</span>
              <b class="data-title-right">]</b>
            </div>
            <div class="chart-box-title" style="padding-bottom: 25px;">
              <table class="table-compate">
                <thead>
                  <tr class="table-head">
                    <th rowspan="2"></th>
                    <th rowspan="2">评价数(近28天)</th>
                    <th rowspan="2">效果分</th>
                    <th rowspan="2">环境分</th>
                    <th rowspan="2">服务分</th>
                    <th rowspan="2">人均消费(元)</th>
                    <th colspan="4">商圈排名</th>
                    <th colspan="4">地区排名</th>
                    <th colspan="4">市区排名</th>
                  </tr>
                  <tr class="table-head-1">
                    <th>访客</th>
                    <th>到店</th>
                    <th>预约</th>
                    <th>好评</th>

                    <th>访客</th>
                    <th>到店</th>
                    <th>预约</th>
                    <th>好评</th>

                    <th>访客</th>
                    <th>到店</th>
                    <th>预约</th>
                    <th>好评</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-tr1" v-for="(item, index) in mendian_zhishu" :key="index">
                    <td>{{item[0]}}</td>
                    <td>{{item[1]}}</td>
                    <td>{{item[2]}}</td>

                    <td>{{item[3]}}</td>
                    <td>{{item[4]}}</td>
                    <td>￥{{item[5]}}</td>

                    <td>{{item[6].fangke.areaTypeValue}}</td>
                    <td>{{item[6].daodian.areaTypeValue}}</td>
                    <td>{{item[6].yueyue.areaTypeValue}}</td>
                    <td>{{item[6].haoping.areaTypeValue}}</td>

                    <td>{{item[6].fangke.areaTypeMidValue}}</td>
                    <td>{{item[6].daodian.areaTypeMidValue}}</td>
                    <td>{{item[6].yueyue.areaTypeMidValue}}</td>
                    <td>{{item[6].haoping.areaTypeMidValue}}</td>

                    <td>{{item[6].fangke.areaTypeCityValue}}</td>
                    <td>{{item[6].daodian.areaTypeCityValue}}</td>
                    <td>{{item[6].yueyue.areaTypeCityValue}}</td>
                    <td>{{item[6].haoping.areaTypeCityValue}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
              <div class="t_left_box-in-tip" style="margin:  0.2rem auto 0.3rem auto;">
                <div class="backData">数据分析</div>

                <div class="textareaBox">
                  <textarea
                    class="textsInput"
                    name
                    id
                    cols="30"
                    :placeholder="competeTip"
                    v-model="competeTip"
                    v-on:input="competeTipClick"
                    rows="4"
                  ></textarea>
                </div>
              </div>
          </div>
        </div>

        <div class="flew-row" style="width: 90%; margin:auto; margin-bottom: 0.3rem">
          <div class="t_left_box-compete" style="margin-left: 0.5rem">
            <img
              class="t_l_line"
              src="../assets/img/left_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />
            <div class="flew-col">
              <div class="t_mbox-in t_cbox" style="margin-top: 0;">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span style="display:inline-block">到店消费总额（元）</span>
                <h2>￥{{xiaoFeiAmt}}</h2>
              </div>
              <div class="t_mbox-in t_gbox" style="margin-top: 0.35rem">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span style="padding-left: 0.1rem;display:inline-block">到店总笔数</span>
                <h2>{{xiaoFeiNumber}}</h2>
              </div>
              <div class="t_mbox-in t_ybox" style="margin-top: 0.35rem">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span>到店消费单价（元）</span>
                <h2>￥{{xiaoFeiPrice}}</h2>
              </div>
            </div>
            <img
              class="t_r_line"
              src="../assets/img/right_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />
          </div>

          <div
            class="data-box1 box1-back margin-bottom"
            style="width: 11.7rem;margin-left: 0.5rem;margin-right: 0.5rem; height: auto"
          >
            <i class="topL"></i>
            <i class="topR"></i>
            <i class="bottomL"></i>
            <i class="bottomR"></i>
            <div class="data-title">
              <b class="data-title-left">[</b>
              <span>门店数据（14天）</span>
              <b class="data-title-right">]</b>
            </div>
            <div class="chart-box-title" style="padding-bottom: 25px;">
              <table class="table-shop">
                <thead>
                  <tr class="table-head">
                    <th>排名</th>
                    <th>门店名称</th>
                    <th>到店消费额</th>
                    <th>到店消费笔数</th>
                    <th>到店消费单价</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-tr1" v-for="(items, index) in mendian_data" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{items[0]}}</td>
                    <td>￥{{items[1]}}</td>
                    <td>{{items[2]}}</td>
                    <td>￥{{items[3]}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      show: true,
      photoUrl: "",
      photoShow: false,
      tabId: "",
      mendian_data: [],
      mendian_zhishu: [],
      xiaoFeiAmt: "",
      xiaoFeiNumber: "",
      xiaoFeiPrice: "",
      add1: "",
      add2: "",
      add3: "",
      formInline: {},
      accountIds: null,
       /* 竞争分析 */
      competeTip:
        "评价数：每周小于3差，大于3良好，大于7优秀效果分、环境分、服务分需大于9.0，维持门店5星。注意客户打分情况。人均消费较高可通过增加评价时降低消费金额。访客排名可做霸王餐，线下引导活动，提报点评活动或增加推广预算到店排名：补单预约排名：引导老客户线上预约新客户走线上预约方式好评：探店评价、霸王餐、新老客户评价引导。"
    };
  },
  methods: {
    submitForm() {
      var accountIds = sessionStorage.getItem("sendAccountId");
      accountIds = JSON.parse(accountIds);
      this.accountIds = accountIds;
      var formInline = sessionStorage.getItem("user");
      formInline = JSON.parse(formInline);
      this.formInline = formInline;
      console.log(this.formInline);
      var date2 = formInline.date2;
      var indexId = formInline.region;
      var accountIds = this.accountIds;
      var region = accountIds[indexId].value;

      this.$axios
        .post(`/api/compete/analysis/${region}/${date2}.json`)
        .then(response => {
          console.log(response);
          this.show = false;
          this.xiaoFeiAmt = response.data.data.xiaoFeiAmt;
          this.xiaoFeiNumber = response.data.data.xiaoFeiNumber;
          this.xiaoFeiPrice = response.data.data.xiaoFeiPrice;
          this.mendian_data = response.data.data.mendian_data;
          this.mendian_zhishu = response.data.data.mendian_zhishu;

          this.add1 = response.data.data.mendian_zhishu[0][6].haoping.areaType;
          this.add2 =
            response.data.data.mendian_zhishu[0][6].haoping.areaTypeMid;
          this.add3 =
            response.data.data.mendian_zhishu[0][6].haoping.areaTypeCity;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    competeTipClick(){
      var competeTip = this.competeTip
      localStorage.setItem("competeTipLocal",competeTip) 
      console.log(localStorage.getItem("competeTipLocal"))
    }
  },
  created() {
    var competeTip = localStorage.getItem("competeTipLocal")
    if (competeTip != null){
      this.competeTip = competeTip
    }
    this.submitForm();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/style.css";
</style>