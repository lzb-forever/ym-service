<template>
  <div>
    <div v-if="show" class="loading">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 数据分析中...
      </div>
    </div>
    <div v-if="!show" class="showlooding">
      <div class="index_nav">
        <ul style="height: 30px; width: 95%; margin: 0 auto; margin-bottom: 0px;">
          <li class="l_left total_chose_pl" id="tabId" @click="toHome(0)">
            <a>数据概览</a>
          </li>
          <li class="l_left total_chose_pl" id="tabId" @click="toFlow(1)">
            <a>流量分析</a>
          </li>
          <li class="r_right total_chose_pl" id=" tabId" @click="toCompete(2)">
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
      <div id="imgDownload" class="back-yc" ref="QRcodeSrcImg" @click="maskShow=false">
        <div class="container-flex" tabindex="0" hidefocus="true">
          <div class="box-center">
            <div class="center-center">
              <div class="left-bottom">
                <div class="title-box">
                  <h6>流量分析</h6>
                  <h6 style="margin-left: 4rem">
                    <span>商家：</span>
                    <span>{{accountIds[formInline.region].name}}</span>
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
                  <lineflew :id="'bargraph1'" :data="flewOptionsearch" style="height:500px; width: 90%"></lineflew>
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
                            <!-- <mark class="text5">-100%</mark> -->
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 此处是储存截取后的图片 -->
      <!-- <div class="photoShow" v-if="photoShow" style="font-size: 14px">
      <div id="photo">
        <p>点击鼠标右键另存为</p>
        <img :src="photoUrl" id="img" alt />
        
      </div>
      </div>-->
      <!-- 此处是保存到本地的方法 -->
      <!-- <div class="bottom" @click="imgDownload()" style="font-size: 14px">
      <div style="text-align: center;">
        <p style="font-size:14px;margin-top:10px;color:#a5a4a4;">保存到本地</p>
      </div>
      </div>-->
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
      accountIds: [
        {
          value: "CsOs45SAIVVREp3hzbVVN7uvgv2ASPfw",
          name: "花下",
          enterDate: "2019-4-16"
        },
        {
          value: "r2miTSS5BsaaVrKgusphwbx2vp7xHX1z",
          name: "ritz",
          enterDate: "2019-6-11"
        },
        {
          value: "pb0FXqgfdDMDxo6lh3MVU1cqhKRWUW7g",
          name: "欣妍抗衰中心",
          enterDate: "2019-8-29"
        },
        {
          value: "6AWt6YcnQB7s9TgC3dyNuQ1R9DIqGuQd",
          name: "I Miss U美甲美睫",
          enterDate: "2019-09-02"
        },
        {
          value: "jg4LunoO6ALCu2Dv30Q94cnpIqjZY9pq",
          name: "IVO健身",
          enterDate: "2019-09-02"
        },
        {
          value: "6paUXDK8WWmUqSio55JdlQY2CfuZkgrQ",
          name: "Project X健身",
          enterDate: "2019-6-14"
        },
        {
          value: "TWR2sGlFWn5umGwhwpRn9psjmq43uCxP",
          name: "ERAfitness",
          enterDate: "2019-09-02"
        },
        {
          value: "uM29mOtrB05VoCCshUzKpHx0iRcERUAF",
          name: "齐脉养生",
          enterDate: "2019-09-02"
        },
        {
          value: "TFhUvJd2zXLed9tH86Fb8urjW8vY9RWn",
          name: "super coach",
          enterDate: "2019-9-16"
        },
        {
          value: "I4flqj8Bq2Qe436UoF6PiXvtj9dfkDol",
          name: "yu+fit",
          enterDate: "2019-9-12"
        },
        {
          value: "lIJxNgrNjhdpLcSnq0G23gJx4tD2Qb0j",
          name: "艾医灸舍",
          enterDate: "2019-8-26"
        },
        {
          value: "oaIwTQGDQ9sunto80lhaqjNiKpvp9Baj",
          name: "柏丽美",
          enterDate: "2019-8-30"
        },
        {
          value: "FvfzZ4nQpvPbMCS4AFs29xVa3crl0ZVR",
          name: "吉瘦",
          enterDate: "2019-5-22"
        },
        {
          value: "HgyDZraL2b93MLRpbw0SboxhLZSS6JQq",
          name: "东英经典",
          enterDate: "2019-9-21"
        },
        {
          value: "sO0CKyLw6rJNBe6M1URQpKfbpfSEZhud",
          name: "企鹅总账户",
          enterDate: "2019-08-07"
        },
        {
          value: "bSlgrDOQVwqSdDA85ULjG1eZ1m7h67Ac",
          name: "成都企鹅综合门诊部",
          enterDate: "2019-09-04"
        },
        {
          value: "43X6zQIyFo0oWGjkDXPYaMiZZ82xBqdD",
          name: "深圳企鹅门诊部",
          enterDate: "2019-08-20"
        },
        {
          value: "GZbS2TKISWlowNi2n4d4Ked6LG8fZVnY",
          name: "深圳鼎丰中医馆",
          enterDate: "2019-08-29"
        }
      ],
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
      formInline: {}
    };
  },
  components: {
    lineflew
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
      console.log(this.tabId);
      this.$router.push({
        path: "/commodity"
      });
    },
    toCompete(num) {
      this.tabId = num;
      console.log(this.tabId);
      this.$router.push({
        path: "/compete"
      });
    },

    submitForm() {
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
          flewOptionsearch.series[1].data = response.data.data.search_baoguang_y;
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
    imgDownload() {
      let _this = this;
      _this.photoShow = true;
      // 声明一个画布元素,存储需下载图片范围
      let canvas = document.createElement("canvas");
      // 获取需下载范围元素
      let img = this.$refs["QRcodeSrcImg"];
      // 图片高度
      var w = parseInt(window.getComputedStyle(img).width);
      // 图片宽度
      var h = parseInt(window.getComputedStyle(img).height);
      // 声明画布宽高
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      // console.log(w, h);
      // let context = canvas.getContext("2d");
      // context.scale(2, 2);
      // 利用 html2canvas 下载 canvas
      html2canvas(img, { canvas: canvas }).then(function(canvas) {
        _this.photoUrl = canvas.toDataURL();
      });
    }
  },
  created() {
    this.submitForm();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/style.css";
</style>