import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 1,全局引入ant-design-vue
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";
// Vue.use(Antd);

// 2,对每个组件进行单独引用
// import Button from "ant-design-vue/lib/button";
// import "ant-design-vue/lib/button/style";
// Vue.use(Button);

// 3,使用bable插件自动实现按需引用组件
import { Button } from "ant-design-vue";
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
