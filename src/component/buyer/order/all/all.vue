<template lang="pug">
  .all
    .a-table(v-show="orders.length")
      o-table(
        type="all",
        :orders="orders"
      )
      pagination(
        v-show="totalPage > 0",
        :countTotal="totalPage",
        :initialSelectedIndex='0',
        :countPage='5',
        :pageClick="paginationPageClick"
      )
    .null(v-if="!orders.length")
</template>

<script>
import Vuex from 'vuex'
import oTable from './table.vue'
import pagination from '../../../common/pagination.vue'

export default {
  components: {
    oTable,
    pagination
  },
  data() {
    return {
      totalPage: 1,
    }
  },
  mounted() {
    this.updateMI({index: '0-0'})
    this.updateNSP({ path: '/buyer' })
  },
  computed: {
    ...Vuex.mapState('buyer', ['orders'])
  },
  methods: {
    ...Vuex.mapMutations(["updateNSP"]),
    ...Vuex.mapMutations('buyer', ['updateMI']),
    ...Vuex.mapActions('buyer', ['aList']),
    paginationPageClick(index) {
      this.aList({
        page: index + 1,
        status: 'all'
      }).then(res => this.totalPage = res.total_page || 0)
    }
  }
}
</script>

<style scoped lang="less">
.all {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: e('calc(50% + 302px)');
  margin-left: 10px;
  padding-top: 10px;
  min-height: 400px;

  .a-table {
    height: 100%;
  }

  .null {
    width: 804px;
    height: 600px;
    background: url(/static/img/p_order.png) center ~'/' 150px auto no-repeat;
  }
}
</style>