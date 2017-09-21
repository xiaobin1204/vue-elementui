<template lang="html">
  <div class="data-pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="this.listStore.total">
    </el-pagination>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import { apiDomain } from './../config'
export default {
  computed: {
    ...mapState({
      listStore: state => state.listStore
    })
  },
  methods: {
    handleCurrentChange (page) {
      const listType = this.listStore.list
      const data = {
        page: page,
        api: ''
      }
      if (listType === 'list1') {
        data.api = apiDomain + 'getList1'
      }
      if (listType === 'list2') {
        data.api = apiDomain + 'getList2'
      }
      this.$store.dispatch('setdatas', data)
    }
  }
}
</script>
<style lang="css" scoped>
</style>
