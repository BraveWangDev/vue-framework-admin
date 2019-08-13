import axios from "@/api/axios";

export const login = params => {
  return axios.fetchPost("/login", params);
};
