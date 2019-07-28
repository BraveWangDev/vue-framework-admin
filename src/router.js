import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/404";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
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
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard",
              name: "dashboard",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Dashboard")
            }
          ]
        },
        // order
        {
          path: "/order",
          name: "order",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/order/orderlist",
              name: "orderlist",
              component: () =>
                import(/* webpackChunkName: "order" */ "./views/Order/OrderList")
            },
            {
              path: "/order/orderdetails",
              name: "orderdetails",
              component: () =>
                import(/* webpackChunkName: "order" */ "./views/Order/OrderDetails")
            },
            {
              path: "/order/approval",
              name: "approval",
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
        }
      ]
    },
    {
      path: "*",
      name: "404",
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