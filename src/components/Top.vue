<template lang="html">
  <div class="header" v-if="userStore.authUser !== null && userStore.authUser.access_token">
    <el-menu :router="true" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home">Home</el-menu-item>
      <el-menu-item index="list1">List1</el-menu-item>
      <el-menu-item index="list2">List2</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      activeIndex: 'home'
    }
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === 'home') {
      } else if (key === 'list1') {
      } else if (key === 'list2') {
      }
    }
  }
}
</script>
<style lang="css" scoped>
</style>
