<template>
  <div class="searchInput" :style="{backgroundColor:backColor}">
    <div class="div_input" >
      <img src="../assets/search.png" alt="" >
      <input type="text" v-model="keyword" />
      <button @click="handleClickSearch">搜索</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchInput",

  props:{
    backColor:String,
    model:String,
  },
  data(){
    return{
      keyword:""
    }
  },
  methods:{
    handleClickSearch(){
      this.$emit("clickSearch");
    }
  },
  components: {},
  watch:{
    'keyword':function(newVal){
      this.$emit("inputUpdate",newVal);
    }
  }
};
</script>
<style lang="less">
.searchInput {
  position: relative;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  .div_input {
    box-sizing: border-box;
    width: 95vw;
    position: relative;
    img{
      position: absolute;
      height: 18px;
      width: 18px;
      left: 10px;
      top: 10px;
    }
    input {
      box-shadow: 0 0 9px 1px rgba(128, 128, 128, 0.2);
      box-sizing: border-box;
      width: 100%;
      padding-left: 40px;
      height: 38px;
      border-radius: 20px;
      border: none;
      outline: none;
    }
    button{
      cursor: pointer;
      outline: none;
      border: none;
      position: absolute;
      right: 10px;
      top:5px;
      background-color: #f50d10;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
    }
  }
}
</style>