<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed" width="256px">
      <div class="logo">XX商城后台管理系统</div>
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
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

<style lang="less" scoped>
.logo {
  color: #ffffff;
  font-size: 16px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}

.ant-layout-header {
  padding: 0 25px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
