<template lang="html">
<div>
  <h1> this is list2.</h1>
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
    const api = apiDomain + 'getList2'
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
