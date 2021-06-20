import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message:"",
    isLogin:false,
    isLoading:false,
    userInfo:{},
  },
  getters:{
    getMessage:(state)=>state.message,
    getIsLogin:(state)=>state.isLogin,
    getIsLoading:(state)=>state.isLoading,
    getUserInfo:(state)=>state.userInfo
  },
  mutations: {
    setMessage:(state,message)=>state.message=message,
    setIsLogin:(state,isLogin)=>state.isLogin=isLogin,
    setIsLoading:(state,isLoading)=>state.isLoading=isLoading,
    setUserInfo:(state,userInfo)=>state.userInfo=userInfo,
  },
  actions: {
  },
  modules: {
  }
})
