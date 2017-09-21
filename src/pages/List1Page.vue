<template lang="html">
<div>
  <h1> this is list1.</h1>
  <div v-if="this.listStore.checked.length > 0">
    你选择了: 
    <el-tag type="success" v-for="data in this.listStore.checked" :key="data.name">{{ data.name }}</el-tag>
    <el-button type="danger" size="small" icon="delete" @click="cleanCheck()">删除已选</el-button>
  </div>
  <tables></tables>
  <Pagination></Pagination>
</div>
</template>
<script>
import Tables from './../components/Table'
import { apiDomain } from './../config'
import Pagination from './../components/Pagination'
import {mapState} from 'vuex'
import { bus } from './../bus'

export default {
  components: {
    Tables,
    Pagination
  },
  computed: {
    ...mapState({
      listStore: state => state.listStore
    })
  },
  mounted () {
    const api = apiDomain + 'getList1'
    const data = {
      api: api,
      page: 1
    }
    this.$store.dispatch('setdatas', data)
  },
  methods: {
    cleanCheck () {
      bus.$emit('clearSelection')
      this.$store.dispatch('setchecked', [])
    }
  }
}
</script>
<style lang="css" scoped>
</style>
