import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import moment from 'moment'//导入文件
// import infiniteScroll from "vue-infinite-scroll"
// import Qs from "qs";



// Vue.use(infiniteScroll)
Vue.prototype.$moment = moment;//赋值使用
moment.locale('zh-cn')//国际化，中文
Vue.use(Buefy);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  axios,
  // render: function (h) {
  //   return h(App);
  // }
  render: h => h(App)
}).$mount("#app");

// axios.all([axios.post("http://localhost:9090/getuser", Qs.stringify({
//   username: "sasd",
//   password: 123
// })), axios.post("http://localhost:9090/getuser",
//   Qs.stringify({
//     username: "saaa",
//     password: 1234
//   }))]).then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))

// axios({
//   url: "http://localhost:9090/getadmin",
//   params: {
//     username: "aaaa"
//   }

// })

// axios.post("http://localhost:9090/getadmin", Qs.stringify({
//   username: '55551',
//   password: 1245
// }))
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requireAuth)) {

    // 对路由进行验证
    if (store.state.isLogin) { // 已经登陆
      next() // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面
      next({ path: '/login' })
    }
  } else {
    next()
  }
})


