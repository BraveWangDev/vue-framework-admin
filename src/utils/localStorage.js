import Vue from "vue";

const USER_NAME = "username";
const NICK_NAME = "nickname";

export function saveUserInfo(userInfo) {
  Vue.ls.set(USER_NAME, userInfo.username);
  Vue.ls.set(NICK_NAME, userInfo.nickname);
}

export function getValueByKey(key) {
  return Vue.ls.get(key);
}

export function getUserName() {
  return Vue.ls.get(USER_NAME);
}

export function getNickName() {
  return Vue.ls.get(NICK_NAME);
}

export function removeUserInfo() {
  Vue.ls.remove("username");
  Vue.ls.remove("realName");
}
