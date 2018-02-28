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
    ...Vuex.mapState('buyer', ['detailOrdersData'])
  }
}
</script>

<style scoped lang="less">

</style>
