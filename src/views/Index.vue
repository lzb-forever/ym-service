<template>
  <div>
    <div class="el-center">
      <div class="text">选择日期：</div>
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline flex">
          <el-form-item>
            <el-date-picker
              v-model="formInline.date2"
              align="right"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <div class="text">星期几：</div>
          <el-form-item>
            <el-select v-model="formInline.week" placeholder="星期？">
              <el-option label="星期一" value="星期一"></el-option>
              <el-option label="星期二" value="星期二"></el-option>
              <el-option label="星期三" value="星期三"></el-option>
              <el-option label="星期四" value="星期四"></el-option>
              <el-option label="星期五" value="星期五"></el-option>
              <el-option label="星期六" value="星期六"></el-option>
              <el-option label="星期日" value="星期日"></el-option>
            </el-select>
          </el-form-item>
          <div class="text">责任运营：</div>
          <el-form-item>
            <el-select v-model="formInline.user" placeholder="运营">
              <el-option label="王凤" value="王凤"></el-option>
              <el-option label="依明明" value=" 依明明"></el-option>
              <el-option label="张芳" value="张芳"></el-option>
              <el-option label="杨伟丹" value="杨伟丹"></el-option>
              <el-option label="苗雪莉" value="苗雪莉"></el-option>
              <el-option label="--" value="--"></el-option>
            </el-select>
          </el-form-item>
          <div class="text">责任销售：</div>
          <el-form-item>
            <el-select v-model="formInline.users" placeholder="销售">
              <el-option label="余丽萍" value="余丽萍"></el-option>
              <el-option label="杨飞" value="杨飞"></el-option>
              <el-option label="刘宇" value="刘宇"></el-option>
              <el-option label="王宏亮" value="王宏亮"></el-option>
            </el-select>
          </el-form-item>
          <div class="text">选择商户：</div>
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="商户">
              <el-option
                v-for="(item,index) in accountIds"
                :key="index"
                :label="item.name"
                :value="index"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/style.css";
export default {
  data() {
    return {
      accountIds: [
        {
          value: "CsOs45SAIVVREp3hzbVVN7uvgv2ASPfw",
          name: "花下数据维护推广",
          enterDate: "2019-4-16"
        },
        {
          value: "7yEozCww9nOCXznUfse4WQubfZrMqW2X",
          name: "花下团单账号",
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
        },
        {
          value: "FYn6poCVbVtxNafaLBy1jD41xOMJ4Pe0",
          name: "芙艾医美",
          enterDate: "2019-03-22"
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "前天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 2);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      formInline: {
        date2: "",
        user: "",
        region: "",
        users: "",
        week: ""
      }
    };
  },
  methods: {
    onSubmit() {
      var formInline = this.formInline;
      var accountIds = this.accountIds;
      sessionStorage.setItem("sendAccountId", JSON.stringify(accountIds));
      sessionStorage.setItem("user", JSON.stringify(formInline));
      this.$store.commit("sendUserData", formInline);
      console.log(this.formInline);
      if (
        formInline.date2 != "" &&
        formInline.user != "" &&
        formInline.users != ""
      ) {
        this.$router.push({
          path: "/Home"
        });
      }
    }
  }
};
</script>

<style scoped>
.el-center {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.flex {
  display: flex;
  flex-direction: row;
}
.text {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  line-height: 40px;
  margin-left: 20px;
}
.el-form-item {
  margin-bottom: 0;
}
</style>