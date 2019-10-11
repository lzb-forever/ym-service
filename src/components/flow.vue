<template>
  <div>
    <div v-if="show" class="loading">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 数据分析中...
      </div>
    </div>
    <div v-if="!show" class="showlooding">
      <!-- 此处是要截取的图片 -->

      <div class="container-flex" tabindex="0" hidefocus="true">
        <div class="box-center">
          <div class="center-center">
            <div class="left-bottom">
              <div class="title-box">
                <h6>流量分析</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="box-center" style="width: 90%;margin: 0 auto">
          <div class="center-bottom">
            <div class="data-box-flow-box box1-back margin-l">
              <i class="topL"></i>
              <i class="topR"></i>
              <i class="bottomL"></i>
              <i class="bottomR"></i>
              <div class="data-title">
                <b class="data-title-left">[</b>
                <span>搜索页（28天）</span>
                <b class="data-title-right">]</b>
              </div>
              <div class="flew-row">
                <div
                  style="width: 10%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                >
                  <div style="margin-left: 0.3rem">
                    <p class="text1">曝光量</p>
                    <p class="text2">{{search_baoguang_count}}</p>
                    <p class="text3">
                      <label class="text4">较前14天</label>
                      <mark class="text5">{{search_baoguang_count_qian}}%</mark>
                    </p>
                  </div>
                  <div style="margin-left: 0.3rem">
                    <p class="text1">曝光人数</p>
                    <p class="text2">{{search_baoguang}}</p>
                    <p class="text3">
                      <label class="text4">较前14天</label>
                      <mark class="text5">{{search_baoguang_qian}}%</mark>
                    </p>
                  </div>
                </div>
                <lineflew
                  :id="'bargraph1'"
                  :data="flewOptionsearch"
                  style="height:500px; width: 90%"
                ></lineflew>
                <div class="t_left_box-in-tip" style="margin:  0.2rem auto 0.3rem auto;">
                  <div class="backData">数据分析</div>

                  <div class="textareaBox">
                    <textarea
                      class="textsInput"
                      name
                      id
                      cols="30"
                      v-model="flowExposure"
                      v-on:input="flowExposureClick"
                      :placeholder="flowExposure"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="center-bottom">
            <div class="data-box-flow-box box1-back margin-l" style="margin-bottom: 0">
              <i class="topL"></i>
              <i class="topR"></i>
              <i class="bottomL"></i>
              <i class="bottomR"></i>
              <div class="data-title">
                <b class="data-title-left">[</b>
                <span>商户详情页（28天）</span>
                <b class="data-title-right">]</b>
              </div>
              <div class="flew-row">
                <div class="data-box-flow box1-back margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">浏览量</p>
                        <p class="text2">{{liulanliang_detail_count}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{liulanliang_detail_count_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">浏览量</p>
                      <lineflew
                        :id="'bargraph2'"
                        :data="flewOption1"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
                </div>

                <div class="data-box-flow box1-back margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">访客数</p>
                        <p class="text2">{{fangke_detail_count}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{fangke_detail_count_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">访客数</p>
                      <lineflew
                        :id="'bargraph3'"
                        :data="flewOption3"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
                </div>
                <div class="data-box-flow box1-back margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">跳失率（%）</p>
                        <p class="text2">{{tiaoshilv}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{tiaoshilv_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">跳失率（%）</p>
                      <lineflew
                        :id="'bargraph4'"
                        :data="flewOption4"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
                </div>
                <div class="data-box-flow box1-back margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">平均浏览时间</p>
                        <p class="text2">{{avg_tingliu_shijian}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{avg_tingliu_shijian_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">平均浏览时间</p>
                      <lineflew
                        :id="'bargraph5'"
                        :data="flewOption5"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
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
                    v-model="flowSearch"
                    v-on:input="flowSearchClick"
                    :placeholder="flowSearch"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="center-bottom">
            <div class="data-box-flow-box box1-back margin-l">
              <i class="topL"></i>
              <i class="topR"></i>
              <i class="bottomL"></i>
              <i class="bottomR"></i>
              <div class="data-title">
                <b class="data-title-left">[</b>
                <span>团购详情页分析（28天）</span>
                <b class="data-title-right">]</b>
              </div>
              <div class="flew-row">
                <div class="data-box-flow box1-back margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">浏览量</p>
                        <p class="text2">{{tuangou_liulan}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{tuangou_liulan_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">浏览量</p>
                      <lineflew
                        :id="'bargraph6'"
                        :data="flewOption6"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
                </div>
                <div class="data-box-flow box1-back margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">访客数</p>
                        <p class="text2">{{tuangou_fangke}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{tuangou_fangke_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">访客数</p>
                      <lineflew
                        :id="'bargraph7'"
                        :data="flewOption7"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
                </div>
                <div class="data-box-flow margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">跳失率（%）</p>
                        <p class="text2">{{tuangou_tiaoshi}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{tuangou_tiaoshi_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">跳失率（%）</p>
                      <lineflew
                        :id="'bargraph8'"
                        :data="flewOption8"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
                </div>
                <div class="data-box-flow margin-m">
                  <div class="flew-row">
                    <div
                      style="width: 20%; height: auto; display: flex; flex-direction: column;align-self: center; justify-items: center;"
                    >
                      <div style="margin-left: 0.3rem">
                        <p class="text1">平均浏览时间（秒）</p>
                        <p class="text2">{{tuangou_avg_tingliu_time}}</p>
                        <p class="text3">
                          <label class="text4">较前14天</label>
                          <mark class="text5">{{tuangou_avg_tingliu_time_qian}}%</mark>
                        </p>
                      </div>
                    </div>
                    <div style=" width: 80%;height: 400px;">
                      <p class="p-title">平均浏览时间</p>
                      <lineflew
                        :id="'bargraph9'"
                        :data="flewOption9"
                        style="height:350px; width: 100%"
                      ></lineflew>
                    </div>
                  </div>
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
                    v-model="flowPapg"
                    v-on:input="flowPapgClick"
                    :placeholder="flowPapg"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lineflew from "../components/lineflew";
import html2canvas from "html2canvas";
import { close } from "fs";
export default {
  name: "home",
  data() {
    return {
      show: true,

      accountIds: null,
      data_x: [],
      tabId: "",

      // 商户 时间
      flewOption5: null,
      avg_tingliu_shijian: 0,
      avg_tingliu_shijian_qian: "",
      avg_tingliu_shijian_y: [],

      // 商户 访客
      flewOption1: null,
      fangke_detail_count: 0,
      fangke_detail_count_qian: "",
      fangke_detail_count_y: [],

      // 商户 浏览
      flewOption3: null,
      liulanliang_detail_count: 0,
      liulanliang_detail_count_qian: "",
      liulanliang_detail_count_y: [],

      flewOptionsearch: null,
      search_baoguang: 0,
      search_baoguang_count: 0,
      search_baoguang_count_qian: "",
      search_baoguang_count_y: [],
      search_baoguang_qian: "",
      search_baoguang_y: [],

      // 商户跳失
      flewOption4: null,
      tiaoshilv: 0,
      tiaoshilv_qian: null,
      tiaoshilv_y: [],

      // 团购时间
      flewOption9: null,
      tuangou_avg_tingliu_time: 0,
      tuangou_avg_tingliu_time_qian: "",
      tuangou_avg_tingliu_time_y: [],
      // 团购访客
      flewOption7: null,
      tuangou_fangke: 0,
      tuangou_fangke_qian: "",
      tuangou_fangke_y: [],

      // 团购 浏览量
      flewOption6: null,
      tuangou_liulan: 0,
      tuangou_liulan_qian: null,
      tuangou_liulan_y: [],
      // 团购跳失
      flewOption8: null,
      tuangou_tiaoshi: 0,
      tuangou_tiaoshi_qian: null,
      tuangou_tiaoshi_y: [],
      photoUrl: "",
      photoShow: false,
      baoguangrenLvnum: "",
      baoguangLvnum: "",
      formInline: {},
      
      /* 曝光 */
      flowExposure:
        "流量近期数据较稳定 ，期间有两天推广各方面暂未投放有明显下降，流量下降原因：推广是否暂停，活动是否停止投放，近期市场情况（排名正常流量下降近期商圈整体下降）",
      /* 搜索 */
      flowSearch:
        "浏览量：每个用户多次浏览重复计算，越多越好，提升方法（增加精美视频，大额团购立减，团购价格是否过高）<br/>访客数：进店客户数，每个ID每日仅计算一次，越多越好，提升方法（吸引力头图，大额团购立减，金牌，星级）跳失率:客户点击无行为直接退出比例，越低越好，提升方法（吸引力轮播，精美视频）<br/>平均停留时间：客户停留时长，提升方法（精美视频，统一页面图片，项目完整度与文案包装，评价项目）",
      /* 页面 */
      flowPapg:
        "浏览量：每个用户多次浏览重复计算，越多越好，提升方法（增加精美视频，大额团购立减，团购价格是否过高）<br/>访客数：进店客户数，每个ID每日仅计算一次，越多越好，提升方法（吸引力头图，大额团购立减，金牌，星级）<br/>跳失率:客户点击无行为直接退出比例，越低越好，提升方法（吸引力轮播，精美视频）<br/>平均停留时间：客户停留时长，提升方法（精美视频，统一页面图片，项目完整度与文案包装，评价项目）",

    };
  },
  components: {
    lineflew
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
        .post(`/api/flow/analysis/${region}/${date2}.json`)
        .then(response => {
          console.log(response.data.data);
          this.show = false;
          this.avg_tingliu_shijian = response.data.data.avg_tingliu_shijian;
          this.avg_tingliu_shijian_qian =
            response.data.data.avg_tingliu_shijian_qian;

          // 商户 访客

          this.fangke_detail_count = response.data.data.fangke_detail_count;
          this.fangke_detail_count_qian =
            response.data.data.fangke_detail_count_qian;

          this.liulanliang_detail_count =
            response.data.data.liulanliang_detail_count;
          this.liulanliang_detail_count_qian =
            response.data.data.liulanliang_detail_count_qian;

          this.search_baoguang = response.data.data.search_baoguang;
          this.search_baoguang_count = response.data.data.search_baoguang_count;
          this.search_baoguang_count_qian =
            response.data.data.search_baoguang_count_qian;
          this.search_baoguang_qian = response.data.data.search_baoguang_qian;

          this.tiaoshilv = response.data.data.tiaoshilv;
          this.tiaoshilv_qian = response.data.data.tiaoshilv_qian;

          this.tuangou_avg_tingliu_time =
            response.data.data.tuangou_avg_tingliu_time;
          this.tuangou_avg_tingliu_time_qian =
            response.data.data.tuangou_avg_tingliu_time_qian;

          this.tuangou_fangke = response.data.data.tuangou_fangke;
          this.tuangou_fangke_qian = response.data.data.tuangou_fangke_qian;

          this.tuangou_liulan = response.data.data.tuangou_liulan;
          this.tuangou_liulan_qian = response.data.data.tuangou_liulan_qian;

          this.tuangou_tiaoshi = response.data.data.tuangou_tiaoshi;
          this.tuangou_tiaoshi_qian = response.data.data.tuangou_tiaoshi_qian;

          var flewOptionsearch = {
            tooltip: {
              trigger: "axis"
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
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
              data: ["曝光量", "曝光人数"],
              itemWidth: 16, //图例的宽度
              itemHeight: 16 //图例的高度
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                axisTick: {
                  alignWithLabel: true
                },
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
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
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            series: [
              {
                name: "曝光量",
                type: "line",

                data: [],

                itemStyle: {
                  normal: {
                    color: "#0081ff",
                    label: { show: true },
                    fontSize: 16
                  }
                }
              },
              {
                name: "曝光人数",
                type: "line",

                data: [],
                itemStyle: {
                  normal: {
                    color: "#fbbd08",
                    label: { show: true },
                    fontSize: 16
                  }
                }
              }
            ]
          };

          flewOptionsearch.xAxis[0].data = response.data.data.data_x;
          flewOptionsearch.series[0].data =
            response.data.data.search_baoguang_count_y;
          flewOptionsearch.series[1].data =
            response.data.data.search_baoguang_y;
          this.flewOptionsearch = flewOptionsearch;

          var flewOption1 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            series: [
              {
                name: "浏览量",
                type: "line",
                stack: "秒",
                data: [],
                itemStyle: {
                  normal: {
                    color: "#9c26b0",
                    fontSize: 16,
                    label: { show: true }
                  }
                }
              }
            ]
          };
          flewOption1.xAxis[0].data = response.data.data.data_x;
          flewOption1.series[0].data =
            response.data.data.liulanliang_detail_count_y;
          this.flewOption1 = flewOption1;

          var flewOption3 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#ffffff",
                    fontSize: 16
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#ffffff",
                    fontSize: 16
                  }
                }
              }
            ],
            series: [
              {
                name: "访客数",
                type: "line",
                stack: "人",
                data: [],
                itemStyle: {
                  normal: {
                    color: "#f37b1d",
                    fontSize: 16,
                    label: { show: true }
                  }
                }
              }
            ]
          };
          flewOption3.xAxis[0].data = response.data.data.data_x;
          flewOption3.series[0].data = response.data.data.fangke_detail_count_y;
          this.flewOption3 = flewOption3;

          var flewOption4 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            series: [
              {
                name: "跳失率",
                type: "line",
                stack: "%",
                data: [],
                itemStyle: {
                  normal: {
                    color: "#39b54a",
                    label: { show: true },
                    fontSize: 16
                  }
                }
              }
            ]
          };
          flewOption4.xAxis[0].data = response.data.data.data_x;
          flewOption4.series[0].data = response.data.data.tiaoshilv_y;
          this.flewOption4 = flewOption4;

          var flewOption5 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            series: [
              {
                name: "浏览量",
                type: "line",
                stack: "次",
                data: [],
                itemStyle: {
                  normal: {
                    color: "#0081ff",
                    fontSize: 16,

                    label: { show: true }
                  }
                }
              }
            ]
          };
          flewOption5.xAxis[0].data = response.data.data.data_x;
          flewOption5.series[0].data = response.data.data.avg_tingliu_shijian_y;
          this.flewOption5 = flewOption5;
          var flewOption6 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },

            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#a4a7ab",
                    fontSize: 16
                  }
                }
              }
            ],
            series: [
              {
                name: "浏览量",
                type: "line",
                stack: "次",
                data: [],
                itemStyle: {
                  normal: {
                    color: "#1cbbb4",
                    label: { show: true },
                    fontSize: 16
                  }
                }
              }
            ]
          };
          flewOption6.xAxis[0].data = response.data.data.data_x;
          flewOption6.series[0].data = response.data.data.tuangou_liulan_y;
          this.flewOption6 = flewOption6;

          var flewOption7 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
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
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#ffffff",
                    fontSize: 16
                  }
                }
              }
            ],
            series: [
              {
                name: "访客数",
                type: "line",
                stack: "人",
                data: [],
                itemStyle: {
                  normal: {
                    color: "#e54d42",
                    fontSize: 16,
                    label: { show: true }
                  }
                }
              }
            ]
          };
          flewOption7.xAxis[0].data = response.data.data.data_x;
          flewOption7.series[0].data = response.data.data.tuangou_fangke_y;
          this.flewOption7 = flewOption7;

          var flewOption8 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize: 16,
                    color: "#a4a7ab"
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize: 16,
                    color: "#a4a7ab"
                  }
                }
              }
            ],
            series: [
              {
                name: "跳失率",
                type: "line",
                stack: "%",
                data: [],
                itemStyle: {
                  normal: {
                    fontSize: 16,
                    color: "#8dc63f",
                    label: { show: true }
                  }
                }
              }
            ]
          };
          flewOption8.xAxis[0].data = response.data.data.data_x;
          flewOption8.series[0].data = response.data.data.tuangou_tiaoshi_y;
          this.flewOption8 = flewOption8;

          var flewOption9 = {
            tooltip: {
              trigger: "axis"
            },
            textStyle: {
              //图例文字的样式

              fontSize: 16
            },
            grid: {
              x: 46,
              y: 30,
              x2: 32,
              y2: 40,
              borderWidth: 0
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: [],
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize: 16,
                    color: "#a4a7ab"
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize: 16,
                    color: "#a4a7ab"
                  }
                }
              }
            ],
            series: [
              {
                name: "平均浏览时间",
                type: "line",
                stack: "秒",
                data: [],
                itemStyle: {
                  normal: {
                    fontSize: 16,
                    color: "#e03997",
                    label: { show: true }
                  }
                }
              }
            ]
          };
          flewOption9.xAxis[0].data = response.data.data.data_x;
          flewOption9.series[0].data =
            response.data.data.tuangou_avg_tingliu_time_y;
          // flewOption9.series[0].data = [
          //   7,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0,
          //   0
          // ];

          this.flewOption9 = flewOption9;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 图片保存方法
    flowExposureClick(){
      var flowExposure = this.flowExposure
      localStorage.setItem("flowExposureLocal",flowExposure)
    },
    flowSearchClick(){
      var flowSearch = this.flowSearch
      localStorage.setItem("flowSearchLocal",flowSearch)
    },
    flowPapgClick(){
      var flowPapg = this.flowPapg
      localStorage.setItem("flowPapgLocal",flowPapg)
    }
  },
  created() {
    var flowExposure = localStorage.getItem("flowExposureLocal")
    if (flowExposure != null){
      this.flowExposure = flowExposure
    }
    var flowSearch = localStorage.getItem("flowSearchLocal")
    if (flowSearch != null){
      this.flowSearch = flowSearch
    }
    var flowPapg = localStorage.getItem("flowPapgLocal")
    if (flowPapg != null){
      this.flowPapg = flowPapg
    }
    
    this.submitForm();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/style.css";
</style>