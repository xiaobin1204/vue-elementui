<template>
  <div id="app">
    <top></top> 
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/Top'
export default {
  name: 'app',
  components: {
    Top
  }
}
</script>

<style>
</style>
