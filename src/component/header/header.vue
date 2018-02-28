<template lang="pug">
  .header-container 
    .header 

      .header-left
        .header-left-logo(@click="goHomepage")
        - var _class = "naviSelectedPath === paths[0] ? 'header-navi-selected' : 'header-navi'" 
        div(:class=_class
         @click="click( paths[0] )") 特卖会
        - var _class2 = "naviSelectedPath === paths[1] ? 'header-navi-selected' : 'header-navi'"
        div(:class=_class2,
          @click = "click( paths[1] )"
        ) 零件搜索

      .header-right
          - var _class3 = "naviSelectedPath === paths[2] ? 'header-navi-selected shopping-cart' : 'header-navi shopping-cart'"
          div(:class=_class3, style="padding-right: 10px", @click="click( paths[2] )")
            .icon-cart
            .badge-icon(v-show="badgeCount") {{badgeCount}}
            |购物车  

          div(:class="inBuyer ? 'header-navi-selected' : 'header-navi'", @click="click( paths[4] )")
            el-dropdown(@command="handleBuyerCommand")
              .el-dropdown-link 买家中心 
                i(class="el-icon-arrow-down el-icon--right")
              .badge-icon(v-show="untouch.order" ) {{untouch.order}}
              el-dropdown-menu(slot="dropdown")
                el-dropdown-item(command="buyed") 已买到货品

          div(:class="inseller ? 'header-navi-selected' : 'header-navi'",
              @click="click(paths[5])",
              v-if="this.userInfo.is_seller")
            el-dropdown(
              :show-timeout="0",
              :hide-timeout="0",
              @command="handleSellerCommand"
            )
              .el-dropdown-link 卖家中心
                i(class="el-icon-arrow-down el-icon--right") 
              .badge-icon(v-show="untouch.order_seller") {{untouch.order_seller}}
              el-dropdown-menu(slot="dropdown")
                el-dropdown-item(command="saled")
                  span 已卖出货品
                el-dropdown-item(command="hub") 库存管理
          
          div(:class="inperson ? 'header-navi-selected' : 'header-navi'",
              @click="click(paths[7])")
              el-dropdown(
                :show-timeout="0",
                :hide-timeout="0",
                @command="handlePersonCommand"
              )
                .el-dropdown-link  个人中心
                  i(class="el-icon-arrow-down el-icon--right")
                el-dropdown-menu(slot="dropdown")
                  el-dropdown-item(command="mine")
                    span  我的萤火虫
                  el-dropdown-item(command="logout") 退出
</template>

<script>
import Vuex from 'vuex'

export default {
  data() {
    return {
      paths: ["/", "/part", "/cart", "/hub", "/buyer", "/seller", "/pay", "/person"],
      cartIsShow: false,
      cartHeaderLists: ["产地", "零件号", "地区", "销售价", ""],
      chooseList: []
    };
  },
  computed: {
    ...Vuex.mapState(['userInfo']),
    ...Vuex.mapState(["naviSelectedPath", "badgeCount", "untouch"]),
    ...Vuex.mapState("cart", ["orders"]),
    inBuyer() {
      let path = this.naviSelectedPath;
      let paths = this.paths;
      return path === paths[4];
    },
    inseller() {
      let path = this.naviSelectedPath;
      let paths = this.paths;
      return path === paths[5] || path === paths[3];
    },
    inperson() {
      let path = this.naviSelectedPath;
      let paths = this.paths;
      return path === paths[7];
    }
  },
  mounted() {
    this.initialCkecked();
    if (this.naviSelectedPath !== "/cart") this.aList(); // 购物车信息
  },
  methods: {
    ...Vuex.mapActions("cart", ["aList"]),
    goHomepage() {
      location.href = "/login?frominside=true"
    },
    logout() {
      this.$confirm("确认退出账号吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          u.get("/logout", {}).then(res => {
            location.href = "/login";
          });
        })
        .catch(() => {});
    },
    ...Vuex.mapMutations(["updateNSP"]),
    ...Vuex.mapMutations("cart", ["updateOrders"]),
    ...Vuex.mapMutations(["updateBadgeCount"]),
    click(path) {
      // if(path === '/seller') path = '/hub' // 没有卖家中心的临时处理方案
      this.updateNSP({ path });
      this.$router.push(path);
    },
    delectedItem(item) {
      this.updateOrders({ item, mode: "sub" });
      this.updateBadgeCount({ mode: "sub" });
      if (this.orders.length == 0) {
        this.cartIsShow = false;
      }
    },
    showCartDetail() {
      this.cartIsShow = !this.cartIsShow;
    },
    hiddenCartDetail() {
      this.cartIsShow = false;
    },
    chooseItem(index) {
      if (index === -1) {
        for (var i = 0; i < orders.length; i++) {
          chooseList.i = true;
        }
      } else {
        chooseList.index = true;
      }
    },
    initialCkecked() {
      if (location.hash && location.hash.length > 0) {
        let path = "/";
        let hash = location.hash.substr(1);
        for (let i = 0, j = this.paths.length; i < j; i++) {
          if (i === 0) continue;

          let initialPath = this.paths[i];
          if (hash.includes(initialPath)) {
            if (initialPath !== "/buyer"
              || initialPath !== "/seller")
              path = initialPath; // 买卖家中心允许直接前往下一级路由
            else path = hash;
            break;
          }
        }
        this.$router.push(path);
        this.updateNSP({ path });
      }
    },
    handleBuyerCommand(command) {
      if (command === "buyed") this.click("/buyer/sign");
      else this.$message("此功能暂未开通...");
    },
    handleSellerCommand(command) {
      if (command === "hub") this.click("/hub");
      else this.click("/seller/send");
    },
    handlePersonCommand(command) {
      if (command === "mine") this.click("/person/account");
      else this.logout()
    }
  }
};
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: @d8Color;

  @d8Color: #d8d8d8;
  @d8line: 1px solid @d8Color;

  * {
    outline: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 1024px;
    height: 30px;

    .header-navi-container {
      display: flex;
      align-items: center;
      width: 50%;
    }

    .header-left {
      .header-navi-container;

      .header-left-logo {
        width: 40px;
        height: 40px;
        background: url(/static/img/spirit.png) 0 0 ~"/" 40px auto no-repeat;
        cursor: pointer;
      }

      & > * {
        margin-left: 20px;
      }
    }

    .header-right {
      .header-navi-container;
      justify-content: flex-end;

      & > * {
        margin-right: 20px;
      }

      .badge-icon {
        background: #ec6337;
        border-radius: 9px;
        width: 12px;
        height: 12px;
        position: absolute;
        font-size: 8px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 52px;
        top: -2px;
      }
    }

    .header-navi {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      height: 100%;
      border-bottom: 2px solid @d8Color;
      cursor: pointer;
      font-size: 14px;
      color: #666;
    }

    .shopping-cart {
      position: relative;

      .badge-icon {
        left: 28px;
        top: 2px;
      }

      .icon-cart {
        width: 40px;
        height: 40px;
        background: url(/static/img/spirit.png) 0 -42px ~"/" 40px auto no-repeat;
        cursor: pointer;
      }
    }

    .header-navi-selected {
      .header-navi;
      color: #ec6337;

      .el-dropdown {
        color: #ec6337;
      }
    }

    .logout {
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
  }
}
</style>

