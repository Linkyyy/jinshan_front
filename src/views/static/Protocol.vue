<template>
  <div class="protocol">
    <NavBar :isReturn="true" :title="'用户协议'" />
    用户协议
  </div>
</template>
<script>

import NavBar from "../../components/NavBar.vue";
export default {
  name: 'Protocol',
  components: {
    NavBar
  }
}
</script>
<style lang="less">
.protocol{
  
}
</style>