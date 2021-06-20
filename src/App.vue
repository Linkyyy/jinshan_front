<template>
  <div id="app">
    <router-view></router-view>
      <Loading v-if="isLoading"></Loading>
      <Message v-if="message"></Message>
  </div>

</template>
<script>
import Loading from './components/Loading.vue'
import Message from './components/Message.vue'
import store from './store/index'
export default {
  name: 'Template',
  components: {
    Loading,
    Message
  },
  computed:{
    isLoading(){
      return store.getters.getIsLoading
    },   
     message(){
      return store.getters.getMessage
    },
  }
}
</script>
<style lang="less">

</style>
