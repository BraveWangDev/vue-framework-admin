import { login, logout } from "../../api/login";
import { USER, LOGIN } from "../mutation-types";

const state = {
  userInfo: {
    username: "",
    nickname: "",
    token: ""
  }
};

const getters = {
  userInfo(state) {
    return state.userInfo;
  }
};

const actions = {
  Login({ commit }, loginInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await login(loginInfo);
        commit(USER.SET_USERINFO, res.resData);
        commit(`login/${LOGIN.SET_LOGIN_STATUS}`, true, { root: true });
        resolve(res.resData);
      } catch (error) {
        reject(error);
      }
    });
  },
  Logout({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        await logout();
        commit(`login/${LOGIN.SET_LOGIN_STATUS}`, false, { root: true });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
};

// mutations
const mutations = {
  [USER.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
