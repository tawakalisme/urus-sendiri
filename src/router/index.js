import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CekStatus from "../views/CekStatus.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cek-status",
    name: "CekStatus",
    component: CekStatus,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
