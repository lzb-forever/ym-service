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
          <li class="r_right total_chose_pl" id="nav_active" @click="toCompete(2)">
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
        <div class="box-center">
          <div class="center-center">
            <div class="left-bottom">
              <div class="title-box">
                <h6>竞争分析</h6>
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
        <div class="box-center" style="margin: 0 auto">
          <div class="data-box1 box1-back margin-bottom">
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
            style="width: 12.7rem;margin-left: 0.5rem;margin-right: 0.5rem; height: auto" 
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
      accountIds: null
    };
  },
  methods: {
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