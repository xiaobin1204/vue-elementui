<template lang="html">
<div>
  <h1> this is list1.</h1>
  <tables></tables>
  <Pagination></Pagination>
</div>
</template>
<script>
import Tables from './../components/Table'
import { apiDomain } from './../config'
import Pagination from './../components/Pagination'

export default {
  components: {
    Tables,
    Pagination
  },
  mounted () {
    const api = apiDomain + 'getList1'
    const data = {
      api: api,
      page: 1
    }
    this.$store.dispatch('setdatas', data)
  }
}
</script>
<style lang="css" scoped>
</style>
