<template>
  <div>
    <div v-if="show" class="loading">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 数据分析中...
      </div>
    </div>
    <div class="showlooding">
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
      <div class="container-flex" tabindex="0" hidefocus="true">

        <div class="flew-row" style="width: 90%; margin: 0 auto">
          <div class="box-center" style="width: 49%; margin-left:0;">
            <div class="data-box1 box1-back margin-bottom">
              <i class="topL"></i>
              <i class="topR"></i>
              <i class="bottomL"></i>
              <i class="bottomR"></i>
              <div class="data-title">
                <b class="data-title-left">[</b>
                <span>套餐销量排名（14天）</span>
                <b class="data-title-right">]</b>
              </div>
              <div class="chart-box-title" style="padding-bottom: 25px;">
                <table class="table-commodity">
                  <thead>
                    <tr class="table-head">
                      <th>排名</th>
                      <th>项目</th>
                      <th>均价</th>
                      <th>销量</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-tr1" v-for="(item, index) in taocan" :key="index">
                      <td>{{index + 1}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.price}}</td>
                      <td>{{item.count}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="box-center" style="width: 49%; margin-right:0;">
            <div class="data-box1 box1-back margin-bottom">
              <i class="topL"></i>
              <i class="topR"></i>
              <i class="bottomL"></i>
              <i class="bottomR"></i>
              <div class="data-title">
                <b class="data-title-left">[</b>
                <span>次卡销量排名（14天）</span>
                <b class="data-title-right">]</b>
              </div>
              <div class="chart-box-title" style="padding-bottom: 25px;">
                <table class="table-commodity">
                  <thead>
                    <tr class="table-head">
                      <th>排名</th>
                      <th>项目</th>
                      <th>均价</th>
                      <th>销量</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-tr1" v-for="(items, index) in cika" :key="index">
                      <td>{{index + 1}}</td>
                      <td>{{items.name}}</td>
                      <td>{{items.price}}</td>
                      <td>{{items.count}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="t_left_box" style="margin: auto">
          <img class="t_l_line" src="../assets/img/left_line.png" alt />
          <div class="flew-row-sp flex_detail">
            <div class="addList">
              <div class="t_mbox t_cbox" style="width: 5rem">
                <i></i>
                <span>预约数（14天）</span>
                <h2>{{yu_yue_count}}</h2>
              </div>
              <div class="t_mbox_shop">
                <table class="table-commodity-datail">
                  <thead>
                    <tr class="table-head">
                      <th>店名</th>
                      <th>数量</th>
                      <th>占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-tr1" v-for="(item, index) in yu_yue_list" :key="index">
                      <td>{{item.name}}</td>
                      <td>{{item.value}}</td>
                      <td>{{item.yu_percent}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style="width: 50%; height: 380px;">
              <linegraph :id="'commodity1'" :data="option1" style="height:380px;"></linegraph>
            </div>
          </div>
          <img class="t_r_line" src="../assets/img/right_line.png" alt />
        </div>
        <div class="t_left_box" style="margin: auto">
          <img class="t_l_line" src="../assets/img/left_line.png" alt />
          <div class="flew-row-sp flex_detail">
            <div class="addList">
              <div class="t_mbox t_gbox" style="width: 5rem">
                <i></i>
                <span>取消数（14天）</span>
                <h2>{{qu_xiao_count}}</h2>
              </div>
              <div class="t_mbox_shop flexshop">
                <table class="table-commodity-datail">
                  <thead>
                    <tr class="table-head">
                      <th>店名</th>
                      <th>数量</th>
                      <th>占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-tr1" v-for="(item, index) in qu_xiao_list" :key="index">
                      <td>{{item.name}}</td>
                      <td>{{item.value}}</td>
                      <td>{{item.qu_percent}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style="width: 50%; height: 380px;">
              <linegraph :id="'commodity2'" :data="commodityPieCancel" style="height:380px;"></linegraph>
            </div>
          </div>
          <img class="t_r_line" src="../assets/img/right_line.png" alt />
        </div>

        <div class="t_left_box" style="margin: auto">
          <img class="t_l_line" src="../assets/img/left_line.png" alt />
          <div class="flew-row-sp flex_detail">
            <div class="addList">
              <div class="t_mbox t_ybox" style="width: 5rem">
                <i></i>
                <span>全部评价数（14天）</span>
                <h2>{{comment_count}}</h2>
              </div>
              <div class="t_mbox_shop flexshop">
                <table class="table-commodity-datail">
                  <thead>
                    <tr class="table-head">
                      <th>店名</th>
                      <th>数量</th>
                      <th>占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-tr1" v-for="(item, index) in comment_list" :key="index">
                      <td>{{item.name}}</td>
                      <td>{{item.value}}</td>
                      <td>{{item.comment_percent}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style="width: 50%; height: 380px;">
              <linegraph :id="'commodityPie3'" :data="commodityPieAll" style="height:380px;"></linegraph>
            </div>
          </div>
          <img class="t_r_line" src="../assets/img/right_line.png" alt />
        </div>
        <div class="t_left_box" style="margin: auto">
          <img class="t_l_line" src="../assets/img/left_line.png" alt />
          <div class="flew-row-sp flex_detail">
            <div class="addList">
              <div class="t_mbox t_obox" style="width: 5rem">
                <i></i>
                <span>好评数（14天）</span>
                <h2>{{good_comment_count}}</h2>
              </div>
              <div class="t_mbox_shop flexshop">
                <table class="table-commodity-datail">
                  <thead>
                    <tr class="table-head">
                      <th>店名</th>
                      <th>数量</th>
                      <th>占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-tr1" v-for="(item, index) in good_comment_list" :key="index">
                      <td>{{item.name}}</td>
                      <td>{{item.value}}</td>
                      <td>{{item.good_percent}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style="width: 50%; height: 380px;">
              <linegraph :id="'commodityPie4'" :data="commodityPieGood" style="height:380px;"></linegraph>
            </div>
          </div>
          <img class="t_r_line" src="../assets/img/right_line.png" alt />
        </div>
        <div class="t_left_box" style="margin: auto;margin-bottom: 0.5rem">
          <img class="t_l_line" src="../assets/img/left_line.png" alt />
          <div class="flew-row-sp flex_detail">
            <div class="addList">
              <div class="t_mbox t_rbox" style="width: 5rem">
                <i></i>
                <span>中差评数（14天）</span>
                <h2>{{bad_comment_count}}</h2>
              </div>
              <div class="t_mbox_shop flexshop">
                <table class="table-commodity-datail">
                  <thead>
                    <tr class="table-head">
                      <th>店名</th>
                      <th>数量</th>
                      <th>占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-tr1" v-for="(item, index) in bad_comment_list" :key="index">
                      <td>{{item.name}}</td>
                      <td>{{item.value}}</td>
                      <td>{{item.bad_percent}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style="width: 50%; height: 380px;">
              <linegraph :id="'commodityPie5'" :data="commodityPieShort" style="height:380px;"></linegraph>
            </div>
          </div>
          <img class="t_r_line" src="../assets/img/right_line.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import linegraph from "../components/linegraph";
import html2canvas from "html2canvas";
export default {
  components: {
    linegraph
  },
  data() {
    return {
      show: true,
      photoUrl: "",
      photoShow: false,
      taocan: [],
      tabId: "",
      // 中差评
      bad_comment_count: 0,
      bad_comment_list: [],
      cika: null,
      // 全部评价
      comment_count: 0,
      comment_list: [],
      // 好评数
      good_comment_count: 0,
      good_comment_list: [],
      // 取消数
      qu_xiao_count: 0,
      qu_xiao_list: [],
      // 预约数
      yu_yue_count: 0,
      yu_yue_list: [],
      commodityPieSubscribe: {},
      option1: {},
      commodityPieCancel: {},
      commodityPieAll: {},
      commodityPieGood: {},
      commodityPieShort: {},
      cika: null,
      formInline: {},
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
      ]
    };
  },
  methods: {
    submitForm() {
       var formInline = sessionStorage.getItem("user");
      formInline = JSON.parse(formInline);
      this.formInline = formInline;

      var date2 = formInline.date2;
      var indexId = formInline.region;
      var accountIds = this.accountIds;
      var region = accountIds[indexId].value;

      console.log(region);
      this.$axios
        .post(`https://bi.doqtech.com.cn/open/public/statement/commodity/analysis/${region}/${date2}.json`)
        .then(response => {
          console.log(response.data);
          this.show = false;
          this.taocan = response.data.data.taocan;
          this.bad_comment_count = response.data.data.bad_comment_count;

          this.comment_count = response.data.data.comment_count;
          this.good_comment_count = response.data.data.good_comment_count;
          this.yu_yue_count = response.data.data.yu_yue_count;
          this.qu_xiao_count = response.data.data.qu_xiao_count;
          this.bad_comment_count = response.data.data.bad_comment_count;
          this.cika = response.data.data.cika;

          // 比较详情列表的值做出判断

          // 详情列表
          var yu_yue_list = response.data.data.yu_yue_list;
          var qu_xiao_list = response.data.data.qu_xiao_list;
          var comment_list = response.data.data.comment_list;
          var good_comment_list = response.data.data.good_comment_list;
          var bad_comment_list = response.data.data.bad_comment_list;
          var yu_yue_listz = 0;
          var qu_xiao_listz = 0;
          var comment_listz = 0;
          var good_comment_listz = 0;
          var bad_comment_listz = 0;

          for (let i = 0; i < yu_yue_list.length; i++) {
            yu_yue_listz = yu_yue_listz + parseInt(yu_yue_list[i].value);
          }
          console.log(yu_yue_list);
          console.log(yu_yue_listz);

          for (let i = 0; i < qu_xiao_list.length; i++) {
            qu_xiao_listz = qu_xiao_listz + parseInt(qu_xiao_list[i].value);
          }

          for (let i = 0; i < comment_list.length; i++) {
            comment_listz = comment_listz + parseInt(comment_list[i].value);
          }

          for (let i = 0; i < good_comment_list.length; i++) {
            good_comment_listz =
              good_comment_listz + parseInt(good_comment_list[i].value);
          }

          for (let i = 0; i < bad_comment_list.length; i++) {
            bad_comment_listz =
              bad_comment_listz + parseInt(bad_comment_list[i].value);
          }

          for (let i = 0; i < yu_yue_list.length; i++) {
            let yu_percent =
              (parseInt(yu_yue_list[i].value) / yu_yue_listz) * 100;
            yu_percent = yu_percent.toFixed(2) + "%";
            yu_yue_list[i].yu_percent = yu_percent;
          }
          yu_yue_list.sort(function(a, b) {
            return b.value - a.value;
          });
          for (let i = 0; i < qu_xiao_list.length; i++) {
            let qu_percent =
              (parseInt(qu_xiao_list[i].value) / qu_xiao_listz) * 100;
            qu_percent = qu_percent.toFixed(2) + "%";
            qu_xiao_list[i].qu_percent = qu_percent;
          }
          qu_xiao_list.sort(function(a, b) {
            return b.value - a.value;
          });
          for (let i = 0; i < comment_list.length; i++) {
            let comment_percent =
              (parseInt(comment_list[i].value) / comment_listz) * 100;
            comment_percent = comment_percent.toFixed(2) + "%";
            comment_list[i].comment_percent = comment_percent;
          }
          comment_list.sort(function(a, b) {
            return b.value - a.value;
          });
          for (let i = 0; i < good_comment_list.length; i++) {
            let good_percent =
              (parseInt(good_comment_list[i].value) / good_comment_listz) * 100;
            good_percent = good_percent.toFixed(2) + "%";
            good_comment_list[i].good_percent = good_percent;
          }
          good_comment_list.sort(function(a, b) {
            return b.value - a.value;
          });
          for (let i = 0; i < bad_comment_list.length; i++) {
            let bad_percent =
              (parseInt(bad_comment_list[i].value) / bad_comment_listz) * 100;
            bad_percent = bad_percent.toFixed(2) + "%";
            bad_comment_list[i].bad_percent = bad_percent;
          }
          bad_comment_list.sort(function(a, b) {
            return b.value - a.value;
          });

          this.yu_yue_list = yu_yue_list;
          this.qu_xiao_list = qu_xiao_list;
          this.comment_list = comment_list;
          this.good_comment_list = good_comment_list;
          this.bad_comment_list = bad_comment_list;
          console.log(yu_yue_list);

          var option1 = {
            title: {
              text: "预约数",
              // subtext: '预约数',
              textStyle: {
                fontSize: 18,
                color: "#ffffff"
              },
              x: "center"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series: [
              {
                name: "预约数",
                type: "pie",
                center: ["50%", "50%"],
                radius: ["0%", "65%"],
                clockwise: false, //饼图的扇区是否是顺时针排布
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    formatter: " {b|{b}：}{c}  {per|{d}%}  ",
                    backgroundColor: "#044BBE",
                    borderColor: "#044BBE",
                    borderWidth: 1,
                    rich: {
                      //定义不同地方的文字的字体大小和颜色
                      a: {
                        color: "#fff",
                        lineHeight: 22,
                        align: "center"
                      },

                      b: {
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 33
                      },
                      c: {
                        color: "#fff",
                        backgroundColor: "#ffffff",
                        padding: [2, 4],
                        borderRadius: 2
                      },
                      per: {
                        color: "#fff",
                        // backgroundColor: "#334455",
                        padding: [2, 4],
                        borderRadius: 2
                      }
                    }
                  }
                },

                labelLine: {
                  normal: {
                    length: 10,
                    length2: 5,
                    smooth: true,
                    lineStyle: {
                      width: 2
                    }
                  }
                },
                data: [],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          };
          option1.series[0].data = response.data.data.yu_yue_list;
          this.option1 = option1;

          var commodityPieCancel = {
            title: {
              text: "取消数详情",
              // subtext: '预约数',
              textStyle: {
                fontSize: 16,
                color: "#ffffff"
              },
              x: "center"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series: [
              {
                name: "取消数详情",
                type: "pie",
                center: ["50%", "50%"],
                radius: ["0%", "65%"],
                clockwise: false, //饼图的扇区是否是顺时针排布
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    formatter: " {b|{b}：}{c}  {per|{d}%}  ",
                    backgroundColor: "#044BBE",
                    borderColor: "#044BBE",
                    borderWidth: 1,
                    rich: {
                      //定义不同地方的文字的字体大小和颜色
                      a: {
                        color: "#fff",
                        lineHeight: 22,
                        align: "center"
                      },

                      b: {
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 33
                      },
                      c: {
                        color: "#fff",
                        backgroundColor: "#ffffff",
                        padding: [2, 4],
                        borderRadius: 2
                      },
                      per: {
                        color: "#fff",
                        // backgroundColor: "#334455",
                        padding: [2, 4],
                        borderRadius: 2
                      }
                    }
                  }
                },

                labelLine: {
                  // tip线的样式及长度
                  normal: {
                    length: 10,
                    length2: 5,
                    smooth: true,
                    lineStyle: {
                      width: 2
                    }
                  }
                },
                data: [],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          };
          commodityPieCancel.series[0].data = response.data.data.qu_xiao_list;
          this.commodityPieCancel = commodityPieCancel;

          var commodityPieAll = {
            title: {
              text: "全部评价数详情",
              // subtext: '预约数',
              textStyle: {
                fontSize: 16,
                color: "#ffffff"
              },
              x: "center"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series: [
              {
                name: "全部评价数详情",
                type: "pie",
                center: ["50%", "50%"],
                radius: ["0%", "65%"],
                clockwise: false, //饼图的扇区是否是顺时针排布
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    formatter: " {b|{b}：}{c}  {per|{d}%}  ",
                    backgroundColor: "#044BBE",
                    borderColor: "#044BBE",
                    borderWidth: 1,
                    rich: {
                      //定义不同地方的文字的字体大小和颜色
                      a: {
                        color: "#fff",
                        lineHeight: 22,
                        align: "center"
                      },

                      b: {
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 33
                      },
                      c: {
                        color: "#fff",
                        backgroundColor: "#ffffff",
                        padding: [2, 4],
                        borderRadius: 2
                      },
                      per: {
                        color: "#fff",
                        // backgroundColor: "#334455",
                        padding: [2, 4],
                        borderRadius: 2
                      }
                    }
                  }
                },
                labelLine: {
                  normal: {
                    length: 10,
                    length2: 5,
                    smooth: true,
                    lineStyle: {
                      width: 2
                    }
                  }
                },
                data: [],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          };
          commodityPieAll.series[0].data = response.data.data.comment_list;
          this.commodityPieAll = commodityPieAll;

          var commodityPieGood = {
            title: {
              text: "好评数详情",
              textStyle: {
                fontSize: 16,
                color: "#ffffff"
              },
              x: "center"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series: [
              {
                name: "好评数详情",
                type: "pie",
                center: ["50%", "50%"],
                radius: ["0%", "65%"],
                clockwise: false, //饼图的扇区是否是顺时针排布
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    formatter: " {b|{b}：}{c}  {per|{d}%}  ",
                    backgroundColor: "#044BBE",
                    borderColor: "#044BBE",
                    borderWidth: 1,
                    rich: {
                      //定义不同地方的文字的字体大小和颜色
                      a: {
                        color: "#fff",
                        lineHeight: 22,
                        align: "center"
                      },

                      b: {
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 33
                      },
                      c: {
                        color: "#fff",
                        backgroundColor: "#ffffff",
                        padding: [2, 4],
                        borderRadius: 2
                      },
                      per: {
                        color: "#fff",
                        // backgroundColor: "#334455",
                        padding: [2, 4],
                        borderRadius: 2
                      }
                    }
                  }
                },

                labelLine: {
                  normal: {
                    length: 10,
                    length2: 5,
                    smooth: true,
                    lineStyle: {
                      width: 2
                    }
                  }
                },
                data: [],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          };

          commodityPieGood.series[0].data = response.data.data.good_comment_list;
          this.commodityPieGood = commodityPieGood;

          var commodityPieShort = {
            title: {
              text: "中差评数",
              textStyle: {
                fontSize: 16,
                color: "#ffffff"
              },
              x: "center"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series: [
              {
                name: "中差评数",
                type: "pie",
                center: ["50%", "50%"],
                radius: ["0%", "65%"],
                clockwise: false, //饼图的扇区是否是顺时针排布
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    formatter: " {b|{b}：}{c}  {per|{d}%}  ",
                    backgroundColor: "#044BBE",
                    borderColor: "#044BBE",
                    borderWidth: 1,
                    rich: {
                      //定义不同地方的文字的字体大小和颜色
                      a: {
                        color: "#fff",
                        lineHeight: 22,
                        align: "center"
                      },

                      b: {
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 33
                      },
                      c: {
                        color: "#fff",
                        backgroundColor: "#ffffff",
                        padding: [2, 4],
                        borderRadius: 2
                      },
                      per: {
                        color: "#fff",
                        // backgroundColor: "#334455",
                        padding: [2, 4],
                        borderRadius: 2
                      }
                    }
                  }
                },

                labelLine: {
                  normal: {
                    length: 10,
                    length2: 5,
                    smooth: true,
                    lineStyle: {
                      width: 2
                    }
                  }
                },
                data: [],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          };
          commodityPieShort.series[0].data = response.data.data.bad_comment_list;
          this.commodityPieShort = commodityPieShort;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
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