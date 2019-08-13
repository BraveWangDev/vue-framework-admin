import axios from "@/api/axios";
// let BASE_URL = process.env.MOCK ? '' : '/api'
// let BASE_URL = "10.0.0.1:8080";

export const login = params => {
  return axios.fetchPost("/login", params);
};
