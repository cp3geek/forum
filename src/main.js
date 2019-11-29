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
// import Qs from "qs";


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