// import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueStorage from "vue-ls";

console.log("mock", process.env.VUE_APP_MOCK);
if (process.env.VUE_APP_MOCK === "true") {
  import("@/mock/MockConfig");
}
console.log("proxy", process.env.VUE_APP_PROXY);

import {
  Button,
  Layout,
  Icon,
  Breadcrumb,
  Menu,
  Dropdown,
  Avatar,
  Modal,
  message,
  Divider,
  Input,
  Form,
  notification,
  Card
} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(VueStorage, {
  namespace: "pro__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
});
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Breadcrumb);
Vue.use(Menu);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Modal);
Vue.use(Divider);
Vue.use(Form);
Vue.use(Input);
Vue.use(notification);
Vue.use(Card);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("VUE_APP_VERSION", process.env.VUE_APP_VERSION);
console.log("VUE_APP_ENV_FIELD", process.env.VUE_APP_ENV_FIELD);
console.log("VUE_APP_PROJECT_NAME", process.env.VUE_APP_PROJECT_NAME);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
