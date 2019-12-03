import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//全局状态管理，相当于一个公共变量，并且是响应式的，任何一个组件更改其内容，可以响应式更新页面
export default new Vuex.Store({

  state: {
    //counter: 1000,
    isLogin: false,
    // students: [
    //   { id: 113, name: "ssss", age: 21 }, { id: 114, name: "ssxzx", age: 22 }, { id: 115, name: "zzx", age: 18 }
    // ]
  },//状态,变量
  mutations: {
    login(state) {
      state.isLogin = true;
    }
    //方法
  },//包含多个更新state函数得对象
  actions: {},//包含多个对应事件回调函数得对象
  modules: {},
  getters: {


    //如果需要传入参数，则可返回一个回调函数
    //例如：组件中{{$store.getters.moreAgestu(10)}}
    moreAgestu(state) {
      return function (age) {
        return state.students.filter(s => s.age > age);
      }
    }




    // more20stu(state) {
    //   return state.students.filter(s => s.age > 20);返回的是结果
    // },
    //在组件中写{{$store.getters.more20stu}}
    //getters还可以作为参数
    //例如：
    // more20stulength(state, getters) {
    //   return getters.more20stu.length;结果
    // }
    //powcounter(state) {
    //return state.counter * state.counter;结果
    //}
    //组件中使用getters
    //{{$store.getters.powcounter}}
  }
});
