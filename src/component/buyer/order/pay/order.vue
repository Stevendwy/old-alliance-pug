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
                    span    {{item.pid}}
                    span    {{item.label}}               
                span.oli-price  ¥{{item.price}}
                span .oli-count {{item.quantity}}
                   
        .o-total    
            .ot-result  
                span.otr-pay   ¥{{order.total_money}}
                span.otr-freight   {{carriage}}
            
            .ot-detail  
                span.otd-status    {{orderStatus(order.status)}}
                span.otd-order(@click="openDetail(order)")  订单详情
            
            .ot-operation   
                el-button(
                    type="primary", 
                    class="oto-pay",
                    @click="pay(order)"
                )   付款
                span.close(
                    @click="close(order)",
                    v-if="order.status !== 'closed'"
                )   关闭交易
            
            .ot-other   
                span.oto-complaint(@click="complaint")  投诉
</template>

<script>
import Vuex from "vuex";

export default {
  props: ["order", "type"],
  data() {
    return {
      headerTitles: ["零件号、名称", "单价（元）", "数量", "总金额（元）", "订单状态", "交易操作", ""]
    };
  },
  computed: {
    carriage() {
      return this.order.carriage_unit + this.order.carriage;
    }
  },
  methods: {
    ...Vuex.mapActions("buyer", ["aDetail", "handleOrder"]),
    openDetail(order) {
      this.aDetail({ order_id: order.order_id }).then(() =>
        this.$router.push("/buyer/detail")
      );
    },
    pay(order) {
      this.$router.push({ path: "/pay", name: "pay", params: { order } });
    },
    close(order) {
      this.$confirm("此操作将关闭该订单, 是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.handleOrder({
            order_id: order.order_id,
            status: this.type,
            action: "close"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    complaint() {
      this.$message("此功能暂未开通...");
    },
    orderStatus(status) {
      let statusStr = "其他";
      switch (status) {
        case "closed":
          statusStr = "已关闭";
          break;
        case "created":
          statusStr = "等待买家付款";
          break;
        case "paid":
          statusStr = "等待卖家发货";
          break;
        case "sent":
          statusStr = "等待买家签收";
          break;
        default:
      }
      return statusStr;
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

  @eColor: #ec6337;
  @d8line: 1px solid #d8d8d8;

  .o-title {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #ffe9e2;

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
        // margin-left: 10px;
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
            width: 80px;

            span:nth-child(n + 2) {
              margin-top: 10px;
            }
          }
        }

        .oli-price {
          display: flex;
          justify-content: center;
          width: 150px;
        }

        .oli-count {
          display: flex;
          justify-content: center;
          width: 50px;
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

      .ot-result {
        .center;
        width: 150px;

        span:nth-child(n + 2) {
          margin-top: 10px;
        }

        .otr-freight {
          color: #999;
        }
      }

      .ot-detail {
        .center;
        width: 150px;

        span:nth-child(n + 2) {
          margin-top: 10px;
          cursor: pointer;
        }

        .otd-status {
          color: @eColor;
        }

        .otd-order {
          text-decoration: underline;

          &:hover {
            color: @eColor;
          }
        }
      }

      .ot-operation {
        .center;
        width: 100px;

        .el-button--primary {
          padding: 8px 19px;
        }

        .close {
          margin-top: 10px;
          cursor: pointer;
        }

        .closed {
          margin-top: 10px;
          cursor: not-allowed;
        }
      }

      .ot-other {
        width: 54px;
        text-align: center;

        span {
          cursor: pointer;
        }

        .oto-complaint {
          color: #999;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>