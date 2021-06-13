<template>
  <div class="index">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>

import TabBar from '../components/TabBar.vue'
export default {
  name: 'Index',
  components: {
    TabBar
  }
  
}
</script>
<style lang="less">
.index{
  background-color: #f4f4f4;
}
</style>