import { LOGIN } from "../mutation-types";

const state = {
  isLogin: false, // 是否登录
  isRemember: false, // 是否记住密码(暂不使用)
  isAutoLogin: false // 是否自动登录(暂不使用)
};

const mutations = {
  [LOGIN.SET_LOGIN_STATUS](state, isLogin) {
    state.isLogin = isLogin;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
