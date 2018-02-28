<template lang="pug">
  .record
     .title 账户管理
     .title 账户余额：
        span.money  ¥{{balance.total_balance}}
     .table
       .header
         .item  申请时间
         .item  内容
         .item  订单号|流水号
         .item  对方
         .item  金额|明细
         .item  状态
         .item  完成时间
      
       .content
         .c-row(v-for="(item, index) in items", :key="index")
          
           .item    {{item.create_time}}
           .item    {{item.reason_str}}
           .item(v-if="item.order_id")  订单号：{{item.order_id}}
            div 流水号：{{item.serial}}
          
           .item
                div {{item.name}}
                div {{item.bank_info}}
          
           .item    {{item.amount}}
           .item    {{item.status}}
           .item    {{item.enable_time}}
</template>

<script>
export default {
  props: ["balance"],
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.aHistory()
  },
  methods: {
    aHistory() {
      u.get('/account/balance/history')
        .then(res => {
          this.items = res.data || []
        })
    }
  }
}
</script>

<style scoed lang="less">
.record {
  width: 100%;
  height: 100%;

  @eColor: #ec6337;
  @d8line: 1px solid #d8d8d8;
  @headerBC: #f6f6f6;

  .title {
    margin-top: 20px;
    margin-left: 40px;
    font-size: 14px;
    color: #666;
    font-weight: 800;

    .money {
      color: @eColor;
    }
  }

  .table {
    width: 804px;
    height: 344px;
    margin: 10px 0 0 10px;
    border: @d8line;

    .row {
      display: flex;
      height: 40px;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #666;
        font-size: 12px;
      }

      .item:nth-child(1) {
        width: 90px;
        padding-left: 10px;
      }
      .item:nth-child(2) {
        width: 70px;
      }
      .item:nth-child(3) {
        width: 242px;
      }
      .item:nth-child(4) {
        width: 150px;
      }
      .item:nth-child(5) {
        width: 80px;
      }
      .item:nth-child(6) {
        width: 70px;
      }
      .item:nth-child(7) {
        width: 100px;
        padding-right: 10px;
      }
    }

    .header {
      .row;
      background: @headerBC;
    }

    .content {
      height: 304px;
      overflow-y: scroll
    }

    .c-row {
      .row;
      min-height: 58px;
      border-top: @d8line;   
    }
  }
}
</style>
