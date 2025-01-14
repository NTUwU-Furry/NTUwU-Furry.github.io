import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { KeepAlive } from "vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "台大獸文化交流社 | 首頁",
      KeepAlive: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "台大獸文化交流社 | 關於我們",
      KeepAlive: true,
    },
  },
  {
    path: "/404",
    name: "not",
    component: () => import("../views/404View.vue"),
    meta: {
      title: "找不到頁面",
      KeepAlive: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
