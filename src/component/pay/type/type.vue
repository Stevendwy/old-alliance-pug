<template lang="pug">
  .pay
    .pay-type
      span  交易方式:
      div(
        :class="payType === 'union' ? 'unionSelected' : 'union'",
        @click="changePayType('union')"
      )
      div(
        :class="payType === 'deposit' ? 'depositSelected' : 'deposit'",
        @click="changePayType('deposit')"
      )
      div(
        :class="payType === 'alipay' ? 'alipaySelected' : 'alipay'",
        @click="changePayType('alipay')"
      )
      div(
        :class="payType === 'wepay' ? 'wepaySelected' : 'wepay'",
        @click="changePayType('wepay')"
      )
</template>

<script>
export default {
  props: ['od', 'payType'],
  methods: {
    changePayType(type) {
      if(type === 'alipay' || type === 'wepay') this.$emit('updatePayType', {type})
      else this.$message('功能暂未开通...')
    }
  }
}
</script>

<style scoped lang="less">
.pay {
  width: 1024px;
  // height: 192px;

  @eColor: #ec6337;

  .p-box {
    display: flex;
    align-items: center;
    height: 112px;
    width: 1024px;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    background-color: white;
  }

  .pay-type {
    .p-box;
    align-items: center;

    div {
      margin-left: 10px;
      width: 140px;
      height: 40px;
      box-sizing: border-box;
      cursor: pointer;
      border-radius: 4px;
    }

    .union {
      background: url(/static/img/p_union.png) 0 0 ~'/' 140px auto no-repeat;
      cursor: not-allowed;
    }

    .unionSelected {
      border: 1px solid @eColor;
      background: url(/static/img/p_union_selected.png) 0 0 ~'/' 140px auto no-repeat;
    }

    .deposit {
      background: url(/static/img/p_deposit.png) 0 0 ~'/' 140px auto no-repeat;
      cursor: not-allowed;
    }

    .depositSelected {
      border: 1px solid @eColor;
      background: url(/static/img/p_deposit_selected.png) 0 0 ~'/' 140px auto no-repeat;
    }

    .alipay {
      border: 1px solid #d8d8d8;
      background: url(/static/img/p_alipay_selected.png) 0 0 ~'/' 140px auto no-repeat;
    }

    .alipaySelected {
      border: 1px solid @eColor;
      background: url(/static/img/p_alipay_selected.png) 0 0 ~'/' 140px auto no-repeat;
    }

    .wepay {
      border: 1px solid #d8d8d8;
      background: url(/static/img/p_wepay_selected.png) 0 0 ~'/' 140px auto no-repeat;
    }

    .wepaySelected {
      border: 1px solid @eColor;
      background: url(/static/img/p_wepay_selected.png) 0 0 ~'/' 140px auto no-repeat;
    }
  }

  // .pay-total {
  //   .p-box;
  //   justify-content: space-between;

  //   .pt-count {

  //   }

  //   .pt-pay {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: flex-end;
  //     font-size: 12px;

  //     .ptp-total {
  //       font-size: 14px;
  //     }

  //     .money {
  //       color: #ec6337;
  //       margin-left: 4px;
  //     }
  //   }
  // }
}
</style>
