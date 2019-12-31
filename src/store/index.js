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
    isLogin: window.localStorage.getItem('isLogin' || '[]') == null ? false : true,
    user: {
      userName: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userName,
      userId: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userId,
      userBlog: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userBlog,
      userConcern: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userConcern,
      userFans: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userFans,
      userImg: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userImg,
      userShow: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userShow,
      userSex: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userSex,
      userPhone: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userPhone,
    },
    info: [
      {
        article: {
          artId: 0,
          artUserId: 1,
          artTitle: "",
          artTypeId: 0,
          artContent: "",
          artCommentId: 0,
          artCreTime: "",
          artView: "",
          artComNum: 0,
          artHotNum: 0,
          artLikeNum: 0
        },
        user: {
          userId: 0,
          userPassword: 0,
          userName: "",
          userEmail: "",
          userSex: "",
          userPhone: "",
          userStatus: 0,
          userTime: "",
          userShow: "",
          userBlog: "",
          userImg: "",
          userFans: 0,
          userConcern: 0
        }
      }
    ],
    totalElements: 16,
    registeruser: {
      userName: "",
      userEmail: "",
      userSex: "",
      userShow: "",
      userPhone: "",
      userPassword: ""
    }
  },
  mutations,
  actions,
  modules: {},
  getters
});
