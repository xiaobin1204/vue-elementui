<template lang="html">
<div>
    <el-table
      ref="DataTable"
      :data="this.listStore.datas"
      border
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        show-overflow-tooltip>
      </el-table-column>
    <el-table-column
        prop="age"
        label="年龄"
        v-if="this.listStore.isShow"
        sortable
        show-overflow-tooltip>
      </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        show-overflow-tooltip>
        <template scope="scope">
          <el-button
            @click.native.prevent="check(scope.$index)"
            type="primary">
            点一下
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="我的天哪😲" :visible.sync="infoVisible">
      <div v-html="this.info"></div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="infoVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
</div>
</template>
<script>
import {mapState} from 'vuex'
import {bus} from './../bus'

export default {
  data () {
    return {
      infoVisible: false,
      info: ''
    }
  },
  mounted () {
    const tis = this
    bus.$on('clearSelection', function () {
      if (tis.$refs.DataTable) {
        tis.$refs.DataTable.clearSelection()
      }
    })
  },
  computed: {
    ...mapState({
      listStore: state => state.listStore
    })
  },
  methods: {
    handleSelectionChange (value) {
      this.$store.dispatch('setchecked', value)
    },
    check (index) {
      const name = this.listStore.datas[index].name
      this.info = '你竟然看上了' + name + `‼️`
      this.infoVisible = true
    }
  }
}
</script>
<style lang="css" scoped>
</style>
