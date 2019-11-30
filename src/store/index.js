import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },//状态,变量
  mutations: {},//包含多个更新state函数得对象
  actions: {},//包含多个对应事件回调函数得对象
  modules: {},
  getters: {}
});
