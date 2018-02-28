<template lang="pug">
    .container
      .pr-selector(v-if="searchResultList && searchResultList.length > 0 && !baseInfoList")     
        .prs-header
          .prsh-item
          .prsh-item  零件号
          .prsh-item  名称
      
        .prs-content(
           :class="item.status ? 'prsc-row' : 'prscr-warning'",
          v-for="(item, index) in searchResultList" :key="index + 'rootItem'",
          @click='itemClick(item)')
            .prsc-item
            .prsc-item   {{splitPid(item.pid, item.s_pid)[0]}}
                span.prsc-item-special(
                    v-show="splitPid(item.pid, item.s_pid)[0] !== item.pid" 
                )   {{item.s_pid}}
                |   {{splitPid(item.pid, item.s_pid)[1]}}
          
            .prsc-item   {{item.label}}
          
        
            .load-more(
                v-if="hasNext === 1",
                @click="loadMore"
            )
                el-button(:loading="isLoaingMore")  加载更多
        
      
    
      .no-list(
          v-if="searchResultList && searchResultList.length === 0"
      )
        .img 
        span.remind 抱歉, 暂无此零件供应~
</template>

<script>
import Vuex from 'vuex'

export default {
  data() {
    return {
      isLoaingMore: false // 是否加载更多中
    };
  },
  computed: {
    ...Vuex.mapState("part", ["baseInfoList", "searchResultList", 'hasNext'])
  },
  methods: {
    ...Vuex.mapActions("part", ["resultItemClick", "searchLoadMore"]),
    splitPid(pid, sPid) {
      return pid.split(sPid);
    },
    loadMore() {
      this.isLoaingMore = true;
      this.searchLoadMore()
        .then(() => this.isLoaingMore = false)
    },
    itemClick(item) {
      this.resultItemClick({item, callback: () => this.$router.push('/part/detail')})
    }
  }
};
</script>

<style scoped lang="less">
.container {
  .pr-selector {
    .row {
      display: flex;
      width: 100%;
      height: 40px;
    }

    .item {
      display: flex;
      align-items: center;

      &:nth-child(1) {
        width: 5%;
      }

      &:nth-child(2) {
        width: 25%;
      }

      &:nth-child(3) {
        width: 75%;
      }
    }

    .prs-header {
      .row;
      background-color: #e6e6e6;

      .prsh-item {
        .item;
      }
    }

    .prs-content {
      min-height: 400px;
      background-color: white;

      .prsc-row {
        .row;
        cursor: pointer;

        &:nth-child(2n) {
          background-color: white;
        }

        &:nth-child(2n + 1) {
          background-color: #f5f5f5;
        }

        .prsc-item {
          .item;

          .prsc-item-special {
            color: #4990e2;
          }
        }
      }

      .prscr-warning {
        .prsc-row;
        cursor: default;

        .prsc-item {
          color: #f33;
        }
      }

      .load-more {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1024px;
        height: 40px;
        border: 1px solid #d8d8d8;
        cursor: pointer;
      }
    }
    }

    .no-list {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1024px;
      min-height: 368px;
      background-color: white;

      .img {
        width: 40px;
        height: 40px;
        background: url(/static/img/spirit.png) 0 -280px ~'/' 40px auto no-repeat;
      }

      .remind {
        font-size: 16px;
        color: #9b9b9b;
      }
    }
}
</style>
