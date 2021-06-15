<template>
  <div class="navBar">
    <button v-if="isReturn" @click="handleClickReturn"><img src="../assets/back2.png" alt=""></button>
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
  },
  methods:{
    handleClickReturn(){
      this.$router.go(-1);
    }
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
  background: #FC4D11;
  button{
    height: 100%;
    position: absolute;
    left: 10px;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    img{
      width: 15px;
      height: 15px;
    }
  }
  span{
    color: white;
  }
}
</style>