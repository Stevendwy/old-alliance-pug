<template lang="pug">
  .order
    .o-title
      span  订单号:
        span.ot-id  {{order.order_id}}
      span.ot-time  {{order.order_dt}}
    
    .o-content
      .o-list
        .ol-item(v-for="(item, gIndex) in order.items", :key="gIndex")
          .oli-part
            span.olip-image
            .olip-detail
              span {{item.pid}}
              span {{item.label}}

          .oli-price  ¥{{item.price}}
          .oli-count  {{item.quantity}}

      .o-total
        .ot-buyer
          span {{order.buyers_name}}
        .ot-detail
          span.otd-status  已签收
          span.otd-order(@click="openDetail(order)")  订单详情
        .ot-operation
        .ot-other
          span.oto-money  ¥{{order.total_money}}
          span.oto-carriage 运费到付：
            span  {{carriage}}

</template>

<script>
import Vuex from "vuex";

export default {
  props: ["order", "type"],
  data() {
    return {};
  },
  computed: {
    carriage() {
      return this.order.carriage_unit + this.order.carriage;
    }
  },
  methods: {
    ...Vuex.mapActions("seller", ["aDetail", "handleOrder"]),
    openDetail(order) {
      this.aDetail({ order_id: order.order_id }).then(() =>
        this.$router.push("/seller/detail")
      );
    },
    pay() {
      this.$message("此功能暂未开通...");
    },
    close(order) {
      this.handleOrder({ order_id: order.order_id, status: this.type });
    },
    complaint() {
      this.$message("此功能暂未开通...");
    }
  }
};
</script>

<style scoped lang="less">
.order {
  display: flex;
  flex-direction: column;
  width: 804px;
  margin-top: 10px;
  font-size: 12px;
  color: #333;
  background-color: white;

  @d8line: 1px solid #d8d8d8;
  @0Color: #0076ff;

  .o-title {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #d8d8d8;

    .ot-id {
      margin-left: 8px;
    }

    .ot-time {
      margin-left: 4px;
      color: #999;
    }
  }

  .o-content {
    display: flex;

    .o-list {
      display: flex;
      flex-direction: column;

      .ol-item {
        display: flex;
        width: 350px;
        height: 80px;
        padding-top: 10px;
        box-sizing: border-box;
        border-bottom: @d8line;
        border-right: @d8line;

        &:last-child {
          border-bottom: 0;
        }

        .oli-part {
          display: flex;

          .olip-image {
            width: 70px;
          }

          .olip-detail {
            display: flex;
            flex-direction: column;
            width: 130px;

            span:nth-child(n + 2) {
              margin-top: 10px;
            }
          }
        }

        .oli-price {
          display: flex;
          justify-content: center;
          width: 80px;
        }

        .oli-count {
          display: flex;
          justify-content: center;
          width: 69px;
        }
      }
    }

    .o-total {
      display: flex;
      padding-top: 10px;
      box-sizing: border-box;

      .center {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .ot-buyer {
        .center;
        width: 128px;
      }

      .ot-detail {
        .center;
        width: 105px;

        span:nth-child(n + 2) {
          margin-top: 10px;
          cursor: pointer;
        }

        .otd-status {
          color: @0Color;
        }

        .otd-order {
          text-decoration: underline;

          &:hover {
            color: @0Color;
          }
        }
      }

      .ot-operation {
        .center;
        width: 105px;
      }

      .ot-other {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 116px;

        .oto-money {
          color: #333;
        }

        .oto-carriage {
          margin-top: 10px;
          color: #999;
        }
      }
    }
  }
}
</style>