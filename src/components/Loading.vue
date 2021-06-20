<template>
  <div class="template">
    <div class="div_loading">
      <div class="loading_circle"></div>
      <span>加载中...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Template",
  components: {},
};
</script>
<style lang="less">
.template {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .div_loading {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 100px;
    width: 100px;
    position: fixed;
    left: calc(50vw - 50px);
    top: calc(50vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 12px;
    span{
      margin-top: 10px;
    }
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