<template lang="pug">
  .seller-container
    .title-container
      .title
        .t-name(v-once) 萤火虫卖家中心
        .t-company {{userInfo.company}}
        .t-hub(v-once, @click="hub") 库存管理
    
    .seller
      <b-menu />
      <router-view />
</template>

<script>
import bMenu from './menu/menu.vue'
import Vue from 'vue'
import Vuex from 'vuex'

import {
  Menu,
  Submenu,
  MenuItem
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

export default {
  components: {
    bMenu
  },
  mounted() {
    this.aUserInfo()
    this.aExpresses()
  },
  computed: {
    ...Vuex.mapState(['userInfo'])
  },
  methods: {
    ...Vuex.mapActions(['aUserInfo']),
    ...Vuex.mapActions('seller', ['aExpresses']),
    hub() {
      this.$router.push('/hub')
    }
  }
}
</script>

<style scoped lang="less">
.seller-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: e('calc(100% - 32px)');

  .title-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.24);
    border-radius: 2px;
    z-index: 2;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      width: 1024px;
      height: 60px;

      .t-name {
        font-size: 20px;
        color: #0076ff;
        margin: 0 50px 0 20px;
      }

      .t-company {
        font-size: 14px;
        color: #333;
      }

      .t-hub {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 32px;
        margin-left: 40px;
        font-size: 14px;
        color: #333;
        border: 1px solid #20a0ff;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }

  .seller {
    display: flex;
    width: 100%;
    height: e('calc(100% - 60px)');
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>