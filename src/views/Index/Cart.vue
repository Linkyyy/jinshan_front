<template>
  <div class="cart">
    购物车
  </div>
</template>
<script>
import store from '../../store/index'
export default {
  name: 'Cart',
  beforeRouteEnter:(to,from,next)=>{
    let isLogin=store.getters.getIsLogin;
    if(isLogin)next();
    else next("/login");
  },
  components: {
    
  }
  
}
</script>
<style lang="less">
.cart{
  
}
</style>