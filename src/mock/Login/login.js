import Mock from "mockjs";

Mock.mock("/login", "post", {
  resCode: 0,
  message: "SUCCESS",
  resData: {
    // "id|1-10000": 10001,
    username: "@first",
    nickname: "@CNAME",
    token: Mock.mock("@string(30)")
  }
});
