<template>
  <div class="privacy">
    <NavBar :isReturn="true" :title="'隐私条款'" />
    隐私条款
  </div>
</template>
<script>

import NavBar from "../../components/NavBar.vue";
export default {
  name: 'Privacy',
  components: {
      NavBar
  }
}
</script>
<style lang="less">
.privacy{
  
}
</style>