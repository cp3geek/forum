import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundComponent from "../components/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "forumhome",
    component: () => import("../components/forumHome/ForumHome.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue")
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
    meta: { requireAuth: true },
    component: () => import("../components/userhome/UserHome")
  },
  {
    path: "/allarticlehome",
    component: () => import("../components/articlehome/Allarticlehome")
  },

  {
    path: "/registerhome",
    component: () => import("../components/register/RegisterHome")
  },

  {
    path: "*", component: NotFoundComponent
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../components/articlehome/Details")
  },
  {
    path: "/postarticle",
    name: "PostArticle",
    component: () => import("../components/articlehome/PostArticle")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



export default router;
