export default {
    //mutations提交风格ccc(state,payload){}
    //mutation包括两部分1：字符串的事件类型2：一个回调函数，该回调函数的第一个参数就是state
    //login是事件类型，后面是回调函数
    login(state, user) {
        state.isLogin = true;
        state.user = user;
        window.localStorage.setItem('user', JSON.stringify(user));
        window.localStorage.setItem('isLogin', true)
    },
    logout(state) {
        state.isLogin = false;
        window.localStorage.setItem('isLogin', false);
        window.localStorage.removeItem('user')
    },

    getpagemain(state, payload) {
        state.info = payload.info;
        // state.totalPages = payload.totalPages;
        state.totalElements = payload.totalElements;
    },

    first(state, payload) {
        state.registeruser.userName = payload.userName;
        state.registeruser.userPassword = payload.userPassword
        state.registeruser.userEmail = payload.userEmail
    },

    secend(state, payload) {
        state.registeruser.userPhone = payload.userPhone;
        state.registeruser.userSex = payload.userSex;
        state.registeruser.userShow = payload.userShow;
    },

    details(state, info) {
        state.info = info
    }

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