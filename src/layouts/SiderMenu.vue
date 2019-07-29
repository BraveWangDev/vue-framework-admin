<template>
  <!-- <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
    <a-menu-item
      key="dashboard"
      @click="() => $router.push({ path: '/dashboard' })"
    >
      <a-icon type="dashboard" />
      <span>Dashboard</span>
    </a-menu-item>
    <a-sub-menu key="order">
      <span slot="title"
        ><a-icon type="ordered-list" /><span>订单管理</span></span
      >
      <a-menu-item
        key="orderlist"
        @click="() => $router.push({ path: '/order/orderlist' })"
        >订单列表</a-menu-item
      >
      <a-menu-item
        key="approval"
        @click="() => $router.push({ path: '/order/approval' })"
        >订单审批</a-menu-item
      >
    </a-sub-menu>
  </a-menu> -->
  <div style="width: 256px">
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      theme="dark"
      mode="inline"
    >
      <template v-for="item in menuData">
        <!-- 没有children的菜单 -->
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <!-- 有children的菜单  -->
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
export default {
  components: {
    "sub-menu": SubMenu
  },
  /**
   * 监听路由变化
   *
   * 当路由变化时
   */
  watch: {
    "$route.path": function(val) {
      console.log("路由发生变化 val = " + val);
      this.selectedKeys = this.selectedKeysMap[val];
      console.log("selectedKeys:");
      console.log(this.selectedKeys);
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
      console.log("openKeys:");
      console.log(this.openKeys);
    }
  },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.buildMenuDataByRouter(this.$router.options.routes);
    console.log(menuData);
    return {
      collapsed: false,
      menuData,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path]
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    /**
     * 根据路由配置构建菜单数据
     */
    buildMenuDataByRouter(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];
      routes.forEach(item => {
        // 有name 且不隐藏 : 需要渲染到菜单组件上
        if (item.name && !item.hideInMenu) {
          // 保存openKeysMap和selectedKeysMap(path作为selectedKey)
          this.openKeysMap[item.path] = parentKeys;
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          // 解构并删除children,只保留当前层级
          const newItem = { ...item };
          delete newItem.children;
          // 如果有children且不隐藏 : 需要渲染到菜单组件上
          if (item.children && !item.hideChildrenInMenu) {
            // 对当前children递归并加入到结构后的children上
            newItem.children = this.buildMenuDataByRouter(item.children, [
              ...parentKeys,
              item.path
            ]);
          } else {
            this.buildMenuDataByRouter(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
          // 没有name,但不隐藏本层及Children,并且有children -- 本层不显示,但子路由可显示
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(
            ...this.buildMenuDataByRouter(item.children, [
              ...parentKeys,
              item.path
            ])
          );
        }
      });
      return menuData;
    }
  }
};
</script>

<style></style>
