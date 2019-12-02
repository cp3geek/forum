import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//全局状态管理，相当于一个公共变量，并且是响应式的，任何一个组件更改其内容，可以响应式更新页面
export default new Vuex.Store({

  state: {},//状态,变量
  mutations: {},//包含多个更新state函数得对象
  actions: {},//包含多个对应事件回调函数得对象
  modules: {},
  getters: {}
});
