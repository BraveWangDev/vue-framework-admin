/**
 * 规则: https://stylelint.io/user-guide/rules
 */
module.exports = {
  // processors可以让styleline处理html中style标签里面的css代码，MarkDown里面的css代码块或js中一段包含css的字符串
  // processors: ["stylelint-processor-html"], 
  // stylelint-config-standard拓展了stylelint-config-recommended
  extends: "stylelint-config-standard",
  rules: {
    // 不允许使用非法的十六进制颜色值
    "color-no-invalid-hex": true,
    // 不允许颜色值大写
    "color-hex-case": "lower",
    // 允许使用的度量单位是 em、rem、%、s、px
    "unit-whitelist": ["em", "rem", "%", "s", "px"]
    // "rule-empty-line-before": null,
    // "color-hex-length": "long",
    // "declaration-colon-newline-after": null
    // "rule-empty-line-before": "never",
    // "selector-list-comma-newline-after": "never-multi-line",
    // "string-quotes": "single",
    // "indentation": 4,
    // "selector-pseudo-element-colon-notation": "single",
    // "no-descending-specificity": null,
    // "declaration-colon-space-after": "always-single-line",
    // "declaration-colon-space-before": "never",
    // "declaration-block-trailing-semicolon": "always",
    // "rule-empty-line-before": [
    //   "always",
    //   {
    //     ignore: ["after-comment", "first-nested"]
    //   }
  }
};
