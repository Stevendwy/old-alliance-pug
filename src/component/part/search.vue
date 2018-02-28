<template lang="pug">
  .part-search
    .ps-container
      input(
        type="text",
        class="ps-input",
        v-model="searchValue",
        placeholder="请输入奥迪零件编号",
        v-focus,
        @keydown.13="search"
      )
      el-button(
        class="ps-button",
        type="primary",
        :loading="loading",
        @click="search"
      ) 搜索
</template>

<script>
import focus from '../../directive/focus'
import Vuex from 'vuex'

export default {
  directives: {
    focus
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...Vuex.mapState('part', [
      'carsInfo'
    ]),
    searchValue: {
      get() {
        return this.$store.state.part.searchValue
      },
      set(value) {
        this.updateSV({value})
      }
    }
  },
  watch: {
    searchValue(value) {
      this.searchValue = value.toUpperCase();
    }
  },
  methods: {
    ...Vuex.mapMutations('part', [
      'updateSV'
    ]),
    ...Vuex.mapActions('part', [
      'searchResultList',
      'searchClick'
    ]),
    search() {
      if(this.searchValue.length < 1) {
        this.$message({
          message: '请输入内容',
          type: 'warning'
        })
      }
      else {
        this.loading = true
        this.searchClick({
          nextCallback: () => this.$router.push('/part/detail')
        })
          .then(() => {
            this.loading = false
            this.$router.push('/part/selector')
          })
      }
    }
  }
}
</script>

<style scoped lang="less">
.part-search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);
  z-index: 2;

  .ps-logo {
    width: 212px;
  }

  .ps-container {
    display: flex;
    width: 600px;
    height: 40px;

    .ps-input {
      width: 480px;
      padding-left: 8px;
      border: 1px solid #ed6337;
      color: #333;
      background-color: white;
      z-index: 2;
    }

    .ps-button {
      position: relative;
      left: -4px;
      width: 120px;
      background-color: #ec6337;
      color: white;
    }
  }
}
</style>
