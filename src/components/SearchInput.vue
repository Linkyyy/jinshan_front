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
  padding: 5px 0 15px 0;
  display: flex;
  justify-content: center;
  .div_input {
    box-sizing: border-box;
    width: 90%;
    position: relative;
    img{
      position: absolute;
      height: 18px;
      width: 18px;
      left: 10px;
      top: 6px;
    }
    input {
      box-sizing: border-box;
      width: 100%;
      padding-left: 40px;
      height: 30px;
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
      top:4px;
      background-color: #f50d10;
      color: white;
      padding: 3px 10px;
      border-radius: 20px;
    }
  }
}
</style>