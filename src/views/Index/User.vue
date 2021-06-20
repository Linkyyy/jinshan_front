<template>
  <div class="user">
      <div class="avatar">
        <img src="http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg" alt="">
      </div>
      <div class="name">test</div>
      <div class="favorite button">
        <div>我的收藏</div>
      </div>
      <div class="exit button">
        <div>退出登录</div>
      </div>
      <div class="accept">
        <div class="title">已同意</div>
        <div class="tiaokuan">
            <div class="yonghu">《用户协议》</div>
            <div class="yinsi">   《隐私条款》</div>
        </div>
      </div>
  </div>
</template>
<script>

import store from '../../store/index'

export default {
  name: 'User',
  beforeRouteEnter:(to,from,next)=>{
    let isLogin=store.getters.getIsLogin;
    if(isLogin)next();
    else next("/login");
  },
  components: {
    
  }
}
</script>
<style lang="less">
.user{
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  .avatar{
    margin-top: 8vh;
    img{
      width: 40vw;
      background: rgba(0, 0, 0, 0);
      border-radius: 50%;
      opacity: 1;
    }
  }
  .name{
    margin-top: 2.5vh;
    text-align: center;
    width: 20vw;
    font-weight: 600;
    // height: 42px;
    font-size: 36px;
    font-family: IBMPlexSans-Bold;
    line-height: 38px;
    color: #0D0E10;
    opacity: 1;
  }
  .button{
    margin: 3.5vh 0;
    background-color: white;
    width: 80vw;
    height: 50px;
    border: 2px solid #E6E8EA;
    opacity: 1;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    div{


      font-size: 18px;
      font-weight: 600;
      font-family: IBMPlexSans-SemiBold;

      color: #0D0E10;
      opacity: 1;

    }
  }
  .favorite{
    margin-top: 50px;
  }
  .exit{
    background: #FF6464;
    div{
      color: #FFFFFF;
    }
  }
  .accept{
    margin-top: 40px;
    .title{
      text-align: center;
        // width: 38px;
        height: 35px;
        font-size: 13px;
        font-family: IBMPlexSans-Medium;
        line-height: 17px;
        color: gray;
        opacity: 1;
    }
    .tiaokuan{
      display: flex;
      flex-direction: row;
      .yonghu,.yinsi{
        cursor: pointer;
        height: 18px;
        font-size: 13px;
        font-family: IBMPlexSans-Medium;
        line-height: 17px;
        color: #FF7038;
        opacity: 1;
      }
    }
  }
}
</style>