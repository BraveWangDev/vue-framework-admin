// const path = require("path");
// const StyleLintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // chainWebpack: config => {
  //   // 解决IE兼容性问题:不支持ES6语法
  //   config.entry("index").add("babel-polyfill");
  // }
  chainWebpack: config => {
    // config
    //   .plugin("stylelint-webpack-plugin")
    //   .use("stylelint-webpack-plugin")
    //   .tap(options => {
    //     options[0] = {
    //       files: ["src/**/*.vue", "src/assets/css/*.l?(e|c)ss"]
    //     };
    //   });
    // config.plugin("stylelint-webpack-plugin").use("stylelint-webpack-plugin");
    // new StyleLintPlugin({
    //   files: ["src/**/*.vue", "src/assets/css/*.l?(e|c)ss"]
    // });
    // config.plugin("stylelint-webpack-plugin").use(
    //   new StyleLintPlugin({
    //     // files: ["src/**/*.vue", "src/assets/css/*.l?(e|c)ss"]
    //     files: ["src/**/*.{vue,css,scss,sass,less}"]
    //   })
    // );
    // config.module
    //   .files(["src/**/*.vue", "src/assets/styles/*.l?(e|c)ss"])
    //   .use("stylelint-webpack-plugin")
    //   .loader("stylelint-webpack-plugin");
  },
  // 第三方插件配置
  // pluginOptions: {
  //   lintStyleOnBuild: true, // 添加了插件(@ascendancyy/vue-cli-plugin-stylelint), 所以需要配置
  //   stylelint: {
  //     fix: true // boolean (default: true)
  //     // files: ["src/**/*.vue", "src/assets/styles/*.l?(e|c)ss"] // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
  //     // formatter: () => { } // function (default: require('stylelint-codeframe-formatter'))
  //     // etc...
  //   }
  // },
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
    // if (process.env.NODE_ENV === "production") {
    //   // 为生产环境修改配置...
    //   config.mode = "production";
    // } else {
    //   // 为开发环境修改配置...
    //   config.mode = "development";
    // }
    // Object.assign(config, {
    //   // 开发生产共同配置
    //   resolve: {
    //     alias: {
    //       "@": path.resolve(__dirname, "./src"),
    //       "@c": path.resolve(__dirname, "./src/components"),
    //       "@p": path.resolve(__dirname, "./src/pages")
    //     } // 别名配置
    //   }
    // });
  },
  // configureWebpack: {
  //   plugins: [
  //     new StyleLintPlugin({ files: ["src/**/*.{vue,css,scss,sass,less}"] })
  //   ]
  // },
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
