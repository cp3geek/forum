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


Vue.use(Buefy);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(axios, VueAxios);

new Vue({
  router,
  store,
  axios,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
