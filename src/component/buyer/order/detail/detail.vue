<template lang="pug">
  .order
    .o-title  订单详情
    .o-top
      o-express(:orderStatus="detailOrdersData.status")
      o-address(:addressInfo="detailOrdersData.contact")
      .o-list-container
        o-list
        .pay-total-container
          .pay-total
            .pt-count 总计:
              span 货品种类: {{detailOrdersData.total_quantity}}类
              span 数量总计: {{detailOrdersData.total_quantity}}件
            .pt-pay
              span 货品总金额: 
                span.money ¥{{detailOrdersData.total_money}}
              span  运费到付: 
                span.money  {{carriage}}

    .o-footer-container
      .o-footer
        el-button(
          type="primary",
          class="back",
          v-once,
          @click="back"
        ) 返回

</template>

<script>
import oExpress from "./express.vue";
import oAddress from "./address.vue";
import oList from "./list/list.vue";
import Vuex from 'vuex'

export default {
  components: {
    oExpress,
    oAddress,
    oList
  },
  computed: {
    ...Vuex.mapState("buyer", ["detailOrdersData"]),
    carriage() {
      return this.detailOrdersData.carriage_unit + this.detailOrdersData.carriage;
    }
  },
  methods: {
    back() {
      this.$router.history.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.order {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: e("calc(100% - 32px)");

  @eColor: #ec6337;

  .o-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);
    font-size: 20px;
    color: @eColor;
  }

  .o-top {
    margin-top: 10px;
  }

  .pay-total-container {
    .pay-total {
      display: flex;
      align-items: center;
      height: 112px;
      width: 1024px;
      padding: 0 10px;
      margin-top: 10px;
      font-size: 14px;
      color: #666;
      background-color: #fdefeb;
      justify-content: space-between;

      .pt-count {
      }

      .pt-pay {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        span {
          margin: 4px 0;
        }

        .money {
          color: @eColor;
          margin-left: 4px;
        }
      }
    }
  }

  .o-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: e("calc(100% - 120px)");
    overflow-y: scroll;

    .o-list-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  .o-footer-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    background-color: white;

    .o-footer {
      display: flex;
      justify-content: flex-end;
      width: 1024px;

      .back {
        width: 110px;
        padding: 10px 20px;
        background-color: @eColor;
        border: 1px solid @eColor;
      }
    }
  }
}
</style>
