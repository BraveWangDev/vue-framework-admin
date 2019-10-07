module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // // 解决IE兼容性问题:不支持ES6语法
  // chainWebpack: config => {
  //   config.entry("index").add("babel-polyfill");
  // },
  // 解决IE兼容性问题:不支持ES6语法
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  transpileDependencies: ["vue-echarts", "resize-detector", "vuex-persist"],
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};

process.env.VUE_APP_VERSION = require("./package.json").version;
