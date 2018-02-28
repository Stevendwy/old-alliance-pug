<template lang="pug">
  .list
    l-table(:ordersData="detailOrdersData")
</template>

<script>
import lTable from './table.vue'
import Vuex from 'vuex'

export default {
  components: {
    lTable
  },
  computed: {
    ...Vuex.mapState('seller', ['detailOrdersData'])
  }
}
</script>

<style scoped lang="less">

</style>
