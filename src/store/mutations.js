export default {
    //mutations提交风格ccc(state,payload){}
    //mutation包括两部分1：字符串的事件类型2：一个回调函数，该回调函数的第一个参数就是state
    //login是事件类型，后面是回调函数
    login(state) {
        state.isLogin = true;
    },
    //带参数
    // login1(state, conut) {
    //   state.isLogin = conut;
    // }
    // //组件中定义方法@click="ccc"
    // ccc(){
    //   this.store.commit('login1',true)
    // }



    //方法
}//包含多个更新state函数得对象