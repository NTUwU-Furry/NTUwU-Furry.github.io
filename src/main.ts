import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import lang from "./lang";
import VueCookies from "vue-cookies";
import axios from "axios";

// 宣告 Window
let windowContext: any = window;
if (
  window.frameElement &&
  window.frameElement.getAttribute("tiledesk_context") === "parent"
) {
  windowContext = window.parent;
}

// 主體部分
windowContext.axios = axios;

router.beforeEach((to, from, next) => {
  windowContext.document.title =
    to.meta.title == undefined ? "默认标题" : to.meta.title;
  next();
});

createApp(App).use(store).use(router).use(lang).use(VueCookies).mount("#app");
