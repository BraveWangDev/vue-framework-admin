### 使用mock模拟接口

mockjs文档：
```
  http://mockjs.com/examples.html
  https://github.com/nuysoft/Mock/wiki
```

常用方法： 
```
1)Mock.mock( template )
根据数据模板生成模拟数据。

2)Mock.mock( rurl, template )
记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。

mockServer
  配置Mock，引入各模块接口mock，
  最终在main.js引入该文件，启用mock
```


目录结构：
```
mock
  Login         模块名
    login.js    接口名.js
```
