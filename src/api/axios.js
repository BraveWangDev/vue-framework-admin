import axios from "axios";

const Axios = axios.create({
  baseURL:
    process.env.VUE_APP_PROXY === "true"
      ? "/api"
      : process.env.VUE_APP_MOCK === "true"
      ? ""
      : process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // Accept: "application/json, text/plain, */*"
  }
});

Axios.interceptors.request.use(
  config => {
    // 添加时间戳,防止IE浏览器使用缓存
    if (config.method === "get") {
      config.params = {
        t: Date.parse(new Date()) / 1000,
        ...config.params
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error.data.error.message);
  }
);

// 响应拦截器
Axios.interceptors.response.use(
  res => {
    console.log("打印接口返回", res);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 添加对接口path中存在参数的处理
 */
function buildUrl(url, params) {
  var urlPath;
  var urlSplitArr = url.split("/");
  for (var i = 0; i < urlSplitArr.length; i++) {
    urlPath = urlSplitArr[i];
    if (urlPath.indexOf("{") !== -1) {
      //去掉首尾{}符号拿到字段名
      let regs = new RegExp(`(^\\{*)|(\\}*$)`, "g");
      var paramName = urlPath.replace(regs, "");
      // 替换站位
      Object.keys(params).forEach(function(key) {
        if (key === paramName) {
          urlSplitArr[i] = params[key];
        }
      });
      // 组装成新的ERL
      url = urlSplitArr.join("/");
    }
  }
  return url;
}

export default {
  fetchGet(url, params = {}) {
    url = buildUrl(url, params);
    return new Promise((resolve, reject) => {
      Axios.get(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      Axios.post(url, params, {
        "Content-Type": "application/x-www-form-urlencoded"
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchPut(url, params = {}) {
    url = buildUrl(url, params);
    return new Promise((resolve, reject) => {
      Axios.put(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchDelete(url, params = {}) {
    url = buildUrl(url, params);
    return new Promise((resolve, reject) => {
      Axios.delete(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchPatch(url, params = {}) {
    url = buildUrl(url, params);
    return new Promise((resolve, reject) => {
      Axios.patch(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
