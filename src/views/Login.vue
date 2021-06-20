<template>
  <div class="login">
    <div class="div_logo">
      <img src="../assets/Logo.png" alt="" />
    </div>
    <main>
      <div class="class_input">
        <div class="input_username">
          <img class="img_before" src="../assets/user.png" alt="" />
          <input type="text" v-model="username" placeholder="用户名" />
        </div>
        <div class="input_password">
          <img class="img_before" src="../assets/lock.png" alt="" />
          <input
            :type="isEye ? 'text' : 'password'"
            v-model="password"
            placeholder="密码"
          />
          <img
            class="img_eye"
            @click="handleClickEye"
            :src="
              isEye
                ? require('../assets/eye01.png')
                : require('../assets/eye.png')
            "
            alt=""
          />
        </div>
      </div>
      <div class="div_forgiv">
        <span>{{ errMsg }}</span> <span>忘了密码?</span>
      </div>
      <button @click="handleLogin">登录</button>
      <div class="div_nou">
        <span>没有账号？</span>
        <router-link :to="{ name: 'Shopping' }">游客进入</router-link>
      </div>
    </main>
    <div class="div_bottom">
      <input type="checkbox" v-model="isAccept" />
      <span>同意</span>
      <span>《用户协议》</span>
      <span>《隐私条款》</span>
    </div>
    <Dialog
      v-if="isShowDialog"
      @clickDialogCancel="onClickDialogCancel"
      @clickDialogAccpet="onClickDialogAccpet"
    ></Dialog>
  </div>
</template>
<script>
import Dialog from "../components/Dialog.vue";
export default {
  name: "Login",
  components: {
    Dialog,
  },
  data() {
    return {
      isAccept: false,
      isShowDialog: false,
      isEye: false,
      username: "",
      password: "",
      errMsg: "",
    };
  },
  methods: {
    handleClickEye() {
      this.isEye = !this.isEye;
    },
    onClickDialogCancel() {
      this.isShowDialog = false;
      this.isAccept = false;
    },
    onClickDialogAccpet() {
      this.isShowDialog = false;
      this.isAccept = true;
    },
    validate() {
      return true;
    },
    handleLogin() {
      let that = this;
      if (this.isAccept) {
        if (this.validate()) {
          let username = this.username;
          let password = this.password;
          this.$axios
            .post("/api/user/login", {
              username,
              password,
            })
            .then((res) => {
              let uerInfo = res.data.user;
              that.$store.commit("setIsLogin", true);
              that.$store.commit("setUserInfo", uerInfo);
              that.$router.push({ name: "User" });
            })
            .catch((err) => {
              that.errMsg = err;
            });
        }
      } else {
        this.isShowDialog = true;
      }
    },
  },
};
</script>
<style lang="less">
.login {
  height: 100vh;
  background-color: white;
  .div_logo {
    width: 100vw;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80vw;
    left: 10vw;
    .class_input {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      .input_username,
      .input_password {
        position: relative;
        width: 100%;
        .img_before {
          position: absolute;
          width: 18px;
          height: 18px;
          z-index: 999;
          top: 10px;
          left: 15px;
        }
        .img_eye {
          cursor: pointer;
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 999;
          top: 10px;
          right: 15px;
        }
        input {
          box-sizing: border-box;
          width: 100%;
          display: block;
          position: relative;
          margin-bottom: 20px;
          height: 40px;
          border: none;
          outline: none;
          border-radius: 20px;
          border: 1px solid #e7e7e7;
          padding-left: 50px;
          z-index: 1;
        }
      }
    }
    .div_forgiv {
      cursor: pointer;
      font-size: 14px;
      font-family: Avenir;
      font-weight: 500;
      line-height: 19px;
      color: #9a9ea7;
      width: 100%;
      display: flex;
      justify-content: space-between;
      span {
        &:nth-child(1) {
          color: red;
        }
      }
    }
    button {
      cursor: pointer;
      margin-top: 30px;
      background: #ff6800;
      outline: none;
      border: none;
      height: 45px;
      border-radius: 20px;
      font-size: 18px;
      font-family: Avenir;
      font-weight: 800;
      color: #ffffff;
    }
    .div_nou {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      span {
        font-size: 14px;
        font-family: Avenir;
        font-weight: 500;
        line-height: 19px;
        color: #9a9ea7;
      }
      a {
        margin-left: 20px;
        font-size: 14px;
        font-family: Avenir;
        font-weight: 800;
        line-height: 19px;
        color: #feaa7d;
      }
    }
  }
  .div_bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    align-items: center;

    span {
      &:nth-child(2) {
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 20px;
        color: #707070;
        opacity: 1;
      }
      &:nth-child(3),
      &:nth-child(4) {
        cursor: pointer;
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        line-height: 20px;
        color: #feaa7d;
      }
    }
  }
}
</style>