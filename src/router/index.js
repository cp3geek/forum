import Vue from "vue";
import VueRouter from "vue-router";
// import ForumHome from "../components/forumHome/ForumHome.vue";
// import LoginBackStage from "../components/backstagehome/LoginBackStage.vue";
// import BackStageHome from "../components/backstagehome/BackStageHome.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "forumhome",
    component: () => import("../components/forumHome/ForumHome.vue")
  },
  {
    path: "/loginbackstage",
    name: "loginbackstage",
    component: () => import("../components/backstagehome/LoginBackStage.vue")
  },

  {
    path: "/backstagehome",
    component: () => import("../components/backstagehome/BackStageHome.vue")
  },
  {
    path: "/userhome",
    component: () => import("../components/userhome/UserHome")
  },
  {
    path: "/allarticlehome",
    component: () => import("../components/articlehome/Allarticlehome")
  },
  {
    path: "/commenthome",
    component: () => import("../components/commenthome/CommentHome")
  },
  {
    path: "/registerhome",
    component: () => import("../components/register/RegisterHome")
  },

  { path: "*", component: NotFoundComponent }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
