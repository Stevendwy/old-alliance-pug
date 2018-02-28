import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import part from './part/part'
import cart from './cart/cart'
import hub from './hub/hub'
import sale from './sale/sale'
import buyer from './buyer/buyer'
import seller from './seller/seller'
import pay from './pay/pay'

export default new Vuex.Store({
  modules: {
    part,
    cart,
    hub,
    sale,
    buyer,
    seller,
    pay
  },
  state: {
    naviSelectedPath: '',
    untouch: {},
    badgeCount: 0, // 购物车角标
    userInfo: {},
    appScrollTop: 0, // app 滚动监听数据
  },
  mutations: {
    updateNSP(state, payload) {
      state.naviSelectedPath = payload.path
    },
    updateUntouch(state, payload) {
      state.untouch = payload.data
    },
    clearUntouchBuyer(state) {
      state.untouch.order = 0
    },
    clearUntouchSeller(state) {
      state.untouch.order_seller = 0
    },
    clearUntouch(state) {
      untouch: { }
    },
    updateBadgeCount(state, payload) {
      let badgeCount = payload.badgeCount
      if (badgeCount || badgeCount === 0) state.badgeCount = badgeCount // 如果存在指定数目, 直接使用
      else {
        if (payload.mode === "plus") {
          state.badgeCount++
        } else {
          state.badgeCount--
        }
      }
    },
    updateUI(state, payload) {
      Vue.set(state.userInfo, 'is_seller', payload.is_seller)
      for (let key in payload.data) {
        Vue.set(state.userInfo, key, payload.data[key])
      }
    },
    updateAppScrollTop(state, payload) {
      state.appScrollTop = payload.scrollTop
    }
  },
  actions: {
    untouch(ct) {
      return (
        u.get('/community/order/untouch', null, { closeMum: true })
          .then(res => {
            ct.commit('updateUntouch', { data: res })
          })
      )
    },
    touched(ct, payload) {
      let channel = payload.channel
      let obj = {
        order_id: 'any',
        channel: channel
      }
      return (
        u.post('/community/order/touched', obj)
          .then(res => {
            if (channel === 'buyer') ct.commit('clearUntouchBuyer')
            else ct.commit('clearUntouchSeller')
          })
      )
    },
    aUserInfo(ct, payload) {
      return (
        u.get("/community/user/profile")
          .then(res => {
            ct.commit('updateUI', res)
            return res
          })
      )
    }
  }
})