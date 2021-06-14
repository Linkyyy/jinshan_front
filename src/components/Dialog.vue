<template>
  <div class="dialog">
    <div class="div_dialog">
      <div class="dialog_main">
        感谢你使用淘宝在线购物平台。以下政策将帮助你了解我们收集、使用、保存、共享你的个人信息的情况，以及你所享有的相关权利。
        <div>
          <a
            href="https://jump.wps.com/account_signup_agreement"
            target="_blank"
            data-type="privacyprotect"
            class="js_protocol_url"
            >云服务协议</a
          >
          ，点击“同意”开始接受我们的服务。
        </div>
      </div>
      <div class="dialog_bottom">
        <button class="button_cancel" @click="handleDialogCancel">取消</button>
        <div></div>
        <button class="button_accept" @click="handleDialogAccept">同意</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    msg: String,
  },
  methods: {
    handleDialogCancel() {
      this.$emit("clickDialogCancel");
    },
    handleDialogAccept() {
      this.$emit("clickDialogAccpet");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  z-index: 9999;
  .div_dialog {
    position: relative;
    margin-top: 200px;
    width: 300px;
    height: 236px;
    background: #fff;
    border-radius: 6px;
    .dialog_main {
      line-height: 21px;
      font-size: 14px;
      padding: 30px 24px;
      color: #999;
      a {
        color: #1e86e7;
      }
    }
    .dialog_bottom {
      position: absolute;
      bottom: 0;
      display: flex;
      height: 50px;
      align-items: center;
      border-top: 1px solid rgb(219, 218, 218);
      div {
        height: 50px;
        background-color: rgb(219, 218, 218);
        width: 1px;
      }
      button {
        cursor: pointer;
        width: 150px;
        outline: none;
        border: none;
        background-color: transparent;
        &:nth-last-child(1) {
          color: rgb(65, 127, 249);
        }
      }
    }
  }
}
</style>
