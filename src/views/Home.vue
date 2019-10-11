<template>
  <div class="background">
    <div v-if="show" class="loading">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 数据分析中...
      </div>
    </div>
    <div v-if="!show">
      <div class="index_nav">
        <ul style="height: 30px; width: 95%; margin: 0 auto; margin-bottom: 0px;">
          <li class="l_left total_chose_pl" id="tabId" @click="toHome(0)">
            <a>数据概览</a>
          </li>
          <li class="l_left total_chose_pl" id="tabId" @click="toFlow(1)">
            <a>流量分析</a>
          </li>
          <li class="r_right total_chose_pl" id="tabId" @click="toCompete(2)">
            <a>竞争分析</a>
          </li>
          <li class="r_right total_chose_pl" id="tabId" @click="toCommodity(3)">
            <a>商品分析</a>
          </li>
        </ul>
      </div>
      <div class="center-top">
        <h1 style="margin-top: 0.2rem">数据分析咨询服务</h1>
      </div>
      <!-- 此处是要截取的图片 -->

      <div class="container-flex" tabindex="0" hidefocus="true">
        <div class="box-center">
          <div class="center-center" style="margin-bottom: 0.15rem">
            <div class="left-bottom">
              <div class="title-box">
                <h6>数据概览</h6>
                <h6 style="margin-left: 4rem">
                  <span>商家：</span>
                  <span>{{accountId[formInline.region].name}}</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>报表时间：</span>
                  <span>{{formInline.date2}}</span>
                  <span>&nbsp;{{formInline.week}}</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>责任销售：</span>
                  <span>{{formInline.users}}</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>责任运营：</span>
                  <span>{{formInline.user}}</span>
                  <span></span>
                </h6>
              </div>
            </div>
          </div>
          <div class="t_left_box-in" style="margin: 0 auto">
            <img
              class="t_l_line"
              src="../assets/img/left_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />
            <div class="flew-row">
              <div class="t_mbox-in t_orbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span style="display:inline-block">到店消费总额（元）</span>
                <h2>￥{{xiaoFeiAmt_14}}</h2>
              </div>

              <div class="t_mbox-in t_gbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span style="padding-left: 0.1rem;display:inline-block">到店消费笔数</span>
                <h2>{{daodian_xioafei_14}}</h2>
              </div>
              <div class="t_mbox-in t_ybox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span>到店消费单价（元）</span>
                <h2>￥{{daodain_xiaofei_price_14}}</h2>
              </div>
              <div class="t_mbox-in t_cbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span style="padding-left: 0.15rem;display:inline-block">销售总额（元）</span>
                <h2>￥{{xiaoshou_zonge_14}}</h2>
              </div>
              <div class="t_mbox-in t_obox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span style="padding-left: 0.2rem;display:inline-block">退款金额（元）</span>
                <h2>￥{{tuikuang_14}}</h2>
              </div>
              <div class="t_mbox-in t_rbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近14天</span>
                <span style="padding-left: 0.35rem;display:inline-block">退款率</span>
                <h2>{{tuikuanglv_14}}%</h2>
              </div>
            </div>

            <img
              class="t_r_line"
              src="../assets/img/right_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />
          </div>
          <div class="t_left_box-in" style="margin: 0 auto;">
            <img
              class="t_l_line"
              src="../assets/img/left_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />
            <div class="flew-row">
              <div class="t_mbox-in t_orbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近28天</span>
                <span style="display:inline-block">到店消费总额（元）</span>
                <h2>￥{{xiaoFeiAmt_28}}</h2>
              </div>

              <div class="t_mbox-in t_gbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近28天</span>
                <span style="padding-left: 0.1rem;display:inline-block">到店消费笔数</span>
                <h2>{{daodian_xioafei_28}}</h2>
              </div>
              <div class="t_mbox-in t_ybox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近28天</span>
                <span>到店消费单价（元）</span>
                <h2>￥{{daodain_xiaofei_price_28}}</h2>
              </div>
              <div class="t_mbox-in t_cbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近28天</span>
                <span style="padding-left: 0.15rem;display:inline-block">销售总额（元）</span>
                <h2>￥{{xiaoshou_zonge_28}}</h2>
              </div>
              <div class="t_mbox-in t_obox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近28天</span>
                <span style="padding-left: 0.2rem;display:inline-block">退款金额（元）</span>
                <h2>￥{{tuikuang_28}}</h2>
              </div>
              <div class="t_mbox-in t_rbox margin-top-sm margin-bottom-sm">
                <i></i>
                <span
                  style="display:inline-block font-size: 0.19rem;color: #fff;
                 position: absolute; top: 5%; left: 5%; white-space: nowrap; font-size:10px"
                >近28天</span>
                <span style="padding-left: 0.35rem;display:inline-block">退款率</span>
                <h2>{{tuikuanglv_28}}%</h2>
              </div>
            </div>
            <img
              class="t_r_line"
              src="../assets/img/right_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />
          </div>
          <div class="t_left_box-in-tip" style="margin:  0.2rem auto 0.3rem auto;">
            <div class="backData">数据分析</div>

            <div class="textareaBox">
              <textarea
                class="textsInput"
                v-on:input="dataTipClick"
                v-model="dataTip"
                name
                id
                cols="30"
                :placeholder="dataTip"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div class="t_left_box-in" style="margin: 0 auto;display: none">
            <img
              class="t_l_line"
              src="../assets/img/left_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />

            <div class="flew-row">
              <div class="t_mbox-in margin-top-sm margin-bottom-sm t_orbox shadow-warp">
                <p class="text-bi">{{xiaoFeiAmt}}</p>
              </div>
              <div class="t_mbox-in margin-top-sm margin-bottom-sm t_cbox shadow-warp">
                <p class="text-bi">{{xiaoshou_zonge}}</p>
              </div>
              <div class="t_mbox-in margin-top-sm margin-bottom-sm t_gbox shadow-warp">
                <p class="text-bi">{{daodian_xioafei}}</p>
              </div>
              <div class="t_mbox-in margin-top-sm margin-bottom-sm t_ybox shadow-warp">
                <p class="text-bi">{{daodain_xiaofei_price}}</p>
              </div>
              <div class="t_mbox-in margin-top-sm margin-bottom-sm t_obox shadow-warp">
                <p class="text-bi">{{tuikuang}}</p>
              </div>
              <div class="t_mbox-in margin-top-sm margin-bottom-sm t_rbox shadow-warp">
                <p class="text-bi">{{tuikuanglv}}</p>
              </div>
            </div>
            <img
              class="t_r_line"
              src="../assets/img/right_line.png"
              style="width: 1.78rem; height: 0.37rem"
              alt
            />
          </div>

          <div class="data-box1 box1-back margin-top">
            <i class="topL"></i>
            <i class="topR"></i>
            <i class="bottomL"></i>
            <i class="bottomR"></i>
            <div class="data-title">
              <b class="data-title-left">[</b>
              <span>流量详情（14天）</span>
              <b class="data-title-right">]</b>
            </div>
            <div class="chart-box-title">
              <table class="table3" style="margin-bottom: 30px">
                <thead>
                  <tr class="table-head">
                    <th></th>
                    <th>曝光人数</th>
                    <th>访客人数</th>
                    <th>购买人数</th>
                    <th>到店消费人数</th>
                    <th>访问率</th>
                    <th>购买转化率</th>
                    <th>到店消费转化率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-tr1">
                    <td>近14天</td>
                    <td>{{versionFourteen[0]}}</td>
                    <td>{{versionFourteen[1]}}</td>
                    <td>{{versionFourteen[2]}}</td>
                    <td>{{versionFourteen[3]}}</td>
                    <td>{{versionFourteen[4]}}%</td>
                    <td>{{versionFourteen[5]}}%</td>
                    <td>{{versionFourteen[6]}}%</td>
                  </tr>
                  <tr class="table-tr2">
                    <td>较前14天</td>
                    <td>{{versionCompareFourteen[0]}}%</td>
                    <td>{{versionCompareFourteen[1]}}%</td>
                    <td>{{versionCompareFourteen[2]}}%</td>
                    <td>{{versionCompareFourteen[3]}}%</td>
                    <td>{{versionCompareFourteen[4]}}%</td>
                    <td>{{versionCompareFourteen[5]}}%</td>
                    <td>{{versionCompareFourteen[6]}}%</td>
                  </tr>
                  <tr class="table-tr3">
                    <td>近28天</td>
                    <td>{{versionTwentyEight[0]}}</td>
                    <td>{{versionTwentyEight[1]}}</td>
                    <td>{{versionTwentyEight[2]}}</td>

                    <td>{{versionTwentyEight[3]}}</td>
                    <td>{{versionTwentyEight[4]}}%</td>
                    <td>{{versionTwentyEight[5]}}%</td>
                    <td>{{versionTwentyEight[6]}}%</td>
                  </tr>
                  <tr class="table-tr4">
                    <td>较前28天</td>
                    <td>{{versionCompareTwentyEight[0]}}%</td>
                    <td>{{versionCompareTwentyEight[1]}}%</td>
                    <td>{{versionCompareTwentyEight[2]}}%</td>
                    <td>{{versionCompareTwentyEight[3]}}%</td>
                    <td>{{versionCompareTwentyEight[4]}}%</td>
                    <td>{{versionCompareTwentyEight[5]}}%</td>
                    <td>{{versionCompareTwentyEight[6]}}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="t_left_box-in-tip" style="margin:  0.2rem auto 0.3rem auto;">
            <div class="backData">数据分析</div>

            <div class="textareaBox">
              <textarea
                class="textsInput"
                name
                id
                cols="30"
                v-model="dataTbale"
                v-on:input="dataTbaleClick"
                :placeholder="dataTbale"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div class="center-bottom margin-top">
            <div class="data-box1 box1-back margin-bottom-1">
              <i class="topL"></i>
              <i class="topR"></i>
              <i class="bottomL"></i>
              <i class="bottomR"></i>
              <div class="data-title">
                <b class="data-title-left">[</b>
                <span>消费购买次数（28天）</span>
                <b class="data-title-right">]</b>
              </div>
              <linegraph :id="'bargraph'" :data="dataOption" style="height:500px;"></linegraph>
            </div>
            <div class="t_left_box-in-tip" style="margin:  0.2rem auto 0.3rem auto;">
              <div class="backData">数据分析</div>

              <div class="textareaBox">
                <textarea
                  class="textsInput"
                  name
                  id
                  cols="30"
                  v-model="dataFlow"
                  v-on:input="dataFlowClick"
                  :placeholder="dataFlow"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div class="data-box1 box1-back margin-bottom-1">
              <i class="topL"></i>
              <i class="topR"></i>
              <i class="bottomL"></i>
              <i class="bottomR"></i>
              <div class="data-title">
                <b class="data-title-left">[</b>
                <span>转化率（28天）</span>
                <b class="data-title-right">]</b>
              </div>
              <linegraph :id="'bargraph2'" :data="dataOption2" style="height:500px;"></linegraph>
            </div>
          </div>
          <div class="t_left_box-in-tip" style="margin:  0.2rem auto 0.3rem auto;">
            <div class="backData">数据分析</div>

            <div class="textareaBox">
              <textarea
                class="textsInput"
                name
                id
                cols="30"
                v-model="dataVisit"
                v-on:input="dataVisitClick"
                :placeholder="dataVisit"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <flow></flow>
    <commodity></commodity>
    <compete></compete>
  </div>
</template>

<script>
import linegraph from "../components/linegraph";
import flow from "../components/flow";
import commodity from "../components/commodity";
import compete from "../components/compete";
import html2canvas from "html2canvas";

export default {
  name: "home",
  data() {
    return {
      show: true,
      xiaoFeiAmt_28: "",
      daodian_xioafei_28: "",
      daodain_xiaofei_price_28: "",
      tuikuang_28: "",
      tuikuanglv_28: "",
      xiaoshou_zonge_28: "",

      xiaoFeiAmt: "",
      daodian_xioafei: "",
      daodain_xiaofei_price: "",
      tuikuang: "",
      tuikuanglv: "",
      xiaoshou_zonge: "",

      xiaoFeiAmt_14: "",
      daodian_xioafei_14: "",
      daodain_xiaofei_price_14: "",
      xiaoshou_zonge_14: "",
      tuikuang_14: "",
      tuikuanglv_14: "",
      xiaoshou_zonge14: "",

      dianpu_liuliang_X: [],
      dianpu_zhuanhualv_X: [],

      versionCompareFourteen: [],
      versionCompareTwentyEight: [],
      versionFourteen: [],
      versionTwentyEight: [],
      dataOption: null,
      dataOption2: null,
      photoUrl: "",
      photoShow: false,
      tabId: "",
      formInline: {},
      accountId: null,

      // tip
      tuikuanglv_14Tip: null,


      buyTipb: null,

      visitTip:
        "访问转化率提升方式：可增加吸引力的头图，星级提升至五星，尽量做到金银铜牌商户，促销上线",
      visitTip_v: null,

      buyTip:
        "购买转化率提升方式：点评活动提报，设置抵用券促进消费欲望，设置大额立减增加热销氛围",
      buyTip_v: null,
      /*  */

      dataTip:
        "退款率<8% 正常，否则门店引导方式与接待是否有问题。建议所有消费者能走线上走线上。",
      dataTip_v: null,
      /* 流量 */
      dataTbale:
        "近期流量 ，访客，到店，均有所下降建议增加推广预算，提报广告位 访问率：主推项目价格降低或者做大额立减购买转化率：团购详情优化，门店评价优化",
      /* 购买人数 */
      dataBuy: "购买人数：近期下单人数到店消费人数：近期到店消费人数",
      /* 曝光访客 */
      dataFlow:
        "曝光降低（推广调整，预算增加，广告位提报）访客（推广预算增加，可做一期主题活动",
      /* 访问购买率  */
      dataVisit:
        "访问转化率提升方式：可增加吸引力的头图，星级提升至五星，尽量做到金银铜牌商户，促销上线购买。<br/>转化率提升方式：点评活动提报，设置抵用券促进消费欲望，设置大额立减增加热销氛围",
      /* 消费率 */
      dataConsume: "客户购买到店时间无法控制，无法分析",

    };
  },
  components: {
    linegraph,
    flow,
    commodity,
    compete
  },
  methods: {
    toFlow(num) {
      this.tabId = num;
      this.$router.push({
        path: "flow"
      });
    },
    toHome(num) {
      this.tabId = num;
      this.$router.push({
        path: "/Home"
      });
    },
    toCommodity(num) {
      this.tabId = num;
      this.$router.push({
        path: "/commodity"
      });
    },
    toCompete(num) {
      this.tabId = num;
      this.$router.push({
        path: "/compete"
      });
    },

    submitForm() {
      var accountId = sessionStorage.getItem("sendAccountId");
      accountId = JSON.parse(accountId);
      this.accountId = accountId;
      console.log(accountId);
      var formInline = sessionStorage.getItem("user");
      formInline = JSON.parse(formInline);
      this.formInline = formInline;
      console.log(formInline);
      var date2 = formInline.date2;
      var indexId = formInline.region;
      var accountId = this.accountId;
      var region = accountId[indexId].value;

      this.$axios
        .post(
          `/api/data/overview/${region}/${date2}.json`
        )
        .then(response => {
          console.log(response.data.data);
          this.show = false;
          //  六个参数
          this.daodian_xioafei_28 = response.data.data.daodian_xioafei_28;
          this.daodain_xiaofei_price_28 =
            response.data.data.daodain_xiaofei_price_28;
          this.tuikuang_28 = response.data.data.tuikuang_28;
          this.tuikuanglv_28 = response.data.data.tuikuanglv_28;
          this.xiaoshou_zonge_28 = response.data.data.xiaoshou_zonge_28;
          this.xiaoFeiAmt_28 = response.data.data.xiaoFeiAmt_28;

          this.daodian_xioafei_14 = response.data.data.daodian_xioafei_14;
          this.daodain_xiaofei_price_14 =
            response.data.data.daodain_xiaofei_price_14;
          this.tuikuang_14 = response.data.data.tuikuang_14;
          this.tuikuanglv_14 = response.data.data.tuikuanglv_14;
          var tuikuanglv_14 = response.data.data.tuikuanglv_14;
          let tuikuanglv_14Tip;
          if (tuikuanglv_14 > 8) {
            this.tuikuanglv_14Tip =
              "退款率>8% 不正常，门店引导方式与接待是否有问题。建议所有消费者能走线上走线上。";
          } else {
            this.tuikuanglv_14Tip = "退款率<8% 正常，继续保持优质服务。";
          }
          this.xiaoshou_zonge_14 = response.data.data.xiaoshou_zonge_14;
          this.xiaoFeiAmt_14 = response.data.data.xiaoFeiAmt_14;


          // 表格
          this.versionCompareFourteen =
            response.data.data.versionCompareFourteen;
          this.versionCompareTwentyEight =
            response.data.data.versionCompareTwentyEight;
          this.versionFourteen = response.data.data.versionFourteen;
          var visitTipl = response.data.data.versionFourteen[5];
          var buyTipl = response.data.data.versionCompareFourteen[5];
          if (buyTipl > 0) {
            this.buyTipb = "购买率上升";
            this.buyTip = "团购价格合适，服务继续保持";
          } else {
            this.buyTipb = "购买率下降";
            this.buyTip = "团购价格是否合适，服务需要提高";
          }

          this.versionTwentyEight = response.data.data.versionTwentyEight;
          // 店铺购买消费
          var dataOption = {
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "#6a7985"
                }
              }
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            legend: {
              icon: "rect",
              textStyle: {
                //图例文字的样式
                color: "#fff",
                fontSize: 16
              },
              data: ["到店消费人数", "购买人数", "访客人数", "曝光人数"],
              itemWidth: 16, //图例的宽度
              itemHeight: 16 //图例的高度
            },

            grid: [
              {
                bottom: "60%"
              },
              {
                top: "60%"
              }
            ],
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            xAxis: [
              {
                data: [],
                type: "category",
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                }
              },
              {
                data: [],
                type: "category",
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  show: false,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                },
                gridIndex: 1
              }
            ],
            yAxis: [
              {
                type: "value",
                scale: true,
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                }
              },
              {
                type: "value",
                scale: true,
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                },
                gridIndex: 1
              }
            ],
            series: [
              {
                name: "到店消费人数",
                type: "line",
                data: [],
                itemStyle: { normal: { label: { show: true } } },
                color: "#8dc63f"
              },
              {
                name: "购买人数",
                type: "line",
                data: [],
                itemStyle: { normal: { label: { show: true } } },
                color: "#f37b1d"
              },
              {
                name: "访客人数",
                type: "line",
                data: [],
                itemStyle: { normal: { label: { show: true } } },
                color: "#1cbbb4",
                xAxisIndex: 1,
                yAxisIndex: 1,
                fontSize: 16
              },
              {
                name: "曝光人数",
                type: "line",
                // smooth: true,  //为曲线
                data: [],
                itemStyle: { normal: { label: { show: true } } },
                color: "#0081ff",
                fontSize: 16,
                xAxisIndex: 1,
                yAxisIndex: 1
              }
            ]
          };
          dataOption.xAxis[0].data = response.data.data.data_X;
          dataOption.xAxis[1].data = response.data.data.data_X;
          dataOption.series[0].data = response.data.data.daodian_xiaofei_y;
          dataOption.series[1].data = response.data.data.goumai_y;
          dataOption.series[2].data = response.data.data.fangke_y;
          dataOption.series[3].data = response.data.data.baoguang_y;
          this.dataOption = dataOption;

          // 购买消费图标
          var dataOption2 = {
            title: {
              text: "店铺转化率",
              //是否显示标题组件
              show: false
            },
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            legend: {
              data: ["访问转化率", "购买转化率", "到店消费转化率"],
              top: "3%",
              textStyle: {
                color: "#FFFFFF",
                fontSize: 16
              },
              icon: "rect",
              itemWidth: 16, //图例的宽度
              itemHeight: 16 //图例的高度
            },
            grid: [
              {
                bottom: "60%"
              },
              {
                top: "60%"
              }
            ],

            xAxis: [
              {
                data: [],
                type: "category",
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                }
              },
              {
                data: [],
                type: "category",
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  show: false,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                },
                gridIndex: 1
              }
            ],
            yAxis: [
              {
                type: "value",
                scale: true,
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                }
              },
              {
                type: "value",
                scale: true,
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF",
                    fontSize: 16
                  }
                },
                gridIndex: 1
              }
            ],
            series: [
              {
                name: "到店消费转化率",
                type: "line",
                data: [],
                // 显示数值
                itemStyle: { normal: { label: { show: true } } },
                color: "#fbbd08"
              },
              {
                name: "购买转化率",
                type: "line",
                data: [],
                // 显示数值
                itemStyle: { normal: { label: { show: true } } },
                color: "#39b54a",
                fontSize: 16,
                xAxisIndex: 1,
                yAxisIndex: 1
              },
              {
                name: "访问转化率",
                type: "line",
                data: [],
                // 显示数值
                itemStyle: { normal: { label: { show: true } } },
                color: "#e54d42",
                fontSize: 16,
                xAxisIndex: 1,
                yAxisIndex: 1
              }
            ]
          };
          dataOption2.xAxis.data = response.data.data.data_X;
          dataOption2.series[0].data = response.data.data.daodian_zhuanhualv_y;
          dataOption2.series[1].data = response.data.data.goumai_zhuanhualv_y;
          dataOption2.series[2].data = response.data.data.fangwen_zhuanhualv_y;
          this.dataOption2 = dataOption2;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    dataTipClick() {
      var dataTip = this.dataTip;
      localStorage.setItem("dataTipLocal", dataTip);
      var data = localStorage.getItem("dataTipLocal");
      console.log(data);
    },
    dataTbaleClick() {
      var dataTbale = this.dataTbale;
      localStorage.setItem("dataTbaleLocal",dataTbale);
    },
    dataFlowClick(){
      var dataFlow = this.dataFlow;
      localStorage.setItem('dataFlowLocal',dataFlow)
    },
    dataVisitClick(){
      var dataVisit = this.dataVisit;
      localStorage.setItem('dataVisitLocal', dataVisit)
    }
  },
  created() {
    var dataTip = localStorage.getItem("dataTipLocal");
    var dataTbale = localStorage.getItem("dataTbaleLocal");
    var dataFlow = localStorage.getItem("dataFlowLocal");
    var dataVisit = localStorage.getItem('dataVisitLocal')

    if (dataTip != null) {
      this.dataTip = dataTip
    }
    if(dataTbale != null){
      this.dataTbale = dataTbale
    }
    if(dataFlow != null){
      this.dataFlow = dataFlow
    }
    if(dataVisit != null){
      this.dataVisit = dataVisit
    }

    this.submitForm();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/style.css";
</style>
