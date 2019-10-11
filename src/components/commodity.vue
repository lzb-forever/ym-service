<template>
  <div>
    <!-- <div v-if="show" class="loading">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 数据分析中...
      </div>
    </div> -->
    <div class="showlooding" v-if="!show">
      <div class="box-center margin-top">
        <div class="center-center">
          <div class="left-bottom">
            <div class="title-box">
              <h6>商品分析</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="container-flex" v-show="showtaocan" tabindex="0" hidefocus="true">
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
              <div class="chart-box-title flexshop" style="padding-bottom: 25px;">
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
                <div class="tableTip">
                  <div class="tableTipTitle">数据分析</div>
                  <div class="tableTipcent">
                    <textarea
                      class="textareacent"
                      name
                      id
                      cols="10"
                      :placeholder="commodityCombo"
                      v-model="commodityCombo"
                      v-on:input="commodityComboClick"
                      rows="17"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-center" v-show="showkaci" style="width: 49%; margin-right:0;">
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
              <div class="chart-box-title flexshop" style="padding-bottom: 25px;">
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

                <div class="tableTip">
                  <div class="tableTipTitle">数据分析</div>
                  <div class="tableTipcent">
                    <textarea
                      class="textareacent"
                      name
                      id
                      cols="10"
                      :placeholder="commodityClip"
                      v-model="commodityClip"
                      v-on:input="commodityClipClick"
                      rows="17"
                    ></textarea>
                  </div>
                </div>
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
              <div class="t_mbox_shop" v-show="showYu">
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
              <div class="t_left_box-in-tip-commodity" style="margin:  0.2rem auto 0.3rem auto;">
                <div class="backData">数据分析</div>

                <div class="textareaBox">
                  <textarea
                    class="textsInput"
                    name
                    id
                    cols="30"
                    :placeholder="commodityAppointment"
                    v-model="commodityAppointment"
                    v-on:input="commodityAppointmentClick"
                    rows="6"
                  ></textarea>
                </div>
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
              <div class="t_mbox_shop flexshop" v-show="showQu">
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
              <div class="t_left_box-in-tip-commodity" style="margin:  0.2rem auto 0.3rem auto;">
                <div class="backData">数据分析</div>

                <div class="textareaBox">
                  <textarea
                    class="textsInput"
                    name
                    id
                    cols="30"
                    :placeholder="commodityCancel"
                     v-model="commodityCancel"
                    v-on:input="commodityCancelClick"
                    rows="6"
                  ></textarea>
                </div>
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
              <div class="t_mbox_shop flexshop" v-show="showCount">
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
              <div class="t_left_box-in-tip-commodity" style="margin:  0.2rem auto 0.3rem auto;">
                <div class="backData">数据分析</div>

                <div class="textareaBox">
                  <textarea
                    class="textsInput"
                    name
                    id
                    cols="30"
                    :placeholder="commodityAll"
                    v-model="commodityAll"
                    v-on:input="commodityAllClick"
                    rows="6"
                  ></textarea>
                </div>
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
              <div class="t_mbox_shop flexshop" v-show="goodShow">
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
              <div class="t_left_box-in-tip-commodity" style="margin:  0.2rem auto 0.3rem auto;">
                <div class="backData">数据分析</div>

                <div class="textareaBox">
                  <textarea
                    class="textsInput"
                    name
                    id
                    cols="30"
                    :placeholder="commodityGood"
                    v-model="commodityGood"
                    v-on:input="commodityGoodClick"
                    rows="6"
                  ></textarea>
                </div>
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
              <div class="t_mbox_shop flexshop" v-show="showBad">
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
              <div class="t_left_box-in-tip-commodity" style="margin:  0.2rem auto 0.3rem auto;">
                <div class="backData">数据分析</div>

                <div class="textareaBox">
                  <textarea
                    class="textsInput"
                    name
                    id
                    cols="30"
                    :placeholder="commodityBad"
                    v-model="commodityBad"
                    v-on:input="commodityBadClick"
                    rows="6"
                  ></textarea>
                </div>
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
      showtaocan: true,
      showkaci: true,
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
      formInline: {},
      accountIds: null,
      showBad: true,
      goodShow: true,
      showCount: true,
      showQu: true,
      showYu: true,

      /* 商品分析 */
      /* 套餐 */
      commodityCombo:
        "挑1,4项目作为团购引流项目，参与广告位，造成爆单效果满足市场消费者从重心里，从而引进新客美睫品类较美甲销量是高；可适当增加美睫次卡，增加客户粘度；1.团购名称不明确，不够一目了然修改：名称重新编辑，加入关键词标题修改 2.美甲类团购在线四个即可建议：纯色、应季款式、卸甲、一口价<br/>3.价格区间无差异化建议：价格阶梯设置<br/>4.销量同比周边竞对较低建议：*报名天天特价引流*配合团购引导新增销量*设置团购活动<br/>热销团购不清晰，与普通项目销量之间差距过小，建议挑选美甲和美睫两个作为门店主推项目，适当增加热门项目权重。",
      /* 卡次 */
      commodityClip:
        "次卡无销量建议增加：次卡销售6，人气值60销售8，人气值80销售11，人气100 创建爆单对应的次卡，从而基础的留住新客 确保3次的到店率 提升店铺信任度，产生连带消费 提升会员卡的办卡率睫毛次卡、一口价次卡纯色次卡各一售卖较低，建议根据市场行情，结合现有的产品，找出潜在的爆款创建次卡套餐",
      /* 预约 */
      commodityAppointment:
        " 赠送额外小礼品或者项目来提升预约数量，提升门店热度南洋店预约数据中等偏下；稻荷是否线下预约方面是否线下忽略？门店前台预约数量为门店数据展示，各门店前期应引导消费者主动点击预约。（客人到店后可协助点击）预约送手部护理或者8.8折",
      /* 取消 */
      commodityCancel:
        "及时和消费者确认时间，降低取消的情况线下门店是否有及时联系预约客户预约取消1，建议门店主动回电，预约下次到店时间指导门店已有会员用户习惯线上预约",
      /* 全部评价 */
      commodityAll:
        "做一个线下活动 5星好评截图发送给店家即可享受**项目免费体验，1能最大化的激励真实的消费者评价，2赠送的项目又能确保额外一次的到店 3最合理能加到新客的微信，可以作为散客来管理丽宝店，南洋店，七宝三个店评论累积的较好，另两个需加大提升（门店各环节做好引导线上客户评论，效果不好可增加线下新客的一个活动，比如凭好评截图下次到店几折优惠这样的类型活动刺激会员写好评）",
      /* 好评 */
      commodityGood:
        "客人在做的时候跟客人说，大众点评回家写5星评价，门店这次会赠送纯色美甲或者手护一次门店线下接待各方面无异常，继续保持同比周边门店评价数量偏低建议：*投放免费试用、霸王餐增加门店评价口碑（不可控）*门店员工积极引导评价，可设置好评激励政策，提高员工积极性*招募线下会员到店体验撰写评价（可控）评价总数较低，线下要多做好客户服务，增强粘性，提高客户购买体验，保持更新一些优质好评，增加线上潜在用户对门店的认知。",
      /* 差评 */
      commodityBad: "线下不断完善接待服务，继续保持0差评产生。"
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

      var date2 = formInline.date2;
      var indexId = formInline.region;
      var accountIds = this.accountIds;
      var region = accountIds[indexId].value;
      console.log("请求已经执行")

      this.$axios
        .post(`/api/commodity/analysis/${region}/${date2}.json`)
        .then(response => {
          console.log("请求成功")
          console.log(response);
          this.show = false;
          this.taocan = response.data.data.taocan;
          let taocan = response.data.data.taocan;
          if (taocan.length == 0) {
            this.showtaocan = false;
          }
          this.bad_comment_count = response.data.data.bad_comment_count;
          let bad_comment_count = response.data.data.bad_comment_count;
          if (bad_comment_count == 0) {
            this.showBad = false;
          }

          this.comment_count = response.data.data.comment_count;
          if (response.data.data.comment_count == 0) {
            this.showCount = false;
          }
          this.good_comment_count = response.data.data.good_comment_count;
          if (response.data.data.good_comment_count == 0) {
            this.goodShow = false;
          }
          this.yu_yue_count = response.data.data.yu_yue_count;
          if (response.data.data.yu_yue_count == 0) {
            this.showYu = false;
          }
          this.qu_xiao_count = response.data.data.qu_xiao_count;
          if (response.data.data.qu_xiao_count == 0) {
            this.showQu = false;
          }
          this.cika = response.data.data.cika;
          let cika = response.data.data.cika;
          if (cika.length == 0) {
            this.showkaci = false;
          }
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

          commodityPieGood.series[0].data =
            response.data.data.good_comment_list;
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
          commodityPieShort.series[0].data =
            response.data.data.bad_comment_list;
          this.commodityPieShort = commodityPieShort;
        })
        .catch(function(error) {
          console.log("请求成功失败")
          console.log(error);
          this.show = false;
        });
    },
    commodityComboClick() {
      var commodityCombo = this.commodityCombo;
      localStorage.setItem("commodityComboLocal", commodityCombo);
    },
    commodityClipClick() {
      var commodityClip = this.commodityClip;
      localStorage.setItem("commodityClipLocal", commodityClip);
    },

    commodityAppointmentClick() {
      var commodityAppointment = this.commodityAppointment;
      localStorage.setItem("commodityAppointmentLocal", commodityAppointment);
    },
    commodityCancelClick() {
      var commodityCancel = this.commodityCancel;
      localStorage.setItem("commodityCancelLocal", commodityCancel);
    },

    commodityAllClick() {
      var commodityAll = this.commodityAll;
      localStorage.setItem("commodityAllLocal", commodityAll);
    },
    commodityGoodClick() {
      var commodityGood = this.commodityGood;
      localStorage.setItem("commodityGoodLocal", commodityGood);
    },

    commodityBadClick() {
      var commodityBad = this.commodityBad;
      localStorage.setItem("commodityBadLocal", commodityBad);
    }
  },
  created() {
    var commodityCombo = localStorage.getItem("commodityComboLocal");
    var commodityClip = localStorage.getItem("commodityClipLocal");

    var commodityAppointment = localStorage.getItem(
      "commodityAppointmentLocal"
    );
    var commodityCancel = localStorage.getItem("commodityCancelLocal");

    var commodityAll = localStorage.getItem("commodityAllLocal");
    var commodityGood = localStorage.getItem("commodityGoodLocal");

    var commodityBad = localStorage.getItem("commodityBadLocal");

    if (commodityCombo != null) {
      this.commodityCombo = commodityCombo;
    }
    if (commodityClip != null) {
      this.commodityClip = commodityClip;
    }

    if (commodityAppointment != null) {
      this.commodityAppointment = commodityAppointment;
    }
    if (commodityCancel != null) {
      this.commodityCancel = commodityCancel;
    }

    if (commodityAll != null) {
      this.commodityAll = commodityAll;
    }
    if (commodityGood != null) {
      this.commodityGood = commodityGood;
    }
    if (commodityBad != null) {
      this.commodityBad = commodityBad;
    }

    this.submitForm();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/style.css";
</style>