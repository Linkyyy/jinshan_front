<template>
  <div class="navBar">
    <button v-if="isReturn">返回</button>
    <span>{{title}}</span>
  </div>
</template>
<script>


export default {
  name: 'NavBar',
  props:{
    title:String,
    isReturn:Boolean,
  },
  components: {
  }
}
</script>
<style lang="less">
.navBar{
  font-size: 19px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 45px;
  background: #F50D10;
  button{
    height: 100%;
    position: absolute;
    left: 20px;
    border: none;
    outline: none;
    background: transparent;
    color: white;
  }
  span{
    color: white;
  }
}
</style>