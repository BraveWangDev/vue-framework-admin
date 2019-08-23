import Mock from "mockjs";

Mock.mock("/logout", "post", {
  resCode: 0,
  message: "SUCCESS",
  resData: {}
});
