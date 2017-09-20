<template lang="html">
<div>
  <h1>
    欢迎 {{ this.userStore.authUser.name }}   
  </h1>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  }
}
</script>
<style lang="css" scoped>
</style>
