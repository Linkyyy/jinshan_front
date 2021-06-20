<template>
  <div id="app">
    <router-view></router-view>
      <Loading v-if="isLoading"></Loading>
  </div>

</template>
<script>
import Loading from './components/Loading.vue'
import store from './store/index'
export default {
  name: 'Template',
  components: {
    Loading
  },
  computed:{
    isLoading(){
      return store.getters.getIsLoading
    }
  }
}
</script>
<style lang="less">

</style>
