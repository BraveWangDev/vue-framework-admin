<template>
  <div id="user-layout-wapper">
    <!-- container-background -->
    <div class="container">
      <!-- top -->
      <div class="top">
        <div class="header">
          <span class="title">XX商城后台管理系统</span>
        </div>
        <div class="desc">
          XX商城后台管理系统-V1.0.0
        </div>
      </div>
      <!-- login -->
      <router-view></router-view>
      <!-- footer -->
      <div class="footer">
        <div class="copyright">
          Copyright &copy;2019 XX商城后台管理系统 By Brave
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
#user-layout-wapper {
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    padding: 220px 0;

    .top {
      text-align: center;

      .header {
        height: 44px;
        line-height: 44px;

        .title {
          font-size: 34px;
          color: #000000;
          font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
          font-weight: 600;
        }
      }

      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 14px;
        margin-bottom: 50px;
      }
    }

    .footer {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0;
      margin-bottom: 20px;

      .copyright {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
