/**
 * 规则列表: http://eslint.cn/docs/rules/
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  // base, essential(默认), strongly-recommended, recommended
  extends: ["plugin:vue/strongly-recommended", "@vue/prettier"],
  rules: {
    // 禁用console(仅生产)
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // 禁用debugger(仅生产)
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 禁止出现未使用过的变量
    "no-unused-vars": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
