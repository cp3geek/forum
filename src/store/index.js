import Vue from "vue";
import Vuex from "vuex";
import getters from '../store/getters';
import mutations from '../store/mutations';
import actions from '../store/actions';
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
    isLogin: false,
  },
  mutations,
  actions,
  modules: {},
  getters
});
