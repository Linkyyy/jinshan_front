import store from './store/index'

export default {
    showLoading(){
        store.commit("setIsLoading",true);
    },
    endLoading(){
        store.commit("setIsLoading",false);
    },
    showMessage(message){
        store.commit("setMessage",message);
    },
    endMessage(){
        store.commit("setMessage","");
    }
}