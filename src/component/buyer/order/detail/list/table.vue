<template lang="pug">
  .table
    .t-server 订单号: {{ordersData.order_id}}  {{ordersData.order_dt}}  {{ordersData.seller_name}}
    .t-box
      .header
        .h-order(v-for="(title, index) in headerTitles",:key="index")
          span  {{title}}
      .content
        .c-order(v-for="(order, gIndex) in ordersData.data" ,:key="gIndex")
          .c-order
          .c-order  {{order.label}}
          .c-order  {{order.pid}}
          div(class="c-order money")  ¥{{order.price}}
          .c-order  {{order.quantity}}
          div(class="c-order money")  ¥{{order.money}}
    .l-requirement
      .lr-remind  备注: {{ordersData.remark}}
      .lr-total

</template>

<script>
import Vuex from 'vuex'

export default {
  props: ['ordersData'],
  data() {
    return {
      headerTitles: ['', '零件名称', '零件号', '单价(元)', '数量', '金额(元)'], //, '运费(元)'],
      allSelected: false,
      isIndeterminate: false // 全选按钮标识
    }
  },
  computed: {
    ...Vuex.mapState('cart', ['orders']),
    carriage() {
      return this.ordersData.carriage_unit + this.ordersData.carriage
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.table {
  width: 1024px;
  display: flex;
  flex-direction: column;

  @ffColor: #ffe9e2;
  @fColor: #f2f2f2;
  @eColor: #ec6337;
  @d8line: 1px solid #d8d8d8;

  .t-server {
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 10px;
    font-size: 12px;
    color: #666;
    white-space: pre;
  }

  // 通用
  .order {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;

    &:nth-child(1) {
      width: 40px;
    }
    &:nth-child(2) {
      width: 140px;
    }
    &:nth-child(3) {
      width: 214px;
    }
    &:nth-child(4) {
      width: 230px;
    }
    &:nth-child(5) {
      width: 80px;
    }
    &:nth-child(6) {
      width: 320px;
    }
    // &:nth-child(7) {
    //   width: 80px;
    // }
  }

  .money {
    color: @eColor !important;
    margin-left: 4px;
  }
  
  .t-box {
    width: 1024px;
    padding: 10px;
    background-color: white;

    .header {
      display: flex;
      height: 32px;
      border: @d8line;
      background-color: #d8d8d8;

      .h-order {
        .order;
        font-size: 12px;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      border: @d8line;
      border-top: 0;

      .c-order {
        display: flex;
        width: 100%;
        height: 40px;
        background-color: white;

        .c-order {
          .order;
          font-size: 14px;
        }

        .c-delete {
          color: @eColor;
          cursor: pointer;
        }
      }
    }
  }

  .l-requirement {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    padding: 8px 0;
    background-color: white;

    .lr-remind {
      margin-left: 10px;
      font-size: 14px;
      color: #333;
      white-space: pre;
    }

    .lr-total {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 120px;
      font-size: 12px;
      color: #333;

      &>span {
        margin: 4px 10px;
      }
    }
  }
}
</style>
