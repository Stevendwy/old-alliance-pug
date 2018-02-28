<template lang="pug">
  .menu
    .el-menu(
      default-active="1",
      class="el-menu-vertical-demo",
      @select="select",
      background-color="white",
      active-text-color="#ec6337"
    )
      el-menu-item(index="1")
        i.el-icon-sold-out
        span(slot="title")  账户管理
      el-menu-item(index="2")
        i.el-icon-document
        span(slot="title")  交易记录 
</template>

<script>
import Vue from 'vue'
import {
  Menu,
  MenuItem
} from 'element-ui'

Vue.use(Menu)
Vue.use(MenuItem)

export default {
  methods: {
    select(index) {
      var path = 'account'
      switch(index) {
        case '1': path = 'account'
        break
        case '2': path = 'record'
        break
        default: path = 'account'
      }
      this.$router.push('/person/' + path)
    }
  }
};
</script>

<style scoped lang="less">
.menu {
  width: 200px;
  min-height: 100%;
  background: white;

  @eColor:  #ec6337;

  .el-menu {
    height: 100%;
  }
}
</style>
