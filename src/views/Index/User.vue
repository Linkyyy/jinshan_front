<template>
  <div class="user">
    <div class="avatar">
      <img
        :src="userInfo.avatar"
        alt=""
      />
    </div>
    <div class="name">{{userInfo.nickname}}</div>
    <div class="favorite button">
      <div>我的收藏</div>
    </div>
    <div class="exit button" @click="handleLogout">
      <div >退出登录</div>
    </div>
    <div class="accept">
      <div class="title">已同意</div>
      <div class="tiaokuan">
        <div class="yonghu">《用户协议》</div>
        <div class="yinsi">《隐私条款》</div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../../store/index";

export default {
  name: "User",
  beforeRouteEnter: (to, from, next) => {
    let isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      let userInfo = localStorage.getItem("userInfo");
      store.commit("setIsLogin", true);
      store.commit("setUserInfo", JSON.parse(userInfo));
      next();
    } else next("/login");
  },
  created() {
    this.userInfo = this.$store.getters.getUserInfo;
  },
  data() {
    return {
      userInfo: {},
    };
  },
  methods:{
    handleLogout(){
      localStorage.removeItem("isLogin");
      localStorage.removeItem("userInfo");
      this.$router.push({name:"Login"})
    }
  }
};
</script>
<style lang="less">
.user {
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .avatar {
    margin-top: 8vh;
    img {
      width: 40vw;
      background: rgba(0, 0, 0, 0);
      border-radius: 50%;
      opacity: 1;
    }
  }
  .name {
    margin-top: 2.5vh;
    text-align: center;
    font-weight: 600;
    // height: 42px;
    font-size: 36px;
    font-family: IBMPlexSans-Bold;
    line-height: 38px;
    color: #0d0e10;
    opacity: 1;
  }
  .button {
    margin: 3.5vh 0;
    background-color: white;
    width: 80vw;
    height: 50px;
    border: 2px solid #e6e8ea;
    opacity: 1;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      font-size: 18px;
      font-weight: 600;
      font-family: IBMPlexSans-SemiBold;

      color: #0d0e10;
      opacity: 1;
    }
  }
  .favorite {
    margin-top: 50px;
  }
  .exit {
    background: #ff6464;
    div {
      color: #ffffff;
    }
  }
  .accept {
    margin-top: 40px;
    .title {
      text-align: center;
      // width: 38px;
      height: 35px;
      font-size: 13px;
      font-family: IBMPlexSans-Medium;
      line-height: 17px;
      color: gray;
      opacity: 1;
    }
    .tiaokuan {
      display: flex;
      flex-direction: row;
      .yonghu,
      .yinsi {
        cursor: pointer;
        height: 18px;
        font-size: 13px;
        font-family: IBMPlexSans-Medium;
        line-height: 17px;
        color: #ff7038;
        opacity: 1;
      }
    }
  }
}
</style>