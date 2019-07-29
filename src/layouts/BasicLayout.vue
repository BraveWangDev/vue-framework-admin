<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed" width="256px">
      <div class="logo">XX商城后台管理系统</div>
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
         <BreadCrumb />
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import BreadCrumb from "./BreadCrumb";

export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    BreadCrumb
  }
};
</script>

<style>
.logo {
  color: #ffffff;
  font-size: 16px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
</style>
