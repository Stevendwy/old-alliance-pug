<template lang="pug">
el-dialog(
    title="创建收货地址",
    :visible.sync="dialogShow",
    @close="close"
) 
    .title
      el-radio(v-model="selected", label="")
      span  新增收货地址
      span  电话号码、手机号选填一项
    
    .content
       .c-buyer
            span.ci-start   *
            .ci-title   收
                span    货人:
            el-input.ci-input(v-model="originAddress.receiver", placeholder="", autofocus )
      
       .c-buyer
            span.ci-start   *
            .ci-title   公
                span    司
                span    名称:
            el-input.ci-input(
                v-model="originAddress.company", placeholder="", autofocus
            )  
      
       .c-buyer
            span.ci-start   *
            .ci-title   所
                span    在
                span    地区:
            el-cascader(
                v-if="dialogShow",
                :placeholder="originAddress.area_cn",
                :options="options",
                change-on-select,
                @change="handleAreaClick",
                :props="areaProps"
            )
            
      
       .c-address
            span.ci-start   *
            .ci-title   详
                span    细
                span    地址:
            el-input.ci-input(
                :rows="2",
                type="textarea",
                v-model="originAddress.address",
                placeholder=""
            )  
      
       .c-post
            .ci-start   *
            .ci-title   邮
                span    编:
            el-input.ci-input(
                v-model="originAddress.zip_code", placeholder=""
            )  
      
       .c-phone
            .ci-start
            .ci-title   手
                span    机:
            el-input.ci-input(
                v-model="originAddress.contact_phone", placeholder=""
            )  
      
       .c-tel
            .ci-start
            .ci-title   电
                span    话:
            el-input(
                class="ci-input area",
                v-model="tArea",
                placeholder="区号" 
            ) 
            | -
            el-input(
               class="ci-input phone", 
                v-model="tPhone",
                placeholder="电话号码"
            )  
            | -
            el-input(
                class="ci-input sub-phone",
                v-model="tSubPhone",
                placeholder="分机号"
            )  
      
       .c-check
            el-checkbox(
                v-model="originAddress.is_default"
            ) 
            span    设置为默认收货地址
            span    设置后系统将在下单时自动选中该收货地址 
      
    
    .submit
        el-button.s-button(
            type="primary",
            @click="submit"
        ) 确认收货信息
</template>

<script>
import { Dialog, Radio, Input, Cascader } from "element-ui";
import Vue from 'vue'

Vue.use(Radio);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Cascader);

export default {
  props: ["show", "close", "originAddress"], // 显示控制, 关闭回调, 需要修改的源地址
  data() {
    return {
      dialogShow: false,
      selected: "",
      tArea: "",
      tPhone: "",
      tSubPhone: "",
      options: [], // 联级地区数据
      areaProps: { // 联级组件结构 key
          label: 'name',
          value: 'code',
          children: 'cities'
        },
      code: 0, // 初始值为 0，后面根据返回值赋值
    };
  },
  watch: {
    show(isShow) {
      if(isShow) this.handleAreaClick() // 获取联级地区数据
      this.dialogShow = isShow
    }
  },
  computed: {
    subPhone() {
      let tel = `${this.tArea}-${this.tPhone}-${this.tSubPhone}`;
      if (tel === "--") tel = "";
      return tel;
    },
    selectorReq() {
      return {p_code: this.code}
    }
  },
  methods: {
    submit() {
      this.originAddress.contact_tel = this.subPhone;
      if (this.originAddressCheck())
        this.$emit("callback", { req: this.originAddress });
    },
    originAddressCheck() {
      let originAddress = this.originAddress;
      let checked = true;

      if (originAddress.receiver.length < 1) {
        this.$message("请输入收货人");
        checked = false;
      } else if (originAddress.company.length < 1) {
        this.$message("请输入公司名称");
        checked = false;
      } else if (originAddress.area.length < 1) {
        this.$message("请选择所在地区");
        checked = false;
      } else if (originAddress.address.length < 1) {
        this.$message("请输入详细地址");
        checked = false;
      } else if (originAddress.zip_code.length < 1) {
        this.$message("请输入邮编");
        checked = false;
      } else if ( // 手机或固定电话判断
        originAddress.contact_tel.length < 1 &&
        originAddress.contact_phone.length < 1
      ) {
        this.$message("请输入手机或电话");
        checked = false;
      }

      return checked;
    },
    handleAreaClick(value) {
      let level = 1
      let indexes = []
      if(value) {
        this.originAddress.area = '' // 取消选中地区
        if(value[2]) { // 第三级拿到值直接退出
          this.originAddress.area = value[2] // 保存选中地区
          return
        }
        else if(value[1]) {
          let subValue = value[0]
          value = value[1]
          level = 3
          let data = this.options
          for(let i = 0, j = data.length; i < j; i ++) {
            let item = data[i]
            if(item.code === subValue) {
              indexes[0] = i
              let cities = item.cities
              for(let i = 0, j = cities.length; i < j; i ++) {
                let city = cities[i]
                if(city.code === value) {
                  indexes[1] = i
                  break
                }
              }
              break
            }
          }
        }
        else if(value[0]) {
          value = value[0]
          level = 2
          let data = this.options
          for(let i = 0, j = data.length; i < j; i ++) {
            let item = data[i]
            if(item.code === value) {
              indexes[0] = i
              break
            }
          }
        }
      }

      this.code = value
      
      u.get('/community/address/selector', this.selectorReq, {closeMum: true})
        .then(res => {
          let data = res.data
          for(let i = 0, j = data.length; i < j; i ++) {
            let item = data[i]
            if(level < 3) item.cities = []
          }
          if(indexes.length === 1) this.options[indexes[0]].cities = data
          else if(indexes.length === 2) this.options[indexes[0]].cities[indexes[1]].cities = data
          else this.options = data
        })
    }
  }
};
</script>

<style scoped lang="less">
@eColor: #ec6337;

.title {
  display: flex;
  align-items: center;

  span:nth-child(2) {
    font-weight: 800;
    margin-right: 10px;
  }
}

.content {
  .c-item {
    display: flex;
    align-items: center;
    margin-top: 12px;

    .ci-start {
      width: 14px;
      color: @eColor;
    }

    .ci-title {
      display: flex;
      justify-content: space-between;
      width: 80px;
      margin-right: 12px;
      font-weight: 800;
    }

    .ci-input {
    }
  }

  .c-buyer {
    .c-item;

    .ci-input {
      width: 98px;
    }

    .el-cascader {
      width: 400px;
    }
  }

  .c-address {
    .c-item;

    .ci-input {
      width: 260px;
    }
  }

  .c-post {
    .c-item;

    .ci-input {
      width: 98px;
    }
  }

  .c-phone {
    .c-item;

    .ci-input {
      width: 176px;
    }
  }

  .c-tel {
    .c-item;

    .ci-input {
      font-size: 14px;
    }

    .area {
      width: 66px;
    }

    .phone {
      width: 104px;
    }

    .sub-phone {
      width: 80px;
    }
  }

  .c-check {
    margin-top: 12px;
    padding-left: 106px;
    font-size: 12px;

    span:nth-child(2) {
      font-weight: 800;
      margin-right: 12px;
    }
  }
}

.submit {
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-left: 106px;

  .s-button {
    padding: 8px 10px;
  }
}
</style>
