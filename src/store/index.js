import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import user from "./modules/user";
import login from "./modules/login";

Vue.use(Vuex);

// 配置Vuex持久化方案
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    layout: {
      collapsed: false
    }
  },
  modules: {
    user,
    login
  },
  plugins: [vuexLocal.plugin]
});
