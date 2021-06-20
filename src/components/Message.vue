<template>
  <div class="message">
    <div class="div_message">
      <span>{{ info }}</span>
    </div>
  </div>
</template>
<script>
import util from '../util'
export default {
  name: "Message",
  components: {},
  created(){
    setTimeout(() => {
      util.endMessage();
    }, 1000);
  },
  computed:{
    info(){
      return this.$store.getters.getMessage;
    }
  }
};
</script>
<style lang="less">
.message {
  z-index: 999;
  @keyframes open {
    from {
      margin-top: 0;
      opacity: 0;
    }
    to {
      opacity: 1;
      margin-top: 100px;
    }
  }
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  .div_message {
    opacity: 1;
    margin-top: 100px;
    animation: open 400ms;
    animation-timing-function: ease-out;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    padding: 10px 20px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 15px;
    @keyframes circle {
      to {
        transform: rotate(360deg);
      }
    }
    .loading_circle {
      height: 40px;
      width: 40px;
      border-radius: 100%;
      border: 2px solid white;
      border-bottom-color: transparent;
      animation: circle 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }
  }
}
</style>