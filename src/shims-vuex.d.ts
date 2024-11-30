import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { Route } from "vue-router";

declare module "@vue/runtime-core" {
  interface State {
    count: number;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
  interface ComponentCustomProperties {
    $route: Route;
  }
}
