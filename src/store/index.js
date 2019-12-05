import Vue from "vue";
import Vuex from "vuex";
import getters from '../store/getters'

Vue.use(Vuex);

//全局状态管理，相当于一个公共变量，并且是响应式的，任何一个组件更改其内容，可以响应式更新页面

// const moduleA = {
//   state: {
//   name:"dddd"
// },
//   getters: {},
//   actions: {},
//   mutations:{}
// }

export default new Vuex.Store({

  state: {
    //counter: 1000,
    isLogin: false,
    // students: [
    //   { id: 113, name: "ssss", age: 21 }, { id: 114, name: "ssxzx", age: 22 }, { id: 115, name: "zzx", age: 18 }//添加对象students.push(stu)
    // ]
  },//状态,变量
  mutations: {
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
  },//包含多个更新state函数得对象
  actions: {
    //context:上下文，actions中的默认参数，理解成store对象
    aLogin(context, payload) {
      setTimeout(() => {
        context.commit('login')
        console.log(payload.message);
        payload.success();
      }, 1000)
    }
  },//包含多个对应事件回调函数得对象，主要是异步操作
  modules: {
    //分模块化
    //例如
    //a: moduleA
    //组件中通过$store.state.a.name，拿到moduleA中的state的name属性
  },
  getters
});
