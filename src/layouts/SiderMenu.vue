<template>
  <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
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
  </a-menu>
</template>

<script>
export default {};
</script>

<style></style>
