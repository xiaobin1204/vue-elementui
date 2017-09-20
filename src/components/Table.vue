<template lang="html">
<div>
    <el-table
      ref="DataTable"
      :data="dataStore.datas"
      border
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      @selection-change="handleSelectionChange">
    <el-table-column
        prop="name"
        label="姓名"
        show-overflow-tooltip>
      </el-table-column>
    <el-table-column
        prop="age"
        label="年龄"
        v-if="dataStore.isShow"
        sortable
        show-overflow-tooltip>
      </el-table-column>
    <el-table-column
        fixed="right"
        v-if="softlistStore.isShow"
        label="操作"
        width="140">
        <template scope="scope">
          <el-button
            @click.native.prevent="check(scope.$index)"
            type="primary"
            size="mini">
            点一下试一试
          </el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>
<script>
</script>
<style lang="css" scoped>
</style>
