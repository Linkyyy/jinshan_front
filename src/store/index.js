import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    isLoading:false,
    userInfo:{},
  },
  getters:{
    getIsLogin:(state)=>state.isLogin,
    getIsLoading:(state)=>state.isLoading,
    getUserInfo:(state)=>state.userInfo
  },
  mutations: {
    setIsLogin:(state,isLogin)=>state.isLogin=isLogin,
    setIsLoading:(state,isLoading)=>state.isLoading=isLoading,
    setUserInfo:(state,userInfo)=>state.userInfo=userInfo,
  },
  actions: {
  },
  modules: {
  }
})
