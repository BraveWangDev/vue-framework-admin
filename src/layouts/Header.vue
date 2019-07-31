<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <a-dropdown>
        <span class="user-dropdown-menu">
          <a-avatar
            class="avatar"
            size="small"
            alt="avatar"
            style="backgroundColor:#87d068"
            icon="user"
          />
          <span>BraveWang</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <a-icon type="user" />
            <span>item1</span>
          </a-menu-item>
          <a-menu-item key="1" disabled>
            <a-icon type="info-circle" />
            <span>item2</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="setting" />
            <span>item3</span>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout" />
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    handleLogout() {
      const that = this;

      this.$confirm({
        title: "提示",
        content: "确认要注销登录吗 ?",
        onOk() {
          return new Promise(resolve => {
            setTimeout(() => {
              that.$message.info("退出登录");
              resolve();
            }, 2000);
          })
            .then(() => {
              // window.location.reload()
              this.$notification.open({
                message: "登出提醒",
                description: "您已成功退出登录",
                onClick: () => {
                  console.log("退出登录!");
                }
              });
              that.$router.replace({ path: "/user/login" });
            })
            .catch(err => {
              that.$message.error({
                title: "错误",
                description: err.message
              });
            });
        },
        onCancel() {
          that.$message.info("取消登出操作");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  background: #ffffff;
  .right {
    float: right;
    font-size: 16px;
    .avatar {
      margin: 8px;
    }
  }
}

.user-dropdown-menu-wrapper.ant-dropdown-menu {
  padding: 5px 0px;
  margin-top: 20px;

  .ant-dropdown-menu-item {
    width: 120px;
  }
}
</style>
