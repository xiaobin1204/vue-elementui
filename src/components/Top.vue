<template lang="html">
  <div class="header">
    <el-menu :router="true" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="list1">List1</el-menu-item>
      <el-menu-item index="list2">List2</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '/') {
      } else if (key === 'list1') {
      } else if (key === 'list2') {
      }
    }
  }
}
</script>
<style lang="css" scoped>
</style>
