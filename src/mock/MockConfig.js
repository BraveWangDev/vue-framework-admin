/*
 * 使用mockjs提供mock数据接口
 */
import Mock from "mockjs";
import "@/mock/Login/login";
import "@/mock/Login/logout";

// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout: 1000
});
