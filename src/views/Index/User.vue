<template>
  <div class="user">个人</div>
</template>
<script>
import store from "../../store/index";
export default {
  name: "User",
  beforeRouteEnter: (to, from, next) => {
    let isLogin = store.getters.getIsLogin;
    if (isLogin) next();
    else next("/login");
  },
  components: {},
};
</script>
<style lang="less">
.user {
}
</style>