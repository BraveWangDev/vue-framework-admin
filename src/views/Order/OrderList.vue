<template>
  <div>
    订单列表
    <a-button
      type="primary"
      @click="
        () =>
          $router.push({ path: '/order/orderdetails', query: { orderId: '1' } })
      "
      >查看详情</a-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
