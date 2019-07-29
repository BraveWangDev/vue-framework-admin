import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/404";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

/**
 * 路由约定:
 *
 * 不需要渲染到路由组件中的路由(包含子路由),添加hideInMenu:true
 * 有name属性(且hideInMenu不等于true)的路由才会被渲染到菜单组件上
 * 希望子路由不被渲染到菜单组件上,添加hideChildrenInMenu:true
 * 使用meta元信息,对路由设置菜单图标和title等属性
 */
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      hideInMenu: true,
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        // 默认
        {
          path: "/",
          redirect: "/dashboard"
        },
        // dashboard
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘" },
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Dashboard")
        },
        // order
        {
          path: "/order",
          name: "order",
          meta: { icon: "ordered-list", title: "订单管理" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/order/orderlist",
              name: "orderlist",
              meta: { title: "订单列表" },
              component: () =>
                import(/* webpackChunkName: "order" */ "./views/Order/OrderList")
            },
            {
              path: "/order/orderdetails",
              component: () =>
                import(/* webpackChunkName: "order" */ "./views/Order/OrderDetails")
            },
            {
              path: "/order/approval",
              name: "approval",
              meta: { title: "订单审批" },
              hideChildrenInMenu: true,
              component: () =>
                import(/* webpackChunkName: "order" */ "./views/Order/Approval"),
              children: [
                {
                  path: "/order/approval",
                  redirect: "/order/approval/info"
                },
                {
                  path: "/order/approval/info",
                  name: "info",
                  component: () =>
                    import(/* webpackChunkName: "order" */ "./views/Order/Approval/ApprovalStep1")
                },
                {
                  path: "/order/approval/confirm",
                  name: "confirm",
                  component: () =>
                    import(/* webpackChunkName: "order" */ "./views/Order/Approval/ApprovalStep2")
                },
                {
                  path: "/order/approval/result",
                  name: "result",
                  component: () =>
                    import(/* webpackChunkName: "order" */ "./views/Order/Approval/ApprovalStep3")
                }
              ]
            }
          ]
        },
        // test
        {
          path: "/multiple",
          name: "multiple",
          meta: { icon: "form", title: "多级菜单" },
          component: () =>
            import(/* webpackChunkName: "multiple" */ "./views/Order/Approval"),
          children: [
            {
              path: "/order/approval/info",
              name: "info",
              meta: { title: "多级菜单1" },
              component: () =>
                import(/* webpackChunkName: "multiple" */ "./views/Order/Approval/ApprovalStep1"),
              children: [
                {
                  path: "/order/approval/result",
                  name: "result",
                  meta: { title: "多级菜单1-1" },
                  component: () =>
                    import(/* webpackChunkName: "multiple" */ "./views/Order/Approval/ApprovalStep3")
                }
              ]
            },
            {
              path: "/order/approval/confirm",
              name: "confirm",
              meta: { title: "多级菜单2" },
              component: () =>
                import(/* webpackChunkName: "multiple" */ "./views/Order/Approval/ApprovalStep2")
            }
          ]
        }
      ]
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
