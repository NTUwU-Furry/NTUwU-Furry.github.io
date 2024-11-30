import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    user(state: any) {
      return state.user;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
